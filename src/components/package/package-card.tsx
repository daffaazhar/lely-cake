import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { formatRupiah } from "@/lib/format";
import { createPackageWhatsAppMessage } from "@/lib/whatsapp";
import type { Package } from "@/types/content";

type PackageCardProps = {
  packageItem: Package;
};

export function PackageCard({ packageItem }: PackageCardProps) {
  const imageSrc = packageItem.image || "/images/brand/logo-lely-cake-vertical.png";
  const imageAlt = packageItem.image ? packageItem.name : "Logo Lely Cake";

  return (
    <article className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-soft)] bg-[var(--color-surface-white)] shadow-[var(--shadow-soft)]">
      <Image alt={imageAlt} className="aspect-[4/5] w-full object-cover" height={1000} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={imageSrc} width={800} />
      <div className="p-5">
        {!packageItem.available ? <Badge>Tidak tersedia</Badge> : null}
        <h3 className="mt-4 text-2xl">{packageItem.name}</h3>
        <p className="mt-2 text-base text-[var(--color-text-secondary)]">{packageItem.description}</p>
        {packageItem.priceFrom ? <p className="mt-4 text-lg font-bold text-[var(--color-brand-brown)]">Harga mulai {formatRupiah(packageItem.priceFrom)}</p> : null}
        {packageItem.minimumOrder ? <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Minimal pemesanan: {packageItem.minimumOrder}</p> : null}
        {packageItem.available ? <WhatsAppButton className="mt-5 w-full" message={createPackageWhatsAppMessage(packageItem.name)} /> : null}
      </div>
    </article>
  );
}
