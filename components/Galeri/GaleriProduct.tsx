import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

// title
import PetualangTitle from "@/public/title/Petualangan-Si-ML.png";
import MiniLemonTitle from "@/public/title/MLSTE.png";
import ExploreTitle from "@/public/title/ML-Explorer.png";
import KabaretTitle from "@/public/title/KBRT-ML.png";
import ParentingTitle1 from "@/public/title/minilemon-live-parenting-1.png";
import ParentingTitle2 from "@/public/title/minilemon-live-parenting-2.png";

//image
import PetualangaImage from "@/public/product/petualangan-minilemon.png";
import SaveTheEarth from "@/public/product/save-the-earth.png";
import MinilemonExplore from "@/public/product/petualangan-minilemon.png";
import KabaretShow from "@/public/product/panggung-boneka-minilemon.png";
import Parenting from "@/public/product/poster-parenting.png";

export function GalleryProductDesktop() {
  return (
    <section>
      {/* Petualangan MiniLemon */}
      <div className="bg-[#D5D5D5]">
        <div className="container mx-auto py-16">
          <div className="flex gap-12">
            <Image src={PetualangaImage} alt="Petualangan minilemon" />
            <div className="flex flex-col gap-6">
              <Image src={PetualangTitle} alt="Petualang minilemon" />
              <div className="flex flex-col gap-6">
                <p className=" text-bodyTextLight tracking-wider leading-relaxed">
                  Petualangan Minilemon dimulai dari keceroohan Ucup dan Togar
                  yang tanpa sengaja memicu kejar-kerjaran menegangkan dengan
                  sekelompok angsa marah. Dalam kekacauan itu, Ucup terpisah dan
                  menghilang setelah menemukan mesin portal misterius diruang
                  rahasia Kak Bibie.
                </p>
                <p className="text-bodyTextLight tracking-wider leading-relaxed">
                  Dengan kejadian itu, Anaak-anak Minilemon mulai bersatu dan
                  siap bertualang mencari Ucup dengan bantuan Kak Bibie dan
                  Paman Tigor.{" "}
                  <Link
                    className="inline-flex items-center font-bold uppercase text-hijau hover:underline"
                    href="#"
                  >
                    <span className="flex items-center">
                      Read More
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
              </div>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-2 text-bodyTextLight"
              >
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-xl">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Minilemon Save */}
      <div className="bg-[#1B1B1B]">
        <div className="container mx-auto py-16">
          <div className="flex gap-12">
            <Image src={SaveTheEarth} alt="Minilemon Save The Earth" />
            <div className="flex flex-col gap-6">
              <Image
                src={MiniLemonTitle}
                alt="Minilemon Save The Earth Title"
              />
              <div className="flex flex-col gap-6">
                <p className=" text-bodyTextDark tracking-wider leading-relaxed">
                  Dengan menyadari betapa pentingnya menjaga dan melestarikan
                  alam, Minilemon yang di pimpin Kak Biebie, memulai petualangan
                  mereka dalam serial animasi &quot;Minilemon Save The
                  Earth&quot;. Di sini, mereka tidak hanya belajar lebih dalam
                  tentang ekosistem yang rumit, keanekaragaman hayati yang
                  menakjubkan, pentingnya konservasi alam, tetapi mereka juga
                  belajar menanamkan nilai-nilai positif dan tanggung jawab
                  terhadap alam dari setiap langkah mereka.{" "}
                  <Link
                    className="inline-flex items-center font-bold uppercase text-hijau hover:underline"
                    href="#"
                  >
                    <span className="flex items-center">
                      Read More
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
              </div>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-2 text-bodyTextDark"
              >
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-xl">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Minilemon Explore */}
      <div className="bg-[#D5D5D5]">
        <div className="container mx-auto py-16">
          <div className="flex gap-12">
            <Image src={MinilemonExplore} alt="Minilemon Explore" />
            <div className="flex flex-col gap-6">
              <Image src={ExploreTitle} alt="Minilemon explore Title" />
              <div className="flex flex-col gap-6">
                <p className=" text-bodyTextLight tracking-wider leading-relaxed">
                  Minilemon Explorer adalah game interaktif yang memadukan
                  storytelling dan edukasi, menghadirkan pengalaman belajar
                  sekaligus bermain yang seru dalam balutan tema petualangan.
                  Dalam game ini, kamu akan diajak menjelajahi berbagai tempat
                  menarik di Nusantara, salah satunya adalah kota budaya yang
                  memesona, Yogyakarta!
                </p>
                <p className=" text-bodyTextLight tracking-wider leading-relaxed">
                  Tak hanya sampai di situ, Minilemon Explorer terus berkembang
                  dengan memperluas peta permainan ke berbagai lokasi ikonik di
                  seluruh Indonesia. Dari megahnya hutan Kalimantan, indahnya
                  pantai di Bali, hingga eksotisme alam Papua, setiap wilayah
                  menyuguhkan tema yang unik dan mekanisme permainan yang selalu
                  baru.{" "}
                  <Link
                    className="inline-flex items-center font-bold uppercase text-hijau hover:underline"
                    href="#"
                  >
                    <span className="flex items-center">
                      Read More
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
              </div>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-2 text-bodyTextLight"
              >
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-xl">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Parenting */}
      <div className="bg-[#1b1b1b]">
        <div className="container mx-auto py-16">
          <div className="flex gap-12">
            <Image src={Parenting} alt="Minilemon Live Parenting" />
            <div className="flex flex-col gap-6">
              <Image src={ParentingTitle1} alt="Minilemon Live Parenting1" />
              <Image src={ParentingTitle2} alt="Minilemon Live Parenting2" />
              <div className="flex flex-col gap-6">
                <p className=" text-bodyTextDark tracking-wider leading-relaxed">
                  Minilemon percaya bahwa pendidikan karakter anak tidak hanya
                  menggunakan konten edukasi saja, akan tetapi dibutuhkan juga
                  peran orang tua dalam membantu anak untuk mereka.
                </p>
                <p className=" text-bodyTextDark tracking-wider leading-relaxed">
                  &quot;Panggung Boneka Minilemon&quot; adalah program parenting
                  yang dirancang khusus membantu para bunda dengan tips dan
                  tarian praktis yang dapat langsung diterapkan di rumah,
                  sehingga orang tua dapat ikut berperan membangun karakter
                  positif anak-anak mereka.{" "}
                  <Link
                    className="inline-flex items-center font-bold uppercase text-hijau hover:underline"
                    href="#"
                  >
                    <span className="flex items-center">
                      Read More
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
              </div>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-2 text-bodyTextDark"
              >
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-xl">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Kabaret Minilemon */}
      <div className="bg-[#D5D5D5]">
        <div className="container mx-auto py-16">
          <div className="flex gap-12">
            <Image src={KabaretShow} alt="Petualangan minilemon" />
            <div className="flex flex-col gap-6">
              <Image src={KabaretTitle} alt="Kabaret Minilemon" />
              <div className="flex flex-col gap-6">
                <p className=" text-bodyTextLight tracking-wider leading-relaxed">
                  &quot;Kabaret Minilemon&quot; adalah pertunjukan yang
                  diperankan oleh anak-anak diatas panggung dengan kostum
                  karakter Minilemon dibuat musik dan tarian.
                </p>
                <p className=" text-bodyTextLight tracking-wider leading-relaxed">
                  Selain mengajarkan kisah dan pesan kejujuran, cerita
                  &quot;Kabaret Minilemon&quot; selalu diawali dengan
                  pesan-pesan moral yang positif. Melalui karakter Minilemon,
                  anak-anak diajak untuk bermain dan belajar tentang nilai-nilai
                  persahabatan, gotong royong, kejujuran, dan tanggung jawab.{" "}
                  <Link
                    className="inline-flex items-center font-bold uppercase text-hijau hover:underline"
                    href="#"
                  >
                    <span className="flex items-center">
                      Read More
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
              </div>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-2 text-bodyTextLight"
              >
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-xl">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//Mobile
export function GalleryProductMobile() {
  return (
    <section>
      {/* Petualangan MiniLemon */}
      <div className="w-full bg-[#D5D5D5] py-14" id="product-1">
        <div className="mx-auto max-w-screen-640 px-6">
          <div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                src={PetualangaImage}
                alt="Petualangan minilemon"
                layout="fill"
                objectFit="fill"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-y-6 text-start text-sm leading-[1.6rem] tracking-wider text-[#c0cbdf]/90 sm:leading-7">
              <div className="hidden flex-col lg:flex">
                <Image src={PetualangTitle} alt="Petualang minilemon" />
              </div>
              <div className="flex flex-col gap-6 text-sm">
                <p className=" text-bodyTextLight tracking-wider leading-relaxed">
                  Petualangan Minilemon dimulai dari keceroohan Ucup dan Togar
                  yang tanpa sengaja memicu kejar-kerjaran menegangkan dengan
                  sekelompok angsa marah. Dalam kekacauan itu, Ucup terpisah dan
                  menghilang setelah menemukan mesin portal misterius diruang
                  rahasia Kak Bibie.
                </p>
                <p className="text-bodyTextLight tracking-wider leading-relaxed">
                  Dengan kejadian itu, Anaak-anak Minilemon mulai bersatu dan
                  siap bertualang mencari Ucup dengan bantuan Kak Bibie dan
                  Paman Tigor.{" "}
                  <Link
                    className="inline-flex items-center font-bold uppercase text-hijau hover:underline"
                    href="#"
                  >
                    <span className="flex items-center">
                      Read More
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
              </div>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-2 text-bodyTextLight"
              >
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-xl">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Minilemon Save */}
      <div className="w-full bg-[#1b1b1b] py-14" id="product-2">
        <div className="mx-auto max-w-screen-640 px-6">
          <div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                src={SaveTheEarth}
                alt="Minilemon Save The Earth"
                layout="fill"
                objectFit="fill"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-y-6 text-start text-sm leading-[1.6rem] tracking-wider text-[#c0cbdf]/90 sm:leading-7">
              <div className="hidden flex-col lg:flex">
                <Image
                  src={MiniLemonTitle}
                  alt="Minilemon Save The Earth Title"
                />
              </div>
              <div className="flex flex-col gap-6 text-sm">
                <p className=" text-bodyTextDark tracking-wider leading-relaxed">
                  Dengan menyadari betapa pentingnya menjaga dan melestarikan
                  alam, Minilemon yang di pimpin Kak Biebie, memulai petualangan
                  mereka dalam serial animasi &quot;Minilemon Save The
                  Earth&quot;. Di sini, mereka tidak hanya belajar lebih dalam
                  tentang ekosistem yang rumit, keanekaragaman hayati yang
                  menakjubkan, pentingnya konservasi alam, tetapi mereka juga
                  belajar menanamkan nilai-nilai positif dan tanggung jawab
                  terhadap alam dari setiap langkah mereka.{" "}
                  <Link
                    className="inline-flex items-center font-bold uppercase text-hijau hover:underline"
                    href="#"
                  >
                    <span className="flex items-center">
                      Read More
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
              </div>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-2 text-bodyTextDark"
              >
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-xl">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Minilemon Explore */}
      <div className="w-full bg-[#D5D5D5] py-14" id="product-3">
        <div className="mx-auto max-w-screen-640 px-6">
          <div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                className="w-full"
                src={MinilemonExplore}
                layout="fill"
                objectFit="fill"
                alt="Minilemon Explore"
              />
            </div>
            <div className="flex flex-col gap-y-6 text-start text-sm leading-[1.6rem] tracking-wider text-[#c0cbdf]/90 sm:leading-7">
              <div className="hidden flex-col lg:flex">
                <Image src={ExploreTitle} alt="Minilemon explore Title" />
              </div>
              <div className="flex flex-col gap-6 text-sm">
                <p className=" text-bodyTextLight tracking-wider leading-relaxed">
                  Minilemon Explorer adalah game interaktif yang memadukan
                  storytelling dan edukasi, menghadirkan pengalaman belajar
                  sekaligus bermain yang seru dalam balutan tema petualangan.
                  Dalam game ini, kamu akan diajak menjelajahi berbagai tempat
                  menarik di Nusantara, salah satunya adalah kota budaya yang
                  memesona, Yogyakarta!
                </p>
                <p className=" text-bodyTextLight tracking-wider leading-relaxed">
                  Tak hanya sampai di situ, Minilemon Explorer terus berkembang
                  dengan memperluas peta permainan ke berbagai lokasi ikonik di
                  seluruh Indonesia. Dari megahnya hutan Kalimantan, indahnya
                  pantai di Bali, hingga eksotisme alam Papua, setiap wilayah
                  menyuguhkan tema yang unik dan mekanisme permainan yang selalu
                  baru.{" "}
                  <Link
                    className="inline-flex items-center font-bold uppercase text-hijau hover:underline"
                    href="#"
                  >
                    <span className="flex items-center">
                      Read More
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
              </div>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-2 text-bodyTextLight"
              >
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-xl">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Parenting */}
      <div className="w-full bg-[#1b1b1b] py-14" id="product-4">
        <div className="mx-auto max-w-screen-640 px-6">
          <div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                className="w-full"
                src={Parenting}
                layout="fill"
                objectFit="fill"
                alt="Minilemon Live Parenting"
              />
            </div>
            <div className="flex flex-col gap-y-6 text-start text-sm leading-[1.6rem] tracking-wider text-[#c0cbdf]/90 sm:leading-7"></div>
            <div className="hidden flex-col lg:flex">
              <Image src={ParentingTitle1} alt="Minilemon Live Parenting1" />
              <Image
                className="w-8/12"
                src={ParentingTitle2}
                alt="Minilemon Live Parenting2"
              />
            </div>

            <div className="flex flex-col gap-6 text-sm">
              <p className=" text-bodyTextDark tracking-wider leading-relaxed">
                Minilemon percaya bahwa pendidikan karakter anak tidak hanya
                menggunakan konten edukasi saja, akan tetapi dibutuhkan juga
                peran orang tua dalam membantu anak untuk mereka.
              </p>
              <p className=" text-bodyTextDark tracking-wider leading-relaxed">
                &quot;Panggung Boneka Minilemon&quot; adalah program parenting
                yang dirancang khusus membantu para bunda dengan tips dan tarian
                praktis yang dapat langsung diterapkan di rumah, sehingga orang
                tua dapat ikut berperan membangun karakter positif anak-anak
                mereka.{" "}
                <Link
                  className="inline-flex items-center font-bold uppercase text-hijau hover:underline"
                  href="#"
                >
                  <span className="flex items-center">
                    Read More
                    <span className="ml-1 flex items-center text-xs">❯</span>
                  </span>
                </Link>
              </p>
            </div>
            <Link
              href={"#"}
              className="flex flex-row items-center gap-x-2 text-bodyTextDark"
            >
              <span className="rounded-full bg-[#333] p-[.4rem] shadow-xl">
                <FaYoutube className="text-white" />
              </span>
              Trailer
            </Link>
          </div>
        </div>
      </div>
      {/* Kabaret Minilemon */}
      <div className="w-full bg-[#D5D5D5] py-14" id="product-5">
        <div className="mx-auto max-w-screen-640 px-6">
          <div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                className="w-full"
                src={KabaretShow}
                layout="fill"
                objectFit="fill"
                alt="Petualangan minilemon"
              />
            </div>
            <div className="flex flex-col gap-y-6 text-start text-sm leading-[1.6rem] tracking-wider text-[#c0cbdf]/90 sm:leading-7">
              <div className="hidden flex-col lg:flex">
                <Image src={KabaretTitle} alt="Kabaret Minilemon" />
              </div>
              <div className="flex flex-col gap-6 text-sm">
                <p className=" text-bodyTextLight tracking-wider leading-relaxed">
                  &quot;Kabaret Minilemon&quot; adalah pertunjukan yang
                  diperankan oleh anak-anak diatas panggung dengan kostum
                  karakter Minilemon dibuat musik dan tarian.
                </p>
                <p className=" text-bodyTextLight tracking-wider leading-relaxed">
                  Selain mengajarkan kisah dan pesan kejujuran, cerita
                  &quot;Kabaret Minilemon&quot; selalu diawali dengan
                  pesan-pesan moral yang positif. Melalui karakter Minilemon,
                  anak-anak diajak untuk bermain dan belajar tentang nilai-nilai
                  persahabatan, gotong royong, kejujuran, dan tanggung jawab.{" "}
                  <Link
                    className="inline-flex items-center font-bold uppercase text-hijau hover:underline"
                    href="#"
                  >
                    <span className="flex items-center">
                      Read More
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
              </div>
              <Link
                href={"#"}
                className="flex flex-row items-center gap-x-2 text-bodyTextLight"
              >
                <span className="rounded-full bg-[#333] p-[.4rem] shadow-xl">
                  <FaYoutube className="text-white" />
                </span>
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
