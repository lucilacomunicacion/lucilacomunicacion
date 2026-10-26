"use client";

import { useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import type { ResolvedMedia } from "@/lib/assets";

type LightboxProps = {
  items: ResolvedMedia[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  captions?: string[];
};

export function Lightbox({ items, index, onClose, onNavigate, captions }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const current = index !== null ? items[index] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (current && !dialog.open) dialog.showModal();
    if (!current && dialog.open) dialog.close();
  }, [current]);

  const hasMany = items.length > 1;
  const go = (step: number) => {
    if (index === null) return;
    onNavigate((index + step + items.length) % items.length);
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (!hasMany) return;
        if (event.key === "ArrowRight") go(1);
        if (event.key === "ArrowLeft") go(-1);
      }}
      aria-label={current ? `Vista ampliada: ${current.alt}` : "Vista ampliada"}
      className="m-auto h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-[rgb(20_38_30/0.85)]"
    >
      {current && (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 md:p-10" onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="absolute top-4 right-4 flex h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-forest transition-colors hover:bg-cream md:top-6 md:right-6"
          >
            <FiX aria-hidden="true" className="h-4 w-4" />
            Cerrar
          </button>

          {current.type === "video" ? (
            <video
              src={current.src}
              controls
              autoPlay
              playsInline
              className="max-h-[80dvh] max-w-full rounded-lg"
              aria-label={current.alt}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element -- natural size is needed so mockups are never cropped
            <img src={current.src} alt={current.alt} className="max-h-[80dvh] max-w-full rounded-lg object-contain" />
          )}

          {captions?.[index ?? 0] && <p className="text-sm text-cream">{captions[index ?? 0]}</p>}

          {hasMany && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <FiChevronLeft aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only">Anterior</span>
              </button>
              <span className="text-sm tabular-nums text-cream" aria-live="polite">
                {(index ?? 0) + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <FiChevronRight aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only">Siguiente</span>
              </button>
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
