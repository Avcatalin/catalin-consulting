import type { MetadataRoute } from "next";
import { pages } from "@/lib/pages";
import { site } from "@/lib/site";
import { isPublished } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.indexable || !site.url) return [];
  return pages.filter(isPublished).map((page) => ({
    url: `${site.url}${page.path === "/" ? "" : page.path}`,
  }));
}
