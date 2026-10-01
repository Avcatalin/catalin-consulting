"use client";
import { useState } from "react";
export function CalendlyBooking({ url }: { url: string }) {
  const [enabled, setEnabled] = useState(false);
  const embed = new URL(url);
  embed.searchParams.set("embed_type", "Inline");
  embed.searchParams.set("primary_color", "234de6");
  return (
    <div className="booking-card">
      <span className="eyebrow">30-minute introductory call</span>
      <h2>
        Choose a time
        <br />
        to talk.
      </h2>
      <p>
        Website development, CRM configuration, automation, or a process that
        needs a clearer next step.
      </p>
      {enabled ? (
        <>
          <iframe
            className="calendly-frame"
            src={embed.href}
            title="Book a 30-minute call with Catalin Avarvarei"
            allow="payment"
          />
          <button
            className="text-link privacy-settings"
            onClick={() => setEnabled(false)}
          >
            Close calendar
          </button>
        </>
      ) : (
        <div className="calendar-placeholder">
          <p>
            View available times and book your call here. Showing the calendar
            connects to Calendly, which has its own privacy and cookie settings.
          </p>
          <button className="button" onClick={() => setEnabled(true)}>
            Show available times
          </button>
        </div>
      )}
      <p className="booking-status">
        {enabled
          ? "If the calendar does not load, use the booking link below."
          : "The calendar loads when you choose to show available times."}
      </p>
      <a
        className="text-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Calendly in a new tab
      </a>
      <p className="booking-email">
        Prefer email?{" "}
        <a
          className="text-link"
          href="mailto:contact@duoadv.com?subject=HubSpot%20project%20enquiry"
        >
          Email about your project
        </a>
      </p>
    </div>
  );
}
