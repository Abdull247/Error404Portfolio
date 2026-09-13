"use client";

import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] mt-auto">
      <div className="container-portfolio py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[14px] text-[var(--accent)]">$</span>
            <span className="font-heading font-semibold text-[var(--heading)] text-[14px]">
              error404
            </span>
            <span className="font-mono text-[11px] text-[var(--icon-muted)]">
              .dev
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] font-mono text-[var(--icon-muted)]">
            <a href="#home" className="hover:text-[var(--accent)] transition-colors">
              ./home
            </a>
            <a href="#about" className="hover:text-[var(--accent)] transition-colors">
              ./about
            </a>
            <a href="#projects" className="hover:text-[var(--accent)] transition-colors">
              ./projects
            </a>
            <a href="#contact" className="hover:text-[var(--accent)] transition-colors">
              ./contact
            </a>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--icon-muted)]">
            <span>built with</span>
            <Heart className="w-3 h-3 text-[var(--accent)] fill-[var(--accent)]" />
            <span>&amp; Next.js · 2026</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[var(--border)] text-center">
          <p className="font-mono text-[11px] text-[var(--icon-muted)]">
            <span className="text-[var(--accent)]">{">"}</span> status: ready_to_build
            <span className="cursor-blink ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}
