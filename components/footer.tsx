import Link from "next/link";
import { Brand } from "./brand";

import { CookieSettingsButton } from "./privacy-controls";
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link className="brand" href="/">
              <Brand />
            </Link>
            <p>
              HubSpot CMS, CRM &amp; practical revenue operations.
              <br />
              Based near Bucharest. Working remotely.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <Link href="/services">Services</Link>
            <Link href="/work">Selected work</Link>
            <Link href="/about">About</Link>
            <Link href="/journal">Journal</Link>
            <a href="mailto:contact@duoadv.com">Get in touch</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Catalin Avarvarei · Independent web
            &amp; CRM specialist
          </span>
          <div className="legal-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/legal">Legal notice</Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
