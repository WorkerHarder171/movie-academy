import React from "react";
import Image from "next/image";
import VisiTitle from "@/public/title/Visi.png";
import MisiTitle from "@/public/title/Misi.png";

const misi = [
  {
    icon: "/icon/ceklist.svg",
    title:
      "Menjadi lembaga pendidikan dibidang perfilman dan industri kreatif yang melahirkan generasi muda berkarakter, kreatif dan mandiri.",
  },
  {
    icon: "/icon/ceklist.svg",
    title:
      "Menghasilkan lulusan yang mampu bekerja di bidang perfilman dan industri kreatif yang berkarakter, profesional, kolaboratif dan inovatif",
  },
  {
    icon: "/icon/ceklist.svg",
    title:
      "Mengembangkan tenaga pengajar dan manajemen pendidikan yang profesional.",
  },
  {
    icon: "/icon/ceklist.svg",
    title:
      "Menyelenggarakan kemitraan dengan masyarakat, lembaga pendidikan, instansi pemerintahan, dunia usaha dan industri, dan asosiasi profesi.",
  },
  {
    icon: "/icon/ceklist.svg",
    title:
      "Mengembangkan citra pendidikan yang profesional, bermutu dan siap bekerja.",
  },
];

export const VisiDesktop = () => {
  return (
    <section>
      <div className="bg-[#f1f1f1]">
        <div className="container mx-auto pt-24 pb-14">
          {/* Visi */}
          <div className="flex flex-col gap-6 mb-16">
            <Image src={VisiTitle} alt="Visi" />
            <p className="text-bodyTextLight tracking-wider leading-relaxed">
              Menjadi lembaga pendidikan dibidang perfilman dan industri kreatif
              yang melahirkan generasi muda berkarakter, kreatif dan mandiri.
            </p>
          </div>

          {/* Misi */}
          <div className="flex flex-col gap-6">
            <Image src={MisiTitle} alt="Misi" />

            <ul className="flex flex-col gap-2">
              {misi.map((misi) => {
                return (
                  <li key={misi.title} className="flex gap-4 items-center mb-6">
                    <Image
                      src={misi.icon}
                      alt="Misi"
                      style={{
                        filter:
                          "invert(17%) sepia(85%) saturate(751%) hue-rotate(63deg) brightness(92%) contrast(100%)",
                      }}
                      width={24}
                      height={24}
                    />
                    <p className="text-bodyTextLight tracking-wider leading-relaxed">
                      {misi.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VisiMobile = () => {
  return (
    <section>
      <div className="bg-[#f1f1f1]">
        <div className="container mx-auto pt-12 px-4 pb-7">
          {/* Visi */}
          <div className="flex flex-col gap-6 mb-16">
            <Image className="w-3/12" src={VisiTitle} alt="Visi" />
            <p className="text-bodyTextLight tracking-wider leading-relaxed text-sm">
              Menjadi lembaga pendidikan dibidang perfilman dan industri kreatif
              yang melahirkan generasi muda berkarakter, kreatif dan mandiri.
            </p>
          </div>

          {/* Misi */}
          <div className="flex flex-col gap-6">
            <Image className="w-3/12" src={MisiTitle} alt="Misi" />

            <ul className="flex flex-col gap-2">
              {misi.map((misi) => {
                return (
                  <li key={misi.title} className="flex gap-4 items-center mb-6">
                    <Image
                      src={misi.icon}
                      alt="Misi"
                      style={{
                        filter:
                          "invert(17%) sepia(85%) saturate(751%) hue-rotate(63deg) brightness(92%) contrast(100%)",
                      }}
                      width={16}
                      height={16}
                    />
                    <p className="text-bodyTextLight tracking-wider leading-relaxed text-sm">
                      {misi.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};