import { existsSync } from "node:fs";
import path from "node:path";
import type { MediaItem, Project, ResultItem } from "@/content/site";

export type ResolvedMedia<T extends MediaItem = MediaItem> = T & { available: boolean };

export type ResolvedProject = Omit<Project, "cover" | "gallery" | "results"> & {
  cover: ResolvedMedia;
  gallery: ResolvedMedia[];
  results: ResolvedMedia<ResultItem>[];
};

const isDev = process.env.NODE_ENV !== "production";

function fileExists(src: string) {
  return existsSync(path.join(process.cwd(), "public", src));
}

function resolve<T extends MediaItem>(item: T): ResolvedMedia<T> {
  return { ...item, available: fileExists(item.src) };
}

function keepVisible<T extends MediaItem>(items: T[]) {
  return items.map(resolve).filter((item) => item.available || isDev);
}

export function resolveProjects(projects: Project[]): ResolvedProject[] {
  return projects.map((project) => ({
    ...project,
    cover: resolve(project.cover),
    gallery: keepVisible(project.gallery),
    results: keepVisible(project.results),
  }));
}

export function assetExists(src: string) {
  return fileExists(src);
}
