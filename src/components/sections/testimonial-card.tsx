import { Star } from "lucide-react";

import type { Testimonial } from "@/types/content";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

function getInitial(name: string): string {
  return name
    .replace(/^(ibu|bapak|bpk\.?)\s+/i, "")
    .charAt(0)
    .toUpperCase();
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex min-h-[300px] flex-col gap-6 rounded-(--radius-md) border border-t-4 border-(--color-border-soft) border-t-(--color-brand-gold) bg-(--color-surface-white) p-12 shadow-sm">
      <div aria-label="5 dari 5 bintang" className="flex gap-1.5 text-(--color-brand-gold)" role="img">
        {Array.from({ length: 5 }, (_, index) => (
          <Star aria-hidden="true" fill="currentColor" key={index} size={17} strokeWidth={1.5} />
        ))}
      </div>

      <blockquote className="leading-relaxed text-(--color-text-secondary) italic">“{testimonial.quote}”</blockquote>

      <figcaption className="mt-auto flex items-center gap-4">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-brand-brown)_10%,transparent)] text-sm font-bold text-(--color-brand-brown)"
        >
          {getInitial(testimonial.name)}
        </span>
        <span>
          <span className="block text-sm font-bold text-(--color-brand-brown)">{testimonial.name}</span>
          {testimonial.context ? (
            <span className="mt-0.5 block text-xs text-(--color-text-secondary)">{testimonial.context}</span>
          ) : null}
        </span>
      </figcaption>
    </figure>
  );
}
