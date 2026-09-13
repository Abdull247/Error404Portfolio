"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "projects", label: "projects" },
  { id: "strengths", label: "strengths" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f0f]/85 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-portfolio flex items-center justify-between h-[60px]">
        <a
          href="#home"
          className="flex items-center gap-2 group"
          aria-label="Error404 home"
        >
          <span className="font-mono text-[15px] text-[var(--accent)] group-hover:opacity-80 transition-opacity">
            $
          </span>
          <span className="font-heading font-semibold text-[var(--heading)] text-[15px] tracking-tight">
            error404
          </span>
          <span className="font-mono text-[11px] text-[var(--icon-muted)] hidden sm:inline">
            .dev
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`font-mono text-[13px] px-3 py-2 rounded-md transition-colors ${
                active === s.id
                  ? "text-[var(--accent)]"
                  : "text-[var(--subtext)] hover:text-[var(--heading)]"
              }`}
            >
              <span className="text-[var(--icon-muted)] mr-1">.</span>
              {s.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-accent ml-3 px-4 py-2 rounded-md font-mono text-[12px] font-medium"
          >
            ./hire-me
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`w-5 h-px bg-[var(--heading)] transition-transform ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`w-5 h-px bg-[var(--heading)] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-px bg-[var(--heading)] transition-transform ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[var(--border)]">
          <nav className="container-portfolio flex flex-col gap-1 py-4">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`font-mono text-[14px] px-3 py-2.5 rounded-md transition-colors ${
                  active === s.id
                    ? "text-[var(--accent)] bg-[var(--panel)]"
                    : "text-[var(--subtext)]"
                }`}
              >
                <span className="text-[var(--icon-muted)] mr-2">.</span>
                {s.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-accent mt-2 px-4 py-2.5 rounded-md font-mono text-[13px] text-center"
            >
              ./hire-me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
