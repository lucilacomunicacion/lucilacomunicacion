import { FaWhatsapp } from "react-icons/fa";
import { contact } from "@/content/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 z-30 inline-flex h-11 items-center gap-2 rounded-full bg-forest px-4 text-sm font-medium text-white shadow-[0_6px_20px_-8px_rgb(45_89_69/0.55)] transition-colors hover:bg-forest-deep md:right-8 md:h-12 md:px-5"
      style={{ bottom: "max(1rem, calc(env(safe-area-inset-bottom) + 0.75rem))" }}
    >
      <FaWhatsapp aria-hidden="true" className="h-4 w-4 text-gold" />
      <span className="hidden sm:inline">Hablemos de tu proyecto</span>
      <span className="sm:hidden">Hablemos</span>
      <span className="sr-only">por WhatsApp (se abre en una pestaña nueva)</span>
    </a>
  );
}
