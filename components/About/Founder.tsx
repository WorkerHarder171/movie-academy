import React from "react";
import Image from "next/image";
import FounderTitle from "@/public/title/Founder.png";

// image
import RenoHalzamer from "@/public/contributors/Reno.jpg";
import Heriyadi from "@/public/contributors/Heri.jpg";
import Wathin from "@/public/contributors/Watin.jpg";
import Biwara from "@/public/contributors/Biwara.jpg";
import Anis from "@/public/contributors/Anis.jpg";
import Francisca from "@/public/contributors/Siska.jpg";
import Elly from "@/public/contributors/Elly.jpg";

export const founder = [
    {
      nama: "Reno Halsamer",
      image: RenoHalzamer,
    },
    {
      nama: "Heriyadi Natawijaya",
      image: Heriyadi,
    },
    {
      nama: "Wathin Ciptawan",
      image: Wathin,
    },
    {
      nama: "Biwara Sakti Pracihara",
      image: Biwara,
    },
    {
      nama: "Francisca Diwati",
      image: Francisca,
    },
    {
      nama: "Elly Halsamer",
      image: Elly,
    },
    {
      nama: "Anis Ilahi Wahdati",
      image: Anis,
    },
  ];

export const FounderDesktop = () => {

  return (
    <section>
      <div className="bg-[#1B1B1B]">
        <div className="container mx-auto py-24">
          <div className="flex justify-center mb-16">
            <Image src={FounderTitle} alt="Founder" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
              {founder.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 justify-center items-center ${
                    item.nama === "Anis Ilahi Wahdati" ? "col-start-2" : ""
                  }`}
                >
                  <div className="h-[400px] bg-[#D5D5D5]">
                    <Image
                      src={item.image}
                      alt={item.nama}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-bodyTextDark text-center">
                    {item.nama}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FounderMobile = () => {

  return (
    <section>
      <div className="bg-[#1B1B1B]">
        <div className="container mx-auto py-10 px-4">
          <div className="flex justify-center mb-12">
            <Image className="w-7/12" src={FounderTitle} alt="Founder" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
              {founder.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 justify-center items-center ${
                    item.nama === "Anis Ilahi Wahdati" ? "col-span-2 mx-auto" : ""
                  }`}
                >
                  <div className="h-[200px] bg-[#D5D5D5]">
                    <Image
                      src={item.image}
                      alt={item.nama}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-bodyTextDark text-center">
                    {item.nama}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
