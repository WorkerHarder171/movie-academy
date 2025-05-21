import Image from "next/image";
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
export const ProgramBgDesktop = () => {

  return (
    <section>
      <div className="relative flex py-8 items-center justify-center bg-[#d6ddf4] bg-cover bg-center">
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
            // className="w-1/2"
          />

          <p className="text-bodyTextDark tracking-wider leading-relaxed">
            Minilemon Movie Academy menerapkan metode belajar dengan mengerjakan
            project/tugas kreatif sesuai target yang ditetapkan. Siswa/i akan
            dibimbingan langsung Profesional dan Entrepreneur mulai dari membuat
            konsep, produksi hingga publikasi, baik secara teori maupun praktik.
            Dengan MLS Siswa/i juga dibekali pendidikan karakter, sehingga
            lulusan Minilemon Movie Academy bukan hanya mencetak tenaga kerja
            yang handal, tapi juga wirausaha yang berkarakter dalam berkarya.
          </p>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="container mx-auto my-10">
          <div className="wrapper flex flex-col gap-10 items-center justify-center">
            <p className="text-3xl font-semibold capitalize text-center">
              mencetak tenaga kerja handal dan wirausaha berkarakter!
            </p>
            <div className="wrapper-card grid grid-cols-2 gap-5">
              {card.map((item, index) => (
                <div
                  className={`card flex items-center gap-3 rounded-[20px] bg-[#292929] py-8 px-10 relative ${
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
                          ? "absolute  min-h-[100px] -top-20"
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
                    <p className="text-title text-3xl font-semibold capitalize text-[#FFFF00] tracking-wider leading-[110%]">
                      {item.title}
                    </p>
                    <p className="text-lead text-white font-normal text-lg capitalize leading-[150%] tracking-wider">
                      {item.lead}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="wrapper py-20 bg-[#292929]">
          <div className="container mx-auto">
            <Image
              src={PendidikanTitle}
              alt="Program Penddidikan"
              className="w-1/2 mx-auto"
            />
            <div className="wrapper-card grid grid-cols-3 gap-6 mt-10">
              {program.map((item, index) => (
                <div className="flex flex-col gap-5 items-center" key={index}>
                  <p className="text-white font-semibold text-2xl capitalize text-center">
                    {item.title}
                  </p>
                  <div className="w-full rounded-3xl overflow-hidden h-64 border-[6px] border-hijau bg-gray-50 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProgramBgMobile = () => {

  return (
    <section>
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
            Minilemon Movie Academy menerapkan metode belajar dengan mengerjakan
            project/tugas kreatif sesuai target yang ditetapkan. Siswa/i akan
            dibimbingan langsung Profesional dan Entrepreneur mulai dari membuat
            konsep, produksi hingga publikasi, baik secara teori maupun praktik.
            Dengan MLS Siswa/i juga dibekali pendidikan karakter, sehingga
            lulusan Minilemon Movie Academy bukan hanya mencetak tenaga kerja
            yang handal, tapi juga wirausaha yang berkarakter dalam berkarya.
          </p>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="container mx-auto my-10">
          <div className="wrapper flex flex-col gap-10 items-center justify-center">
            <p className="text-lg font-semibold capitalize text-center">
              mencetak tenaga kerja handal dan wirausaha berkarakter!
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
        <div className="wrapper py-20 bg-[#292929]">
          <div className="container mx-auto">
            <Image
              src={PendidikanTitle}
              alt="Program Penddidikan"
              className="w-1/2 mx-auto"
            />
            <div className="wrapper-card grid md:grid-cols-3 sm:grid-cols-1 gap-6 mt-10 px-4">
              {program.map((item, index) => (
                <div className="flex flex-col gap-5 items-center" key={index}>
                  <p className="text-white font-semibold text-2xl capitalize text-center">
                    {item.title}
                  </p>
                  <div className="w-full rounded-3xl overflow-hidden h-64 border-[6px] border-hijau bg-gray-50 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

