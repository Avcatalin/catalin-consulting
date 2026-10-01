import { pages } from "@/lib/pages";
import { site } from "@/lib/site";
import { isPublished } from "@/lib/metadata";
export const dynamic = "force-static";
export function GET() {
  const content = `# Catalin Avarvarei\n\n> Independent HubSpot CMS and CRM specialist based near Bucharest, Romania.\n\n10+ years in web development and 6+ years working with HubSpot. Services include CMS development, CRM configuration and practical RevOps support. Project pages describe implementation contributions; they do not imply sole project ownership.\n\n## Website\n\n${pages
    .filter(isPublished)
    .map(
      (page) =>
        `- [${page.title}](${site.url || ""}${page.path}): ${page.description}`,
    )
    .join(
      "\n",
    )}\n\n## Contact and booking\n\n- Email: ${site.email}\n- [Book a 30-minute introductory call](${site.calendlyUrl})\n\nBookings take place through Calendly. No public API is provided for agents to book on a visitor's behalf.\n`;
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
