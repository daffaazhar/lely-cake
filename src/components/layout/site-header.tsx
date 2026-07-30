"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { primaryWhatsAppMessage, siteConfig } from "@/content/site";
import { Container } from "@/components/layout/container";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const navigation = [
  { href: "/produk", label: "Produk" },
  { href: "/paket", label: "Paket" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = createWhatsAppUrl(primaryWhatsAppMessage);

  return (
    <header className="sticky top-0 z-40 bg-(--color-surface-white) shadow-sm">
      <Container className="flex items-center justify-between gap-4 py-6">
        <Link aria-label={siteConfig.name} className="flex items-center" href="/">
          <Image
            alt="Logo Lely Cake"
            className="h-auto w-31.5 object-contain sm:w-38.5"
            height={1024}
            priority
            src="/images/brand/logo-lely-cake-horizontal.png"
            width={1536}
          />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-12 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`border-b-2 text-base font-semibold transition-colors ${isActive ? "border-(--color-brand-brown) text-(--color-brand-brown)" : "border-transparent text-(--color-text-secondary) hover:border-(--color-brand-brown) hover:text-(--color-brand-brown)"}`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          className="button button-primary hidden! md:inline-flex!"
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          Pesan lewat WhatsApp
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Tutup navigasi" : "Buka navigasi"}
          className="inline-flex size-11 items-center justify-center rounded-sm border border-(--color-border-soft) text-(--color-brand-brown) md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </Container>

      {isOpen ? (
        <nav
          aria-label="Navigasi seluler"
          className="border-t border-(--color-border-soft) bg-(--color-surface-white) md:hidden"
          id="mobile-navigation"
        >
          <Container className="flex flex-col py-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-11 items-center border-b-2 py-2 font-semibold ${isActive ? "border-(--color-brand-brown) text-(--color-brand-brown)" : "border-transparent text-(--color-text-primary)"}`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a className="button button-primary mt-2 w-full" href={whatsappUrl} rel="noreferrer" target="_blank">
              Pesan lewat WhatsApp
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
