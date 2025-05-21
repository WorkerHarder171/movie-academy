"use client";
import {FasilitasDesktop, FasilitasMobile} from "@/components/Fasilitas/Fasilitas";
import {ToolDesktop, Toolmobile} from "@/components/Fasilitas/Tool";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { useEffect, useState } from "react";
const Facility = () => {
  const [mounted, setMounted] = useState(false);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      {screenWidth < 1100 ? (

        <>
          <FasilitasMobile />
          <Toolmobile />
          {/* <div className="block  bg-yellow-100 text-yellow-800 text-center p-4 rounded-md">
            <p>
              Desain untuk mobile belum tersedia. Silakan lihat di layar yang
              lebih besar.
            </p>
          </div> */}
        </>
      ) : (
        <>
          <FasilitasDesktop />
          <ToolDesktop />
        </>
      )}
    </>
  );
};

export default Facility;
