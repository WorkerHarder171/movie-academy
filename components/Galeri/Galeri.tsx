import React from "react";
import GaleriTitle from "@/public/title/Galeri-Karya.png";
import GaleriBg from "@/public/background/Galleries.png";
import Image from "next/image";

export const GaleriDesktop = () => {
  return (
    <section>
      <div className="relative flex py-8 items-center justify-center bg-[#d6ddf4] bg-cover bg-center">
        <Image
          src={GaleriBg}
          quality={100}
          fill
          sizes="(100vw)"
          className="absolute z-10"
          objectFit="cover"
          alt="Hero image"
        />
        <div className="container mx-auto z-20 flex flex-col gap-6 pb-5 pt-10">
          <Image
            src={GaleriTitle}
            alt="Program Academy"
            // className="w-1/2"
          />

          <p className="text-bodyTextDark tracking-wider leading-relaxed">
            Sebelum mendirikan Academy, Minilemon sudah berkiprah dalam
            pengembangan beberapa video game dan 3D animation diringkat SMK
            maupun Universitas di beberapa kota di Indonesia, seperti SMK N 13
            Surabaya, SMK N 1 Cimahi Bogor, Univ Binus Bandung dan Malang,
            Surabaya dan Univ Widya Surabaya, dan sudah memproduksi karya-karya
            dengan teknik videography dan 3d Animasi.
          </p>
        </div>
      </div>
    </section>
  );
};

export const GaleriMobile = () => {
  return (
    <section>
      <div className="relative flex py-8 px-4 items-center justify-center bg-[#d6ddf4] bg-cover bg-center">
        <Image
          src={GaleriBg}
          quality={100}
          fill
          className="absolute z-10 w-auto"
          objectFit="fill"
          alt="Hero image"
        />
        <div className="container mx-auto z-20 flex flex-col gap-6 pb-5 pt-10">
          <Image
            src={GaleriTitle}
            alt="Program Academy"
            className="w-8/12"
          />

          <p className="text-sm text-bodyTextDark tracking-wider leading-relaxed">
            Sebelum mendirikan Academy, Minilemon sudah berkiprah dalam
            pengembangan beberapa video game dan 3D animation diringkat SMK
            maupun Universitas di beberapa kota di Indonesia, seperti SMK N 13
            Surabaya, SMK N 1 Cimahi Bogor, Univ Binus Bandung dan Malang,
            Surabaya dan Univ Widya Surabaya, dan sudah memproduksi karya-karya
            dengan teknik videography dan 3d Animasi.
          </p>
        </div>
      </div>
    </section>
  );
};