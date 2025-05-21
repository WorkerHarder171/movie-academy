import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import "@splidejs/splide/css";
import NavigationMobile from "@/components/Header/NavigationMobile";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Movie Academy",
  description: "Movie Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <main> {children}</main>
        <NavigationMobile />
        <Footer />
      </body>
    </html>
  );
}
