import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/approvalmax");

export default function Page() {
  return (
    <>
      <PageSchema path="/approvalmax" />
      <section className="page-intro ">
        <div className="wrap">
          <span className="eyebrow">ApprovalMax / Project contribution</span>
          <h1>
            A custom pricing experience
            <br />
            inside HubSpot.
          </h1>
          <p>
            A HubSpot CMS module designed to handle a pricing model with
            multiple currencies, billing periods, and organisation counts.
          </p>
        </div>
      </section>
      <div className="wrap">
        <div className="project-visual approval">
          <div className="project-head">
            <span className="project-name">ApprovalMax</span>
            <span className="project-type">HubSpot CMS</span>
          </div>
          <div
            className="pricing-demo"
            aria-label="Illustrative pricing module structure"
          >
            <div>
              <span>Billing period</span>
              <strong>Yearly</strong>
            </div>
            <div>
              <span>Currency</span>
              <strong>EUR</strong>
            </div>
            <div className="range" aria-hidden="true"></div>
            <div>
              <span>Organisations</span>
              <strong>1–5</strong>
            </div>
            <div>
              <span>Supported</span>
              <strong>7 currencies</strong>
            </div>
          </div>
          <span className="visual-caption">
            Module concept · not a client screenshot
          </span>
        </div>
      </div>
      <div className="wrap detail-grid">
        <aside className="detail-aside">
          <dl>
            <div>
              <dt>Project</dt>
              <dd>ApprovalMax</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>HubSpot CMS development</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Custom module · pricing interaction</dd>
            </div>
          </dl>
          <hr className="divider" />
          <Link className="text-link" href="/work">
            All projects
          </Link>
        </aside>
        <article className="prose">
          <h2>The project context</h2>
          <p>
            Pricing pages need to present choices clearly while keeping the
            underlying logic consistent. For ApprovalMax, my contribution
            centred on a custom pricing module inside HubSpot CMS.
          </p>
          <h2>My contribution</h2>
          <p>
            I developed the module to support monthly and yearly billing, seven
            currencies, and a range slider for one to five organisations. The
            work involved translating the pricing requirements into a responsive
            interface with connected controls.
          </p>
          <p>
            Each selection needed to be understood in relation to the others. A
            change in currency or billing period should be reflected by the
            module consistently, rather than leaving separate parts of the
            interface out of sync.
          </p>
          <h2>Implementation focus</h2>
          <p>
            The module combined HubSpot CMS structure with front-end interaction
            logic. The emphasis was on making a complex set of options usable
            within the page while fitting into the surrounding website.
          </p>
          <h2>What this project demonstrates</h2>
          <p>
            This is an example of the kind of CMS work I enjoy: understanding a
            business requirement, breaking it into manageable states, and
            implementing a component that connects the content and interaction.
          </p>
          <p>
            No conversion or revenue impact is claimed here. The scope described
            is my development contribution to the pricing module.
          </p>
        </article>
      </div>
      <section className="cta">
        <div className="wrap cta-grid">
          <div>
            <h2>
              Let’s make HubSpot work
              <br />
              for your business.
            </h2>
            <p>
              Tell me what you’re building, what isn’t working, or where you
              need an extra pair of hands.
            </p>
          </div>
          <Link className="button white" href="/book-a-call">
            Let’s talk
          </Link>
        </div>
      </section>
    </>
  );
}
