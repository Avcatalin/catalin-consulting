import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/article-cms");

export default function Page() {
  return (
    <>
      <PageSchema path="/article-cms" />
      <section className="page-intro">
        <div className="wrap article-head">
          <Link className="article-back" href="/journal">
            Back to the journal
          </Link>
          <span className="eyebrow" style={{ marginTop: "32px" }}>
            HubSpot CMS
          </span>
          <h1>When a resource hub needs more than a blog template</h1>
          <p>
            How content structure, search, and reusable templates fit together.
          </p>
          <div className="meta">By Catalin Avarvarei · 5 min read</div>
        </div>
      </section>
      <article className="article-body prose">
        <p>
          A blog template works well when the main task is to publish a stream
          of articles. A resource hub may have a different purpose: helping
          visitors find the right material across several formats, topics, and
          audiences.
        </p>
        <p>
          The difference becomes important when a team begins adding guides,
          webinars, case studies, and downloadable resources to the same
          collection.
        </p>
        <h2>Start with the content model</h2>
        <p>
          Before designing cards or choosing filters, identify what each
          resource needs to contain. The fields might include a title, a topic,
          a resource type, a description, a destination, and whether it is
          featured.
        </p>
        <p>
          Then ask which of these fields visitors actually use to decide what to
          open. Every filter adds another piece of information for editors to
          maintain. If a field has no clear purpose, it may create work without
          improving discovery.
        </p>
        <h2>Think about three connected experiences</h2>
        <p>
          The listing helps someone scan the collection. Search and filtering
          help them narrow the options. The individual resource page helps them
          understand and use the content they selected.
        </p>
        <p>
          These experiences should share a consistent structure. A category
          shown on a listing card should mean the same thing on the resource
          page. A destination should be predictable. A visitor should not lose
          their context simply because they opened a result.
        </p>
        <h2>Choose the structure for the need</h2>
        <p>
          In HubSpot, a resource hub can use existing content types or
          structured data such as HubDB. The right choice depends on publishing
          requirements, editor access, the number of content types, and the
          degree of custom behaviour needed.
        </p>
        <p>
          A custom solution also creates maintenance responsibilities. Who adds
          new rows or fields? What happens when a destination changes? How will
          an editor know which entries are missing required information?
        </p>
        <blockquote>
          The content structure is part of the user experience.
        </blockquote>
        <h2>Build reusable components</h2>
        <p>
          Reusable cards, listing layouts, and templates help avoid treating
          every resource as a separate design exercise. They also make changes
          easier to carry across the collection.
        </p>
        <p>
          This does not mean every resource needs to look identical. It means
          the shared parts should behave consistently, while differences in
          format remain clear.
        </p>
        <h2>Check more than the happy path</h2>
        <p>
          Test an empty search, a long title, a missing image, a resource
          without a category, and a visitor using a keyboard or a narrow screen.
          These checks often reveal more than a collection of ideal sample
          content.
        </p>
        <p>
          A resource hub is successful as a content system when both sides can
          use it: visitors can find material, and the team can keep the
          collection accurate and maintainable.
        </p>
        <hr className="divider" />
        <p className="inline-note">
          Illustrative examples explain the concepts; they are not client case
          studies.
        </p>
      </article>
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
