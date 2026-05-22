"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryImage {
  src: string;
  alt: string;
  service: string;
  slug: string;
}

const BATCH = 24;

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [visible, setVisible] = useState(BATCH);
  const shown = images.slice(0, visible);
  const remaining = images.length - visible;

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-1 space-y-1">
        {shown.map((img, i) => (
          <Link
            key={i}
            href={`/servicos/${img.slug}`}
            className="group block relative overflow-hidden break-inside-avoid"
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={i % 3 === 0 ? 1000 : 600}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={i < 9 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.service}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {remaining > 0 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisible((v) => v + BATCH)}
            className="px-8 py-4 border border-dark-400 text-neutral-400 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
          >
            Carregar mais ({remaining} fotos)
          </button>
        </div>
      )}
    </>
  );
}
