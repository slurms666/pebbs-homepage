type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">{eyebrow}</p>
      <div className="mt-4 h-px w-14 bg-ink/15" />
      <h2 className="mt-5 font-display text-3xl leading-[1] tracking-[-0.03em] text-ink sm:text-4xl md:text-[2.8rem]">
        {title}
      </h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{description}</p> : null}
    </div>
  );
}
