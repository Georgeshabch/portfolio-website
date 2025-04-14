"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { useSectionInView } from "@/lib/hook";
import { useActiveSectionContext } from "@/context/active-section-contex"; // Fixed typo

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[10rem]"
      ref={ref}
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQE2N2ZezB3g9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702888813040?e=2147483647&v=beta&t=mbcvAOaZwp_GEGg7qX5h2At6Ee-Qj8vVaPAeFUTuZf0"
              alt="George Habchi profile picture" // Descriptive alt text
              width={192} // Numeric values for width/height
              height={192}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-3xl"
          >
            👋🏼
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m George Habchi.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy building
        <span className="italic"> sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group bg-gray-900 text-white px-5 py-2 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-5 py-2 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border
          border-black/10 dark:bg-white/10"
          href="/George Habchi CV.pdf"
          download={true}
          target="_blank"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-blue-800 flex items-center gap-2 rounded-full
          focus:scale-[1.15] hover:text-blue-900 hover:scale-110 active:scale-105 transition cursor-pointer border
          border-black/10"
          href="https://www.linkedin.com/in/georges-habchi-6a541821b/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 flex items-center font-bold gap-2 rounded-full
          focus:scale-[1.15] hover:text-pink-700 hover:scale-110 active:scale-105 transition cursor-pointer border
          border-black/10"
          href="https://www.instagram.com/georgestricks/"
          target="_blank"
        >
          <BsInstagram className="text-pink-600" />
        </a>
      </motion.div>
    </section>
  );
}
