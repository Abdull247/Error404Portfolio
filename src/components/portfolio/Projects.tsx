"use client";

import {
  ArrowUpRight,
  Boxes,
  Bot,
  Clapperboard,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Project = {
  id: string;
  name: string;
  tagline: string;
  kind: string;
  year: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
  stack: string[];
  status?: "shipped" | "building";
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    id: "error404apis",
    name: "Error404Apis",
    tagline: "Developer API Platform",
    kind: "Full-stack / API platform",
    year: "2026",
    icon: Plug,
    status: "shipped",
    featured: true,
    description:
      "A developer-focused API catalogue designed to make common app features easy to integrate through simple endpoints and documentation. Vite frontend with a Node.js backend, health endpoints, CORS handling, and same-domain API routing/proxy architecture.",
    highlights: [
      "Vite frontend with Node.js backend",
      "Health endpoints, CORS handling, same-domain routing/proxy",
      "Frontend on Cloudflare Pages, backend on Render",
      "Lightweight developer experience & fast API responses",
    ],
    stack: ["Vite", "Node.js", "Express", "Cloudflare Pages", "Render"],
  },
  {
    id: "taskbridge",
    name: "TaskBridge",
    tagline: "Task & Reward Platform",
    kind: "Full-stack product",
    year: "2026",
    icon: Boxes,
    status: "shipped",
    description:
      "A task/reward marketplace connecting advertisers with users completing online tasks. Backend flows around PostgreSQL/Neon, email verification, task categories, proof configuration and API-driven workflows.",
    highlights: [
      "PostgreSQL/Neon data layer",
      "Email verification & proof configuration",
      "n8n for waitlist and promotional automation",
      "Paystack payment infrastructure (planned)",
    ],
    stack: ["PostgreSQL", "Neon", "n8n", "Paystack", "REST"],
  },
  {
    id: "sudo",
    name: "Sudo",
    tagline: "AI Vibe-Coding Environment",
    kind: "AI developer tooling",
    year: "2026",
    icon: Bot,
    status: "building",
    description:
      "An AI coding environment for generating Node.js backends/APIs using sandboxed development environments. Designed a two-panel workflow with chat, file/editor views, logs, endpoints and expandable planning steps.",
    highlights: [
      "Two-panel workflow: chat + editor/logs",
      "Project state with Neon + sandbox orchestration",
      "Multiple model / API provider support",
      "Expandable planning steps and live endpoint view",
    ],
    stack: ["Neon", "Sandboxed runtime", "AI APIs", "Node.js"],
  },
  {
    id: "reelix",
    name: "Reelix",
    tagline: "Movie & TV App",
    kind: "Product / API integration",
    year: "2026",
    icon: Clapperboard,
    status: "shipped",
    description:
      "A movie and TV application backed by TMDB and third-party media APIs, with caching and fallback strategies. Worked on API integration, search, media playback architecture, downloads, and performance-oriented UX.",
    highlights: [
      "TMDB + third-party media APIs",
      "Caching and fallback strategies",
      "Search, playback architecture & downloads",
      "Performance-oriented UX",
    ],
    stack: ["TMDB", "REST", "Caching", "Performance"],
  },
];

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="container-portfolio">
        <SectionHeader
          index="03"
          subtitle="selected_projects"
          title="Things I&apos;ve built"
        />

        {/* Featured project */}
        <Reveal delay={80}>
          <article className="card-panel p-0 overflow-hidden mb-6 group">
            <div className="grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-5 relative p-6 sm:p-8 bg-[var(--bg)] border-b lg:border-b-0 lg:border-r border-[var(--border)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-md border border-[var(--border)] bg-[var(--panel)] flex items-center justify-center">
                    <featured.icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-[var(--icon-muted)] uppercase tracking-wider">
                      {featured.kind}
                    </div>
                    <div className="font-mono text-[11px] text-[var(--accent)]">
                      ~/{featured.year}
                    </div>
                  </div>
                </div>

                <h3 className="font-heading text-[28px] sm:text-[32px] font-semibold text-[var(--heading)] mb-2">
                  {featured.name}
                </h3>
                <p className="text-[var(--accent)] font-mono text-[13px] mb-5">
                  {featured.tagline}
                </p>

                {/* mock browser window */}
                <div className="rounded-md border border-[var(--border)] bg-[var(--panel)] overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)]">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                    <span className="ml-3 font-mono text-[10px] text-[var(--icon-muted)]">
                      api.error404.dev
                    </span>
                  </div>
                  <pre className="font-mono text-[11px] leading-relaxed p-4 text-[var(--subtext)] overflow-x-auto">
                    <span className="text-[var(--accent)]">GET</span> /v1/health{"\n"}
                    <span className="text-[var(--icon-muted)]">{"{"}</span>{"\n"}
                    {"  "}<span className="text-[#7dcea0]">"status"</span>: <span className="text-[#7dcea0]">"ok"</span>,{"\n"}
                    {"  "}<span className="text-[#7dcea0]">"uptime"</span>: <span className="text-[#e8a87c]">99.98</span>,{"\n"}
                    {"  "}<span className="text-[#7dcea0]">"version"</span>: <span className="text-[#7dcea0]">"v1.0.0"</span>{"\n"}
                    <span className="text-[var(--icon-muted)]">{"}"}</span>
                  </pre>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <StatusBadge status={featured.status} />
                  <span className="font-mono text-[11px] text-[var(--icon-muted)]">
                    · live
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col">
                <p className="text-[15px] leading-relaxed mb-6">
                  {featured.description}
                </p>

                <div className="font-mono text-[11px] text-[var(--icon-muted)] uppercase tracking-wider mb-3">
                  highlights
                </div>
                <ul className="space-y-2.5 mb-6">
                  {featured.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[14px]">
                      <span className="text-[var(--accent)] font-mono mt-0.5">
                        ▸
                      </span>
                      <span className="text-[var(--heading)]">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="font-mono text-[11px] text-[var(--icon-muted)] uppercase tracking-wider mb-3">
                  stack
                </div>
                <div className="flex flex-wrap gap-1.5 mb-7">
                  {featured.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] text-[var(--tag)] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--bg)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="btn-accent inline-flex items-center gap-2 px-4 py-2.5 rounded-md font-mono text-[12px]"
                  >
                    case_study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/devcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-line inline-flex items-center gap-2 px-4 py-2.5 rounded-md font-mono text-[12px]"
                  >
                    source
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Rest of projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-panel p-5 h-full flex flex-col group">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
            <project.icon className="w-[18px] h-[18px] text-[var(--accent)]" />
          </div>
          <div>
            <h3 className="font-heading text-[18px] text-[var(--heading)] leading-tight">
              {project.name}
            </h3>
            <p className="font-mono text-[11px] text-[var(--accent)] mt-0.5">
              {project.tagline}
            </p>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-[var(--icon-muted)] group-hover:text-[var(--accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>

      <div className="font-mono text-[10px] text-[var(--icon-muted)] uppercase tracking-wider mb-2">
        {project.kind} · {project.year}
      </div>

      <p className="text-[13.5px] leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="space-y-1.5 mb-5">
        {project.highlights.slice(0, 3).map((h) => (
          <div key={h} className="flex items-start gap-2 text-[12px]">
            <span className="text-[var(--accent)] font-mono mt-0.5">▸</span>
            <span className="text-[var(--tag)]">{h}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1 pt-4 border-t border-[var(--border)]">
        {project.stack.slice(0, 4).map((s) => (
          <span
            key={s}
            className="font-mono text-[10px] text-[var(--icon-muted)] px-1.5 py-0.5"
          >
            #{s}
          </span>
        ))}
      </div>
    </article>
  );
}

function StatusBadge({ status }: { status?: "shipped" | "building" }) {
  if (!status) return null;
  const isShipped = status === "shipped";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wider border ${
        isShipped
          ? "border-[#4ade80]/30 text-[#4ade80] bg-[#4ade80]/5"
          : "border-[var(--accent)]/30 text-[var(--accent)] bg-[var(--accent)]/5"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isShipped ? "bg-[#4ade80]" : "bg-[var(--accent)] animate-pulse"
        }`}
      />
      {status}
    </span>
  );
}
