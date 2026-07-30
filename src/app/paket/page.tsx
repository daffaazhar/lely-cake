import {
  BriefcaseBusiness,
  CakeSlice,
  CheckCircle2,
  HeartHandshake,
  Home,
  MessageCircle,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { packages } from "@/content/packages";
import { formatRupiah } from "@/lib/format";
import { createMetadata } from "@/lib/seo";
import { createPackageWhatsAppMessage } from "@/lib/whatsapp";
import type { Package } from "@/types/content";

export const metadata = createMetadata({
  title: "Paket untuk acara",
  description: "Pilih paket Lely Cake untuk rapat, arisan, pengajian, dan acara Anda.",
  path: "/paket",
});

const packageIcons = {
  "paket-rapat": BriefcaseBusiness,
  "paket-arisan": UsersRound,
  "paket-keluarga": Home,
  "paket-pengajian": HeartHandshake,
  "paket-ulang-tahun": CakeSlice,
};

const packageDisplayOrder = ["paket-rapat", "paket-arisan", "paket-keluarga", "paket-pengajian"];

function PackageActions({ packageItem, consultation = false }: { packageItem: Package; consultation?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <WhatsAppButton className="gap-2 px-3 text-sm" message={createPackageWhatsAppMessage(packageItem.name)}>
        <MessageCircle aria-hidden="true" className="size-4.5" />
        {consultation ? "Konsultasi via WhatsApp" : "WhatsApp"}
      </WhatsAppButton>
      <a className="button button-secondary px-3 text-sm" href="#hubungi-kami">
        Lihat Detail
      </a>
    </div>
  );
}

function StandardPackageCard({ packageItem }: { packageItem: Package }) {
  const Icon = packageIcons[packageItem.slug as keyof typeof packageIcons] ?? CakeSlice;
  const price =
    packageItem.priceLabel ?? (packageItem.priceFrom ? `Mulai ${formatRupiah(packageItem.priceFrom)}` : "Hubungi Kami");

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#e5d9c8] bg-[#fffdf9] shadow-[0_10px_30px_rgb(75_46_26_/_0.08)] transition duration-300 hover:-translate-y-2">
      <div className="relative aspect-video overflow-hidden">
        {packageItem.image ? (
          <img
            alt={packageItem.imageAlt ?? "Paket Lely Cake"}
            className="size-full object-cover transition duration-500 group-hover:scale-105"
            src={packageItem.image}
          />
        ) : null}
        {packageItem.badge ? (
          <span className="absolute top-4 right-4 rounded-full bg-[#4b2e1a] px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
            {packageItem.badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-[2rem] leading-tight">{packageItem.name}</h2>
          <span className="shrink-0 text-sm font-bold text-[#7b580b]">{price}</span>
        </div>
        {packageItem.tagline ? (
          <p className="mt-3 text-[0.9375rem] leading-6 text-(--color-text-secondary) italic">
            “{packageItem.tagline}”
          </p>
        ) : null}
        <div className="mt-4 flex items-center gap-2 text-[#7b580b]">
          <Icon aria-hidden="true" className="size-[18px]" />
          <span className="text-xs font-semibold tracking-[0.08em] uppercase">
            Cocok untuk: {packageItem.suitableFor.join(" & ")}
          </span>
        </div>
        <ul className="mt-5 flex-1 space-y-2.5 text-sm leading-6 text-(--color-text-secondary)">
          {packageItem.contents.map((content) => (
            <li key={content} className="flex gap-2">
              <CheckCircle2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#7b580b]" />
              {content}
            </li>
          ))}
        </ul>
        <div className="mt-6 border-t border-[#e5d9c8] pt-5">
          <div className="mb-5 flex justify-between gap-3 text-xs text-(--color-text-secondary)">
            <span>Min. Pesan: {packageItem.minimumOrder}</span>
            <span className="text-right">{packageItem.capacity}</span>
          </div>
          <PackageActions packageItem={packageItem} />
        </div>
      </div>
    </article>
  );
}

function FeaturedPackageCard({ packageItem }: { packageItem: Package }) {
  const price =
    packageItem.priceLabel ?? (packageItem.priceFrom ? `Mulai ${formatRupiah(packageItem.priceFrom)}` : "Hubungi Kami");

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#e5d9c8] bg-[#fffdf9] shadow-[0_10px_30px_rgb(75_46_26_/_0.08)] transition duration-300 hover:-translate-y-2 lg:col-span-2 lg:flex-row">
      <div className="relative h-64 w-full shrink-0 overflow-hidden lg:h-auto lg:w-2/5">
        {packageItem.image ? (
          <img
            alt={packageItem.imageAlt ?? "Paket Lely Cake"}
            className="size-full object-cover transition duration-500 group-hover:scale-105"
            src={packageItem.image}
          />
        ) : null}
        {packageItem.badge ? (
          <span className="absolute top-4 left-4 rounded-full bg-[#7b580b] px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
            {packageItem.badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-[2rem] leading-tight">{packageItem.name}</h2>
          <span className="shrink-0 text-sm font-bold text-[#7b580b]">{price}</span>
        </div>
        {packageItem.tagline ? (
          <p className="mt-3 text-(--color-text-secondary) italic">“{packageItem.tagline}”</p>
        ) : null}
        <div className="mt-4 flex items-center gap-2 text-[#7b580b]">
          <CakeSlice aria-hidden="true" className="size-[18px]" />
          <span className="text-xs font-semibold tracking-[0.08em] uppercase">
            Cocok untuk: {packageItem.suitableFor.join(" & ")}
          </span>
        </div>
        <ul className="mt-5 grid gap-2.5 text-sm leading-6 text-(--color-text-secondary) sm:grid-cols-2">
          {packageItem.contents.map((content) => (
            <li key={content} className="flex gap-2">
              <CheckCircle2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#7b580b]" />
              {content}
            </li>
          ))}
        </ul>
        <div className="mt-auto border-t border-[#e5d9c8] pt-5">
          <div className="mb-5 flex justify-between gap-3 text-xs text-(--color-text-secondary)">
            <span>Min. Pesan: {packageItem.minimumOrder}</span>
            <span className="text-right">{packageItem.capacity}</span>
          </div>
          <PackageActions consultation packageItem={packageItem} />
        </div>
      </div>
    </article>
  );
}

export default function PackagesPage() {
  const availablePackages = packages.filter((packageItem) => packageItem.available);
  const standardPackages = availablePackages
    .filter((packageItem) => !packageItem.featuredLayout)
    .sort(
      (firstPackage, secondPackage) =>
        packageDisplayOrder.indexOf(firstPackage.slug) - packageDisplayOrder.indexOf(secondPackage.slug),
    );
  const featuredPackage = availablePackages.find((packageItem) => packageItem.featuredLayout);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f5ece8] py-20 sm:py-28 lg:py-[120px]">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-20 size-80 rounded-full bg-[#fccd78] opacity-20 blur-3xl sm:size-96"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-24 size-80 rounded-full bg-[#4b2e1a] opacity-10 blur-3xl sm:size-96"
        />
        <Container className="relative text-center">
          <p className="eyebrow">Katalog layanan</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Paket pilihan acara</h1>
          <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-8 text-(--color-text-secondary) sm:text-xl">
            Kami mengurasi paket pilihan untuk memudahkan Anda menyiapkan sajian yang tepat bagi tamu. Setiap paket
            dapat disesuaikan dengan kebutuhan acara.
          </p>
        </Container>
      </section>
      <section className="bg-[#fffdf9] py-16 sm:py-20 lg:py-[120px]">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {standardPackages.map((packageItem) => (
              <StandardPackageCard key={packageItem.slug} packageItem={packageItem} />
            ))}
            {featuredPackage ? <FeaturedPackageCard packageItem={featuredPackage} /> : null}
          </div>
        </Container>
      </section>
      <section
        id="hubungi-kami"
        className="relative overflow-hidden bg-[#4b2e1a] py-20 text-center text-white sm:py-28 lg:py-[120px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] opacity-30"
        />
        <Container className="relative">
          <h2 className="text-4xl text-white sm:text-5xl">Sedang menyiapkan acara?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-8 text-white/85 sm:text-xl">
            Ceritakan kebutuhan Anda, kami bantu pilihkan paket yang sesuai dengan selera tamu dan anggaran acara.
          </p>
          <WhatsAppButton
            className="mt-8 gap-2 rounded-full bg-[#fccd78] px-8 text-(--color-text-primary) hover:bg-[#edc06b]"
            message="Halo Lely Cake, saya ingin menanyakan paket untuk acara saya."
          >
            <MessageCircle aria-hidden="true" className="size-5" />
            Hubungi Lely Cake
          </WhatsAppButton>
        </Container>
      </section>
    </>
  );
}
