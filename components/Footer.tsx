"use client";

import Image from "next/image";
import React from "react";

import LogoBrand from "@/public/logo.svg";

const Footer = () => {
  const currrentYear = new Date().getFullYear();

  return (
    <footer className="relative hidden lg:block">
      <div className="flex flex-col items-center justify-center gap-3 bg-[#E3E3E3] py-3 pt-8">
        <Image src={LogoBrand} alt="logo" width={80} height={80} />
        <p className="text-xs font-semibold tracking-wider text-[#868686]">
          Copyright 2020 - {currrentYear} | Minilemon | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
