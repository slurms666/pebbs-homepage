type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="max-w-4xl">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">{eyebrow}</p>
      <div className="mt-4 h-px w-16 bg-ink/15" />
      <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[0.96] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">{description}</p>
    </div>
  );
}
