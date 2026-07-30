import Image from "next/image";
import { CakeSlice, HeartHandshake, MapPin, MessageCircle, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { aboutPageContent } from "@/content/about";
import { serviceAreas } from "@/content/service-areas";
import { primaryWhatsAppMessage } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "Tentang kami",
  description:
    "Kenali cerita Lely Cake dan pilihan kue untuk berbagai momen di Surabaya, Sidoarjo, Gresik, dan Mojokerto.",
  path: "/tentang-kami",
});

const valueIcons = {
  cake: CakeSlice,
  sparkles: Sparkles,
  heart: HeartHandshake,
} as const;

export default function AboutPage() {
  return (
    <>
      <section className="overflow-hidden bg-(--color-surface-white)">
        <Container className="grid min-h-155 items-center md:grid-cols-2 md:px-0">
          <div className="px-6 py-16 md:px-12 lg:px-16">
            <p className="eyebrow">{aboutPageContent.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-xl text-5xl sm:text-6xl">{aboutPageContent.hero.title}</h1>
            <p className="mt-6 max-w-lg text-[1.0625rem] leading-8 text-(--color-text-secondary) sm:text-xl">
              {aboutPageContent.hero.description}
            </p>
          </div>
          <div className="relative h-100 self-stretch md:h-full">
            <Image
              alt={aboutPageContent.hero.imageAlt}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              src={aboutPageContent.hero.image}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-[rgb(42_26_16/0.28)] to-transparent md:hidden"
            />
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-[rgb(75_46_26/0.05)] py-20 lg:py-30">
        <Container className="max-w-250">
          <div className="text-center">
            <h2 className="text-4xl italic sm:text-5xl">{aboutPageContent.story.title}</h2>
            <span aria-hidden="true" className="mx-auto mt-6 block h-px w-24 bg-(--color-brand-gold)" />
          </div>
          <div className="mt-14 grid items-center gap-12 md:grid-cols-12">
            <div className="space-y-5 text-base leading-7 text-(--color-text-secondary) md:col-span-7">
              {aboutPageContent.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="md:col-span-5">
              <div className="rotate-3 rounded-(--radius-sm) bg-(--color-surface-white) p-2 shadow-(--shadow-soft)">
                <Image
                  alt={aboutPageContent.story.imageAlt}
                  className="aspect-[4/5] w-full rounded-[calc(var(--radius-sm)_-_2px)] object-cover"
                  height={700}
                  sizes="(min-width: 768px) 35vw, 100vw"
                  src={aboutPageContent.story.image}
                  width={560}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-(--color-surface-white) py-20 lg:py-30">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            {aboutPageContent.values.map((value) => {
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

      <section className="overflow-hidden bg-[color:rgb(75_46_26_/_0.09)] py-20 lg:py-30">
        <Container>
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl">{aboutPageContent.gallery.title}</h2>
            <p className="mt-4 text-(--color-text-secondary)">{aboutPageContent.gallery.description}</p>
          </div>
          <div className="mt-10 flex snap-x [scrollbar-width:none] gap-6 overflow-x-auto pb-6 [&::-webkit-scrollbar]:hidden">
            {aboutPageContent.gallery.images.map((image) => (
              <div className="min-w-[300px] snap-start sm:min-w-[380px]" key={image.src}>
                <Image
                  alt={image.alt}
                  className="h-[460px] w-full rounded-(--radius-md) object-cover shadow-sm"
                  height={920}
                  sizes="(min-width: 640px) 380px, 300px"
                  src={image.src}
                  width={760}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-(--color-surface-white) py-16 lg:py-20">
        <Container>
          <div className="relative flex flex-col items-center justify-between gap-10 overflow-hidden rounded-(--radius-lg) bg-(--color-brand-brown) p-8 text-center text-white md:flex-row md:p-12 md:text-left">
            <span
              aria-hidden="true"
              className="absolute -right-20 -bottom-20 size-80 rounded-full bg-white/5 blur-3xl"
            />
            <div className="relative">
              <h2 className="text-3xl !text-white">{aboutPageContent.serviceArea.title}</h2>
              <p className="mt-3 max-w-lg text-white/80">{aboutPageContent.serviceArea.description}</p>
            </div>
            <ul className="relative grid grid-cols-2 gap-x-8 gap-y-4 text-left" aria-label="Area layanan Lely Cake">
              {serviceAreas.map((area) => (
                <li className="flex items-center gap-2 font-semibold" key={area.slug}>
                  <MapPin aria-hidden="true" className="size-4 text-(--color-brand-gold)" />
                  {area.name}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-(--color-surface-white) py-20 lg:py-30">
        <Container className="max-w-200 text-center">
          <h2 className="text-4xl sm:text-5xl">{aboutPageContent.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-8 text-(--color-text-secondary) sm:text-xl">
            {aboutPageContent.cta.description}
          </p>
          <WhatsAppButton className="mt-8 gap-2 rounded-full px-8">
            <MessageCircle aria-hidden="true" className="size-5" />
            Hubungi WhatsApp kami
          </WhatsAppButton>
        </Container>
      </section>

      <a
        aria-label="Hubungi Lely Cake melalui WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex min-h-12 items-center gap-2 rounded-full bg-(--color-success) px-4 text-sm font-bold text-white shadow-[0_10px_30px_rgb(42_26_16/0.25)] transition hover:scale-105 motion-reduce:transform-none"
        href={createWhatsAppUrl(primaryWhatsAppMessage)}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" className="size-5" />
        WhatsApp
      </a>
    </>
  );
}
