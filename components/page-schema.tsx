import { pages } from "@/lib/pages";
import { site } from "@/lib/site";
export function PageSchema({ path }: { path: string }) {
  if (!site.url) return null;
  const page = pages.find((page) => page.path === path)!;
  const url = `${site.url}${path === "/" ? "" : path}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type":
        path === "/about"
          ? "AboutPage"
          : path === "/book-a-call"
            ? "ContactPage"
            : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
  ];
  if (path !== "/")
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title.split(" | ")[0],
          item: url,
        },
      ],
    });
  if (path === "/services")
    [
      "HubSpot CMS development",
      "HubSpot CRM configuration",
      "Practical RevOps support",
    ].forEach((name) =>
      graph.push({
        "@type": "Service",
        name,
        provider: { "@id": `${site.url}/#person` },
        url,
      }),
    );
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
