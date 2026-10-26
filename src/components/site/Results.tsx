"use client";

import { useState } from "react";
import { FiMaximize2 } from "react-icons/fi";
import type { ResultItem } from "@/content/site";
import type { ResolvedMedia } from "@/lib/assets";
import { Lightbox } from "./Lightbox";
import { MediaFrame } from "./MediaFrame";

type ResolvedResult = ResolvedMedia<ResultItem>;

export function Results({ items }: { items: ResolvedResult[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const zoomable = items.filter((item) => item.available);

  if (items.length === 0) return null;

  const platforms = Array.from(new Set(items.map((item) => item.platform).filter(Boolean))) as string[];
  const groups =
    platforms.length > 0
      ? platforms.map((platform) => ({ platform, items: items.filter((item) => item.platform === platform) }))
      : [{ platform: undefined, items }];

  const single = items.length === 1;

  return (
    <section aria-labelledby="resultados-title" className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 id="resultados-title" className="font-serif text-2xl text-forest">
          Resultados y métricas
        </h3>
        <p className="text-sm text-moss">Capturas originales. Hacé clic en cada una para verla en tamaño completo.</p>
      </div>

      {groups.map((group) => (
        <div key={group.platform ?? "all"} className="flex flex-col gap-4">
          {group.platform && (
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-forest">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              {group.platform}
            </p>
          )}
          <ul className={`grid gap-5 ${single ? "grid-cols-1" : "md:grid-cols-2"}`}>
            {group.items.map((item) => {
              const isComparison = item.title.toLowerCase().includes("antes y después");
              const zoomIndex = zoomable.indexOf(item);
              return (
                <li key={item.src} className={isComparison && !single ? "md:col-span-2" : ""}>
                  <figure className="flex flex-col gap-3">
                    {item.available ? (
                      <button
                        type="button"
                        onClick={() => setIndex(zoomIndex)}
                        className="group relative overflow-hidden rounded-xl border border-line bg-cream"
                      >
                        <MediaFrame item={item} fit="contain" sizes="(min-width: 768px) 800px, 100vw" />
                        <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-forest opacity-80 transition-opacity group-hover:opacity-100">
                          <FiMaximize2 aria-hidden="true" className="h-4 w-4" />
                        </span>
                        <span className="sr-only">Ampliar: {item.alt}</span>
                      </button>
                    ) : (
                      <div className="overflow-hidden rounded-xl">
                        <MediaFrame item={item} />
                      </div>
                    )}
                    <figcaption className="flex items-center gap-2 text-sm font-medium text-forest">
                      {isComparison && (
                        <span className="rounded-full bg-gold/25 px-2.5 py-0.5 text-xs font-medium text-forest">
                          Antes / Después
                        </span>
                      )}
                      {item.title}
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <Lightbox
        items={zoomable}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
        captions={zoomable.map((item) => (item.platform ? `${item.platform} · ${item.title}` : item.title))}
      />
    </section>
  );
}
