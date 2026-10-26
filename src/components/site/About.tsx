import { intro } from "@/content/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="border-y border-line bg-white py-24 md:py-32">
      <Reveal className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:px-8">
        <div className="flex flex-col gap-4">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-sage">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            Quién soy
          </p>
          <h2 id="sobre-mi-title" className="font-serif text-4xl text-forest md:text-5xl">
            Sobre mí
          </h2>
        </div>
        <div className="flex flex-col gap-6 border-l border-sage/50 pl-6 md:pl-10">
          <p className="font-serif text-3xl text-forest md:text-4xl">{intro.title}</p>
          <p className="text-lg font-medium leading-relaxed text-forest">{intro.role}</p>
          <p className="text-lg leading-relaxed text-moss text-pretty">{intro.text}</p>
        </div>
      </Reveal>
    </section>
  );
}
