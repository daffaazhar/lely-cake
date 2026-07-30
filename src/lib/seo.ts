import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: MetadataInput): Metadata {
  const socialTitle = `${title} | ${siteConfig.name}`;
  const canonical = siteConfig.siteUrl ? new URL(path, siteConfig.siteUrl).toString() : undefined;

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "id_ID",
      type: "website",
    },
  };
}
