"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const fade: Variants = {
  hidden: { opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const SKILLS = [
  "React",
  "Next.js",
  "ASP.NET",
  "Python",
  "Claude API",
  "Solidity",
  "Solana",
  "Docker",
];

export default function HomeClient() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 md:py-36">
      <motion.p
        custom={0}
        variants={fade}
        initial="hidden"
        animate="show"
        className="text-sm text-(--nextra-colors-gray-500,#6b7280) mb-6 tracking-wide uppercase"
      >
        Kevin Samson
      </motion.p>

      <motion.h1
        custom={1}
        variants={fade}
        initial="hidden"
        animate="show"
        className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-6"
      >
        Full-stack developer
        <br />
        specializing in AI &amp; blockchain.
      </motion.h1>

      <motion.p
        custom={2}
        variants={fade}
        initial="hidden"
        animate="show"
        className="text-base leading-relaxed text-(--nextra-colors-gray-500,#6b7280) mb-10 max-w-xl"
      >
        I build AI-driven automation systems and blockchain verification
        platforms. Proficient in Python, C#, and modern web frameworks —
        currently based in Abu Dhabi, UAE.
      </motion.p>

      <motion.div
        custom={3}
        variants={fade}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-1.5 mb-12"
      >
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 rounded border border-(--nextra-colors-gray-200,#e5e7eb) text-(--nextra-colors-gray-500,#6b7280)"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      <motion.div
        custom={4}
        variants={fade}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-6 text-sm mb-16"
      >
        <Link
          href="/projects"
          className="font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          View Projects →
        </Link>
        <Link
          href="/about"
          className="font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          About Me →
        </Link>
      </motion.div>

      <motion.div
        custom={5}
        variants={fade}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-(--nextra-colors-gray-500,#6b7280) border-t border-(--nextra-colors-gray-200,#e5e7eb) pt-8"
      >
        <a
          href="mailto:k3vinsamson@gmail.com"
          className="hover:opacity-70 transition-opacity"
        >
          k3vinsamson@gmail.com
        </a>
        <a
          href="https://github.com/kevin-samson"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-samson--/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          LinkedIn
        </a>
        <a
          href="tel:+971567269454"
          className="hover:opacity-70 transition-opacity"
        >
          +971 56 726 9454
        </a>
      </motion.div>
    </main>
  );
}
