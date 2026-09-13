"use client";

import { Reveal } from "./Reveal";

export function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-[12px] text-[var(--accent)]">
          {index}
        </span>
        <span className="font-mono text-[12px] text-[var(--icon-muted)]">
          {"//"} {subtitle}
        </span>
      </div>
      <h2 className="font-heading text-[clamp(1.8rem,4vw,2.4rem)] font-semibold text-[var(--heading)]">
        {title}
      </h2>
    </Reveal>
  );
}
