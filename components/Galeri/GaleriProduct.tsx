import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import {
  fifthDivVariants,
  fourthDivVariants,
  thirdDivVariants,
} from "@/lib/animations/divVariants";
import useUpdateCurrentLink from "@/hooks/useUpdateCurrentLink";

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
  const [isExpanded, setIsExpanded] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleExpand = (index: number) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const { currentLink, setCurrentLink } = useUpdateCurrentLink();
  const refInView = useRef(null);
  const productInView = useInView(refInView, {
    amount: 1,
  });

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const scrollToTopProduct = (productId: number) => {
    setTimeout(() => {
      const productElement = document.getElementById(`product-${productId}`);
      if (productElement) {
        const yOffset = 0;
        const yPosition =
          productElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }, 800);
  };

  useEffect(() => {
    if (productInView) {
      setCurrentLink("#product");
    }
  }, [productInView, currentLink, setCurrentLink]);

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
                className=""
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
                    className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                    href="javascript:void(0)"
                    onClick={() => toggleExpand(1)}
                  >
                    <span className={isExpanded[1] == true ? "hidden" : "flex"}>
                      Read More{" "}
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
                <AnimatePresence>
                  {isExpanded[1] && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                      className="flex flex-col gap-y-6 text-bodyTextLight tracking-wider leading-relaxed text-sm"
                    >
                      <motion.p variants={paragraphVariants}>
                        Petualangan seru dengan rocket canggih dan mesin portal
                        Kak Biebie, membawa mereka ke berbagai tempat, mulai
                        dari Candi Borobudur, Jogjakarta hingga Pelabuhan
                        Surabaya. Di tengah pencarian, mereka menemukan bahwa
                        Ucup ternyata diculik oleh kelompok penjahat yang
                        terlibat dalam perburuan hewan langka secara ilegal.
                        Akankah mereka berhasil menyelamatkan Ucup dan
                        menggagalkan rencana jahat para pemburu? Saksikan
                        keseruan dan ketegangan film &quot;Petualangan si
                        Minilemon&quot;!{" "}
                        <span
                          onClick={() => {
                            toggleExpand(1);
                            scrollToTopProduct(1);
                          }}
                          className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                        >
                          Read Less
                        </span>
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="javascript:void(0)"
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
                    className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                    href="javascript:void(0)"
                    onClick={() => toggleExpand(2)}
                  >
                    <span
                      className={isExpanded[2] === true ? "hidden" : "flex"}
                    >
                      Read More{" "}
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
                <AnimatePresence>
                  {isExpanded[2] && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                      className="flex flex-col gap-y-6 text-bodyTextDark tracking-wider leading-relaxed text-sm"
                    >
                      <motion.p variants={paragraphVariants}>
                        “Berakit-rakit ke hulu, berenang-renang ke tepian.
                        Bersakit-sakit dahulu, bersenang-senang kemudian.”
                      </motion.p>
                      <motion.p variants={paragraphVariants}>
                        Perjalanan Minilemon tidaklah mudah. Mereka menghadapi
                        berbagai tantangan yang menguji ketangguhan dan
                        kebijaksanaan mereka. Dari menjaga disiplin, mengatasi
                        konflik dengan teman, hingga belajar bertahan hidup di
                        alam liar. Setiap rintangan, seperti membuat api,
                        berinteraksi dengan hewan liar, dan mencari makanan di
                        hutan, menjadi pelajaran berharga yang memperkuat
                        persahabatan dan solidaritas mereka.
                      </motion.p>
                      <motion.p variants={paragraphVariants}>
                        Saksikan bagaimana Minilemon mengatasi berbagai
                        tantangan di alam liar, dengan berbagai cara yang lucu,
                        seru dan menyenangkan sembari belajar tentang pentingnya
                        menjaga kelestarian alam kita!{" "}
                        <span
                          onClick={() => {
                            scrollToTopProduct(2);
                            toggleExpand(2);
                          }}
                          className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                        >
                          Read Less
                        </span>
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
      <motion.div
        variants={thirdDivVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="w-full bg-[#D5D5D5] py-14"
        id="product-3"
      >
        <motion.div className="mx-auto max-w-screen-640 px-6">
          <motion.div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                className="w-full"
                src={MinilemonExplore}
                layout="fill"
                objectFit="fill"
                alt="Minilemon Explore"
              />
            </div>
            <motion.div className="flex flex-col gap-y-6 text-start text-sm leading-[1.6rem] tracking-wider text-[#c0cbdf]/90 sm:leading-7">
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
                    className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                    href="javascript:void(0)"
                    onClick={() => toggleExpand(3)}
                  >
                    <span
                      className={isExpanded[3] === true ? "hidden" : "flex"}
                    >
                      Read More{" "}
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </p>
                <AnimatePresence>
                  {isExpanded[3] && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                      className="flex flex-col gap-y-6 text-bodyTextLight tracking-wider leading-relaxed text-sm"
                    >
                      <motion.p variants={paragraphVariants}>
                        Ke depannya, kami akan menghadirkan gameplay bertema
                        Pramuka di Jogja, di mana kamu bisa merasakan asyiknya
                        memancing, berburu, hingga membangun tenda di alam
                        terbuka.
                      </motion.p>
                      <motion.p variants={paragraphVariants}>
                        Yuk, gabung dalam petualangan seru di Minilemon
                        Explorer! Bersama, kita jelajahi kekayaan budaya dan
                        keindahan alam Nusantara yang luar biasa.{" "}
                        <span
                          onClick={() => {
                            toggleExpand(3);
                            scrollToTopProduct(3);
                          }}
                          className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                        >
                          Read Less
                        </span>
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Parenting */}
      <motion.div
        variants={fourthDivVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="w-full bg-[#1b1b1b] py-14"
        id="product-4"
      >
        <motion.div className="mx-auto max-w-screen-640 px-6">
          <motion.div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                className="w-full"
                src={Parenting}
                layout="fill"
                objectFit="fill"
                alt="Minilemon Live Parenting"
              />
            </div>
            <motion.div className="flex flex-col gap-y-6 text-start text-sm leading-[1.6rem] tracking-wider text-[#c0cbdf]/90 sm:leading-7"></motion.div>
            <div className="hidden flex-col lg:flex">
              <Image src={ParentingTitle1} alt="Minilemon Live Parenting1" />
              <Image
                className="w-8/12"
                src={ParentingTitle2}
                alt="Minilemon Live Parenting2"
              />
            </div>

            <div className="flex flex-col gap-6 text-sm">
              <motion.p
                variants={paragraphVariants}
                className=" text-bodyTextDark tracking-wider leading-relaxed"
              >
                Minilemon percaya bahwa pendidikan karakter anak tidak hanya
                menggunakan konten edukasi saja, akan tetapi dibutuhkan juga
                peran orang tua dalam membantu anak untuk mereka.
              </motion.p>
              <motion.p
                variants={paragraphVariants}
                className=" text-bodyTextDark tracking-wider leading-relaxed"
              >
                &quot;Panggung Boneka Minilemon&quot; adalah program parenting
                yang dirancang khusus membantu para bunda dengan tips dan tarian
                praktis yang dapat langsung diterapkan di rumah, sehingga orang
                tua dapat ikut berperan membangun karakter positif anak-anak
                mereka.{" "}
                <Link
                  className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                  href="javascript:void(0)"
                  onClick={() => toggleExpand(4)}
                >
                  <span className={isExpanded[4] ? "hidden" : "flex"}>
                    Read More{" "}
                    <span className="ml-1 flex items-center text-xs">❯</span>
                  </span>
                </Link>
              </motion.p>
              <AnimatePresence>
                {isExpanded[4] && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-y-6 text-bodyTextDark tracking-wider leading-relaxed text-sm "
                  >
                    <motion.p variants={paragraphVariants}>
                      menciptakan generasi yang kuat dan berkarakter.
                    </motion.p>
                    <motion.p variants={paragraphVariants}>
                      &quot;Sahabat Minilemon Parenting&quot; ditayangkan setiap
                      hari Senin, Rabu, dan Jumat, pukul 16.00 WIB di platform
                      YouTube, TikTok, dan Instagram.{" "}
                      <span
                        onClick={() => {
                          toggleExpand(4);
                          scrollToTopProduct(4);
                        }}
                        className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                      >
                        Read Less
                      </span>
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
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
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Kabaret Minilemon */}
      <motion.div
        variants={fifthDivVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="w-full bg-[#D5D5D5] py-14"
        id="product-5"
      >
        <motion.div className="mx-auto max-w-screen-640 px-6">
          <motion.div className="container flex flex-col items-center justify-center gap-4">
            <div className="relative h-[396px] w-full sm:h-[492px]">
              <Image
                className="w-full"
                src={KabaretShow}
                layout="fill"
                objectFit="fill"
                alt="Petualangan minilemon"
              />
            </div>
            <motion.div className="flex flex-col gap-y-6 text-start text-sm leading-[1.6rem] tracking-wider text-[#c0cbdf]/90 sm:leading-7">
              <div className="hidden flex-col lg:flex">
                <Image src={KabaretTitle} alt="Kabaret Minilemon" />
              </div>
              <div className="flex flex-col gap-6 text-sm">
                <motion.p
                  variants={paragraphVariants}
                  className=" text-bodyTextLight tracking-wider leading-relaxed"
                >
                  &quot;Kabaret Minilemon&quot; adalah pertunjukan yang
                  diperankan oleh anak-anak diatas panggung dengan kostum
                  karakter Minilemon dibuat musik dan tarian.
                </motion.p>
                <motion.p
                  variants={paragraphVariants}
                  className=" text-bodyTextLight tracking-wider leading-relaxed"
                >
                  Selain mengajarkan kisah dan pesan kejujuran, cerita
                  &quot;Kabaret Minilemon&quot; selalu diawali dengan
                  pesan-pesan moral yang positif. Melalui karakter Minilemon,
                  anak-anak diajak untuk bermain dan belajar tentang nilai-nilai
                  persahabatan, gotong royong, kejujuran, dan tanggung jawab.{" "}
                  <Link
                    className="inline-flex items-center font-bold uppercase text-blue-600 hover:underline"
                    href="javascript:void(0)"
                    onClick={() => toggleExpand(5)}
                  >
                    <span className={isExpanded[5] ? "hidden" : "flex"}>
                      Read More{" "}
                      <span className="ml-1 flex items-center text-xs">❯</span>
                    </span>
                  </Link>
                </motion.p>
                <AnimatePresence>
                  {isExpanded[5] && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                      className="flex flex-col gap-y-6 text-bodyTextLight tracking-wider leading-relaxed text-sm"
                    >
                      <motion.p variants={paragraphVariants}>
                        &quot;Panggung Boneka Minilemon&quot; ini dirancang
                        sempurna untuk anak-anak yang sedang dalam masa
                        pertumbuhan. di mana kesenangan dan pelajaran hidup
                        menyatu dalam sebuah pertunjukan.{" "}
                        <span
                          onClick={() => {
                            toggleExpand(5);
                            scrollToTopProduct(5);
                          }}
                          className="inline-flex cursor-pointer items-center font-bold uppercase text-blue-600 hover:underline"
                        >
                          Read Less
                        </span>
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
