import Link from "next/link";

import type { ServiceArea } from "@/types/content";

type ServiceAreaCardProps = {
  serviceArea: ServiceArea;
};

export function ServiceAreaCard({ serviceArea }: ServiceAreaCardProps) {
  return (
    <article className="rounded-[var(--radius-md)] border border-[var(--color-border-soft)] bg-[var(--color-surface-white)] p-5">
      <h3 className="text-2xl">{serviceArea.name}</h3>
      {serviceArea.description ? <p className="mt-2 text-base text-[var(--color-text-secondary)]">{serviceArea.description}</p> : null}
      <Link className="mt-4 inline-flex min-h-11 items-center font-bold text-[var(--color-brand-brown)] underline decoration-[var(--color-brand-gold)] underline-offset-4" href={`/area-layanan/${serviceArea.slug}`}>Lihat area layanan</Link>
    </article>
  );
}
