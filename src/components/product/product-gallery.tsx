"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  alt: string;
  image: string;
  images?: string[];
  fallbackThumbnailLabel?: string;
};

export function ProductGallery({ alt, fallbackThumbnailLabel, image, images = [] }: ProductGalleryProps) {
  const galleryImages = [...new Set([image, ...images])];
  const thumbnailImages = galleryImages.length > 1 ? galleryImages : Array.from({ length: 4 }, () => image);
  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  return (
    <div>
      <div className="group relative aspect-[4/3] overflow-hidden rounded-(--radius-lg) bg-[color:rgb(75_46_26_/_0.08)] shadow-(--shadow-soft)">
        <Image
          alt={alt}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          height={1000}
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          src={activeImage}
          width={1200}
        />
      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">
        {thumbnailImages.map((galleryImage, index) => {
          const isActive = galleryImage === activeImage && (galleryImages.length > 1 || index === 0);

          return (
            <button
              aria-label={`Tampilkan foto ${index + 1} ${alt}`}
              aria-pressed={isActive}
              className={`relative aspect-square overflow-hidden rounded-(--radius-sm) border-2 transition ${isActive ? "border-(--color-brand-brown) shadow-sm" : "border-(--color-border-soft) hover:border-(--color-brand-gold)"}`}
              key={`${galleryImage}-${index}`}
              onClick={() => setActiveImage(galleryImage)}
              type="button"
            >
              <Image
                alt=""
                className="size-full object-cover"
                height={240}
                sizes="(min-width: 1024px) 12vw, 22vw"
                src={galleryImage}
                width={240}
              />
              {galleryImages.length === 1 && index > 0 && fallbackThumbnailLabel ? (
                <span className="absolute inset-x-0 bottom-0 bg-[color:rgb(42_26_16_/_0.72)] px-1 py-0.5 text-[9px] font-bold text-white">
                  {fallbackThumbnailLabel}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
