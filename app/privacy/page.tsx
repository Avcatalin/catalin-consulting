import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/privacy");

export default function Page() {
  return (
    <>
      <PageSchema path="/privacy" />
      <section className="page-intro small">
        <div className="wrap">
          <span className="eyebrow">Privacy</span>
          <h1>Privacy policy</h1>
          <p>Information about this website and its operation.</p>
        </div>
      </section>
      <article className="wrap legal-wrap prose">
        <div className="notice">
          <strong>Draft for review before launch.</strong> This page contains
          proposed wording and fields that must be completed to reflect the
          actual business and live website.
        </div>
        <h2>Who is responsible for your data?</h2>
        <p>
          Data controller: [confirm the legal entity operating this website; if
          applicable, Duo Design Advertising SRL]. Registered address: [insert
          full registered address]. Privacy contact: [confirm contact@duoadv.com
          or another monitored address].
        </p>
        <h2>Information you provide</h2>
        <p>
          If you email about a project, the correspondence may include your
          name, email address, company information, and the details you choose
          to share. The purpose is to respond to your enquiry and, where
          appropriate, discuss or prepare a service engagement.
        </p>
        <p>
          The proposed legal basis is taking steps at your request before
          entering into a contract, where applicable. For other business
          correspondence, confirm the appropriate legal basis, such as
          legitimate interests, and document the relevant assessment.
        </p>
        <h2>Technical information</h2>
        <p>
          Optional Google Analytics loads only after analytics consent. The
          Calendly booking calendar loads only when requested on the booking
          page. There is no contact-form backend. A deployed hosting provider
          may process IP addresses, request details, and technical logs for
          service delivery and security. Before launch, identify the provider,
          data collected, retention, and the appropriate legal basis.
        </p>
        <h2>Scheduling and service providers</h2>
        <p>
          You can use the Calendly booking calendar on this website or open
          Calendly in a new tab. The embedded calendar loads only when you
          request it. Review Calendly’s privacy information before sharing
          information. Before launch, list the actual providers used for
          hosting, email, scheduling, CRM, and any analytics, together with
          their roles and relevant safeguards.
        </p>
        <h2>Retention</h2>
        <p>
          [Specify actual retention periods or clear criteria for enquiries,
          project correspondence, contracts, financial records, and technical
          logs. Do not publish an invented retention period.]
        </p>
        <h2>International transfers</h2>
        <p>
          [Identify whether any chosen providers transfer personal data outside
          the EEA. Where relevant, describe the applicable transfer mechanism
          and how information about safeguards can be obtained.]
        </p>
        <h2>Your rights</h2>
        <p>
          Depending on the circumstances and legal basis, you may have rights to
          access, correct, erase, or restrict processing of personal data, to
          object to processing, and to receive data in a portable form. If
          processing relies on consent, you may withdraw it without affecting
          the lawfulness of earlier processing.
        </p>
        <p>
          You may also complain to the Romanian supervisory authority, ANSPDCP,
          or another competent supervisory authority. See{" "}
          <a href="https://www.dataprotection.ro/" rel="noopener noreferrer">
            dataprotection.ro
          </a>
          . Contact the controller using the confirmed address above to exercise
          your rights.
        </p>
        <h2>Required information and automated decisions</h2>
        <p>
          For a project enquiry, enough contact information is needed to reply.
          Do not send customer exports, credentials, or sensitive personal
          information in an initial enquiry. This prototype performs no
          automated decision-making or profiling. Confirm the production site’s
          actual practices before publication.
        </p>
        <h2>Updates</h2>
        <p>
          [Insert effective date and a process for keeping this notice accurate
          when tools or processing activities change.]
        </p>
      </article>
    </>
  );
}
