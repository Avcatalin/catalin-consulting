import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/journal");

export default function Page() {
  return (
    <>
      <PageSchema path="/journal" />
      <section className="page-intro ">
        <div className="wrap">
          <span className="eyebrow">Journal</span>
          <h1>
            Thinking through
            <br />
            the work behind the tools.
          </h1>
          <p>
            Practical articles about HubSpot websites, CRM configuration, and
            the processes that connect teams.
          </p>
        </div>
      </section>
      <section className="wrap space-bottom">
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
              A practical way to think about ownership, exceptions, and review.
            </p>
            <span className="text-link">Read article</span>
          </Link>
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
