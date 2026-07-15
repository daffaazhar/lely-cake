import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { serviceAreas } from "@/content/service-areas";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Kue rumahan untuk setiap momen istimewa",
  description: "Lely Cake membantu Anda menyiapkan kue untuk keluarga dan berbagai acara melalui pemesanan WhatsApp.",
});

export default function HomePage() {
  return (
    <>
      <section className="section">
        <Container className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-brand-gold)]">{siteConfig.tagline}</p>
          <h1 className="max-w-2xl text-5xl sm:text-6xl">Kue rumahan untuk setiap momen istimewa</h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] text-[var(--color-text-secondary)]">
            Ceritakan kebutuhan pesanan Anda. Kami akan membantu memberikan informasi pemesanan melalui WhatsApp.
          </p>
          <WhatsAppButton className="mt-8" />
        </Container>
      </section>

      <section className="section bg-[var(--color-surface-white)]" id="area-layanan">
        <Container className="max-w-3xl">
          <SectionHeading description="Lely Cake melayani pemesanan untuk wilayah berikut." title="Area layanan" />
          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Area layanan Lely Cake">
            {serviceAreas.map((area) => (
              <li className="rounded-[var(--radius-sm)] border border-[var(--color-border-soft)] px-4 py-2 text-base text-[var(--color-text-primary)]" key={area.slug}>
                {area.name}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
