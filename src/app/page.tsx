import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CakeSlice,
  Check,
  HandHeart,
  HeartHandshake,
  MapPin,
  MessageCircle,
  PackageCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { packages } from "@/content/packages";
import { products } from "@/content/products";
import { serviceAreas } from "@/content/service-areas";
import { primaryWhatsAppMessage } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { createMetadata } from "@/lib/seo";
import { createPackageWhatsAppMessage, createWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "Kue rumahan untuk setiap momen istimewa",
  description: "Temukan kue rumahan dan paket acara Lely Cake untuk Surabaya, Sidoarjo, Gresik, dan Mojokerto.",
});

const benefits = [
  {
    icon: "cake",
    title: "Dibuat segar",
    description: "Pesanan disiapkan sesuai jadwal agar nyaman dinikmati pada momen Anda.",
  },
  {
    icon: "sparkles",
    title: "Pilihan yang jelas",
    description: "Informasi produk dan paket disusun agar Anda lebih mudah menentukan pilihan.",
  },
  {
    icon: "heart",
    title: "Pelayanan hangat",
    description: "Kami siap membantu Anda menyesuaikan pilihan dengan kebutuhan acara.",
  },
] as const;

const valueIcons = {
  cake: CakeSlice,
  sparkles: Sparkles,
  heart: HeartHandshake,
} as const;

const packageIcons = {
  "paket-rapat": BriefcaseBusiness,
  "paket-arisan": UsersRound,
  "paket-pengajian": HandHeart,
} as const;

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.available && product.featured).slice(0, 4);
  const featuredPackages = packages.filter((item) => item.available && item.featured).slice(0, 3);

  return (
    <>
      <section className="home-hero">
        <Image
          alt="Kue marmer Lely Cake di atas meja saji"
          className="home-hero__image"
          fill
          priority
          sizes="100vw"
          src="/images/products/hero-image.png"
        />
        <div className="home-hero__veil" />
        <Container className="relative z-10 grid min-h-155 items-center gap-6 py-16 md:grid-cols-2 lg:min-h-217.5 lg:py-30">
          <div className="max-w-xl">
            <h1 className="text-[2.75rem] leading-tight md:text-[4rem]">Kue rumahan untuk setiap momen istimewa</h1>
            <p className="mt-6 max-w-lg text-base text-(--color-text-secondary) md:text-xl">
              Dibuat segar dengan bahan pilihan untuk keluarga, rapat, arisan, dan berbagai acara Anda. Rasakan
              kehangatan di setiap gigitan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton className="gap-2 px-7">
                <MessageCircle aria-hidden="true" size={18} strokeWidth={1.8} />
                Pesan lewat WhatsApp
              </WhatsAppButton>
              <Link className="button button-secondary px-7" href="/produk">
                Lihat produk
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-(--color-surface-white) py-20 lg:py-30">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            {benefits.map((value) => {
              const Icon = valueIcons[value.icon];

              return (
                <article className="group text-center" key={value.title}>
                  <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-[color:rgb(123_88_11_/_0.16)] text-(--color-brand-brown) transition-transform group-hover:scale-110 motion-reduce:transform-none">
                    <Icon aria-hidden="true" className="size-8" />
                  </span>
                  <h2 className="mt-6 text-3xl">{value.title}</h2>
                  <p className="mx-auto mt-4 max-w-xs text-base leading-7 text-(--color-text-secondary)">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="home-section bg-[#fff8f5]" id="produk">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Favorit kami</p>
              <h2 className="mt-2 text-4xl sm:text-5xl">Produk unggulan</h2>
            </div>
            <Link
              className="hidden items-center gap-2 text-sm font-semibold text-(--color-brand-brown) sm:flex"
              href="/produk"
            >
              Semua produk <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <article className="product-tile group" key={product.slug}>
                <Link className="relative block aspect-square overflow-hidden" href={`/produk/${product.slug}`}>
                  <Image
                    alt={product.name}
                    className="object-cover transition duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    src={product.image}
                  />
                  {index === 0 ? (
                    <span className="absolute top-3 right-3 rounded-full bg-(--color-brand-gold) px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                      Terlaris
                    </span>
                  ) : null}
                </Link>
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="font-(family-name:--font-body) text-xl leading-snug font-semibold">{product.name}</h3>
                  <p className="line-clamp-2 text-sm leading-6 text-(--color-text-secondary)">
                    {product.shortDescription}
                  </p>
                  <Link
                    className="button button-secondary mt-4 min-h-11 w-full text-sm"
                    href={`/produk/${product.slug}`}
                  >
                    Detail produk
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {featuredPackages.length ? (
        <section className="home-section bg-[#fbf2ee]" id="paket">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl sm:text-5xl">Paket pilihan acara</h2>
              <p className="mt-4 text-base text-(--color-text-secondary)">
                Kami menyiapkan paket untuk memudahkan Anda memilih suguhan yang tepat bagi tamu tercinta.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-250 gap-12 lg:grid-cols-3">
              {featuredPackages.map((item, index) => {
                const Icon = packageIcons[item.slug as keyof typeof packageIcons] ?? PackageCheck;
                return (
                  <article
                    className={`package-tile group ${index === 1 ? "package-tile--featured" : ""}`}
                    key={item.slug}
                  >
                    {index === 1 ? (
                      <span className="absolute top-0 right-0 rounded-bl-lg bg-(--color-brand-gold) px-4 py-1.5 text-[9px] font-bold tracking-widest text-white uppercase">
                        Rekomendasi
                      </span>
                    ) : null}
                    {index === 0 ? (
                      <span
                        aria-hidden="true"
                        className="absolute -top-8 -right-8 size-24 rounded-full bg-[color-mix(in_srgb,var(--color-brand-gold)_10%,transparent)] transition-transform duration-700 group-hover:scale-150"
                      />
                    ) : null}
                    <div className="flex items-center gap-3">
                      <Icon aria-hidden="true" className="text-(--color-brand-gold)" size={30} strokeWidth={1.7} />
                      <h3 className="font-(family-name:--font-body) text-2xl font-semibold">{item.name}</h3>
                    </div>
                    <ul className="mt-5 space-y-4 text-base text-(--color-text-secondary)">
                      {item.suitableFor.slice(0, 3).map((use) => (
                        <li className="flex gap-2" key={use}>
                          <Check aria-hidden="true" className="mt-0.5 shrink-0 text-[#7f9567]" size={15} />
                          {use}
                        </li>
                      ))}
                      <li className="flex gap-2">
                        <Check aria-hidden="true" className="mt-0.5 shrink-0 text-[#7f9567]" size={15} />
                        Isi dapat disesuaikan
                      </li>
                    </ul>
                    <p className="mt-7 text-xs text-(--color-text-secondary)">Harga menyesuaikan pilihan isi</p>
                    <WhatsAppButton
                      className="mt-4 min-h-11 w-full text-sm"
                      message={createPackageWhatsAppMessage(item.name)}
                    >
                      Pilih paket
                    </WhatsAppButton>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="home-section overflow-hidden bg-white" id="tentang">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[120px]">
          <div className="relative">
            <div className="about-image-wrap relative z-10 aspect-[4/5] min-h-0">
              <Image
                alt="Kue tradisional Lely Cake yang disiapkan untuk pesanan"
                className="object-cover"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                src="/images/products/tetel-wajik"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -right-10 -bottom-10 size-64 rounded-full bg-[#ffdcc7] opacity-30"
            />
          </div>
          <div>
            <p className="eyebrow">Cerita kami</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Dibuat Segar, dengan Sepenuh Hati.</h2>
            <p className="mt-6 text-base leading-7 text-(--color-text-secondary)">
              Lely Cake membantu menyiapkan kue untuk keluarga dan berbagai acara. Setiap pilihan dibuat untuk
              menghadirkan suguhan yang hangat di meja Anda.
            </p>
            <p className="mt-4 text-base leading-7 text-(--color-text-secondary)">
              Ceritakan kebutuhan Anda kepada kami. Kami akan membantu memilih produk atau paket yang sesuai.
            </p>
          </div>
        </Container>
      </section>

      {testimonials.length ? (
        <section className="home-section bg-[#fbf2ee]" id="testimoni">
          <Container>
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl">Apa kata mereka</h2>
            </div>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-(--color-brand-brown) py-20 text-white" id="area-layanan">
        <Container className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl !text-white">Area layanan kami</h2>
            <p className="mt-2 text-sm text-white/70">Siap mengantar kehangatan langsung ke depan pintu Anda.</p>
          </div>
          <ul className="flex flex-wrap justify-center gap-4" aria-label="Area layanan Lely Cake">
            {serviceAreas.map((area) => (
              <li className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-2.5 text-sm" key={area.slug}>
                <MapPin aria-hidden="true" size={14} />
                {area.name}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="home-section bg-(--color-surface-white)" id="kontak">
        <Container>
          <div className="contact-panel">
            <h2 className="text-4xl sm:text-5xl">Sedang menyiapkan acara?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-(--color-text-secondary)">
              Ceritakan kebutuhan Anda. Kami akan membantu memilihkan produk dan jumlah yang sesuai agar momen istimewa
              Anda berjalan sempurna.
            </p>
            <WhatsAppButton className="mt-8 min-w-[240px] rounded-2xl px-[120px] text-xl">
              Hubungi Lely Cake
            </WhatsAppButton>
          </div>
        </Container>
      </section>

      <a
        aria-label="Hubungi Lely Cake lewat WhatsApp"
        className="floating-whatsapp"
        href={createWhatsAppUrl(primaryWhatsAppMessage)}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" size={19} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </>
  );
}
