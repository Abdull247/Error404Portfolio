"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
  once?: boolean;
};

/**
 * Reveal on scroll — uses IntersectionObserver to add the
 * `reveal--visible` class when the element enters the viewport.
 * Mirrors the `.reveal` CSS pattern defined in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  // Always start as `false` so SSR and the client's first render match.
  // The effect then either reveals immediately (if IntersectionObserver is
  // unavailable) or wires up the observer (which fires for in-view elements
  // on mount).
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // Client-only fallback (e.g. very old browsers): just reveal.
      // The setState-in-effect here is intentional and unavoidable.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
