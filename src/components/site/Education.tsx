import { education } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  const { degree, courses } = education;

  return (
    <section id="formacion" aria-labelledby="formacion-title" className="py-24 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col gap-12 px-5 md:px-8">
        <Reveal>
          <SectionHeading id="formacion-title" eyebrow="Formación" title="Formación profesional" />
        </Reveal>

        <Reveal className="relative overflow-hidden rounded-2xl bg-forest p-8 text-cream md:p-12">
          <span aria-hidden="true" className="absolute top-0 left-8 h-1 w-16 bg-gold md:left-12" />
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">{degree.years}</p>
            <h3 className="font-serif text-3xl leading-tight text-balance md:text-4xl">{degree.title}</h3>
            <p className="text-lg text-cream/90">{degree.orientation}</p>
            <p className="text-base text-cream/75">{degree.institution}</p>
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-6">
          <h3 className="font-serif text-2xl text-forest">Otros cursos y certificaciones</h3>
          <ul className="flex flex-col border-t border-line">
            {courses.map((course) => (
              <li
                key={course.name}
                className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-base font-medium text-forest">{course.name}</span>
                <span className="text-sm text-moss sm:text-right">
                  {course.institution} · {course.year}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
