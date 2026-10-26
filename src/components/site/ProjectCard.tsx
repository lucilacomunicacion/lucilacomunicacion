import { FiArrowUpRight } from "react-icons/fi";
import type { ResolvedProject } from "@/lib/assets";
import { MediaFrame } from "./MediaFrame";

type ProjectCardProps = {
  project: ResolvedProject;
  index: number;
  onOpen: () => void;
};

const isDev = process.env.NODE_ENV !== "production";

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const showCover = project.cover.available || isDev;

  return (
    <article className="h-full">
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className="group flex h-full w-full flex-col gap-5 rounded-2xl border border-line bg-white p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-sage"
      >
        <div className="overflow-hidden rounded-xl">
          {showCover ? (
            <MediaFrame
              item={project.cover}
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
              className="transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex aspect-[4/5] flex-col justify-between bg-forest p-6 text-cream">
              <span className="font-serif text-6xl text-gold">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-serif text-3xl text-balance">{project.name}</span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 px-2 pb-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-2xl text-forest">{project.name}</h3>
            <span className="mt-1 text-xs tabular-nums text-sage">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <p className="text-sm leading-relaxed text-moss text-pretty">{project.description}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-forest">
            Explorar proyecto
            <FiArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </button>
    </article>
  );
}
