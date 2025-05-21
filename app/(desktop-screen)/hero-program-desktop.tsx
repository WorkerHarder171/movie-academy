"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ButtonPrimary } from "@/components/ui/button";
import Link from "next/link";

// image
import MainRoom from "@/public/facility/main-room.png";
import DesignRoom from "@/public/facility/design-room.png";
import MeetingRoom from "@/public/facility/meeting-room.png";
import ProgrammerRoom from "@/public/facility/programmer-room.png";

import ProgramText from "@/public/title/Program.png";
import Fasilitas from "@/public/title/Fasilitas.png";

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

export const ProgramDesktop = () => {

  return (
    <section className="w-full bg-[#F1f1f1]">
      <div className="container mx-auto py-14">
        <div className="flex items-center justify-between">
          <div className="flex basis-[55%] gap-6 flex-col">
            <Image src={ProgramText} alt="Program" />
            <p className="text-bodyTextLight tracking-widest leading-relaxed">
              Lulusan Program Pelatihan &quot;Minilemon Movie Academy&quot;
              adalah pribadi yang memiliki karakter sosial, keagamaan, dan
              kebangsaan yang kuat, menguasai kompetensi untuk bekerja
              profesional di bidang digital konten khususnya video grafis dan 3D
              animasi, mampu menembus dunia industri dan menjadi digital
              preneurship yang inovatif, adaptif sesuai tuntutan pasar global
              saat ini.
            </p>
            <p className="text-bodyTextLight tracking-widest leading-relaxed">
              Penyelenggaraan Program dibagi menjadi 3 tahap.
            </p>
            <Link href="/program">
            <ButtonPrimary className="uppercase group">See More</ButtonPrimary>
            </Link>
          </div>
          <div className="flex basis-[45%] gap-6 flex-col items-center">
            <Image src={Fasilitas} alt="Fasilitas" />
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
              className="w-full max-w-xs mx-auto custom-splide-arrows"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <SplideSlide key={index}>
                  <div className="h-[250px] w-full bg-gray-50 border-[6px] border-hijau rounded-3xl relative">
                    {facilities.map((item, index) => (
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-2xl"
                        layout="fill"
                        objectFit="cover"
                        key={index}
                      />
                    ))}
                  </div>
                </SplideSlide>
              ))}
            </Splide>
            <Link href="/facility">
              <ButtonPrimary className="uppercase group">
                See More
              </ButtonPrimary>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

