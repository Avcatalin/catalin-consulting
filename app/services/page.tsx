import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/services");

export default function Page() {
  return (
    <>
      <PageSchema path="/services" />
      <section className="page-intro ">
        <div className="wrap">
          <span className="eyebrow">Services</span>
          <h1>
            Practical help with
            <br />
            your HubSpot setup.
          </h1>
          <p>
            From a custom website module to a clearer CRM process. I work with
            businesses and agencies on defined projects and ongoing
            implementation support.
          </p>
        </div>
      </section>
      <section className="wrap space-bottom">
        <div className="service-detail" id="cms">
          <div>
            <span className="number">01 / HubSpot CMS</span>
            <h2>
              A website your team
              <br />
              can keep working with.
            </h2>
          </div>
          <div>
            <p>
              You have designs to implement, a template that needs improving, or
              content that has outgrown its current structure. I help translate
              those requirements into reusable HubSpot components.
            </p>
            <ul>
              <li>Custom modules, landing pages, and blog templates</li>
              <li>Figma-to-code implementation and responsive layouts</li>
              <li>HubDB-backed listings and resource hubs</li>
              <li>Improvements to existing themes and page experiences</li>
            </ul>
            <p>
              <strong>A useful starting question:</strong> Which parts of the
              website should your team be able to change without a developer?
            </p>
            <Link className="text-link" href="/approvalmax">
              See the ApprovalMax project
            </Link>
          </div>
        </div>
        <div className="service-detail" id="crm">
          <div>
            <span className="number">02 / HubSpot CRM</span>
            <h2>
              Configuration that
              <br />
              reflects how you work.
            </h2>
          </div>
          <div>
            <p>
              A CRM becomes useful when the data, stages, and automation reflect
              an agreed process. I help configure and improve the practical
              building blocks inside HubSpot.
            </p>
            <ul>
              <li>Properties, pipelines, and record configuration</li>
              <li>Workflows and operational automation</li>
              <li>Reports, dashboards, and data quality improvements</li>
              <li>
                User roles, permissions, and migration implementation support
              </li>
            </ul>
            <p>
              <strong>A useful starting question:</strong> What decision should
              someone be able to make from this record or report?
            </p>
            <Link className="text-link" href="/dataart">
              See my migration contribution
            </Link>
          </div>
        </div>
        <div className="service-detail" id="revops">
          <div>
            <span className="number">03 / RevOps support</span>
            <h2>
              Clearer rules.
              <br />
              More useful automation.
            </h2>
          </div>
          <div>
            <p>
              I’m developing a deeper RevOps focus on top of my hands-on CRM
              experience. My support centres on translating agreed business
              rules into practical HubSpot configuration and documentation.
            </p>
            <ul>
              <li>Lifecycle and qualification definitions</li>
              <li>Marketing-to-Sales handoffs and follow-up ownership</li>
              <li>Data quality rules and exception handling</li>
              <li>Workflow documentation and operational reporting</li>
            </ul>
            <p>
              <strong>A useful starting question:</strong> When a lead changes
              stage, who should act next—and what happens if they don’t?
            </p>
            <Link className="text-link" href="/article-governance">
              Read about rules and workflows
            </Link>
          </div>
        </div>
        <div className="faq">
          <h2>Before we start</h2>
          <details>
            <summary>
              Can you work alongside an agency or an internal team?
            </summary>
            <p>
              Yes. I can support an agency delivery team or work directly with
              the people using HubSpot. We’ll agree on ownership and
              communication before starting.
            </p>
          </details>
          <details>
            <summary>Do I need a complete brief?</summary>
            <p>
              No. Bring the problem, the goal, or the current setup. We can
              clarify the requirements together before agreeing on
              implementation.
            </p>
          </details>
          <details>
            <summary>How do you price a project?</summary>
            <p>
              Pricing depends on scope and the type of engagement. After an
              initial conversation, we can agree on a project scope or an hourly
              arrangement.
            </p>
          </details>
        </div>
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
