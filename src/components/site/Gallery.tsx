"use client";

import { useState } from "react";
import type { ResolvedMedia } from "@/lib/assets";
import { Lightbox } from "./Lightbox";
import { MediaFrame } from "./MediaFrame";

export function Gallery({ items }: { items: ResolvedMedia[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const zoomable = items.filter((item) => item.available);

  if (items.length === 0) return null;

  return (
    <section aria-labelledby="galeria-title" className="flex flex-col gap-6">
      <h3 id="galeria-title" className="font-serif text-2xl text-forest">
        Piezas realizadas
      </h3>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {items.map((item) => {
          const zoomIndex = zoomable.indexOf(item);
          return (
            <li key={item.src} className="flex flex-col gap-2">
              {item.available ? (
                <button
                  type="button"
                  onClick={() => setIndex(zoomIndex)}
                  className="group overflow-hidden rounded-xl bg-white text-left"
                >
                  <MediaFrame
                    item={item}
                    sizes="(min-width: 768px) 280px, 50vw"
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="sr-only">Ampliar: {item.alt}</span>
                </button>
              ) : (
                <div className="overflow-hidden rounded-xl">
                  <MediaFrame item={item} />
                </div>
              )}
              {item.label && <span className="text-xs uppercase tracking-[0.16em] text-moss">{item.label}</span>}
            </li>
          );
        })}
      </ul>
      <Lightbox items={zoomable} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
    </section>
  );
}
