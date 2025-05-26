"use client";

import React, { useState } from "react";
// import * as z from "zod";
import Image from "next/image";

import ContactUsTitle from "@/public/title/Contact-Us.png";
// import { ButtonPrimary } from "@/components/ui/button";

// const schema = z.object({
//   name: z
//     .string()
//     .min(2, { message: "Name must be at least 2 characters long" }),
//   email: z.string().email({ message: "Invalid email address" }),
//   subject: z
//     .string()
//     .min(5, { message: "Subject must be at least 5 characters long" }),
//   message: z
//     .string()
//     .min(10, { message: "Message must be at least 10 characters long" }),
//   honeypot: z.string().max(0, { message: "Bot detected" }),
// });

const ContactMobile = () => {
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact">
      <div className="bg-[#1B1B1B] py-10">
        <div className="container mx-auto  px-4">
          <div className="flex flex-col items-center gap-2 py-10">
            {" "}
            <div className="flex basis-1/2 flex-col items-center justify-center gap-4">
              <div className="">
                <Image className="w-7/12 text-center mx-auto" src={ContactUsTitle} alt="Contact Us"/>
              </div>
              <p className="text-xl text-[#d2def4]">How can we help you?</p>
            </div>
            <form className="basis-1/2 py-5">
              <div className="flex flex-col gap-2 text-sm">
                <div className="">
                  <label htmlFor="name" className="hidden">
                    Name
                  </label>
                  <input
                    placeholder="Name"
                    className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-[#d2def4]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-[#d2def4]"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="hidden">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-[#d2def4]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="hidden">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Message"
                    className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 pb-16 text-sm text-[#d2def4]"
                  />
                </div>
                <input type="hidden" />
                {/* <ButtonPrimary
                  type="submit"
                  className="mt-4 w-fit scale-125 font-bold uppercase shadow-md group"
                >
                  See More
                </ButtonPrimary> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMobile;
