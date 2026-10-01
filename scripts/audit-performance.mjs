import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "@playwright/test";
import { launch } from "chrome-launcher";
import lighthouse from "lighthouse";
const port = 3200;
const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "--hostname",
    "127.0.0.1",
    "--port",
    String(port),
  ],
  { stdio: "ignore" },
);
let chrome;
try {
  let running = false;
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(`http://127.0.0.1:${port}`)).ok) {
        running = true;
        break;
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  if (!running)
    throw new Error(
      "Production server did not start. Run npm run build first.",
    );
  chrome = await launch({
    chromePath: chromium.executablePath(),
    chromeFlags: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"],
  });
  await mkdir("reports", { recursive: true });
  const summary = [];
  for (const route of ["/", "/about", "/book-a-call"]) {
    const result = await lighthouse(`http://127.0.0.1:${port}${route}`, {
      port: chrome.port,
      output: "html",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      logLevel: "error",
    });
    const filename = route === "/" ? "home" : route.slice(1);
    await writeFile(`reports/lighthouse-${filename}.html`, result.report);
    const row = {
      route,
      scores: Object.fromEntries(
        Object.entries(result.lhr.categories).map(([key, value]) => [
          key,
          Math.round(value.score * 100),
        ]),
      ),
      metrics: Object.fromEntries(
        [
          "first-contentful-paint",
          "largest-contentful-paint",
          "total-blocking-time",
          "cumulative-layout-shift",
        ].map((key) => [key, result.lhr.audits[key].displayValue]),
      ),
      issues: Object.values(result.lhr.audits)
        .filter(
          (audit) => audit.score !== null && audit.score < 1 && audit.details,
        )
        .map((audit) => ({
          id: audit.id,
          title: audit.title,
          value: audit.displayValue,
        })),
    };
    summary.push(row);
    console.log(JSON.stringify(row));
  }
  await writeFile(
    "reports/performance-summary.json",
    JSON.stringify(
      {
        measuredAt: new Date().toISOString(),
        indexingEnabled: process.env.SITE_INDEXABLE === "true",
        analyticsConfigured: Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID),
        environment:
          "Local production build, Lighthouse mobile simulated throttling, no analytics consent or loaded Calendly",
        pages: summary,
      },
      null,
      2,
    ),
  );
} finally {
  await chrome?.kill();
  server.kill("SIGTERM");
}
