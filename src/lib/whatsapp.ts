import { siteConfig } from "@/content/site";

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp.linkNumber}?text=${encodeURIComponent(message)}`;
}
