"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
const STORAGE_KEY = "ca-analytics-consent-v1";
type Consent = "accepted" | "declined" | null;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
export function CookieSettingsButton() {
  return (
    <button
      className="text-link privacy-settings"
      onClick={() => window.dispatchEvent(new Event("ca:privacy-settings"))}
    >
      Privacy settings
    </button>
  );
}
export function PrivacyControls({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const path = usePathname();
  useEffect(() => {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      const choice =
        value === "accepted" || value === "declined" ? value : null;
      setConsent(choice);
      setVisible(Boolean(gaId) && !choice);
    } catch {
      setVisible(Boolean(gaId));
    }
    const show = () => setVisible(true);
    window.addEventListener("ca:privacy-settings", show);
    return () => window.removeEventListener("ca:privacy-settings", show);
  }, [gaId]);
  useEffect(() => {
    if (consent === "accepted" && ready && gaId) {
      window.gtag?.("event", "page_view", {
        page_location: window.location.href,
        page_path: path,
        page_title: document.title,
      });
    }
  }, [path, consent, ready, gaId]);
  function choose(choice: Exclude<Consent, null>) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* Keep the choice for this visit. */
    }
    if (choice === "declined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      // Reload on withdrawal to remove the previously loaded Google script and its listeners.
      if (consent === "accepted" && gaId) {
        const domains = [
          "",
          window.location.hostname,
          `.${window.location.hostname}`,
        ];
        const parts = window.location.hostname.split(".");
        for (let i = 1; i < parts.length - 1; i++)
          domains.push(`.${parts.slice(i).join(".")}`);
        document.cookie.split(";").forEach((cookie) => {
          const name = cookie.trim().split("=")[0];
          if (name === "_ga" || name.startsWith("_ga_"))
            domains.forEach((domain) => {
              document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
            });
        });
        window.location.reload();
        return;
      }
    }
    setConsent(choice);
    setVisible(false);
  }
  return (
    <>
      {gaId && consent === "accepted" && (
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
          onReady={() => {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () {
              window.dataLayer!.push(arguments);
            };
            window.gtag("consent", "default", {
              analytics_storage: "granted",
              ad_storage: "denied",
              ad_user_data: "denied",
              ad_personalization: "denied",
            });
            window.gtag("js", new Date());
            window.gtag("config", gaId, { send_page_view: false });
            setReady(true);
          }}
        />
      )}
      {visible && (
        <section
          className="privacy-panel"
          role="region"
          aria-label="Privacy settings"
        >
          <h2>Privacy settings</h2>
          <p>
            {gaId
              ? "Optional Google Analytics helps us understand which pages are useful. It loads only if you accept."
              : "Google Analytics is not enabled. The booking calendar loads only when you request it on the booking page."}{" "}
            Read the <Link href="/cookies">cookie policy</Link>.
          </p>
          {gaId && (
            <div className="actions">
              <button
                className="button secondary"
                onClick={() => choose("declined")}
              >
                Decline analytics
              </button>
              <button className="button" onClick={() => choose("accepted")}>
                Accept analytics
              </button>
            </div>
          )}
          <button
            className="privacy-close text-link"
            onClick={() => setVisible(false)}
          >
            Close settings
          </button>
        </section>
      )}
    </>
  );
}
