"use client";

import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { TechMarquee } from "@/components/portfolio/TechMarquee";
import { About } from "@/components/portfolio/About";
import { CoreStack } from "@/components/portfolio/CoreStack";
import { Projects } from "@/components/portfolio/Projects";
import { Strengths } from "@/components/portfolio/Strengths";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg)] text-[var(--subtext)]">
      <CursorGlow />
      <Nav />

      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <About />
        <CoreStack />
        <Projects />
        <Strengths />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
