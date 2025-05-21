"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Beranda", path: "/" },
  { name: "Tentang Kami", path: "/about" },
  { name: "Fasilitas", path: "/facility" },
  { name: "Galeri Karya", path: "/gallery" },
  { name: "Program Akademi", path: "/program" },
];

export const NavDesktop = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6">
      {links.map((link) => {
        const isActive = pathname === link.path;
        return (
          <Link
            href={link.path}
            key={link.name}
            className={`text-sm font-semibold ${
              isActive ? "text-hijau" : "text-navbarText"
            } hover:text-hijau transition-all duration-200`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export const NavMobile = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-3">
      {links.map((link) => {
        const isActive = pathname === link.path;
        return (
          <Link
            href={link.path}
            key={link.name}
            className={`text-sm font-semibold ${
              isActive ? "text-hijau" : "text-navbarText"
            } hover:text-hijau transition-all duration-200`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
