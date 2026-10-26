"use client";

import { useState } from "react";
import type { ResolvedProject } from "@/lib/assets";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Portfolio({ projects }: { projects: ResolvedProject[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = projects.find((project) => project.slug === activeSlug) ?? null;

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 md:px-8">
        <Reveal>
          <SectionHeading id="portfolio-title" eyebrow="Portfolio" title="Mi trabajo" />
        </Reveal>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.slug} className={index === 2 ? "sm:col-span-2 sm:mx-auto sm:w-1/2 sm:px-3 lg:col-span-1 lg:w-auto lg:px-0" : ""}>
              <Reveal delay={index * 90} className="h-full">
                <ProjectCard project={project} index={index} onOpen={() => setActiveSlug(project.slug)} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <ProjectDetail project={active} onClose={() => setActiveSlug(null)} />
    </section>
  );
}
