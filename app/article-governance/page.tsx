import { PageSchema } from "@/components/page-schema";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/article-governance");

export default function Page() {
  return (
    <>
      <PageSchema path="/article-governance" />
      <section className="page-intro">
        <div className="wrap article-head">
          <Link className="article-back" href="/journal">
            Back to the journal
          </Link>
          <span className="eyebrow" style={{ marginTop: "32px" }}>
            RevOps practice
          </span>
          <h1>A workflow is only as useful as the rule behind it</h1>
          <p>
            A practical way to think about ownership, exceptions, and review.
          </p>
          <div className="meta">By Catalin Avarvarei · 6 min read</div>
        </div>
      </section>
      <article className="article-body prose">
        <p>
          A workflow is a way to execute a rule. It does not decide whether the
          rule is useful, agreed, or complete.
        </p>
        <p>
          When a team says “We need automation,” the next conversation should
          explore the situation they want to improve. Are leads missing an
          owner? Is follow-up inconsistent? Are stage changes happening without
          evidence? Each problem needs a different rule.
        </p>
        <h2>Describe the situation in plain language</h2>
        <p>
          Consider a hypothetical handoff: when a contact requests a demo, an
          appropriate sales owner should review the request and take the agreed
          next action within a defined period.
        </p>
        <p>
          That sentence already contains several decisions. What counts as a
          demo request? How is the owner chosen? What counts as a review? What
          is the time limit? Does the clock follow working hours?
        </p>
        <p>
          The workflow cannot resolve these questions on behalf of the business.
          It will implement whichever interpretation has been built into it.
        </p>
        <h2>Make ownership explicit</h2>
        <p>
          Someone needs to own the incoming record. Someone also needs to own
          the rule itself. Those are different responsibilities.
        </p>
        <p>
          A sales owner may be responsible for the follow-up. An operations
          owner may be responsible for reviewing routing failures or updating
          the logic when territories change. If nobody owns the rule, a workflow
          can remain active long after its assumptions have become outdated.
        </p>
        <h2>Plan for exceptions</h2>
        <p>
          Missing data, an unavailable owner, an existing customer, or a
          duplicate record may change the appropriate action. Identify these
          cases before implementation and decide how they become visible to a
          person who can resolve them.
        </p>
        <p>
          A fallback queue is useful only when someone reviews it. A
          notification is useful only when the recipient knows what to do with
          it.
        </p>
        <blockquote>
          Governance connects the rule, its owner, and the evidence that it is
          working.
        </blockquote>
        <h2>Define what should be measured</h2>
        <p>
          If the purpose is faster follow-up, measure the agreed event that
          represents follow-up. A task being created is different from a task
          being completed; a completed task is different from a meaningful
          customer response.
        </p>
        <p>
          If the purpose is better data quality, track the specific missing or
          invalid information and whether it has been corrected. Avoid
          presenting a generic quality score that the team cannot interpret.
        </p>
        <h2>Keep a review rhythm</h2>
        <p>
          Document the rule, the reason for it, the owner, the exception route,
          and the checks performed before launch. Agree on when it will be
          reviewed and what evidence would justify a change.
        </p>
        <p>
          That review does not need to be complicated. It needs to answer
          whether the process still reflects how the business works, whether
          people are acting on it, and whether exceptions are being resolved.
        </p>
        <p>
          Good automation reduces repetitive work. Good governance helps the
          team keep trusting it.
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
