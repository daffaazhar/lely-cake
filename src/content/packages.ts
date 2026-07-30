import type { Package } from "@/types/content";

import { assertFeaturedItemsAvailable, assertUniqueSlugs } from "./validation";

export const packages: Package[] = [
  {
    slug: "paket-rapat",
    name: "Paket Rapat",
    description: "Pilihan praktis untuk rapat, pelatihan, dan pertemuan kerja.",
    tagline: "Efisiensi dalam kelezatan rasa.",
    suitableFor: ["Meeting Kantor", "Seminar Kecil"],
    contents: ["5 Jenis Jajanan Pasar Premium", "Minuman Segar / Kopi & Teh", "Box Eksklusif & Tisu"],
    priceFrom: 250000,
    minimumOrder: "10 Paket",
    capacity: "10–15 Orang",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZKPPaUXb2P5_FbFCLZuQ1MwcylqL7hTfBObbmXu0EhwvAe5HFK1en0920Z-9sEqV59SXhJkU26GNnDDauF0UUBPPPvppS6aYrHzSsx2AjuEyAaOub_umIYuNgdsk9MkOUp2MPy6zQs9DfoIkTyLJsXJ2BwbQ_jIfesd6AoJzEqIzS1OPR776ZPW62KSQs6pEfpaEOmO4rcNxSPz5ooY7y-3ER77JgnaFcrhoM2pnJESZcYrSgXq1byANxf-C4mZ7ThgF_tv1cOU",
    imageAlt: "Pilihan kue dan jajanan untuk rapat kantor",
    badge: "Populer",
    featured: true,
    available: true,
  },
  {
    slug: "paket-arisan",
    name: "Paket Arisan",
    description: "Pilihan suguhan untuk arisan dan kumpul keluarga.",
    tagline: "Hangatnya silaturahmi dengan sajian istimewa.",
    suitableFor: ["Arisan", "Kumpul keluarga"],
    contents: ["1 Kue Tampah Spesial ukuran sedang", "20 Porsi Jajanan Manis & Gurih", "Penataan sajian opsional"],
    priceFrom: 450000,
    minimumOrder: "1 Paket",
    capacity: "20 Orang",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-iJNYFPZeUSqjmgliiz-_fRsq52P7DTvtFQa0G2u487jFGeEcMpxxi6v7OWgEnaNQ1SvtPjPsmhu3s_M9AyAgke24vEMwmYuIeXufPa9MgW5SiOp6WJYh_WU0tPH02NUczuqsFl0_1R7XrUUwCvW1TxvVFLpZQSKZv-n1MJpeyw4B-PbebbboX0qZhRDHGDdS20gAxNgMZeqhrJ6rYhs_3Q58ZTvdbv4XuGwFf9apsuMbj8h0L-lAbhAY-xFMKwzi3-Xl4AEAaVg",
    imageAlt: "Sajian kue untuk acara arisan",
    featured: true,
    available: true,
  },
  {
    slug: "paket-keluarga",
    name: "Paket Keluarga",
    description: "Pilihan sajian untuk momen bersama keluarga.",
    tagline: "Manisnya momen bersama yang tersayang.",
    suitableFor: ["Makan Malam", "Akhir Pekan"],
    contents: ["Kotak pastri campur ukuran besar", "2 Kue Utuh Pilihan", "Kartu Ucapan Kustom"],
    priceFrom: 350000,
    minimumOrder: "1 Paket",
    capacity: "5-8 Orang",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFwcXESU88lCM69b-L6eevQhdJiB5ysEnB4j7M81nnfkZ3OvdXAUz_P1WuxYbY9-uZNi_ujUxmr1PC87TuXWyKPGScXlIsE4uWOik4fF6QAzXjdCJ-cBYh7ZKyx0mbipRfU9ngGZ7N1WezcdW6R1Mksno8C8JQON_3v4qtoB7vJHRpGtuzIccxEe57wom7kYZKUISUOPoHgphVs79X6aNLJEOtUrqnPTnqQf2Ybf_33dZasLdW7YiPnFRQmJ0FdGNfbnzePXypvSc",
    imageAlt: "Sajian kue untuk acara keluarga",
    featured: true,
    available: true,
  },
];

assertUniqueSlugs(packages, "paket");
assertFeaturedItemsAvailable(packages, "paket");

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((packageItem) => packageItem.slug === slug);
}
