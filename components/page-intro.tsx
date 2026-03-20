type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{description}</p>
    </div>
  );
}
