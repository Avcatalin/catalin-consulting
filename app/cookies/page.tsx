import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/cookies");

export default function Page() {
  return (
    <>
      <PageSchema path="/cookies" />
      <section className="page-intro small">
        <div className="wrap">
          <span className="eyebrow">Cookies</span>
          <h1>Cookie policy</h1>
          <p>Information about this website and its operation.</p>
        </div>
      </section>
      <article className="wrap legal-wrap prose">
        <div className="notice">
          <strong>Draft for review before launch.</strong> This page contains
          proposed wording and fields that must be completed to reflect the
          actual business and live website.
        </div>
        <h2>This website</h2>
        <p>
          This website stores your analytics preference in browser local storage
          under ca-analytics-consent-v1 until you clear your browser storage or
          change the preference. If Google Analytics is configured, its script
          loads only after you accept analytics. You can decline it or withdraw
          your choice through Privacy settings in the footer.
        </p>
        <h2>Google Analytics</h2>
        <p>
          When configured and accepted, Google Analytics measures page views
          using first-party cookies such as _ga and _ga_*. Their default expiry
          is up to two years and may refresh on use; confirm the actual property
          settings before launch. Advertising storage and personalization are
          disabled. Turning off analytics removes the loaded script and attempts
          to clear its cookies.
        </p>
        <h2>The live website</h2>
        <p>
          Before launch, inspect the final implementation and chosen hosting
          tools. If cookies or similar storage are used, describe the actual
          purposes, providers, names, and lifetimes. Do not assume that the
          production website has the same behaviour as this prototype.
        </p>
        <h2>Consent</h2>
        <p>
          Non-essential cookies and similar technologies requiring consent must
          remain blocked until the visitor makes an informed choice. Strictly
          necessary technologies may be treated differently. Where consent is
          used, provide a way to refuse and later withdraw it.
        </p>
        <p>
          A policy page alone does not block tracking. If analytics, HubSpot
          tracking, or embedded third-party content is added, implement the
          relevant consent controls before those technologies load.
        </p>
        <h2>External scheduling</h2>
        <p>
          The booking page displays an embedded Calendly calendar only after you
          select Show available times. You can close it at any time. Calendly
          receives your connection and booking information and provides its own
          cookie controls inside the calendar. You can also open Calendly in a
          new tab.
        </p>
        <h2>Contact</h2>
        <p>
          [Confirm the website operator and contact address.] [Insert effective
          date after checking the live site.]
        </p>
      </article>
    </>
  );
}
