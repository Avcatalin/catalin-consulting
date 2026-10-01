import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { CalendlyBooking } from "@/components/calendly-booking";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/book-a-call");

export default function Page() {
  return (
    <>
      <PageSchema path="/book-a-call" />
      <section className="page-intro ">
        <div className="wrap">
          <span className="eyebrow">Let’s talk</span>
          <h1>
            Start with
            <br />a conversation.
          </h1>
          <p>
            Bring the problem, the project, or the part of HubSpot that isn’t
            working as you need it to.
          </p>
        </div>
      </section>
      <section className="wrap space-bottom">
        <div className="booking-grid">
          <div className="prose">
            <h2>A useful first conversation</h2>
            <p>
              We can talk through your current setup, the outcome you need, and
              where I could help. You don’t need a complete technical brief.
            </p>
            <h3>A little context helps</h3>
            <p>
              Tell me which part of HubSpot you use, what you’re trying to
              change, and whether you need a defined project or ongoing support.
            </p>
            <h3>Prefer email?</h3>
            <p>
              You can reach me at{" "}
              <a href="mailto:contact@duoadv.com">contact@duoadv.com</a>.
            </p>
            <p className="inline-note">
              Based near Bucharest, Romania. Working remotely with businesses
              and agencies.
            </p>
          </div>
          <CalendlyBooking url={site.calendlyUrl} />
        </div>
      </section>
    </>
  );
}
