type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-ink">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-black leading-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 text-pretty text-lg leading-8 text-muted">{text}</p>
      ) : null}
    </div>
  );
}
