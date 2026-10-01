import { PathlockProject } from "@/components/pathlock-project";
import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/work");

export default function Page() {
  return (
    <>
      <PageSchema path="/work" />
      <section className="page-intro ">
        <div className="wrap">
          <span className="eyebrow">Selected work</span>
          <h1>
            Different projects.
            <br />
            One hands-on approach.
          </h1>
          <p>
            A closer look at the work I contributed to, the requirements behind
            it, and the parts I implemented.
          </p>
        </div>
      </section>
      <section className="wrap space-bottom">
        <div className="work-grid">
          <Link className="project" href="/approvalmax">
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
            <div className="project-info">
              <span className="eyebrow">CMS development</span>
              <h3>Making a complex pricing model easier to use.</h3>
              <p>
                A custom HubSpot pricing module with multiple currencies,
                billing periods, and organisation counts.
              </p>
              <span className="text-link">Explore my contribution</span>
            </div>
          </Link>
          <Link className="project" href="/charles">
            <div className="project-visual charles">
              <div className="project-head">
                <span className="project-name">charles</span>
                <span className="project-type">Content experience</span>
              </div>
              <div
                className="resource-demo"
                aria-label="Illustrative resource hub content structure"
              >
                <div>
                  <span>01 / Discover</span>
                  <strong>
                    Resource
                    <br />
                    library
                  </strong>
                </div>
                <div>
                  <span>02 / Explore</span>
                  <strong>
                    Search &amp;
                    <br />
                    categories
                  </strong>
                </div>
                <div>
                  <span>03 / Read</span>
                  <strong>
                    Article
                    <br />
                    pages
                  </strong>
                </div>
              </div>
              <span className="visual-caption">
                Content structure · not a client screenshot
              </span>
            </div>
            <div className="project-info">
              <span className="eyebrow">CMS &amp; content systems</span>
              <h3>A resource hub built for discovery.</h3>
              <p>
                HubDB-backed content, dynamic listings, search, and article
                experiences for charles.
              </p>
              <span className="text-link">Explore my contribution</span>
            </div>
          </Link>
          <Link className="project" href="/dataart">
            <div className="project-visual dataart">
              <div className="project-head">
                <span className="project-name">DataArt</span>
                <span className="project-type">CRM migration</span>
              </div>
              <div
                className="migration-demo"
                aria-label="Salesforce to HubSpot migration"
              >
                <b>Salesforce</b>
                <span>Migration</span>
                <b>HubSpot</b>
              </div>
              <span className="visual-caption">
                Project context · implementation contribution
              </span>
            </div>
            <div className="project-info">
              <span className="eyebrow">CRM implementation</span>
              <h3>Supporting a move from Salesforce to HubSpot.</h3>
              <p>
                Workflows, pipelines, reporting, properties, and access
                configuration on a migration project through DataArt.
              </p>
              <span className="text-link">Explore my contribution</span>
            </div>
          </Link>
          <PathlockProject />
        </div>
        <p className="inline-note">
          These project summaries describe my contribution. They do not imply
          sole ownership of the broader projects or endorsement by the companies
          named.
        </p>
      </section>
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
