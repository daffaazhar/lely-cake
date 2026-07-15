type SluggedItem = {
  slug: string;
};

type FeaturedItem = SluggedItem & {
  available: boolean;
  featured?: boolean;
};

export function assertUniqueSlugs(items: readonly SluggedItem[], collectionName: string) {
  const slugs = new Set<string>();

  for (const item of items) {
    if (slugs.has(item.slug)) {
      throw new Error(`Slug duplikat pada ${collectionName}: ${item.slug}`);
    }

    slugs.add(item.slug);
  }
}

export function assertFeaturedItemsAvailable(items: readonly FeaturedItem[], collectionName: string) {
  for (const item of items) {
    if (item.featured && !item.available) {
      throw new Error(`Item unggulan harus tersedia pada ${collectionName}: ${item.slug}`);
    }
  }
}
