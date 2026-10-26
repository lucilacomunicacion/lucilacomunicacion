import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { contact, contactCopy } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: FiMail, external: false },
  { label: "WhatsApp", value: contact.whatsappDisplay, href: contact.whatsappUrl, icon: FaWhatsapp, external: true },
  { label: "Instagram", value: "@lucila.comunicacion", href: contact.instagram, icon: FaInstagram, external: true },
  { label: "TikTok", value: "@lucila.comunicacion", href: contact.tiktok, icon: FaTiktok, external: true },
];

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="border-t border-line bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 md:gap-20 md:px-8">
        <Reveal className="flex flex-col gap-6">
          <SectionHeading id="contacto-title" eyebrow="Contacto" title={contactCopy.title} />
          <p className="text-lg leading-relaxed text-moss text-pretty">{contactCopy.text}</p>
          <ul className="mt-2 flex flex-col border-t border-line">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label} className="border-b border-line">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 py-4"
                >
                  <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-sage" />
                  <span className="w-24 text-xs uppercase tracking-[0.16em] text-moss">{label}</span>
                  <span className="text-base text-forest transition-colors group-hover:text-sage">{value}</span>
                  {external && <span className="sr-only">(se abre en una pestaña nueva)</span>}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-center">
          <div className="flex flex-col gap-6 rounded-2xl border border-line bg-cream p-8 md:p-10">
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            <p className="font-serif text-2xl leading-snug text-forest text-pretty">{contactCopy.formText}</p>
            <a
              href={contact.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-forest px-6 text-sm font-medium text-white transition-colors hover:bg-forest-deep"
            >
              Completar formulario
              <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">(se abre en una pestaña nueva)</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
