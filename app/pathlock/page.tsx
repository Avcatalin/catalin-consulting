import Link from "next/link";
import { PageSchema } from "@/components/page-schema";
import { PathlockVisual } from "@/components/pathlock-project";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/pathlock");
export default function Page() {
  return (
    <>
      <PageSchema path="/pathlock" />
      <section className="page-intro">
        <div className="wrap">
          <span className="eyebrow">Pathlock / Project contribution</span>
          <h1>
            One email template.
            <br />
            Different inboxes.
          </h1>
          <p>
            HubSpot email template development for Pathlock, focused on
            compatibility across email clients.
          </p>
        </div>
      </section>
      <div className="wrap">
        <PathlockVisual />
      </div>
      <div className="wrap detail-grid">
        <aside className="detail-aside">
          <dl>
            <div>
              <dt>Project</dt>
              <dd>Pathlock</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>HubSpot email template development</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Email client compatibility · consistent rendering</dd>
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
            An email template needs to work in the inbox, as well as in the
            editor. Different email clients interpret layouts and styles
            differently, making compatibility an important part of email
            development.
          </p>
          <h2>My contribution</h2>
          <p>
            For Pathlock, I handled email template development in HubSpot. The
            work focused on making the templates compatible across email
            clients, so the content and design could be presented consistently
            to recipients.
          </p>
          <h2>Implementation focus</h2>
          <p>
            The focus was the template itself: bringing the email design into
            HubSpot while accounting for the constraints of email rendering. A
            template needs a clear content hierarchy and a layout that holds
            together when viewed in different inboxes.
          </p>
          <h2>What this project demonstrates</h2>
          <p>
            This project adds another part of my HubSpot experience: building
            the email content that connects a business with its audience,
            alongside website and CRM implementation.
          </p>
          <p className="inline-note">
            This summary describes my email template development contribution to
            the Pathlock project.
          </p>
        </article>
      </div>
      <section className="cta">
        <div className="wrap cta-grid">
          <div>
            <h2>
              Need emails that work
              <br />
              beyond the preview?
            </h2>
            <p>
              Let’s talk about your HubSpot email templates and the experience
              you want to deliver.
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
