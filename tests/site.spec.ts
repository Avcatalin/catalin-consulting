import { test, expect } from "@playwright/test";
import { pages } from "../lib/pages";
const configured = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
const indexable = configured && process.env.SITE_INDEXABLE === "true";
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
test("all pages render accessible content and valid internal destinations", async ({
  page,
  request,
}) => {
  const paths = new Set<string>(pages.map((p) => p.path));
  for (const entry of pages) {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(entry.path);
    expect(response?.status()).toBe(200);
    if (configured) {
      if (process.env.GOOGLE_SITE_VERIFICATION) {
        await expect(
          page.locator('meta[name="google-site-verification"]'),
        ).toHaveAttribute("content", process.env.GOOGLE_SITE_VERIFICATION);
      }
      const schemas = await page
        .locator('script[type="application/ld+json"]')
        .allTextContents();
      expect(schemas.length).toBe(2);
      for (const schema of schemas)
        expect(JSON.parse(schema)["@context"]).toBe("https://schema.org");
    }
    await expect(page).toHaveTitle(entry.title);
    await expect(page.locator("main h1")).toHaveCount(1);
    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
    for (const href of hrefs) {
      if (href === "/downloads/catalin-avarvarei-cv.pdf") {
        const pdf = await request.get(href);
        expect(pdf.status()).toBe(200);
        expect(pdf.headers()["content-type"]).toContain("application/pdf");
      } else expect(paths.has(href)).toBe(true);
    }
    expect(errors).toEqual([]);
    const robots = await page
      .locator('meta[name="robots"]')
      .getAttribute("content");
    if (!indexable || entry.legal || entry.draft)
      expect(robots).toContain("noindex");
    if (configured)
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `${process.env.NEXT_PUBLIC_SITE_URL}${entry.path === "/" ? "" : entry.path}`,
      );
    const old = await request.get(
      entry.path === "/" ? "/index.html" : `${entry.path}.html`,
      { maxRedirects: 0 },
    );
    expect(old.status()).toBe(308);
    expect(
      new URL(old.headers().location, "http://127.0.0.1:3100").pathname,
    ).toBe(entry.path);
  }
  expect((await request.get("/missing-page")).status()).toBe(404);
});
test("mobile menu closes by Escape and navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const button = page.getByRole("button", { name: "Menu", exact: true });
  await button.click();
  await expect(page.locator("#navigation")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(button).toBeFocused();
  await expect(page.locator("#navigation")).toBeHidden();
  await button.click();
  await page
    .locator("#navigation")
    .getByRole("link", { name: "About", exact: true })
    .click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator("#navigation")).toBeHidden();
  await expect(page.locator(".bio-card img")).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});
test("Calendly loads inline only on request, with fallback and close control", async ({
  page,
}) => {
  const requests: string[] = [];
  await page.route("https://calendly.com/**", (route) => {
    requests.push(route.request().url());
    return route.fulfill({
      body: "<html><body>Available times</body></html>",
      contentType: "text/html",
    });
  });
  await page.goto("/book-a-call");
  expect(requests).toEqual([]);
  await expect(page.locator("iframe")).toHaveCount(0);
  await page.getByRole("button", { name: "Show available times" }).click();
  await expect(
    page.frameLocator("iframe").getByText("Available times"),
  ).toBeVisible();
  expect(requests).toHaveLength(1);
  await expect(
    page.getByRole("link", { name: "Open Calendly in a new tab" }),
  ).toHaveAttribute(
    "href",
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/avarvarei-catalin/30min",
  );
  await page.getByRole("button", { name: "Close calendar" }).click();
  await expect(page.locator("iframe")).toHaveCount(0);
});
test("crawl files omit drafts and follow indexing configuration", async ({
  request,
}) => {
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain(indexable ? "Allow: /" : "Disallow: /");
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("article-cms");
  expect(sitemap).not.toContain("/privacy");
  if (indexable)
    expect(sitemap).toContain(`${process.env.NEXT_PUBLIC_SITE_URL}/services`);
  const guide = await (await request.get("/llms.txt")).text();
  expect(guide).toContain("HubSpot");
  expect(guide).not.toContain("article-cms");
});
test("analytics respects acceptance, routes, persistence, and withdrawal", async ({
  page,
}) => {
  test.skip(
    !gaId,
    "Run with a GA4 test ID to verify the configured integration.",
  );
  let loads = 0;
  await page.route("https://www.googletagmanager.com/**", (route) => {
    loads++;
    return route.fulfill({
      contentType: "application/javascript",
      body: "/* mock Google script; do not send telemetry */",
    });
  });
  await page.goto("/");
  expect(loads).toBe(0);
  await page.getByRole("button", { name: "Decline analytics" }).click();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Accept analytics" }),
  ).toHaveCount(0);
  expect(loads).toBe(0);
  await page
    .getByRole("button", { name: "Privacy settings", exact: true })
    .click();
  await page.getByRole("button", { name: "Accept analytics" }).click();
  await expect.poll(() => loads).toBe(1);
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          (window.dataLayer || []).filter(
            (v: any) => v[0] === "event" && v[1] === "page_view",
          ).length,
      ),
    )
    .toBe(1);
  await page
    .locator("#navigation")
    .getByRole("link", { name: "Services", exact: true })
    .click();
  await expect(page).toHaveURL(/\/services$/);
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          (window.dataLayer || []).filter(
            (v: any) => v[0] === "event" && v[1] === "page_view",
          ).length,
      ),
    )
    .toBe(2);
  await page
    .getByRole("button", { name: "Privacy settings", exact: true })
    .click();
  await page.getByRole("button", { name: "Decline analytics" }).click();
  await expect
    .poll(() =>
      page.evaluate(() => localStorage.getItem("ca-analytics-consent-v1")),
    )
    .toBe("declined");
  await expect(page.locator("script#google-analytics")).toHaveCount(0);
  expect(loads).toBe(1);
});
