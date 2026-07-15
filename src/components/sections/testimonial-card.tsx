import type { Testimonial } from "@/types/content";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="rounded-[var(--radius-md)] border border-[var(--color-border-soft)] bg-[var(--color-surface-white)] p-6 shadow-[var(--shadow-soft)]">
      <blockquote className="text-lg leading-relaxed text-[var(--color-text-primary)]">“{testimonial.quote}”</blockquote>
      <figcaption className="mt-4 text-sm font-bold text-[var(--color-text-secondary)]">{testimonial.name}{testimonial.context ? ` · ${testimonial.context}` : ""}</figcaption>
    </figure>
  );
}
