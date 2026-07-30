import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  SearchCheck,
  ShoppingBasket,
  Star,
  Timer,
  Utensils,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { ProductGallery } from "@/components/product/product-gallery";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { getProductBySlug, productDetailFallbackContent, products } from "@/content/products";
import { formatRupiah } from "@/lib/format";
import { createMetadata } from "@/lib/seo";
import { createProductWhatsAppMessage } from "@/lib/whatsapp";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug((await params).slug);

  if (!product) {
    return {};
  }

  return createMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/produk/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug((await params).slug);

  if (!product) {
    notFound();
  }

  const price = product.priceFrom ?? productDetailFallbackContent.price;
  const pricePrefix = product.priceFrom ? null : productDetailFallbackContent.pricePrefix;
  const unit = product.unit ?? productDetailFallbackContent.unit;
  const minimumOrder = product.minimumOrder ?? productDetailFallbackContent.minimumOrder;
  const shelfLife = product.shelfLife ?? productDetailFallbackContent.shelfLife;
  const relatedProducts = products.filter((item) => item.available && item.slug !== product.slug).slice(0, 2);

  return (
    <div className="pt-10 pb-24 lg:pt-16">
      <Container>
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold tracking-[0.1em] text-(--color-text-secondary) uppercase"
        >
          <Link className="transition hover:text-(--color-brand-brown)" href="/">
            Beranda
          </Link>
          <ChevronRight aria-hidden="true" className="size-3" />
          <Link className="transition hover:text-(--color-brand-brown)" href="/produk">
            Produk
          </Link>
          <ChevronRight aria-hidden="true" className="size-3" />
          <span aria-current="page" className="text-(--color-brand-brown)">
            {product.name}
          </span>
        </nav>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="relative">
              <ProductGallery
                alt={product.name}
                fallbackThumbnailLabel={productDetailFallbackContent.galleryThumbnailLabel}
                image={product.image}
                images={product.images}
              />
              {product.featured ? (
                <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-[color:rgb(123_88_11_/_0.18)] px-3 py-1.5 text-xs font-bold tracking-[0.08em] text-(--color-brand-brown) uppercase shadow-sm">
                  <Star aria-hidden="true" className="size-4 fill-current" />
                  Unggulan
                </span>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col lg:col-span-5">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem]">{product.name}</h1>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p className="text-3xl font-semibold text-(--color-brand-gold) italic">
                {pricePrefix ? <span className="mr-2 text-xs font-bold not-italic">{pricePrefix}</span> : null}
                {formatRupiah(price)}
              </p>
              <p className="text-base text-(--color-text-secondary)">/ {unit}</p>
            </div>
            <div className="my-6 h-px bg-(--color-border-soft)" />
            <p className="text-base leading-7 text-(--color-text-primary) sm:text-lg">{product.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-(--radius-md) border border-[color:rgb(75_46_26_/_0.08)] bg-[color:rgb(75_46_26_/_0.05)] p-4">
                <p className="flex items-center gap-2 font-bold text-(--color-brand-brown)">
                  <ShoppingBasket aria-hidden="true" className="size-5" />
                  Minimal pesan
                </p>
                <p className="mt-2 pl-7 text-sm text-(--color-text-secondary)">{minimumOrder}</p>
              </div>
              <div className="rounded-(--radius-md) border border-[color:rgb(75_46_26_/_0.08)] bg-[color:rgb(75_46_26_/_0.05)] p-4">
                <p className="flex items-center gap-2 font-bold text-(--color-brand-brown)">
                  <Timer aria-hidden="true" className="size-5" />
                  Daya tahan
                </p>
                <p className="mt-2 pl-7 text-sm text-(--color-text-secondary)">{shelfLife}</p>
              </div>
            </div>

            <details className="group mt-8 border-y border-(--color-border-soft)">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-bold text-(--color-brand-brown) [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-2">
                  <Utensils aria-hidden="true" className="size-5" />
                  Saran penyajian
                </span>
                <ChevronDown aria-hidden="true" className="size-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-base leading-7 text-(--color-text-secondary)">
                {productDetailFallbackContent.servingSuggestion}
              </p>
            </details>

            <div className="mt-10 space-y-3 lg:mt-auto lg:pt-12">
              <WhatsAppButton
                className="w-full gap-2 rounded-(--radius-md) shadow-(--shadow-soft)"
                message={createProductWhatsAppMessage(product.name)}
              >
                <MessageCircle aria-hidden="true" className="size-5" />
                Pesan lewat WhatsApp
              </WhatsAppButton>
              <p className="text-center text-xs font-bold tracking-[0.08em] text-(--color-text-secondary)">
                {productDetailFallbackContent.orderNote}
              </p>
            </div>
          </div>
        </div>

        <section className="mt-20 lg:mt-30">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl">{productDetailFallbackContent.relatedTitle}</h2>
              <p className="mt-3 text-(--color-text-secondary)">{productDetailFallbackContent.relatedDescription}</p>
            </div>
            <Link className="button button-text gap-2 font-bold" href="/produk">
              Lihat semua produk <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((relatedProduct) => {
              const relatedPrice = relatedProduct.priceFrom ?? productDetailFallbackContent.price;

              return (
                <Link
                  className="group overflow-hidden rounded-(--radius-md) border border-[color:rgb(75_46_26_/_0.08)] bg-(--color-surface-white) shadow-(--shadow-soft) transition hover:-translate-y-1"
                  href={`/produk/${relatedProduct.slug}`}
                  key={relatedProduct.slug}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      alt={relatedProduct.name}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                      height={600}
                      sizes="(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw"
                      src={relatedProduct.image}
                      width={800}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl">{relatedProduct.name}</h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-(--color-text-secondary)">
                      {relatedProduct.shortDescription}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-(--color-brand-gold)">
                        {relatedProduct.priceFrom ? null : `${productDetailFallbackContent.pricePrefix} `}
                        {formatRupiah(relatedPrice)}
                        {relatedProduct.unit ? ` / ${relatedProduct.unit}` : ""}
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className="size-5 text-(--color-brand-brown) transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}

            <Link
              className="flex min-h-[360px] flex-col items-center justify-center rounded-(--radius-md) bg-(--color-brand-brown) p-8 text-center text-(--color-surface-white) transition hover:bg-(--color-text-primary)"
              href="/paket"
            >
              <SearchCheck aria-hidden="true" className="size-12 text-(--color-brand-gold)" />
              <h3 className="mt-5 text-3xl text-(--color-surface-white)">
                {productDetailFallbackContent.packageTitle}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[color:rgb(255_253_249_/_0.78)]">
                {productDetailFallbackContent.packageDescription}
              </p>
              <span className="mt-7 rounded-(--radius-sm) border border-current px-5 py-3 text-sm font-bold">
                Lihat paket
              </span>
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
