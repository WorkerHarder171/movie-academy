"use client";

import { HeroDesktop } from "@/app/(desktop-screen)/hero-desktop";
import { HeroMobile } from "@/app/(mobile-screen)/hero-mobile";
import {ProgramDesktop} from "@/app/(desktop-screen)/hero-program-desktop";
import {ProgramMobile} from "@/app/(mobile-screen)/hero-program-mobile";
import MarqueeCarouselDesktop from "@/app/(desktop-screen)/gallery-desktop";
import MarqueeCarouselMobile from "@/app/(mobile-screen)/gallery-mobile";
import DaptarDesktop from "@/app/(desktop-screen)/daptar-desktop";
import DaptarMobile from "@/app/(mobile-screen)/daptar-mobile";
import ContactDesktop from "@/app/(desktop-screen)/contact-desktop";
import ContactMobile from "@/app/(mobile-screen)/contact-mobile";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { useEffect, useState } from "react";

export default function Home() {
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
          <HeroMobile />
          <ProgramMobile />
          <MarqueeCarouselMobile />
          <DaptarMobile />
          <ContactMobile />
          {/* <div className="block  bg-yellow-100 text-yellow-800 text-center p-4 rounded-md">
            <p>
              Desain untuk mobile belum tersedia. Silakan lihat di layar yang
              lebih besar.
            </p>
          </div> */}
        </>
      ) : (
        <>
          <HeroDesktop />
          <ProgramDesktop />
          <MarqueeCarouselDesktop />
          <DaptarDesktop />
          <ContactDesktop />
        </>
      )}
    </>
  );
}
