import { DownloadCV } from "@/components/download-cv";
import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/about");

export default function Page() {
  return (
    <>
      <PageSchema path="/about" />
      <section className="page-intro ">
        <div className="wrap">
          <span className="eyebrow">About</span>
          <h1>
            Hands-on experience.
            <br />A broader perspective.
          </h1>
          <p>
            I’m Catalin Avarvarei, a web and HubSpot specialist based in Tunari,
            near Bucharest. I work remotely with businesses and agencies.
          </p>
        </div>
      </section>
      <section className="wrap space-bottom">
        <div className="bio-layout">
          <article className="prose">
            <h2>From websites to the systems behind them.</h2>
            <p>
              I have more than ten years of experience in web development,
              including over six years working with HubSpot CMS and CRM. My
              background also includes extensive work with WordPress and
              bringing designs to life on the web.
            </p>
            <p>
              I’ve built custom modules, landing pages, templates, and content
              experiences. I’ve also worked on the CRM side: workflows,
              pipelines, properties, reports, record configuration, and user
              access.
            </p>
            <p>
              That combination has made me increasingly interested in the
              connection between the customer-facing experience and the internal
              processes that follow it. A good form, for example, is only one
              part of the story. What happens to the lead afterwards matters
              too.
            </p>
            <h2>My growing RevOps focus</h2>
            <p>
              I’m building a deeper understanding of revenue operations
              alongside my practical HubSpot work. My focus is on how Marketing,
              Sales, and Customer Success agree on processes, use reliable
              information, and take responsibility for the next step.
            </p>
            <p>
              I bring existing CMS and CRM implementation experience to that
              work, while continuing to develop my skills in process design,
              governance, and integrations.
            </p>
            <h2>How I like to work</h2>
            <p>
              I prefer clear conversations, specific requirements, and practical
              solutions. Before building, I want to understand the problem, the
              people involved, and what a useful outcome would look like.
            </p>
            <p>
              During implementation, I value feedback and testing real
              situations. At handover, I want the team to understand what has
              been built and how to maintain it.
            </p>
          </article>
          <aside>
            <div className="bio-card">
              <span className="eyebrow" style={{ color: "#9bb1ff" }}>
                At a glance
              </span>
              <h2>
                Web development.
                <br />
                HubSpot.
                <br />
                Business processes.
              </h2>
              <div className="stats">
                <div>
                  <strong>10+ years</strong>
                  <span>Web development experience</span>
                </div>
                <div>
                  <strong>6+ years</strong>
                  <span>Working with HubSpot CMS &amp; CRM</span>
                </div>
              </div>
              <p>
                Based in Romania.
                <br />
                Available for project and ongoing collaboration.
              </p>
              <Link className="button white" href="/book-a-call">
                Talk about your project
              </Link>
            </div>
            <div className="timeline">
              <div>
                <strong>CMS delivery</strong>
                <p>
                  ApprovalMax pricing module and charles content experiences.
                </p>
              </div>
              <div>
                <strong>CRM delivery</strong>
                <p>
                  Implementation contribution on a migration project through
                  DataArt.
                </p>
              </div>
              <div>
                <strong>Developing further</strong>
                <p>RevOps, process design, governance, and integrations.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <div className="wrap about-cv">
        <DownloadCV />
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
