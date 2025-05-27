"use client";

import React from "react";
import Image from "next/image";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ButtonPrimary } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

// image
// import MainRoom from "@/public/facility/main-room.png";
// import DesignRoom from "@/public/facility/design-room.png";
// import MeetingRoom from "@/public/facility/meeting-room.png";
// import ProgrammerRoom from "@/public/facility/programmer-room.png";

import ProgramText from "@/public/title/Program.png";
// import Fasilitas from "@/public/title/Fasilitas.png";

import { ProgramBgMobile } from "@/components/Program/Program";
import { FasilitasMobile } from "@/components/Fasilitas/Fasilitas";
import { Toolmobile } from "@/components/Fasilitas/Tool";

// const facilities = [
//   {
//     image: MainRoom,
//     title: "Main Room",
//   },
//   {
//     image: DesignRoom,
//     title: "Design Room",
//   },
//   {
//     image: MeetingRoom,
//     title: "Meeting Room",
//   },
//   {
//     image: ProgrammerRoom,
//     title: "Programmer Room",
//   },
// ];

export const ProgramMobile = () => {
  const [click, setClick] = React.useState(false);
  // const [clickFasility, setClickFasility] = React.useState(false);

  const handleOnClick = () => {
    setClick(true);
  };

  // const handleOnClickFacility = () => {
  //   setClickFasility(true)
  // }

  return (
    <section id="program" className="w-full bg-[#F1f1f1]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col basis-[55%] gap-6 py-10 px-4">
            <Image className="w-6/12" src={ProgramText} alt="Program" />
            <p className="text-bodyTextLight text-sm tracking-widest leading-relaxed">
              Lulusan Program Pelatihan &quot;Minilemon Movie Academy&quot;
              adalah pribadi yang memiliki karakter sosial, keagamaan, dan
              kebangsaan yang kuat, menguasai kompetensi untuk bekerja
              profesional di bidang digital konten khususnya video grafis dan 3D
              animasi, mampu menembus dunia industri dan menjadi digital
              preneurship yang inovatif, adaptif sesuai tuntutan pasar global
              saat ini.
            </p>
            <p className="text-sm text-bodyTextLight tracking-widest leading-relaxed">
              Penyelenggaraan Program dibagi menjadi 3 tahap.
            </p>
            <div className="wrapper">
              <ButtonPrimary
                className={`uppercase group ${click ? " hidden" : ""}`}
                onClick={handleOnClick}
              >
                See More
              </ButtonPrimary>
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
                <div className="flex flex-col items-center bg-[#292929] ">
                  <ProgramBgMobile />
                  <div className="bg-[#292929] w-full text-center pb-5">
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

          <div className="wrapper">
            <FasilitasMobile />
            <Toolmobile />
          </div>
        </div>
      </div>
    </section>
  );
};
