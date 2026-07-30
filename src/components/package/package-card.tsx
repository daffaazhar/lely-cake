import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { formatRupiah } from "@/lib/format";
import { createPackageWhatsAppMessage } from "@/lib/whatsapp";
import type { Package } from "@/types/content";

type PackageCardProps = {
  packageItem: Package;
};

export function PackageCard({ packageItem }: PackageCardProps) {
  return (
    <article className="package-tile">
      <div className="flex h-full flex-col">
        {!packageItem.available ? <Badge>Tidak tersedia</Badge> : null}
        <p className="text-sm font-bold tracking-[0.12em] text-(--color-brand-gold) uppercase">
          Untuk {packageItem.suitableFor.join(", ")}
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-body)] text-2xl font-semibold">{packageItem.name}</h3>
        <p className="mt-2 text-sm leading-6 text-(--color-text-secondary)">{packageItem.description}</p>
        <p className="mt-4 text-sm font-semibold text-(--color-brand-brown)">Isi dapat disesuaikan</p>
        {packageItem.priceFrom ? (
          <p className="mt-4 text-sm font-bold text-(--color-brand-brown)">
            Harga mulai {formatRupiah(packageItem.priceFrom)}
          </p>
        ) : null}
        {packageItem.minimumOrder ? (
          <p className="mt-1 text-sm text-(--color-text-secondary)">Minimal pemesanan: {packageItem.minimumOrder}</p>
        ) : null}
        {packageItem.available ? (
          <WhatsAppButton className="mt-auto w-full text-sm" message={createPackageWhatsAppMessage(packageItem.name)}>
            Tanyakan paket ini
          </WhatsAppButton>
        ) : null}
      </div>
    </article>
  );
}
