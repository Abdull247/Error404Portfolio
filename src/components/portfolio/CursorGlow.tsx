"use client";

import { useEffect, useRef } from "react";

/**
 * A soft orange glow that follows the cursor on devices with a
 * precise pointer (mouse / trackpad). Disabled on touch / small screens
 * and when prefers-reduced-motion is set.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fineQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fineQuery.matches || motionQuery.matches) return;

    const node = ref.current;
    if (!node) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      node.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hidden lg:block fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-[1]"
      style={{
        background:
          "radial-gradient(circle at center, rgba(245, 166, 35, 0.05) 0%, rgba(245, 166, 35, 0) 60%)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
