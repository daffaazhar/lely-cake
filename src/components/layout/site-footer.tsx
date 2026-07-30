import Image from "next/image";
import Link from "next/link";
import { Camera, MessageCircle } from "lucide-react";

import { serviceAreas } from "@/content/service-areas";
import { primaryWhatsAppMessage, siteConfig } from "@/content/site";

import { Container } from "@/components/layout/container";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  const serviceAreaNames = serviceAreas.map((area) => area.name).join(", ");

  return (
    <footer className="bg-(--color-brand-brown) text-(--color-surface-white)">
      <Container className="grid gap-12 py-16 md:grid-cols-4 lg:gap-12 lg:py-30">
        <div className="flex flex-col gap-5">
          <Image
            alt={`Logo ${siteConfig.name}`}
            className="h-auto w-52 max-w-full"
            height={1800}
            src="/images/brand/logo-lely-cake-negative.png"
            width={6981}
          />
          <p className="max-w-xs text-base leading-relaxed text-[color-mix(in_srgb,var(--color-surface-white)_80%,transparent)]">
            {siteConfig.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold tracking-[0.14em] text-(--color-brand-gold) uppercase">Navigasi</p>
          <nav
            aria-label="Navigasi footer"
            className="flex flex-col gap-3 text-base text-[color-mix(in_srgb,var(--color-surface-white)_80%,transparent)]"
          >
            <Link className="hover:text-(--color-surface-white)" href="/">
              Beranda
            </Link>
            <Link className="hover:text-(--color-surface-white)" href="/produk">
              Produk
            </Link>
            <Link className="hover:text-(--color-surface-white)" href="/paket">
              Paket
            </Link>
            <Link className="hover:text-(--color-surface-white)" href="/tentang-kami">
              Tentang kami
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold tracking-[0.14em] text-(--color-brand-gold) uppercase">Hubungi kami</p>
          <a
            className="text-base text-[color-mix(in_srgb,var(--color-surface-white)_80%,transparent)] hover:text-(--color-surface-white)"
            href={createWhatsAppUrl(primaryWhatsAppMessage)}
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp {siteConfig.whatsapp.displayNumber}
          </a>
          <p className="text-base leading-relaxed text-[color-mix(in_srgb,var(--color-surface-white)_80%,transparent)]">
            {serviceAreaNames}
          </p>
          <div className="flex gap-4 pt-1">
            <a
              aria-label="Instagram Lely Cake"
              className="flex size-8 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
              href={siteConfig.instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Camera aria-hidden="true" className="size-4" />
            </a>
            <a
              aria-label="WhatsApp Lely Cake"
              className="flex size-8 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
              href={createWhatsAppUrl(primaryWhatsAppMessage)}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold tracking-[0.14em] text-(--color-brand-gold) uppercase">Alamat</p>
          <p className="max-w-xs text-base leading-relaxed whitespace-pre-line text-[color-mix(in_srgb,var(--color-surface-white)_80%,transparent)]">
            {siteConfig.address}
          </p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-center text-xs text-[color-mix(in_srgb,var(--color-surface-white)_60%,transparent)]">
          © {new Date().getFullYear()} {siteConfig.name}. Dibuat Segar, dengan Sepenuh Hati.
        </Container>
      </div>
    </footer>
  );
}
