"use client";

import { berlin_sans_fb } from "@/app/fonts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Mylogo from "@/public/logo.svg";
import Image from "next/image";
import { NavDesktop } from "./Nav";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { Button } from "../ui/button";
import DividerMobileFooter from "./../ui/divider/divider-mobile-footer";
import DividerMobileHeader from "./../ui/divider/divider-mobile-header";
import useScrollPercentage from "@/hooks/useScrollPercentage";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mounted, setMounted] = React.useState(false);
  const screenWidth = useScreenWidth();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <>{screenWidth < 1100 ? <MobileHeader /> : <DesktopHeader />}</>;
};

export const MobileHeader = () => {
  const [isFooterActive, setIsFooterActive] = useState(false);
  const { scrollPercent } = useScrollPercentage();

  useEffect(() => {
    if (scrollPercent > 98) {
      setIsFooterActive(true);
    }
    if (scrollPercent < 2) {
      setIsFooterActive(false);
    }
  }, [scrollPercent]);

  return (
    <>
      {/* HEADER */}
      <div
        className={cn(
          berlin_sans_fb.className,
          "sticky top-0 z-50 flex h-[60px] flex-col justify-between bg-[#B3B3B3] text-center text-black md:h-[80px]",
          scrollPercent > 2
            ? "-translate-y-60 duration-300"
            : "translate-y-0 duration-300"
        )}
      >
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-5 ">
            <h1 className="mr-[65px] h-full pt-[10px] text-center font-semibold text-[18px] leading-10 tracking-wide">
              Selamat datang di dunia
            </h1>
            <Image
              src={Mylogo}
              alt="Logo Brand "
              className="absolute -bottom-10 right-3 z-20 w-[100px] 400:w-[120px] 450:w-[140px] 640:w-[160px] md:-bottom-10"
            />
          </div>
          <DividerMobileHeader />
        </div>
      </div>

      {/* FOOTER */}
      <div
        className={cn(
          berlin_sans_fb.className,
          "fixed bottom-0 z-50 flex h-[60px] w-full flex-col justify-between bg-[#B3B3B3] text-center text-[#eeca0e] md:h-[80px]",
          isFooterActive
            ? "translate-y-0 duration-300"
            : "translate-y-60 duration-300"
        )}
      >
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-5 text-sm md:text-3xl">
            <Image
              src={Mylogo}
              alt="Logo Brand"
              className="absolute -top-8 right-3 z-20 w-[90px] 400:w-[100px] 450:w-[120px] 640:w-[150px] md:w-[200px]"
            />
          </div>
          <DividerMobileFooter />
        </div>
      </div>
    </>
  );
};

export const DesktopHeader = () => {
  return (
    <>
      <header className="bg-gradient-to-b from-white to-[#B3B3B3] sticky top-0 z-[999] ">
        <div className="container mx-auto py-4 flex items-center justify-between ">
          <Logo />
          <div className="flex items-center gap-4">
            <NavDesktop />
            <Link href="/">
              <Button
                className="uppercase border border-black font-semibold text-sm"
                variant={"navbar"}
                size={"nav"}
              >
                Pendaftaran
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
function Logo() {
  return (
    <Link href="/">
      <Image className="p-2" src={Mylogo} alt="logo" width={90} height={90} />
    </Link>
  );
}

export default Header;
