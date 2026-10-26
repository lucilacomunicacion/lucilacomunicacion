type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  light?: boolean;
};

export function SectionHeading({ id, eyebrow, title, light = false }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4">
      {eyebrow && (
        <p
          className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] ${
            light ? "text-gold" : "text-sage"
          }`}
        >
          <span aria-hidden="true" className="h-px w-8 bg-current" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`font-serif text-4xl leading-tight text-balance md:text-5xl ${
          light ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
