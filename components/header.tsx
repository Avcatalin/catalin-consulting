"use client";
import Link from "next/link";
import { Brand } from "./brand";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const links = [
  ["/services", "Services"],
  ["/work", "Selected work"],
  ["/about", "About"],
  ["/journal", "Journal"],
  ["/book-a-call", "Book a call"],
];
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 761px)");
    const close = () => setOpen(false);
    document.addEventListener("keydown", escape);
    media.addEventListener("change", close);
    return () => {
      document.removeEventListener("keydown", escape);
      media.removeEventListener("change", close);
    };
  }, [open]);
  return (
    <header className="header">
      <div className="wrap nav">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Brand />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="navigation"
          className={`nav-links${open ? " open" : ""}`}
          aria-label="Main"
        >
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              prefetch={false}
              className={href === "/book-a-call" ? "button" : undefined}
              aria-current={path === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
