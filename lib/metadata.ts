import type { Metadata } from "next";
import { pages } from "./pages";
import { site } from "./site";
export function isPublished(page: (typeof pages)[number]) {
  return !page.legal && (!page.draft || site.publishArticles);
}
export function pageMetadata(path: string): Metadata {
  const page = pages.find((page) => page.path === path)!;
  const canonical = site.url
    ? `${site.url}${path === "/" ? "" : path}`
    : undefined;
  return {
    title: page.title,
    description: page.description,
    alternates: canonical ? { canonical } : undefined,
    robots: { index: site.indexable && isPublished(page), follow: true },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
