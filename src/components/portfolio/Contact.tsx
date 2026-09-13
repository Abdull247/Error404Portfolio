"use client";

import { ArrowUpRight, Github, Linkedin, Mail, Globe, Phone, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const LINKS = [
  {
    icon: Github,
    label: "github",
    handle: "github.com/Abdull247",
    href: "https://github.com/Abdull247",
  },
  {
    icon: Globe,
    label: "portfolio",
    handle: "devcodes.dev",
    href: "https://devcodes.dev",
  },
  {
    icon: Mail,
    label: "email",
    handle: "hello@devcodes.dev",
    href: "mailto:hello@devcodes.dev",
  },
  {
    icon: MessageCircle,
    label: "whatsapp",
    handle: "+234 706 334 9393",
    href: "https://wa.me/2347063349393",
  },
  {
    icon: Phone,
    label: "phone",
    handle: "+234 706 334 9393",
    href: "tel:+2347063349393",
  },
  {
    icon: Linkedin,
    label: "linkedin",
    handle: "linkedin.com/in/devcodes",
    href: "https://linkedin.com/in/devcodes",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] glow-orange opacity-50 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container-portfolio relative">
        <SectionHeader
          index="06"
          subtitle="let's_build"
          title="Let&apos;s ship something together"
        />

        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7" delay={80}>
            <div className="space-y-6">
              <h3
                className="font-heading text-[clamp(1.5rem,4vw,2.6rem)] text-[var(--heading)] leading-tight"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Open to{" "}
                <span className="text-[var(--accent)]">internships</span>,
                junior roles &amp; freelance work.
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-relaxed max-w-[560px]">
                I&apos;m currently looking for opportunities to build practical
                software with a team. If you have a product to ship, an API to
                design, an n8n workflow to automate, or an idea you want taken
                from zero to deployed — let&apos;s talk.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="mailto:hello@devcodes.dev"
                  className="btn-accent inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-mono text-[13px] font-medium"
                >
                  <Mail className="w-4 h-4" />
                  hello@devcodes.dev
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/Abdull247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-line inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-mono text-[13px]"
                >
                  <Github className="w-4 h-4" />
                  view github
                </a>
              </div>

              <div className="pt-6 border-t border-[var(--border)]">
                <div className="font-mono text-[11px] text-[var(--icon-muted)] uppercase tracking-wider mb-3">
                  based_in
                </div>
                <p className="text-[14px] text-[var(--heading)]">
                  Lagos / Abuja, Nigeria · open to remote &amp; relocation
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={200}>
            <div className="card-panel p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[var(--border)]">
                <span className="font-mono text-[12px] text-[var(--icon-muted)]">
                  ~/contact
                </span>
                <span className="font-mono text-[11px] text-[var(--accent)]">
                  ● available
                </span>
              </div>
              <ul className="space-y-2">
                {LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 -mx-2 sm:-mx-3 rounded-md hover:bg-[var(--bg)] transition-colors"
                    >
                      <div className="w-9 h-9 rounded-md border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent)] transition-colors">
                        <l.icon className="w-4 h-4 text-[var(--accent)]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-[10px] text-[var(--icon-muted)] uppercase tracking-wider">
                          {l.label}
                        </div>
                        <div className="text-[12px] sm:text-[13px] text-[var(--heading)] truncate font-mono">
                          {l.handle}
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[var(--icon-muted)] group-hover:text-[var(--accent)] transition-colors flex-shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-[var(--border)]">
                <p className="font-mono text-[11px] text-[var(--icon-muted)] leading-relaxed">
                  {"// references available on request."}
                  <br />
                  {"// preferred response time: 24-48h."}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
