"use client";

import { Code2, MapPin, Sparkles, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const FACTS = [
  {
    icon: Code2,
    label: "focus",
    value: "frontend ↔ backend boundary",
  },
  {
    icon: Zap,
    label: "superpower",
    value: "idea → deployed system",
  },
  {
    icon: Sparkles,
    label: "workflow",
    value: "clean UX · simple architecture · ship",
  },
  {
    icon: MapPin,
    label: "based_in",
    value: "Lagos / Abuja, Nigeria",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container-portfolio">
        <SectionHeader
          index="01"
          subtitle="who is error404"
          title="Developer at the frontend ↔ backend boundary"
        />

        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7" delay={80}>
            <div className="space-y-5 text-[16px] leading-relaxed">
              <p>
                I&apos;m{" "}
                <span className="text-[var(--heading)] font-medium">
                  Error404
                </span>{" "}
                — a full-stack web &amp; backend developer operating under the
                working name{" "}
                <span className="font-mono text-[var(--accent)]">Dev Codes</span>
                . I build practical, production-minded web applications, REST
                APIs, and developer tools, with the strongest focus at the
                frontend / backend boundary: React interfaces, Node.js / Express
                APIs, databases, third-party integrations, and n8n automation.
              </p>
              <p>
                I&apos;m comfortable taking a product from an idea to a deployed
                working system. That means I think in terms of user flows,
                schema, endpoints, CORS, environment variables, hosting, and
                what happens at 3am when something breaks — not just the
                component in front of me. My bias is toward clean UX, simple
                architecture, and shipping working software that people can
                actually use.
              </p>
              <p>
                Lately I&apos;ve been deep in API platforms ({" "}
                <span className="font-mono text-[var(--accent)]">
                  Error404Apis
                </span>
                ), task/reward marketplaces, AI vibe-coding environments, and
                media apps with caching &amp; fallback strategies. I also write
                n8n workflows for email automation, webhooks, and multi-service
                orchestration — so the boring operational glue is just as
                interesting to me as the flashy UI.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={200}>
            <div className="card-panel p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[var(--border)]">
                <span className="font-mono text-[12px] text-[var(--icon-muted)]">
                  ~/about
                </span>
                <span className="font-mono text-[11px] text-[var(--accent)]">
                  ● active
                </span>
              </div>
              <ul className="space-y-4">
                {FACTS.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-9 h-9 rounded-md border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent)] transition-colors">
                      <f.icon className="w-4 h-4 text-[var(--accent)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[11px] text-[var(--icon-muted)] uppercase tracking-wider mb-0.5">
                        {f.label}
                      </div>
                      <div className="text-[14px] text-[var(--heading)]">
                        {f.value}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-[var(--border)]">
                <div className="font-mono text-[11px] text-[var(--icon-muted)] mb-3 uppercase tracking-wider">
                  currently
                </div>
                <pre className="font-mono text-[12px] leading-relaxed text-[var(--subtext)] whitespace-pre-wrap">
{`const status = {
  role: "developer",
  open: ["internships",
         "junior roles",
         "freelance"],
  shipping: true,
};`}
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
