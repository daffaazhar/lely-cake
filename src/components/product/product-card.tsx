import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

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
    <article className="catalog-product-card group">
      <Link
        aria-label={`Lihat detail ${product.name}`}
        className="catalog-product-card__image block"
        href={`/produk/${product.slug}`}
      >
        <Image
          alt={imageAlt}
          className="size-full object-cover motion-reduce:transition-none"
          height={1000}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          src={imageSrc}
          width={800}
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{product.category}</Badge>
          {!product.available ? <Badge>Tidak tersedia</Badge> : null}
        </div>
        <h3 className="mt-4 font-(family-name:--font-body) text-xl leading-normal font-semibold">
          <Link className="hover:text-(--color-brand-gold)" href={`/produk/${product.slug}`}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-(--color-text-secondary)">{product.shortDescription}</p>
        {product.priceFrom ? (
          <p className="mt-4 text-sm font-bold text-(--color-brand-brown)">
            Harga mulai {formatRupiah(product.priceFrom)}
            {product.unit ? `/${product.unit}` : ""}
          </p>
        ) : null}
        {product.minimumOrder ? (
          <p className="mt-1 text-sm text-(--color-text-secondary)">Minimal pemesanan: {product.minimumOrder}</p>
        ) : null}
        <div className="mt-auto pt-5">
          {product.available ? (
            <WhatsAppButton className="w-full gap-2 text-sm" message={createProductWhatsAppMessage(product.name)}>
              <ShoppingCart aria-hidden="true" className="size-4" />
              Pesan
            </WhatsAppButton>
          ) : null}
        </div>
      </div>
    </article>
  );
}
