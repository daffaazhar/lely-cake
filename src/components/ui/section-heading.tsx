import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
};

export function SectionHeading({ className = "", description, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`.trim()}>
      {eyebrow ? (
        <p className="text-sm font-bold tracking-[0.12em] text-(--color-brand-gold) uppercase">{eyebrow}</p>
      ) : null}
      <h2 className={eyebrow ? "mt-3 text-4xl sm:text-5xl" : "text-4xl sm:text-5xl"}>{title}</h2>
      {description ? <div className="mt-4 text-base text-(--color-text-secondary)">{description}</div> : null}
    </div>
  );
}
