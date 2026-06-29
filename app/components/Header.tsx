"use client";

import { useEffect, useState } from "react";

const NAV: [string, string][] = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["About", "/about"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="font-script text-4xl leading-none text-ink transition-colors hover:text-lemon"
          aria-label="Anita Liu — home"
        >
          AL
        </a>
        <nav className="hidden items-center gap-9 text-sm tracking-wide md:flex">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-muted transition-colors hover:text-ink"
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/anitaships"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-ink"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
            </svg>
          </a>
          <a
            href="mailto:anitaliu0818@gmail.com"
            className="rounded-full border border-line px-4 py-1.5 text-ink transition-colors hover:border-ink"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
