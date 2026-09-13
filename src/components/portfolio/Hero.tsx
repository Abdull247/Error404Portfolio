"use client";

import { ArrowUpRight, Terminal } from "lucide-react";
import { Reveal } from "./Reveal";
import { TerminalWindow } from "./TerminalWindow";

const STATS = [
  { value: "4+", label: "shipped projects" },
  { value: "2026", label: "internship · Abuja" },
  { value: "∞", label: "things to build" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* background grid + soft accent glow */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -right-24 w-[440px] h-[440px] glow-orange pointer-events-none" style={{ animation: "glow-pulse 14s ease-in-out infinite" }} />
      <div className="absolute top-1/2 -left-24 w-[320px] h-[320px] glow-orange opacity-50 pointer-events-none" style={{ animation: "glow-pulse 18s ease-in-out infinite" }} />
      <div className="absolute inset-0 noise-overlay" />

      <div className="container-portfolio relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-7">
          <Reveal delay={60}>
            <h1 className="font-heading font-semibold tracking-tight leading-[0.95] text-[var(--heading)]">
              <span className="block text-[clamp(2.5rem,7vw,5rem)]">
                Hello, I&apos;m{" "}
                <span className="text-[var(--accent)]">Error404</span>
              </span>
              <span className="block mt-2 text-[clamp(1.6rem,4vw,2.6rem)] font-normal text-[var(--subtext)]">
                <span className="text-[var(--heading)]">developer</span> not
                found —
                <span className="text-[var(--accent)]"> /</span> let&apos;s build
                it.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="max-w-[560px] text-[15px] leading-relaxed text-[var(--subtext)]">
              Full-stack web &amp; backend developer based in Lagos / Abuja,
              Nigeria. I turn rough ideas into deployed, production-minded web
              apps, REST APIs, automation workflows, and AI-assisted developer
              tooling — with a strong bias toward clean UX, simple architecture,
              and shipping.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="btn-accent inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-[13px] font-medium"
              >
                <Terminal className="w-4 h-4" />
                view_projects
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="btn-ghost-line inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-[13px]"
              >
                <span className="text-[var(--accent)]">{">"}</span>
                get_in_touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex items-center gap-8 pt-4 border-t border-[var(--border)]">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-heading text-[24px] font-semibold text-[var(--heading)] leading-none">
                    {s.value}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--icon-muted)] mt-1.5 uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <Reveal delay={180} className="w-full flex justify-center lg:justify-end">
            <TerminalWindow />
          </Reveal>
        </div>
      </div>

      {/* scroll hint */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[var(--icon-muted)] hover:text-[var(--accent)] transition-colors group"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          scroll
        </span>
        <span className="w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent group-hover:h-14 transition-all" />
      </a>
    </section>
  );
}
