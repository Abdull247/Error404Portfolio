"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const TIMELINE = [
  {
    icon: Briefcase,
    period: "2026 · 3 months",
    title: "Software Development Intern",
    org: "Abuja, Nigeria",
    body: "Hands-on industry experience focused on software and technology development. Currently in progress — to be updated with company name, exact dates, and measurable responsibilities after completion.",
    tag: "experience",
    active: true,
  },
  {
    icon: GraduationCap,
    period: "2026 · Nigeria",
    title: "Secondary Education / SS3 Science",
    org: "Self-directed software development",
    body: "Self-directed software development alongside academic studies, focused on web development, backend systems, and product building.",
    tag: "education",
    active: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="container-portfolio">
        <SectionHeader
          index="05"
          subtitle="experience_&_education"
          title="Path so far"
        />

        <div className="relative max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <article className="relative pl-14">
                  <div
                    className={`absolute left-0 top-0 w-10 h-10 rounded-md border flex items-center justify-center ${
                      item.active
                        ? "border-[var(--accent)] bg-[var(--accent)]/5"
                        : "border-[var(--border)] bg-[var(--panel)]"
                    }`}
                  >
                    <item.icon
                      className={`w-4 h-4 ${
                        item.active
                          ? "text-[var(--accent)]"
                          : "text-[var(--tag)]"
                      }`}
                    />
                  </div>

                  <div className="card-panel p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-[11px] text-[var(--accent)]">
                        {item.period}
                      </span>
                      <span className="font-mono text-[11px] text-[var(--icon-muted)]">
                        · {item.tag}
                      </span>
                      {item.active && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wider border border-[var(--accent)]/30 text-[var(--accent)] bg-[var(--accent)]/5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                          in progress
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-[18px] text-[var(--heading)] mb-1">
                      {item.title}
                    </h3>
                    <p className="font-mono text-[12px] text-[var(--tag)] mb-3">
                      {item.org}
                    </p>
                    <p className="text-[14px] leading-relaxed">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
