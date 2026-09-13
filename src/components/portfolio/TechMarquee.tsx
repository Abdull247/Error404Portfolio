"use client";

const TECHS = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Neon",
  "Firebase",
  "n8n",
  "Vite",
  "Vercel",
  "Render",
  "Cloudflare",
  "Python",
  "REST",
  "Webhooks",
  "Git/GitHub",
  "AI APIs",
];

export function TechMarquee() {
  const items = [...TECHS, ...TECHS];
  return (
    <div className="relative w-full overflow-hidden border-y border-[var(--border)] bg-[var(--panel)] py-4">
      <div className="marquee-track gap-3">
        {items.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-mono text-[13px] text-[var(--tag)] whitespace-nowrap"
          >
            <span className="text-[var(--accent)] select-none">{"<"}</span>
            {t}
            <span className="text-[var(--accent)] select-none">{"/>"}</span>
            <span className="text-[var(--icon-muted)] mx-3">·</span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--panel)] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--panel)] to-transparent pointer-events-none" />
    </div>
  );
}
