"use client";

import {
  Boxes,
  Cloud,
  Database,
  Layers,
  ServerCog,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Category = {
  name: string;
  icon: LucideIcon;
  tag: string;
  items: string[];
};

const STACK: Category[] = [
  {
    name: "Frontend",
    icon: Layers,
    tag: "ui",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "CSS",
      "Vite",
      "responsive UI",
      "API integration",
    ],
  },
  {
    name: "Backend",
    icon: ServerCog,
    tag: "api",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "authentication",
      "middleware",
      "validation",
      "integrations",
    ],
  },
  {
    name: "Data",
    icon: Database,
    tag: "store",
    items: [
      "PostgreSQL",
      "Neon",
      "Firebase / RTDB",
      "JSON / JSONB",
    ],
  },
  {
    name: "Automation",
    icon: Workflow,
    tag: "flow",
    items: [
      "n8n",
      "webhooks",
      "scheduled workflows",
      "email automation",
      "API orchestration",
    ],
  },
  {
    name: "Deployment",
    icon: Cloud,
    tag: "ship",
    items: [
      "Vercel",
      "Render",
      "Cloudflare Pages",
      "Cloudflare services",
      "Git / GitHub",
    ],
  },
  {
    name: "Additional",
    icon: Boxes,
    tag: "etc",
    items: [
      "Python fundamentals",
      "AI / API integrations",
      "third-party SDKs",
    ],
  },
];

export function CoreStack() {
  return (
    <section id="stack" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container-portfolio relative">
        <SectionHeader
          index="02"
          subtitle="core_stack.json"
          title="The stack I build with"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STACK.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 70}>
              <article className="card-panel p-6 h-full group">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                      <cat.icon className="w-[18px] h-[18px] text-[var(--accent)]" />
                    </div>
                    <h3 className="font-heading text-[17px] text-[var(--heading)]">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-[var(--icon-muted)]">
                    .{cat.tag}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[12px] text-[var(--tag)] px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* highlight bar */}
        <Reveal delay={120} className="mt-10">
          <div className="card-panel p-6 sm:p-7 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div>
              <div className="font-mono text-[11px] text-[var(--icon-muted)] uppercase tracking-wider mb-2">
                ops philosophy
              </div>
              <p className="text-[15px] text-[var(--heading)] max-w-[640px]">
                Comfortable diagnosing CORS, environment variables, hosting,
                API routing, and runtime issues — the unglamorous work that
                makes features actually ship.
              </p>
            </div>
            <a
              href="#projects"
              className="btn-ghost-line inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-[13px] whitespace-nowrap"
            >
              <span className="text-[var(--accent)]">{">"}</span>
              see it in action
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
