import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-intro">
      <div className="wrap">
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p>Try the homepage or get in touch about your project.</p>
        <Link className="button" href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
