const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
function productionUrl(value: string | undefined) {
  if (!value) return undefined;
  const url = new URL(value);
  if (
    url.protocol !== "https:" ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an HTTPS origin, e.g. https://example.com",
    );
  }
  return url.origin;
}
function calendlyUrl() {
  const value =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/avarvarei-catalin/30min";
  const url = new URL(value);
  if (
    url.protocol !== "https:" ||
    url.hostname !== "calendly.com" ||
    url.username ||
    url.password
  ) {
    throw new Error(
      "NEXT_PUBLIC_CALENDLY_URL must be an HTTPS calendly.com event URL",
    );
  }
  return url.href;
}
const url = productionUrl(configuredUrl);
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";
if (gaId && !/^G-[A-Z0-9]+$/.test(gaId))
  throw new Error("Invalid GA4 measurement ID");
export const site = {
  name: "Catalin Avarvarei",
  url,
  indexable: Boolean(url) && process.env.SITE_INDEXABLE === "true",
  publishArticles: process.env.PUBLISH_JOURNAL_ARTICLES === "true",
  gaId,
  googleVerification: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  calendlyUrl: calendlyUrl(),
  email: "contact@duoadv.com",
};
