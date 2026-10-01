import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/dataart");

export default function Page() {
  return (
    <>
      <PageSchema path="/dataart" />
      <section className="page-intro ">
        <div className="wrap">
          <span className="eyebrow">DataArt / Project contribution</span>
          <h1>
            Supporting a Salesforce
            <br />
            to HubSpot migration.
          </h1>
          <p>
            CRM implementation work on a US client migration project delivered
            through DataArt.
          </p>
        </div>
      </section>
      <div className="wrap">
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
      </div>
      <div className="wrap detail-grid">
        <aside className="detail-aside">
          <dl>
            <div>
              <dt>Project</dt>
              <dd>DataArt</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>HubSpot CRM implementation</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Workflows · pipelines · reporting · permissions</dd>
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
            I contributed to a Salesforce-to-HubSpot migration for a US client
            through DataArt over approximately seven months. My work focused on
            practical configuration within the HubSpot CRM environment.
          </p>
          <h2>My contribution</h2>
          <p>
            The areas I worked on included workflows, pipelines, reporting, CRM
            properties, and user access. These building blocks help turn
            migration requirements into a CRM setup that teams can operate.
          </p>
          <p>
            My contribution was part of the wider project delivery. I am not
            presenting myself as the sole migration architect or owner of the
            entire data migration.
          </p>
          <h2>Implementation focus</h2>
          <p>
            CRM configuration requires attention to how information moves
            through the system. Properties need a clear meaning, pipelines need
            useful stages, and automation needs to reflect the intended process.
          </p>
          <p>
            Reporting and access configuration were also part of the work: teams
            need visibility into the information relevant to their role and
            appropriate access to records and functionality.
          </p>
          <h2>What this project demonstrates</h2>
          <p>
            This experience complements my CMS work with hands-on CRM delivery
            in a migration context. It shows that my HubSpot experience extends
            to operational configuration, automation, and reporting.
          </p>
          <p>
            No migration volume, revenue improvement, or performance metric is
            claimed in this summary.
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
