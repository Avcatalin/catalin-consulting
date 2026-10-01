import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/article-lifecycle");

export default function Page() {
  return (
    <>
      <PageSchema path="/article-lifecycle" />
      <section className="page-intro">
        <div className="wrap article-head">
          <Link className="article-back" href="/journal">
            Back to the journal
          </Link>
          <span className="eyebrow" style={{ marginTop: "32px" }}>
            CRM foundations
          </span>
          <h1>When does a lead actually become an MQL?</h1>
          <p>
            Start with the agreement between Marketing and Sales, then build the
            workflow.
          </p>
          <div className="meta">By Catalin Avarvarei · 6 min read</div>
        </div>
      </section>
      <article className="article-body prose">
        <p>
          A contact downloads an ebook. A workflow changes their lifecycle stage
          to MQL. Sales receives a notification and opens the record. The person
          has shown interest in a topic, but there is no clear evidence that
          they are ready for a sales conversation.
        </p>
        <p>
          The workflow may be operating exactly as configured. The issue is the
          meaning of the stage change.
        </p>
        <h2>Begin with the decision</h2>
        <p>
          An MQL definition should help a team make a decision: this person or
          account deserves a particular kind of follow-up. Before choosing a
          score or a workflow trigger, ask what that follow-up should be and why
          it is appropriate.
        </p>
        <p>
          A demo request and an ebook download can mean different things. The
          first may express a direct intention to speak with the company. The
          second may indicate early research. Neither event tells the whole
          story about fit, but they should not automatically be treated as
          equivalent.
        </p>
        <h2>Separate fit from interest</h2>
        <p>
          Fit asks whether the person or company matches the type of customer
          the business serves. Interest asks what they have done that suggests a
          reason to engage now.
        </p>
        <p>
          For a hypothetical B2B software company, fit might include company
          size, geography, or a relevant use case. Interest might include a demo
          request or repeated engagement with product information. The exact
          signals depend on the business; a borrowed scoring model is not a
          substitute for that discussion.
        </p>
        <blockquote>
          A qualification rule should explain why a next action makes sense.
        </blockquote>
        <h2>Ask about the handoff</h2>
        <p>
          A useful discovery conversation goes beyond “What makes someone an
          MQL?” Ask what Sales expects to see on the record, who receives the
          lead, and how quickly they should review it. Ask how a lead is
          rejected and how Marketing receives that feedback.
        </p>
        <p>
          For example, a team might agree that a relevant demo request goes
          directly to an owner for review. A content download might remain in
          nurturing until additional evidence exists. That is an illustrative
          process, not a universal HubSpot rule.
        </p>
        <h2>Design the exception</h2>
        <p>
          What happens when a demo request has no company information? What
          happens when someone is already a customer? What happens when the
          expected owner is unavailable?
        </p>
        <p>
          These situations reveal whether the process is complete. They may need
          a review queue, a fallback owner, or a different customer route. They
          should not disappear silently inside the automation.
        </p>
        <h2>Then configure and review</h2>
        <p>
          Once the team agrees on the rule, document the inputs, stage
          transition, owner, follow-up expectation, and rejection reasons.
          Configure HubSpot around that agreement and test both ordinary and
          exception scenarios.
        </p>
        <p>
          After launch, look at whether the qualified contacts are being acted
          on and why some are rejected. A useful definition evolves through
          evidence and shared review, rather than through repeated changes to a
          score that nobody can explain.
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
