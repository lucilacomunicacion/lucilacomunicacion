import { FaInstagram, FaTiktok } from "react-icons/fa";
import { brand, contact } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep pt-14 pb-24 text-cream md:pb-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="flex flex-col gap-2">
          <p className="flex items-baseline gap-1">
            <span className="font-serif text-2xl">{brand.name}</span>
            <span className="text-sm text-cream/70">.comunicacion</span>
          </p>
          <a href={`mailto:${contact.email}`} className="text-sm text-cream/80 transition-colors hover:text-gold">
            {contact.email}
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#contacto" className="text-sm text-cream/80 transition-colors hover:text-gold">
            Contacto
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-gold hover:text-gold"
          >
            <FaInstagram aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">Instagram (se abre en una pestaña nueva)</span>
          </a>
          <a
            href={contact.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-gold hover:text-gold"
          >
            <FaTiktok aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">TikTok (se abre en una pestaña nueva)</span>
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-5 md:px-8">
        <p className="border-t border-cream/15 pt-6 text-xs text-cream/60">
          © {new Date().getFullYear()} {brand.handle}
        </p>
      </div>
    </footer>
  );
}
