import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { formatRupiah } from "@/lib/format";
import { createProductWhatsAppMessage } from "@/lib/whatsapp";
import type { Product } from "@/types/content";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const imageSrc = product.image || "/images/brand/logo-lely-cake-vertical.png";
  const imageAlt = product.image ? product.name : "Logo Lely Cake";

  return (
    <article className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-soft)] bg-[var(--color-surface-white)] shadow-[var(--shadow-soft)]">
      <Link aria-label={`Lihat detail ${product.name}`} className="block" href={`/produk/${product.slug}`}>
        <Image alt={imageAlt} className="aspect-[4/5] w-full object-cover" height={1000} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" src={imageSrc} width={800} />
      </Link>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{product.category}</Badge>
          {!product.available ? <Badge>Tidak tersedia</Badge> : null}
        </div>
        <h3 className="mt-4 text-2xl"><Link className="hover:text-[var(--color-brand-gold)]" href={`/produk/${product.slug}`}>{product.name}</Link></h3>
        <p className="mt-2 line-clamp-3 text-base text-[var(--color-text-secondary)]">{product.shortDescription}</p>
        {product.priceFrom ? <p className="mt-4 text-lg font-bold text-[var(--color-brand-brown)]">Harga mulai {formatRupiah(product.priceFrom)}{product.unit ? `/${product.unit}` : ""}</p> : null}
        {product.minimumOrder ? <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Minimal pemesanan: {product.minimumOrder}</p> : null}
        <div className="mt-5 flex flex-col gap-3">
          <Link className="inline-flex min-h-11 items-center font-bold text-[var(--color-brand-brown)] underline decoration-[var(--color-brand-gold)] underline-offset-4" href={`/produk/${product.slug}`}>Lihat detail</Link>
          {product.available ? <WhatsAppButton className="w-full" message={createProductWhatsAppMessage(product.name)} /> : null}
        </div>
      </div>
    </article>
  );
}
