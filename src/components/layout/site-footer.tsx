import Image from "next/image";

import { siteConfig } from "@/content/site";

import { Container } from "@/components/layout/container";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-brand-brown)] py-10 text-[var(--color-surface-white)]">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Image
            alt="Logo Lely Cake"
            className="h-auto w-[144px]"
            height={1024}
            src="/images/brand/logo-lely-cake-horizontal.png"
            width={1536}
          />
          <p className="mt-2 text-sm text-[var(--color-brand-cream)]">{siteConfig.tagline}</p>
        </div>
        <a className="text-base font-semibold text-[var(--color-surface-white)] underline decoration-[var(--color-brand-gold)] underline-offset-4" href={`tel:${siteConfig.whatsapp.displayNumber.replaceAll("-", "")}`}>
          {siteConfig.whatsapp.displayNumber}
        </a>
      </Container>
    </footer>
  );
}
