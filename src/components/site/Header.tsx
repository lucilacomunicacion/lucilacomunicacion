"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { brand, navItems } from "@/content/site";

export function Header() {
  const [active, setActive] = useState<string>("inicio");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-cream/92 backdrop-blur-md" : "border-b border-transparent bg-cream/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#inicio" className="flex items-baseline gap-1 text-forest" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl">{brand.name}</span>
          <span className="text-sm text-moss">.comunicacion</span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative py-2 text-sm transition-colors hover:text-forest ${
                      isActive ? "text-forest" : "text-moss"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-forest transition-colors hover:bg-line/60 md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX className="h-5 w-5" aria-hidden="true" /> : <FiMenu className="h-5 w-5" aria-hidden="true" />}
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
        </button>
      </div>

      <nav
        id="menu-movil"
        aria-label="Principal móvil"
        hidden={!open}
        className="border-t border-line bg-cream px-5 pb-6 md:hidden"
      >
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.id} className="border-b border-line last:border-b-0">
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? "true" : undefined}
                className={`flex items-center justify-between py-4 text-base ${
                  active === item.id ? "text-forest" : "text-moss"
                }`}
              >
                {item.label}
                {active === item.id && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
