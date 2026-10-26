"use client";

import { useEffect, useRef } from "react";
import { FiArrowLeft, FiArrowUpRight, FiX } from "react-icons/fi";
import type { ResolvedProject } from "@/lib/assets";
import { Gallery } from "./Gallery";
import { Results } from "./Results";

type ProjectDetailProps = {
  project: ResolvedProject | null;
  onClose: () => void;
};

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      dialog.querySelector("[data-scroll]")?.scrollTo({ top: 0 });
    }
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="detalle-titulo"
      className="m-auto h-dvh max-h-none w-full max-w-none bg-transparent p-0 md:h-[92dvh] md:max-w-5xl"
    >
      {project && (
        <div data-scroll className="h-full overflow-y-auto overscroll-contain bg-cream md:rounded-2xl">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-cream/95 px-5 py-3 backdrop-blur md:px-10">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 items-center gap-2 rounded-full px-3 text-sm font-medium text-forest transition-colors hover:bg-white"
            >
              <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
              Volver al portfolio
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full text-forest transition-colors hover:bg-white"
            >
              <FiX aria-hidden="true" className="h-5 w-5" />
              <span className="sr-only">Cerrar proyecto</span>
            </button>
          </div>

          <div className="flex flex-col gap-14 px-5 pt-10 pb-16 md:px-10 md:pt-14">
            <header className="flex flex-col gap-5">
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-sage">
                <span aria-hidden="true" className="h-px w-8 bg-current" />
                Proyecto
              </p>
              <h2 id="detalle-titulo" className="font-serif text-4xl text-forest text-balance md:text-5xl">
                {project.name}
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-moss text-pretty">{project.description}</p>
              <a
                href={project.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 border-b border-gold pb-0.5 text-sm font-medium text-forest transition-colors hover:border-forest"
              >
                Ver perfil en Instagram
                <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </a>
            </header>

            <section aria-labelledby="tareas-title" className="flex flex-col gap-6">
              <h3 id="tareas-title" className="font-serif text-2xl text-forest">
                Tareas realizadas
              </h3>
              <div className="grid gap-8 border-t border-line pt-6 md:grid-cols-3">
                {project.tasks.map((group) => (
                  <div key={group.title} className="flex flex-col gap-3">
                    <h4 className="text-sm font-semibold text-forest">{group.title}</h4>
                    <ul className="flex flex-col gap-2">
                      {group.items.map((task) => (
                        <li key={task} className="flex gap-2.5 text-sm leading-relaxed text-moss">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <Gallery items={project.gallery} />
            <Results items={project.results} />

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-forest/30 px-5 text-sm font-medium text-forest transition-colors hover:border-forest hover:bg-white"
              >
                <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
                Volver al portfolio
              </button>
              <a
                href={project.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-1.5 rounded-full bg-forest px-5 text-sm font-medium text-white transition-colors hover:bg-forest-deep"
              >
                Ver perfil en Instagram
                <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
