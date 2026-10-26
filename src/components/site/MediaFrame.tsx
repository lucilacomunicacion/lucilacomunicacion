import Image from "next/image";
import type { ResolvedMedia } from "@/lib/assets";
import { Placeholder } from "./Placeholder";

type MediaFrameProps = {
  item: ResolvedMedia;
  fit?: "cover" | "contain";
  sizes?: string;
  className?: string;
};

export function MediaFrame({ item, fit = "cover", sizes = "(min-width: 768px) 33vw, 100vw", className = "" }: MediaFrameProps) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: item.aspect ?? "4/5" }}>
      {!item.available ? (
        <Placeholder src={item.src} label={item.label} />
      ) : item.type === "video" ? (
        <video
          className={`h-full w-full ${fitClass}`}
          src={item.src}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-label={item.alt}
        />
      ) : (
        <Image src={item.src} alt={item.alt} fill sizes={sizes} loading="lazy" className={fitClass} />
      )}
    </div>
  );
}
