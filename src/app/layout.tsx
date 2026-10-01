import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/content/site";

import "./globals.css";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  icons: {
    icon: [{ type: "image/png", url: "/images/brand/favicon-lely-cake.png" }],
    apple: [{ type: "image/png", url: "/images/brand/favicon-lely-cake.png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={`${jakarta.variable} ${playfair.variable}`} lang="id">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Script
          id="xchat-website-chat"
          src="https://xchat.xposure.id/website-chat.js"
          data-site-id="2e81d2bf-2a08-405f-9cf5-1546435ab3b0"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
