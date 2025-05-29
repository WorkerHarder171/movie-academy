"use client";
import Image from "next/image";
import TitleHero from "@/public/title/Minilemon-Movie-Academy.png";
import bgMovie from "@/public/background/About-us.png";
// import bgHero from "@/public/background/Home.png";

import { useState } from "react";
import { ButtonPrimary } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

import { FounderMobile } from "@/components/About/Founder";
import { VisiMobile } from "@/components/About/Visi";

export const HeroMobile = () => {
  const [click, setClick] = useState(false);

  const handleOnClick = () => {
    setClick(true);
  };
  return (
    <section id="about">
      <div className="relative flex py-4 items-center justify-center bg-[#d6ddf4] bg-cover bg-center">
   <Image src={bgMovie} quality={100} fill sizes="(100vw)" className="absolute z-10" objectFit="cover" alt="Hero image" />
        <div className="container mx-auto z-20 flex flex-col items-center justify-center gap-6 px-6 pb-5 pt-10">
          {/* <p className="text-xl text-boldTextDark uppercase font-bold mb-2">
            Welcome To
          </p> */}
          <Image
            src={TitleHero}
            alt="Minilemon Movie Academy"
            className="w-4/4"
          />

          <p className="text-bodyTextDark tracking-wider leading-relaxed">
                      adalah pusat pelatihan Movie dan Animasi di dunia oleh{" "}
                      <span className="text-boldTextDark font-semibold">Yayasan Bangun Generasi Muda</span> yang merupakan bagian dari Minilemon Universe sebuah
                      perusahaan kreatif dan intellectual property <span className="text-boldTextDark font-semibold">(MINILEMON)</span> yang berkonsentrasi pada
                      Pendidikan, kebudayaan, sosial, ilmu pengetahuan dan teknologi.
                    </p>
          <button
            className={`mx-auto ${click ? "hidden" : null}`}
            onClick={handleOnClick}
          >
            <ButtonPrimary className="uppercase group">See More</ButtonPrimary>
          </button>
        </div>
      </div>


      {click ? (
        <AnimatePresence>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="wrapper flex flex-col bg-[#1b1b1b] ">
              <VisiMobile />
              <FounderMobile />
              <div className="bg-[#1b1b1b] w-full text-center pb-5">
                <ButtonPrimary
                  className={`uppercase group`}
                  onClick={() => setClick(false)}
                >
                  Read Less
                </ButtonPrimary>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </section>
  );
};
