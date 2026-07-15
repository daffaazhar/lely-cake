"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { primaryWhatsAppMessage, siteConfig } from "@/content/site";
import { Container } from "@/components/layout/container";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const navigation = [
  { href: "/", label: "Beranda" },
  { href: "/#area-layanan", label: "Area layanan" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = createWhatsAppUrl(primaryWhatsAppMessage);

  return (
    <header className="border-b border-[var(--color-border-soft)] bg-[var(--color-surface-white)]">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Link aria-label={siteConfig.name} className="flex items-center" href="/">
          <Image
            alt="Logo Lely Cake"
            className="h-auto w-[120px]"
            height={1024}
            priority
            src="/images/brand/logo-lely-cake-horizontal.png"
            width={1536}
          />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link className="text-sm font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-brand-gold)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="button button-primary" href={whatsappUrl} rel="noreferrer" target="_blank">
            Pesan lewat WhatsApp
          </a>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Tutup navigasi" : "Buka navigasi"}
          className="inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border-soft)] text-[var(--color-brand-brown)] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span aria-hidden="true" className="text-2xl leading-none">{isOpen ? "×" : "☰"}</span>
        </button>
      </Container>

      {isOpen ? (
        <nav aria-label="Navigasi seluler" className="border-t border-[var(--color-border-soft)] bg-[var(--color-surface-white)] md:hidden" id="mobile-navigation">
          <Container className="flex flex-col py-3">
            {navigation.map((item) => (
              <Link className="flex min-h-11 items-center py-2 font-semibold text-[var(--color-text-primary)]" href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a className="button button-primary mt-2 w-full" href={whatsappUrl} rel="noreferrer" target="_blank">
              Pesan lewat WhatsApp
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
