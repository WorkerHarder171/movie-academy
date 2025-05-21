import Jadwal from "@/public/title/Jadwal-Pendaftaran.png";
import Image from "next/image";
import { ButtonPrimary } from "@/components/ui/button";

const Daptar = () => {
  return (
    <section id="daftar">
      <div className="bg-[#f1f1f1]">
        <div className="container mx-auto py-10  px-4">
          <div className="flex flex-col gap-6">
            <Image className="w-12/12" src={Jadwal} alt="Jadwal Pendaptaran" />
            <p className="text-sm text-bodyTextLight tracking-wider leading-relaxed mb-5">
              {" "}
              Dapatkan keterampilan praktis untuk membangun karir di industri
              Movie dan Animasi, dengan 80% praktik yang dipandu langsung oleh
              praktisi profesional.
            </p>
            <ButtonPrimary className="uppercase group">See More</ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Daptar;
