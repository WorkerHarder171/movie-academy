"use client";

import { GaleriMobile } from "@/components/Galeri/Galeri";
import { GalleryProductMobile } from "@/components/Galeri/GaleriProduct";

export default function MarqueeCarousel() {
  return (
    <section id="gallery">
      <GaleriMobile />
      <GalleryProductMobile/>
    </section>
  );
}
