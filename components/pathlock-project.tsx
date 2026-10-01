import Link from "next/link";
export function PathlockVisual() {
  return (
    <div className="project-visual pathlock">
      <div className="project-head">
        <span className="project-name">Pathlock</span>
        <span className="project-type">HubSpot email</span>
      </div>
      <div className="email-demo" aria-hidden="true">
        <div className="email-demo-toolbar">
          <span />
          <span />
          <span />
          <b>Email template</b>
        </div>
        <div className="email-demo-body">
          <div className="email-demo-brand">Pathlock</div>
          <div className="email-demo-heading" />
          <div className="email-demo-line" />
          <div className="email-demo-line short" />
          <div className="email-demo-cta" />
        </div>
        <div className="email-demo-foot">One template. Different inboxes.</div>
      </div>
      <span className="visual-caption">
        Template concept · not a client screenshot
      </span>
    </div>
  );
}
export function PathlockProject() {
  return (
    <Link className="project" href="/pathlock">
      <PathlockVisual />
      <div className="project-info">
        <span className="eyebrow">Email development</span>
        <h3>HubSpot emails built for different inboxes.</h3>
        <p>
          Email templates for Pathlock, with a focus on compatibility and
          consistent rendering across email clients.
        </p>
        <span className="text-link">Explore my contribution</span>
      </div>
    </Link>
  );
}
