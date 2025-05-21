import Image from "next/image";
import bgHero from "@/public/background/Home.png";
import TitleHero from "@/public/title/Minilemon-Movie-Academy.png";
import { ButtonPrimary } from "@/components/ui/button";
import Link from "next/link";

export const HeroMobile = () => {
  return (
    <section>
      <div className="relative flex py-4 items-center justify-center bg-[#d6ddf4] bg-cover bg-center">
        <Image
          src={bgHero}
          quality={100}
          fill
          sizes="(100vw)"
          className="absolute z-10"
          objectFit="cover"
          alt="Hero image"
        />
        <div className="container mx-auto z-20 flex flex-col items-center justify-center gap-6 px-6 pb-5 pt-10">
          <p className="text-xl text-boldTextDark uppercase font-bold mb-2">
            Welcome To
          </p>
          <Image
            src={TitleHero}
            alt="Minilemon Movie Academy"
            className="w-4/4"
          />

          <p className="text-center text-sm text-bodyTextDark tracking-wider leading-relaxed">
            {" "}
            Pusat pelatihan Movie dan Animation di dirikan oleh{" "}
            <span className="text-boldTextDark font-semibold">
              Yayasan Bangun Generasi Muda{" "}
            </span>{" "}
            yang merupakan bagian dari Minilemon Universe, sebuah perusahaan
            kreatif dan intellectual property (MINILEMON) yang berorientasi pada
            Pendidikan, kebudayaan, Sosial, ilmu pengetahuan dan teknologi.
          </p>
          <Link href="/about">
            <ButtonPrimary className="uppercase group">See More</ButtonPrimary>
          </Link>
        </div>
      </div>
    </section>
  );
};
