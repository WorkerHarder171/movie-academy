"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ButtonPrimary } from "@/components/ui/button";

// image
import MainRoom from "@/public/facility/main-room.png";
import DesignRoom from "@/public/facility/design-room.png";
import MeetingRoom from "@/public/facility/meeting-room.png";
import ProgrammerRoom from "@/public/facility/programmer-room.png";

import ProgramText from "@/public/title/Program.png";
import Fasilitas from "@/public/title/Fasilitas.png";

import { ProgramBgMobile } from "@/components/Program/Program";
import { FasilitasMobile } from "@/components/Fasilitas/Fasilitas";
import { Toolmobile } from "@/components/Fasilitas/Tool";

const facilities = [
  {
    image: MainRoom,
    title: "Main Room",
  },
  {
    image: DesignRoom,
    title: "Design Room",
  },
  {
    image: MeetingRoom,
    title: "Meeting Room",
  },
  {
    image: ProgrammerRoom,
    title: "Programmer Room",
  },
];

export const ProgramMobile = () => {
  const [click, setClick] = React.useState(false);
  const [clickFasility, setClickFasility] = React.useState(false);


  const handleOnClick = () => {
    setClick(true);
  };

  const handleOnClickFacility = () => {
    setClickFasility(true)
  }

  return (
    <section id="program" className="w-full bg-[#F1f1f1]">
      <div className="container mx-auto py-14">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col basis-[55%] gap-6 mb-10 px-4">
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
              <div className="duration-300 ease-in-out flex flex-col items-center">
                <ProgramBgMobile />
              </div>
            ) : null}
          <div
            id="facility"
            className={`flex gap-6 flex-col items-center max-w-3xl ${clickFasility ? "hidden" : ""}`}
          >
            <Image className="w-8/12" src={Fasilitas} alt="Fasilitas" />
            <Splide
              options={{
                type: "loop",
                interval: 4000,
                perPage: 1,
                perMove: 1,
                gap: "0.5rem",
                drag: "free",
                focus: "center",
                pagination: false,
                autoplay: true,
                arrows: true,
                speed: 1500,
              }}
              className="w-full mx-auto custom-splide-arrows"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <SplideSlide key={index}>
                  <div className="h-[250px] w-full bg-gray-50 border-[6px] border-hijau rounded-3xl relative">
                    {facilities.map((item, index) => (
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full rounded-2xl"
                        layout="fill"
                        objectFit="cover"
                        key={index}
                      />
                    ))}
                  </div>
                </SplideSlide>
              ))}
            </Splide>
            <div className="mb-10">
              <ButtonPrimary
                className={`uppercase group`}
                onClick={handleOnClickFacility}
              >
                See More
              </ButtonPrimary>
            </div>
          </div>
            {clickFasility ? (
              <div className="duration-300 ease-in-out flex flex-col items-center">
                <FasilitasMobile />
                <Toolmobile />
              </div>
            ) : null}
        </div>
      </div>
    </section>
  );
};
