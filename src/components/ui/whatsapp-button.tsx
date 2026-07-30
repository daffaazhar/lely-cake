import type { ComponentPropsWithoutRef } from "react";

import { primaryWhatsAppMessage } from "@/content/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  message?: string;
};

export function WhatsAppButton({
  children = "Pesan lewat WhatsApp",
  className = "",
  message = primaryWhatsAppMessage,
  ...props
}: WhatsAppButtonProps) {
  return (
    <a
      className={`button button-primary ${className}`.trim()}
      href={createWhatsAppUrl(message)}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}
