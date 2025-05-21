import React from "react";
import Image from "next/image";
import SpecialPartnerTitle from "@/public/title/Special-Partner.png";

// image
import Arif from "@/public/contributors/Arif.jpg";
import Andi from "@/public/contributors/Andepp.jpg";
import Ghaza from "@/public/contributors/Ghaza.jpg";
import Fahmi from "@/public/contributors/Fahmi.jpg";

const partners = [
  {
    nama: "Arif Rakhman Hakim",
    image: Arif,
  },
  {
    nama: "Andi Hardjani",
    image: Andi,
  },
  {
    nama: " Muhammad Ghazariz",
    image: Ghaza,
  },
  {
    nama: "Fahmi Arif",
    image: Fahmi,
  },
];
export const SpecialPartnerDesktop = () => {
  return (
    <section>
      <div className="bg-[#F1F1F1]">
        <div className="container mx-auto py-24 ">
          <div className="flex justify-center mb-16">
            <Image
              src={SpecialPartnerTitle}
              alt="Special Partner"
              priority={true}
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-x-44 gap-y-16 px-16">
              {partners.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 justify-center items-center`}
                >
                  <div className="h-[400px] bg-[#D5D5D5]">
                    <Image
                      src={item.image}
                      alt={item.nama}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-[#333] text-center">{item.nama}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SpecialPartnerMobile = () => {
  return (
    <section>
      <div className="bg-[#F1F1F1]">
        <div className="container mx-auto py-24 ">
          <div className="flex justify-center mb-16">
            <Image
              src={SpecialPartnerTitle}
              alt="Special Partner"
              priority={true}
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 px-1">
              {partners.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 justify-center items-center`}
                >
                  <div className="h-[200px] bg-[#D5D5D5]">
                    <Image
                      src={item.image}
                      alt={item.nama}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-xs text-[#333] text-center">{item.nama}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
