import type { ServiceArea } from "@/types/content";

import { assertUniqueSlugs } from "./validation";

export const serviceAreas: ServiceArea[] = [
  { slug: "surabaya", name: "Surabaya" },
  { slug: "sidoarjo", name: "Sidoarjo" },
  { slug: "gresik", name: "Gresik" },
  { slug: "mojokerto", name: "Mojokerto" },
];

assertUniqueSlugs(serviceAreas, "area layanan");

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((serviceArea) => serviceArea.slug === slug);
}
