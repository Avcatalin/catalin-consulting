import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrivacyControls } from "@/components/privacy-controls";
import { site } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : new URL("http://localhost:3000"),
  verification: { google: site.googleVerification },
};
export const viewport: Viewport = { themeColor: "#12202f" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = site.url
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": `${site.url}/#person`,
            name: site.name,
            url: site.url,
            jobTitle: "Independent HubSpot CMS and CRM specialist",
            email: site.email,
            knowsAbout: [
              "HubSpot CMS",
              "HubSpot CRM",
              "Web development",
              "Revenue operations",
            ],
            workLocation: { "@type": "Place", name: "Tunari, Romania" },
          },
          {
            "@type": "WebSite",
            "@id": `${site.url}/#website`,
            url: site.url,
            name: site.name,
            inLanguage: "en",
            publisher: { "@id": `${site.url}/#person` },
          },
        ],
      }
    : null;
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <PrivacyControls gaId={site.gaId} />
        {data && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
          />
        )}
      </body>
    </html>
  );
}
