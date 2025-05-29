"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-left leading-7 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="space-y-5">
        <motion.h2 
          className="text-2xl font-medium capitalize mb-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          About me
        </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Computer Science graduate from <span className="font-medium">NIT Jaipur</span> (2017) with{" "}
          <span className="font-medium">7+ years</span> of expertise in mobile development. Proficient in{" "}
          <span className="font-medium">Android, iOS, Flutter, and React Native</span> development.
        </motion.p>

        <motion.p
          className="text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Currently specializing in <span className="font-medium">Kotlin Multiplatform</span> development, 
          focusing on creating efficient cross-platform solutions. I'm passionate about building scalable 
          mobile applications and exploring emerging technologies through personal projects.
        </motion.p>
      </div>
    </motion.section>
  );
}
