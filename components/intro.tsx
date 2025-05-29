"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 max-w-[45rem] text-left scroll-mt-[100rem] px-4"
    >
      <div className="flex items-start">
        <div className="relative mr-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.2,
            }}
          >
            <Image
              src="/dp.jpeg"
              alt="Balveer Dhanoriya"
              width={64}
              height={64}
              quality={95}
              priority={true}
              className="h-16 w-16 rounded-full object-cover border-2 border-white/40 shadow-sm"
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-start">
          <motion.h1
            className="mb-2 text-2xl font-bold !leading-[1.2]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Balveer Dhanoriya
          </motion.h1>

          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Senior Mobile Developer specializing in Android, iOS & Cross-platform Development
          </motion.p>

          <motion.div
            className="flex items-center gap-2 text-sm"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-4 py-1.5 flex items-center gap-2 rounded-md outline-none hover:bg-gray-800 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <div className="flex gap-2 items-center">
              <a
                className="text-gray-700 hover:text-gray-950 transition"
                href="https://linkedin.com"
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a
                className="text-gray-700 hover:text-gray-950 transition text-[1.1rem]"
                href="https://github.com"
                target="_blank"
              >
                <FaGithubSquare />
              </a>

              <a
                className="text-gray-700 hover:text-gray-950 flex items-center gap-1 transition"
                href="/CV.pdf"
                download
              >
                CV <HiDownload className="opacity-60" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
