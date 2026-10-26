import { FaWhatsapp } from "react-icons/fa";
import { contact, services } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="bg-forest py-24 text-cream md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-5 md:px-8">
        <Reveal>
          <SectionHeading id="servicios-title" eyebrow="Qué hago" title="Servicios" light />
        </Reveal>

        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-cream md:text-3xl">{services.integral.title}</h3>
            <ul className="flex flex-col border-t border-cream/20">
              {services.integral.items.map((item) => (
                <li key={item} className="flex gap-4 border-b border-cream/15 py-3.5 text-base text-cream/90">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-cream md:text-3xl">{services.individual.title}</h3>
            <ul className="flex flex-col border-t border-cream/20">
              {services.individual.items.map((item) => (
                <li key={item} className="flex gap-4 border-b border-cream/15 py-3.5 text-base text-cream/90">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full border border-sage" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-cream/70">{services.individual.note}</p>
          </Reveal>
        </div>

        <Reveal className="flex flex-col gap-8 border-t border-cream/20 pt-14">
          <h3 className="font-serif text-2xl text-cream md:text-3xl">Cómo trabajo</h3>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.steps.map((step) => (
              <li key={step.number} className="flex flex-col gap-2">
                <span className="font-serif text-3xl text-gold">{step.number}</span>
                <span className="text-base font-semibold text-cream">{step.title}</span>
                <span className="text-sm leading-relaxed text-cream/75">{step.text}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-base text-cream/80">La propuesta de trabajo se adapta a las necesidades de tu marca.</p>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-forest transition-colors hover:bg-cream"
          >
            <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
            Hablemos de tu proyecto
            <span className="sr-only">(WhatsApp, se abre en una pestaña nueva)</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
