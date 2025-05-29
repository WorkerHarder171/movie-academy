"use client";

import React from "react";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { ButtonPrimary } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

// image
import bgProgram from "@/public/background/Program-Akademi.png";
import ProgramTitle from "@/public/title/Program-Academy.png";

// image
import vector from "@/public/program/Vector.png";
import amink from "@/public/program/amink.png";
import biebie from "@/public/program/biebie.png";
import select from "@/public/program/select.png";
import PendidikanTitle from "@/public/title/Program-Pendidikan.png";
import Greenscreen from "@/public/program/greenscreen.png";
import Camera from "@/public/program/camera.png";
import AnimationCharacter from "@/public/program/animation-character.png";

const card = [
  {
    id: 1,
    image: vector,
    title: "berbasis project",
    lead: "Konsep, Produksi, Publikasi",
  },
  {
    id: 2,
    image: amink,
    title: "profesional  & entrepreneur",
    lead: "pembimbing",
  },
  {
    id: 3,
    image: biebie,
    title: "pendidikan karakter",
    lead: "pembekalan",
  },
  {
    id: 4,
    image: select,
    title: "80% praktik",
    lead: "20% teori",
  },
];

const program = [
  { id: 1, image: Camera, title: "video & motion graphic" },
  {
    id: 2,
    image: AnimationCharacter,
    title: "3d modelling & animation",
  },
  {
    id: 3,
    image: Greenscreen,
    title: "visual effect & compositing",
  },
];

import ProgramText from "@/public/title/Program.png";
import { FasilitasMobile } from "@/components/Fasilitas/Fasilitas";
import { Toolmobile } from "@/components/Fasilitas/Tool";

export const ProgramMobile = () => {
  const [click, setClick] = React.useState(false);

  const handleOnClick = () => {
    setClick(true);
  };

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
            <div className="wrapper mx-auto">
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
                <div className="flex flex-col items-center bg-[#292929]">
                  <div className="wrapper">
                    <div className="relative flex py-8 px-4 items-center justify-center bg-[#d6ddf4] bg-cover bg-center">
                      <Image
                        src={bgProgram}
                        quality={100}
                        fill
                        sizes="(100vw)"
                        className="absolute z-10"
                        objectFit="cover"
                        alt="Hero image"
                      />
                      <div className="container mx-auto z-20 flex flex-col gap-6 pb-5 pt-10">
                        <Image
                          src={ProgramTitle}
                          alt="Program Academy"
                          className="w-11/12 object-cover"
                        />

                        <p className="text-sm text-bodyTextDark tracking-wider leading-relaxed">
                          Minilemon Movie Academy menerapkan metode belajar
                          dengan mengerjakan project/tugas kreatif sesuai target
                          yang ditetapkan. Siswa/i akan dibimbingan langsung
                          Profesional dan Entrepreneur mulai dari membuat
                          konsep, produksi hingga publikasi, baik secara teori
                          maupun praktik. Dengan MLS Siswa/i juga dibekali
                          pendidikan karakter, sehingga lulusan Minilemon Movie
                          Academy bukan hanya mencetak tenaga kerja yang handal,
                          tapi juga wirausaha yang berkarakter dalam berkarya.
                        </p>
                      </div>
                    </div>
                    <div className="min-h-screen bg-[#F1f1f1]">
                      <div className="container mx-auto py-10">
                        <div className="wrapper flex flex-col gap-10 items-center justify-center">
                          <p className="text-lg font-semibold capitalize text-center">
                            mencetak tenaga kerja handal dan wirausaha
                            berkarakter!
                          </p>
                          <div className="wrapper-card px-4 grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                            {card.map((item, index) => (
                              <div
                                className={`card flex items-center gap-3 rounded-[20px] bg-[#292929] py-4 px-5 relative ${
                                  item.id === 1 || item.id === 4
                                    ? "max-h-[130px] row-span-1"
                                    : "max-h-[200px] row-span-2"
                                }`}
                                key={index}
                              >
                                <div className="w-4/12 mx-auto my-auto relative">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    quality={100}
                                    className={`mx-auto min-h-[50px] ${
                                      item.id === 2 || item.id === 3
                                        ? "absolute  min-h-[100px] -top-12"
                                        : "relative"
                                    }`}
                                    objectFit="cover"
                                  />
                                </div>
                                <div
                                  className={`text-group flex gap-2 w-8/12 ${
                                    item.id === 2 || item.id === 3
                                      ? "flex-col-reverse"
                                      : "flex-col"
                                  }`}
                                >
                                  <p className="text-title text-xl font-semibold capitalize text-[#FFFF00] tracking-wider leading-[110%]">
                                    {item.title}
                                  </p>
                                  <p className="text-lead text-white font-normal text-md capitalize leading-[150%] tracking-wider">
                                    {item.lead}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="wrapper py-8 px-4 border-none bg-[#292929] flex flex-col items-center gap-5">
                        <div className="container mx-auto">
                          <Image
                            src={PendidikanTitle}
                            alt="Program Penddidikan"
                            className="w-10/12 mx-auto"
                          />
                          <div className="wrapper-card grid md:grid-cols-3 sm:grid-cols-1 gap-6 mt-5 px-4">
                            {program.map((item, index) => (
                              <div
                                className="flex flex-col-reverse gap-3 items-center"
                                key={index}
                              >
                                <p className="text-white font-semibold text-md capitalize text-center">
                                  {item.title}
                                </p>
                                <div className="w-full rounded-3xl overflow-hidden h-64 border-[6px] border-hijau bg-gray-50 relative">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full"
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-[#292929] w-full text-center">
                          <ButtonPrimary
                            className={`uppercase group`}
                            onClick={() => setClick(false)}
                          >
                            Read Less
                          </ButtonPrimary>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : null}

          <div id="facility" className="wrapper">
            <FasilitasMobile />
            <Toolmobile />
          </div>
        </div>
      </div>
    </section>
  );
};
