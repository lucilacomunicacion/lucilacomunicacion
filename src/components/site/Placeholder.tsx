export function Placeholder({ src, label }: { src: string; label?: string }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-sage/60 bg-cream p-4 text-center"
      data-placeholder="true"
    >
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
        {label ? `${label} · ` : ""}archivo pendiente
      </span>
      <code className="break-all text-[11px] leading-snug text-moss">public{src}</code>
    </div>
  );
}
