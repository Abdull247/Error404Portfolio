"use client";

import {
  Bug,
  Cpu,
  Layers,
  Sparkles,
  Workflow,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Strength = {
  icon: LucideIcon;
  title: string;
  body: string;
  tags: string[];
};

const STRENGTHS: Strength[] = [
  {
    icon: Sparkles,
    title: "Product-minded development",
    body: "Turns rough ideas into usable interfaces and working backend systems — from sketch to shipped.",
    tags: ["ideation", "ship"],
  },
  {
    icon: Layers,
    title: "API architecture",
    body: "REST endpoints, third-party integrations, authentication flows, webhooks, and service orchestration.",
    tags: ["REST", "auth", "webhooks"],
  },
  {
    icon: Layers,
    title: "Frontend engineering",
    body: "Responsive React interfaces with attention to hierarchy, interaction, and performance.",
    tags: ["React", "UX", "perf"],
  },
  {
    icon: Workflow,
    title: "Automation",
    body: "n8n workflows for emails, scheduled jobs, webhooks, and multi-service processes.",
    tags: ["n8n", "scheduled"],
  },
  {
    icon: Bug,
    title: "Deployment & debugging",
    body: "Comfortable diagnosing CORS, environment variables, hosting, API routing, and runtime issues.",
    tags: ["CORS", "hosting", "debug"],
  },
  {
    icon: Wand2,
    title: "AI integration",
    body: "Practical experience connecting applications to different model providers and building AI-assisted developer workflows.",
    tags: ["LLM", "dev tooling"],
  },
];

export function Strengths() {
  return (
    <section id="strengths" className="py-24 sm:py-32 relative">
      <div className="container-portfolio">
        <SectionHeader
          index="04"
          subtitle="technical_strengths"
          title="What I bring to a team"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {STRENGTHS.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="card-panel p-6 h-full group relative overflow-hidden">
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 glow-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-md border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                      <s.icon className="w-4 h-4 text-[var(--accent)]" />
                    </div>
                    <span className="font-mono text-[11px] text-[var(--icon-muted)]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-[16px] text-[var(--heading)] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed mb-4">{s.body}</p>
                  <div className="flex flex-wrap gap-1">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] text-[var(--icon-muted)]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
