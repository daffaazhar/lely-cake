"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

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

      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 flex min-h-dvh flex-col overflow-hidden bg-[#f7f3ea] px-6 py-7 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:hidden ${isOpen ? "translate-x-0" : "pointer-events-none translate-x-full"}`}
        id="mobile-navigation"
        inert={!isOpen}
      >
        <div aria-hidden="true" className="absolute -top-20 -right-24 size-72 rounded-full bg-[#c49a4a]/20 blur-3xl" />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-28 size-80 rounded-full bg-[#4b2e1a]/10 blur-3xl"
        />

        <div className="relative flex items-center justify-between">
          <Link aria-label={siteConfig.name} href="/" onClick={() => setIsOpen(false)}>
            <Image
              alt="Logo Lely Cake"
              className="h-auto w-32 object-contain"
              height={1024}
              src="/images/brand/logo-lely-cake-horizontal.png"
              width={1536}
            />
          </Link>
          <button
            aria-label="Tutup navigasi"
            className="inline-flex size-11 items-center justify-center rounded-full border border-(--color-border-soft) bg-(--color-surface-white) text-2xl leading-none text-(--color-brand-brown) shadow-sm"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav aria-label="Navigasi seluler" className="relative mt-20 flex flex-col" tabIndex={isOpen ? 0 : -1}>
          <p className="eyebrow">Jelajahi Lely Cake</p>
          <div className="mt-5 border-t border-[#e5d9c8]">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-16 items-center border-b border-[#e5d9c8] font-(family-name:--font-heading) text-3xl transition-colors ${isActive ? "text-(--color-brand-brown)" : "text-(--color-text-secondary) hover:text-(--color-brand-brown)"}`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="relative mt-auto border-t border-[#e5d9c8] pt-6">
          <p className="max-w-xs text-sm leading-6 text-(--color-text-secondary)">
            Butuh bantuan memilih kue atau paket untuk acara Anda?
          </p>
          <a
            className="button button-primary mt-5 w-full"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
            tabIndex={isOpen ? 0 : -1}
          >
            Pesan lewat WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
