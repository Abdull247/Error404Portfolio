"use client";

import { useEffect, useState } from "react";

const LINES = [
  { kind: "input", text: "whoami" },
  { kind: "output", text: "error404 — full-stack developer, Nigeria" },
  { kind: "input", text: "cat stack.txt" },
  {
    kind: "output",
    text: "React · TypeScript · Node · Express · PostgreSQL · n8n",
  },
  { kind: "input", text: "git log --oneline -3" },
  { kind: "output", text: "f7a2c1d feat: ship Error404Apis v1" },
  { kind: "output", text: "9b3e8a2 chore: automate waitlist via n8n" },
  { kind: "output", text: "1d4f5c0 fix: cors + same-domain routing" },
  { kind: "input", text: "echo $STATUS" },
  { kind: "output", text: "ready_to_build_" },
];

type Line = (typeof LINES)[number];

export function TerminalWindow() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (visibleCount >= LINES.length) {
      const reset = setTimeout(() => {
        setVisibleCount(0);
        setTyped("");
      }, 4200);
      return () => clearTimeout(reset);
    }

    const current = LINES[visibleCount];
    if (current.kind === "input") {
      let i = 0;
      const interval = setInterval(() => {
        i += 1;
        setTyped(current.text.slice(0, i));
        if (i >= current.text.length) {
          clearInterval(interval);
          setTimeout(() => {
            setVisibleCount((n) => n + 1);
            setTyped("");
          }, 380);
        }
      }, 38);
      return () => clearInterval(interval);
    } else {
      const t = setTimeout(() => {
        setVisibleCount((n) => n + 1);
      }, 220);
      return () => clearTimeout(t);
    }
  }, [visibleCount]);

  return (
    <div className="terminal-glow rounded-lg overflow-hidden bg-[var(--panel)] border border-[var(--border)] w-full max-w-[560px]">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[#141414]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="font-mono text-[11px] text-[var(--icon-muted)] tracking-wider">
          ~/error404 — zsh
        </div>
        <div className="font-mono text-[11px] text-[var(--icon-muted)]">
          ●
        </div>
      </div>

      <div className="font-mono text-[13px] leading-relaxed px-5 py-5 min-h-[280px]">
        {LINES.slice(0, visibleCount).map((line, i) => (
          <LineRow key={i} line={line} />
        ))}
        {visibleCount < LINES.length && (
          <LineRow
            line={{
              kind: LINES[visibleCount].kind,
              text:
                LINES[visibleCount].kind === "input"
                  ? typed
                  : LINES[visibleCount].text,
            }}
            typing={LINES[visibleCount].kind === "input"}
          />
        )}
      </div>
    </div>
  );
}

function LineRow({
  line,
  typing = false,
}: {
  line: Line;
  typing?: boolean;
}) {
  if (line.kind === "input") {
    return (
      <div className="flex items-start gap-2 mb-1.5">
        <span className="text-[var(--accent)] select-none">$</span>
        <span className="text-[var(--heading)]">{line.text}</span>
        {typing && <span className="cursor-blink" />}
      </div>
    );
  }
  return <div className="text-[var(--subtext)] mb-1.5 pl-4">{line.text}</div>;
}
