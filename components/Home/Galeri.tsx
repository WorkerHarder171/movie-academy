"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { ButtonPrimary } from "@/components/ui/button";
import Link from "next/link";

const products = [
  { id: 1, image: "/product/panggung-boneka-minilemon.png" },
  { id: 2, image: "/product/petualangan-minilemon.png" },
  { id: 3, image: "/product/poster-parenting.png" },
  { id: 4, image: "/product/save-the-earth.png" },
];

export default function MarqueeCarousel() {
  return (
    <section className="bg-[#1B1B1B] w-full py-16">
      <div className="container mx-auto h-full">
        <div className="overflow-hidden py-8 flex items-center flex-col gap-12">
          <Image
            src="/title/Galeri-Karya.png"
            alt="Product Galeri"
            width={300}
            height={100}
          />
          <Splide
            options={{
              type: "loop",
              interval: 2000,
              pauseOnHover: false,
              perPage: 3,
              height: "492px",
              gap: "0.5rem",
              drag: "free",
              focus: "center",
              arrows: false,
              pagination: false,
              breakpoints: {
                768: {
                  perPage: 1,
                },
              },
              AutoScroll: {
                pauseOnHover: false,
                speed: 2,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {products.map((product) => (
              <SplideSlide key={product.id}>
                <Image
                  src={product.image}
                  alt={`Product ${product.id}`}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </SplideSlide>
            ))}
          </Splide>
          <Link href="/gallery">
          <ButtonPrimary className="uppercase group">See More</ButtonPrimary>
          </Link>
        </div>
      </div>
    </section>
  );
}
