import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/charles");

export default function Page() {
  return (
    <>
      <PageSchema path="/charles" />
      <section className="page-intro ">
        <div className="wrap">
          <span className="eyebrow">charles / Project contribution</span>
          <h1>
            A resource hub built
            <br />
            for content discovery.
          </h1>
          <p>
            HubSpot CMS development for a content experience with dynamic
            listings, search, featured resources, and individual article views.
          </p>
        </div>
      </section>
      <div className="wrap">
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
      </div>
      <div className="wrap detail-grid">
        <aside className="detail-aside">
          <dl>
            <div>
              <dt>Project</dt>
              <dd>charles</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>HubSpot CMS development</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>HubDB · JavaScript · Cloudflare Workers</dd>
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
            I worked with charles in Berlin over approximately three years on
            HubSpot CMS projects. One of the key contributions was the Resource
            Hub: a structured way to publish and discover content.
          </p>
          <h2>My contribution</h2>
          <p>
            My work included custom templates and modules, HubDB-backed content,
            dynamic resource listings, search, featured content, and individual
            article views.
          </p>
          <p>
            The implementation used HubDB, JavaScript, and Cloudflare Workers.
            These were parts of a broader content experience, where the
            structure of the underlying content mattered as much as the layout
            of the pages.
          </p>
          <h2>Implementation focus</h2>
          <p>
            A resource hub has several connected experiences: discovering
            content, narrowing the options, and reading a particular resource. I
            worked on the CMS and front-end pieces that supported that journey.
          </p>
          <p>
            Reusable templates and modules helped carry the structure across the
            hub, rather than treating every resource as an unrelated page.
          </p>
          <h2>What this project demonstrates</h2>
          <p>
            This project brings together content modelling and front-end
            implementation. It shows my experience working beyond individual
            landing pages to build a connected content system on HubSpot.
          </p>
          <p>
            The summary describes my contribution and does not claim a measured
            traffic, engagement, or commercial result.
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
