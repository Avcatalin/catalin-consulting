import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/legal");

export default function Page() {
  return (
    <>
      <PageSchema path="/legal" />
      <section className="page-intro small">
        <div className="wrap">
          <span className="eyebrow">Business information</span>
          <h1>Legal notice</h1>
          <p>Information about this website and its operation.</p>
        </div>
      </section>
      <article className="wrap legal-wrap prose">
        <div className="notice">
          <strong>Draft for review before launch.</strong> This page contains
          proposed wording and fields that must be completed to reflect the
          actual business and live website.
        </div>
        <h2>Website operator</h2>
        <p>Personal brand: Catalin Avarvarei.</p>
        <p>
          Legal service provider: [confirm whether Duo Design Advertising SRL is
          the contracting and operating entity].
        </p>
        <p>
          Registered office: [insert full address].
          <br />
          Trade register number: [insert].
          <br />
          Tax identification / VAT number: [insert applicable details].
          <br />
          Email: [confirm contact@duoadv.com].
          <br />
          Telephone: [insert appropriate business contact number].
        </p>
        <h2>Services and pricing</h2>
        <p>
          Services are scoped individually. Fees, VAT treatment, payment terms,
          and delivery responsibilities will be specified in the written
          proposal or service agreement.
        </p>
        <h2>Brand references</h2>
        <p>
          HubSpot, ApprovalMax, charles, Salesforce, and DataArt are referenced
          to describe platform experience and project contributions. No
          partnership status, certification status, or client endorsement is
          implied by these references.
        </p>
        <h2>Before publication</h2>
        <p>
          Complete the operator details and confirm that case study information
          may be shared publicly under the relevant agreements. Additional
          disclosures may apply if the site later sells services online, targets
          consumers, or adds regulated activities.
        </p>
      </article>
    </>
  );
}
