import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/terms");

export default function Page() {
  return (
    <>
      <PageSchema path="/terms" />
      <section className="page-intro small">
        <div className="wrap">
          <span className="eyebrow">Terms</span>
          <h1>Website terms</h1>
          <p>Information about this website and its operation.</p>
        </div>
      </section>
      <article className="wrap legal-wrap prose">
        <div className="notice">
          <strong>Draft for review before launch.</strong> This page contains
          proposed wording and fields that must be completed to reflect the
          actual business and live website.
        </div>
        <h2>About this website</h2>
        <p>
          This website introduces Catalin Avarvarei’s work and services and
          shares general educational articles about websites, CRM systems, and
          revenue operations. Legal operator: [insert confirmed legal entity and
          registered details].
        </p>
        <h2>Project enquiries</h2>
        <p>
          An enquiry or introductory call does not create a service contract.
          The scope, fees, responsibilities, delivery terms, confidentiality,
          intellectual property, and any data processing arrangements will be
          agreed separately in writing before work begins.
        </p>
        <h2>Website content</h2>
        <p>
          Articles explain general concepts and illustrative situations. They
          are not a commitment that a particular process or technical
          configuration will suit every business. Requirements and platform
          capabilities should be checked for the specific engagement.
        </p>
        <h2>Intellectual property</h2>
        <p>
          Client and platform names remain the property of their respective
          owners. Project summaries describe implementation contributions and do
          not imply endorsement or ownership of the clients’ brands. [Confirm
          ownership and permitted use of website text, visuals, screenshots, and
          other material before launch.]
        </p>
        <h2>External services</h2>
        <p>
          The website may link to services operated by third parties. Those
          services have their own terms and privacy practices. This prototype
          does not accept online payments or conclude service contracts through
          the website.
        </p>
        <h2>Mandatory rights and applicable terms</h2>
        <p>
          Any final terms must respect mandatory legal rights. Do not publish
          broad liability exclusions or consumer restrictions without confirming
          their validity for the services and customers involved. [Confirm
          appropriate governing-law and dispute provisions, where needed, with
          Romanian legal advice.]
        </p>
        <h2>Contact and updates</h2>
        <p>[Confirm business contact details and effective date.]</p>
      </article>
    </>
  );
}
