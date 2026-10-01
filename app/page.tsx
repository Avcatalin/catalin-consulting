import { DownloadCV } from "@/components/download-cv";
import { PathlockProject } from "@/components/pathlock-project";
import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/");

export default function Page() {
  return (
    <>
      <PageSchema path="/" />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Independent HubSpot specialist</span>
            <h1>
              A better website.
              <br />A clearer CRM.
              <br />
              <em>Connected.</em>
            </h1>
            <p className="hero-copy">
              I help businesses build on HubSpot, organise their CRM, and
              connect the processes between Marketing, Sales, and Customer
              Success.
            </p>
            <div className="actions">
              <Link className="button" href="/book-a-call">
                Let’s talk about your project
              </Link>
              <DownloadCV />
            </div>
            <p className="hero-note">
              10+ years in web development · 6+ years with HubSpot
            </p>
          </div>
          <div className="system-board">
            <div className="board-top">
              <span>One connected system</span>
              <b>HubSpot</b>
            </div>
            <h2 className="board-title">
              From the first visit
              <br />
              to the next conversation.
            </h2>
            <div className="system-step">
              <div className="step-icon" aria-hidden="true">
                01
              </div>
              <div>
                <strong>Website &amp; content</strong>
                <span>Templates · modules · resource hubs</span>
              </div>
            </div>
            <div className="system-step">
              <div className="step-icon" aria-hidden="true">
                02
              </div>
              <div>
                <strong>CRM &amp; automation</strong>
                <span>Properties · workflows · pipelines</span>
              </div>
            </div>
            <div className="system-step">
              <div className="step-icon" aria-hidden="true">
                03
              </div>
              <div>
                <strong>People &amp; process</strong>
                <span>Ownership · handoffs · reporting</span>
              </div>
            </div>
            <div className="board-bottom">
              <span>CMS + CRM + RevOps</span>
              <span>Built around your business</span>
            </div>
          </div>
        </div>
      </section>
      <section
        className="experience-section"
        aria-labelledby="experience-heading"
      >
        <div className="wrap">
          <div className="experience-heading">
            <h2 id="experience-heading">Selected project experience</h2>
            <Link className="text-link" href="/work">
              Explore my work
            </Link>
          </div>
          <div className="experience-clients">
            <Link className="experience-client" href="/approvalmax">
              <span className="experience-client-name">ApprovalMax</span>
              <span className="experience-client-focus">HubSpot CMS</span>
            </Link>
            <Link className="experience-client" href="/charles">
              <span className="experience-client-name charles">charles</span>
              <span className="experience-client-focus">
                Content experience
              </span>
            </Link>
            <Link className="experience-client" href="/dataart">
              <span className="experience-client-name">DataArt</span>
              <span className="experience-client-focus">
                CRM implementation
              </span>
            </Link>
            <Link className="experience-client" href="/pathlock">
              <span className="experience-client-name">Pathlock</span>
              <span className="experience-client-focus">HubSpot email</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-top">
            <div>
              <span className="eyebrow">How I can help</span>
              <h2>
                The website, the CRM,
                <br />
                and the work between them.
              </h2>
            </div>
            <p>
              Hands-on support for businesses and agencies that need someone who
              can understand the problem and help implement the solution.
            </p>
          </div>
          <div className="services">
            <div className="service">
              <span className="number">01 / Build</span>
              <h3>HubSpot CMS</h3>
              <p>
                Custom modules, landing pages, templates, and content
                experiences that your marketing team can actually manage.
              </p>
              <div className="tags">
                <span className="tag">Custom modules</span>
                <span className="tag">HubDB</span>
                <span className="tag">Figma to code</span>
              </div>
            </div>
            <div className="service">
              <span className="number">02 / Organise</span>
              <h3>HubSpot CRM</h3>
              <p>
                Properties, pipelines, workflows, and reporting configured
                around the way your business operates.
              </p>
              <div className="tags">
                <span className="tag">Automation</span>
                <span className="tag">CRM setup</span>
                <span className="tag">Reporting</span>
              </div>
            </div>
            <div className="service">
              <span className="number">03 / Connect</span>
              <h3>RevOps support</h3>
              <p>
                Practical implementation support for lifecycle definitions, lead
                handoffs, ownership, and data quality.
              </p>
              <div className="tags">
                <span className="tag">Lifecycle</span>
                <span className="tag">Handoffs</span>
                <span className="tag">Data quality</span>
              </div>
            </div>
          </div>
          <div className="actions">
            <Link className="text-link" href="/services">
              Explore services
            </Link>
          </div>
        </div>
      </section>
      <section className="section wash">
        <div className="wrap">
          <div className="section-top">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2>
                Real projects.
                <br />
                My part in making them work.
              </h2>
            </div>
            <Link className="text-link" href="/work">
              View all projects
            </Link>
          </div>
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
        </div>
      </section>
      <section className="section">
        <div className="wrap approach-grid">
          <div>
            <span className="eyebrow">Working together</span>
            <h2>
              Understand first.
              <br />
              Then build.
            </h2>
            <p className="intro">
              A good implementation starts with clear questions. What should
              happen? Who owns it? What does your team need to see?
            </p>
            <Link className="text-link" href="/about">
              More about my approach
            </Link>
          </div>
          <div>
            <div className="process-row">
              <span>01</span>
              <div>
                <h3>Understand the situation</h3>
                <p>
                  Review the current setup, the business goal, and where people
                  get stuck.
                </p>
              </div>
            </div>
            <div className="process-row">
              <span>02</span>
              <div>
                <h3>Agree on the scope</h3>
                <p>
                  Make the requirements, responsibilities, and next steps clear
                  before implementation.
                </p>
              </div>
            </div>
            <div className="process-row">
              <span>03</span>
              <div>
                <h3>Build, test, and hand over</h3>
                <p>
                  Implement the solution, check real scenarios, and leave your
                  team with useful documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-band">
        <div className="wrap about-grid">
          <div>
            <span className="eyebrow">The person behind the work</span>
            <h2>
              Hi, I’m Catalin.
              <br />A builder who cares
              <br />
              about the whole system.
            </h2>
            <div className="stats">
              <div>
                <strong>10+</strong>
                <span>years in web development</span>
              </div>
              <div>
                <strong>6+</strong>
                <span>years with HubSpot</span>
              </div>
            </div>
          </div>
          <div>
            <p>
              I’ve worked across HubSpot CMS and CRM, WordPress, and custom web
              development. My experience includes content platforms, custom
              pricing modules, and CRM implementation work.
            </p>
            <p>
              I’m now building on that experience with a deeper focus on revenue
              operations: how Marketing, Sales, and Customer Success work
              together, and how the CRM supports them.
            </p>
            <Link className="text-link" href="/about">
              Get to know me
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-top">
            <div>
              <span className="eyebrow">The journal</span>
              <h2>
                Notes on building
                <br />
                better-connected systems.
              </h2>
            </div>
            <Link className="text-link" href="/journal">
              Explore the journal
            </Link>
          </div>
          <div className="article-grid">
            <Link className="article-card" href="/article-lifecycle">
              <div className="meta">CRM foundations · 6 min read</div>
              <h3>When does a lead actually become an MQL?</h3>
              <p>
                Start with the agreement between Marketing and Sales, then build
                the workflow.
              </p>
              <span className="text-link">Read article</span>
            </Link>
            <Link className="article-card" href="/article-cms">
              <div className="meta">HubSpot CMS · 5 min read</div>
              <h3>When a resource hub needs more than a blog template</h3>
              <p>
                How content structure, search, and reusable templates fit
                together.
              </p>
              <span className="text-link">Read article</span>
            </Link>
            <Link className="article-card" href="/article-governance">
              <div className="meta">RevOps practice · 6 min read</div>
              <h3>A workflow is only as useful as the rule behind it</h3>
              <p>
                A practical way to think about ownership, exceptions, and
                review.
              </p>
              <span className="text-link">Read article</span>
            </Link>
          </div>
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
