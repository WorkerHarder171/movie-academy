import React from "react";
import FasilitasBg from "@/public/background/Facilities.png";
import FasilitasTitle from "@/public/title/Fasilitas-Academy.png";
import Image from "next/image";

export const FasilitasDesktop = () => {
  return (
    <section>
      <div className="relative flex py-8 items-center justify-center bg-[#d6ddf4] bg-cover bg-center">
        <Image
          src={FasilitasBg}
          quality={100}
          fill
          sizes="(100vw)"
          className="absolute z-10"
          objectFit="cover"
          alt="Hero image"
        />
        <div className="container mx-auto z-20 flex flex-col gap-6 pb-5 pt-10">
          <Image
            src={FasilitasTitle}
            alt="Program Academy"
            // className="w-1/2"
          />

          <p className="text-bodyTextDark tracking-wider leading-relaxed">
            Minilemon Movie Academy berada di lantai 2 gedung pyramid dan
            menjadi satu dengan History Of Java Museum, yang merupakan ikon
            wisata sejarah dan budaya berlokasi di Bantul Daerah Istimewa
            Yogyakarta, dengan suasana yang kental dengan nilai-nilai budaya,
            diharapkan siswa memiliki karakter yang kuat dan ikonik dalam
            belajar dan berkarya.
          </p>
        </div>
      </div>
    </section>
  );
};


export const FasilitasMobile = () => {
  return (
    <section>
      <div className="relative flex py-4 px-4 items-center justify-center bg-[#d6ddf4] bg-cover bg-center">
        <Image
          src={FasilitasBg}
          quality={100}
          fill
          sizes="(100vw)"
          className="absolute z-10"
          objectFit="cover"
          alt="Hero image"
        />
        <div className="container mx-auto z-20 flex flex-col gap-6 pb-5 pt-10">
          <Image
            src={FasilitasTitle}
            alt="Program Academy"
            // className="w-1/2"
          />

          <p className="text-sm text-bodyTextDark tracking-wider leading-relaxed">
            Minilemon Movie Academy berada di lantai 2 gedung pyramid dan
            menjadi satu dengan History Of Java Museum, yang merupakan ikon
            wisata sejarah dan budaya berlokasi di Bantul Daerah Istimewa
            Yogyakarta, dengan suasana yang kental dengan nilai-nilai budaya,
            diharapkan siswa memiliki karakter yang kuat dan ikonik dalam
            belajar dan berkarya.
          </p>
        </div>
      </div>
    </section>
  );
};

