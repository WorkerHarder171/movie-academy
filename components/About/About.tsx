import Image from "next/image";
import MovieTitle from "@/public/title/Minilemon-Movie-Academy.png";
import bgMovie from "@/public/background/About-us.png";

export const AboutMovieDesktop = () => {
  return (
    <section>
      <div className="relative flex py-8 items-center justify-center bg-[#d6ddf4] bg-cover bg-center">
        <Image src={bgMovie} quality={100} fill sizes="(100vw)" className="absolute z-10" objectFit="cover" alt="Hero image" />
        <div className="container mx-auto z-20 flex flex-col gap-6 pb-5 pt-10">
          <Image src={MovieTitle} alt="Minilemon Movie Academy" className="w-3/4" />

          <p className="text-bodyTextDark tracking-wider leading-relaxed">
            adalah pusat pelatihan Movie dan Animasi di dunia oleh{" "}
            <span className="text-boldTextDark font-semibold">Yayasan Bangun Generasi Muda</span> yang merupakan bagian dari Minilemon Universe sebuah
            perusahaan kreatif dan intellectual property <span className="text-boldTextDark font-semibold">(MINILEMON)</span> yang berkonsentrasi pada
            Pendidikan, kebudayaan, sosial, ilmu pengetahuan dan teknologi.
          </p>
        </div>
      </div>
    </section>
  );
};

export const AboutMovieMobile = () => {
  return (
    <section>
      <div className="relative flex py-5 px-4 items-center justify-center bg-[#d6ddf4] bg-cover bg-center">
        <Image src={bgMovie} quality={100} fill sizes="(100vw)" className="absolute z-10" objectFit="cover" alt="Hero image" />
        <div className="container mx-auto z-20 flex flex-col gap-6 pb-5 pt-10">
          <Image src={MovieTitle} alt="Minilemon Movie Academy" className="w-10/12" />

          <p className="text-bodyTextDark tracking-wider leading-relaxed">
            adalah pusat pelatihan Movie dan Animasi di dunia oleh{" "}
            <span className="text-boldTextDark font-semibold">Yayasan Bangun Generasi Muda</span> yang merupakan bagian dari Minilemon Universe sebuah
            perusahaan kreatif dan intellectual property <span className="text-boldTextDark font-semibold">(MINILEMON)</span> yang berkonsentrasi pada
            Pendidikan, kebudayaan, sosial, ilmu pengetahuan dan teknologi.
          </p>
        </div>
      </div>
    </section>
  );
};