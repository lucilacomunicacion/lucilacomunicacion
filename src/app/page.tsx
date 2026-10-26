import { intro, projects } from "@/content/site";
import { assetExists, resolveProjects } from "@/lib/assets";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Education } from "@/components/site/Education";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { Services } from "@/components/site/Services";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function HomePage() {
  const resolvedProjects = resolveProjects(projects);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero videoAvailable={assetExists(intro.video)} />
        <About />
        <Portfolio projects={resolvedProjects} />
        <Services />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
