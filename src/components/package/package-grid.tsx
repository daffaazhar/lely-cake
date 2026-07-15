import { EmptyState } from "@/components/ui/empty-state";
import type { Package } from "@/types/content";

import { PackageCard } from "./package-card";

type PackageGridProps = {
  packages: Package[];
  emptyTitle?: string;
  emptyDescription?: string;
};

export function PackageGrid({ emptyDescription, emptyTitle = "Belum ada paket untuk ditampilkan", packages }: PackageGridProps) {
  if (packages.length === 0) {
    return <EmptyState description={emptyDescription} title={emptyTitle} />;
  }

  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{packages.map((packageItem) => <PackageCard key={packageItem.slug} packageItem={packageItem} />)}</div>;
}
