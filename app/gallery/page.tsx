"use client";

import { GaleriDesktop, GaleriMobile } from "@/components/Galeri/Galeri";
import {
  GalleryProductDesktop,
  GalleryProductMobile,
} from "@/components/Galeri/GaleriProduct";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { useEffect, useState } from "react";
const Gallery = () => {
  const [mounted, setMounted] = useState(false);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      {screenWidth < 1100 ? (
        <>
          <GaleriMobile />
          <GalleryProductMobile />

          {/* <div className="block  bg-yellow-100 text-yellow-800 text-center p-4 rounded-md">
            <p>
              Desain untuk mobile belum tersedia. Silakan lihat di layar yang
              lebih besar.
            </p>
          </div> */}
        </>
      ) : (
        <>
          <GaleriDesktop />
          <GalleryProductDesktop />
        </>
      )}
    </>
  );
};

export default Gallery;
