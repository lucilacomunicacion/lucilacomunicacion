import { FaWhatsapp } from "react-icons/fa";
import { contact, intro } from "@/content/site";
import { Placeholder } from "./Placeholder";

export function Hero({ videoAvailable }: { videoAvailable: boolean }) {
  return (
    <section id="inicio" aria-labelledby="inicio-title" className="relative pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:px-8">
        <div className="flex flex-col gap-7">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-sage">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            lucila.comunicacion
          </p>
          <h1 id="inicio-title" className="font-serif text-5xl leading-[1.05] text-forest text-balance md:text-7xl">
            {intro.title}
          </h1>
          <p className="max-w-xl text-lg font-medium leading-relaxed text-forest md:text-xl">{intro.role}</p>
          <p className="max-w-xl text-base leading-relaxed text-moss md:text-lg text-pretty">{intro.text}</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#portfolio"
              className="inline-flex h-12 items-center rounded-full bg-forest px-6 text-sm font-medium text-white transition-colors hover:bg-forest-deep"
            >
              Ver mi trabajo
            </a>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-forest/30 px-6 text-sm font-medium text-forest transition-colors hover:border-forest hover:bg-white"
            >
              <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
              Escribime
              <span className="sr-only">(se abre en una pestaña nueva)</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[300px] md:max-w-[340px]">
          <span
            aria-hidden="true"
            className="absolute -top-4 -right-4 h-24 w-24 rounded-full border border-gold md:-top-6 md:-right-6"
          />
          <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border border-line bg-white">
            {videoAvailable ? (
              <video
                className="h-full w-full object-cover"
                src={intro.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Video de Lucila saludando a cámara"
              />
            ) : (
              <Placeholder src={intro.video} label="Video de saludo" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
