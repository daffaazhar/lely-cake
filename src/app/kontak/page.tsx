import { Camera, Clock3, Info, MapPin, MessageCircle, Truck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";
import { serviceAreas } from "@/content/service-areas";
import { contactPageContent, primaryWhatsAppMessage, siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "Hubungi kami",
  description: "Hubungi Lely Cake untuk kebutuhan kue dan paket acara di Surabaya, Sidoarjo, Gresik, dan Mojokerto.",
  path: "/kontak",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-(--color-brand-cream) py-20 text-center sm:py-28">
        <span
          aria-hidden="true"
          className="absolute -top-24 -right-24 size-96 rounded-full bg-[rgb(123_88_11/0.13)] blur-3xl"
        />
        <Container className="relative z-10">
          <p className="eyebrow">{contactPageContent.eyebrow}</p>
          <h1 className="mt-4 text-5xl sm:text-6xl">{contactPageContent.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-8 text-(--color-text-secondary) sm:text-xl">
            {contactPageContent.introduction}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-30">
        <Container className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-5">
            <article className="rounded-(--radius-md) border border-(--color-border-soft) bg-(--color-surface-white) p-8 shadow-(--shadow-soft) transition-transform hover:scale-[1.02] motion-reduce:transform-none">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-[color:rgb(79_107_79_/_0.12)] text-(--color-success)">
                  <MessageCircle aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <h2 className="font-[family-name:var(--font-body)] text-xl font-semibold">WhatsApp</h2>
                  <p className="mt-1 font-medium text-(--color-text-secondary)">{siteConfig.whatsapp.displayNumber}</p>
                </div>
              </div>
            </article>

            <article className="rounded-(--radius-md) border border-(--color-border-soft) bg-(--color-surface-white) p-8 shadow-(--shadow-soft) transition-transform hover:scale-[1.02] motion-reduce:transform-none">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-[color:rgb(123_88_11_/_0.13)] text-(--color-brand-gold)">
                  <Camera aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <h2 className="font-[family-name:var(--font-body)] text-xl font-semibold">Instagram</h2>
                  <a
                    className="mt-1 inline-block font-medium text-(--color-brand-gold) hover:underline"
                    href={siteConfig.instagramUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {contactPageContent.instagramHandle}
                  </a>
                </div>
              </div>
            </article>

            <article className="rounded-(--radius-md) border border-(--color-border-soft) bg-(--color-surface-white) p-8 shadow-(--shadow-soft) transition-transform hover:scale-[1.02] motion-reduce:transform-none">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[color:rgb(75_46_26_/_0.1)] text-(--color-brand-brown)">
                  <Clock3 aria-hidden="true" className="size-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-[family-name:var(--font-body)] text-xl font-semibold">Jam operasional</h2>
                  <div className="mt-4 space-y-3">
                    {contactPageContent.operatingHours.map((schedule) => (
                      <div
                        className="flex justify-between gap-4 border-b border-(--color-border-soft) pb-3 text-sm"
                        key={schedule.day}
                      >
                        <span className="text-(--color-text-secondary)">{schedule.day}</span>
                        <span className="font-semibold text-(--color-text-primary)">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-(--color-text-secondary) italic">
                    {contactPageContent.operatingHoursNote}
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-7">
            <div className="h-full rounded-(--radius-md) border border-(--color-border-soft) bg-[color:rgb(75_46_26_/_0.05)] p-8 shadow-sm md:p-12">
              <h2 className="text-4xl sm:text-5xl">{contactPageContent.formTitle}</h2>
              <p className="mt-4 max-w-xl text-(--color-text-secondary)">{contactPageContent.formDescription}</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-(--color-border-soft) bg-[color:rgb(75_46_26_/_0.05)] py-16 sm:py-20 lg:py-30">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">{contactPageContent.locationEyebrow}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">{contactPageContent.locationTitle}</h2>
            <p className="mt-6 max-w-xl text-(--color-text-secondary)">{contactPageContent.locationDescription}</p>
            <div className="mt-8 flex gap-4">
              <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-(--color-brand-brown)" />
              <div>
                <h3 className="font-[family-name:var(--font-body)] text-base font-bold">Alamat</h3>
                <p className="mt-1 text-(--color-text-secondary)">{siteConfig.address}</p>
              </div>
            </div>
            <div className="mt-10 rounded-(--radius-md) border border-(--color-border-soft) bg-(--color-surface-white) p-8">
              <h3 className="flex items-center gap-2 font-[family-name:var(--font-body)] text-base font-bold">
                <Truck aria-hidden="true" className="size-5 text-(--color-brand-gold)" />
                Jangkauan pengiriman
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {serviceAreas.map((area) => (
                  <span
                    className="rounded-(--radius-sm) bg-[color:rgb(75_46_26_/_0.08)] px-3 py-2 text-center text-sm font-semibold text-(--color-brand-brown)"
                    key={area.slug}
                  >
                    {area.name}
                  </span>
                ))}
              </div>
              <p className="mt-5 flex gap-2 text-xs text-(--color-text-secondary) italic">
                <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                {contactPageContent.deliveryNote}
              </p>
            </div>
          </div>

          <div className="group relative">
            <span
              aria-hidden="true"
              className="absolute -inset-4 rounded-[calc(var(--radius-lg)_+_8px)] bg-[color:rgb(123_88_11_/_0.15)] transition group-hover:bg-[color:rgb(123_88_11_/_0.22)]"
            />
            <div className="relative h-[450px] overflow-hidden rounded-(--radius-md) border-4 border-(--color-surface-white) bg-(--color-surface-white) shadow-xl">
              <iframe
                allowFullScreen
                className="size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.googleMapsAddress)}&output=embed`}
                title={`Google Maps ${siteConfig.address}`}
              />
            </div>
          </div>
        </Container>
      </section>

      <a
        aria-label="Hubungi Lely Cake melalui WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex size-15 items-center justify-center rounded-full bg-(--color-success) text-white shadow-[0_10px_30px_rgb(42_26_16_/_0.25)] transition hover:scale-110 motion-reduce:transform-none"
        href={createWhatsAppUrl(primaryWhatsAppMessage)}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" className="size-7" />
      </a>
    </>
  );
}
