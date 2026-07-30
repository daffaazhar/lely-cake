import { Container } from "@/components/layout/container";
import { ProductCatalog } from "@/components/product/product-catalog";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/content/products";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Produk",
  description: "Lihat pilihan kue Lely Cake untuk suguhan keluarga dan berbagai acara.",
  path: "/produk",
});

export default function ProductsPage() {
  const availableProducts = products.filter((product) => product.available);

  return (
    <section className="section">
      <Container>
        <SectionHeading
          description="Pilih produk yang Anda sukai, lalu tanyakan harga dan ketersediaannya melalui WhatsApp."
          eyebrow="Katalog"
          title="Daftar Produk"
        />
        <ProductCatalog products={availableProducts} />
      </Container>
    </section>
  );
}
