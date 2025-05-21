"use client";
import { AboutMovieDesktop, AboutMovieMobile } from "@/components/About/About";
import { FounderDesktop, FounderMobile } from "@/components/About/Founder";
// import SpecialPartner from "@/components/About/SpecialPartner";
import { VisiDesktop, VisiMobile } from "@/components/About/Visi";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { useEffect, useState } from "react";

const About = () => {
  const [mounted, setMounted] = useState(false);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      {screenWidth < 1000 ? (
        <>
          <AboutMovieMobile />
          <VisiMobile />
          <FounderMobile />
        </>
      ) : (
        <>
          <AboutMovieDesktop />
          <VisiDesktop />
          <FounderDesktop />
          {/* <SpecialPartner /> */}
        </>
      )}
    </>
  );
};

export default About;
