"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="min-h-[80vh] bg-linear-to-br from-background via-background to-primary/5 animate-gradient">
      <main className="max-w-5xl mx-auto px-6 pb-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 text-center max-w-3xl"
        >
          <motion.div variants={item} className="space-y-2">
            <p className="text-muted-foreground text-lg font-light">Welcome</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I&apos;m{" "}
              <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Kevin Samson
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed"
          >
            Full-stack developer specializing in AI-driven automation and
            blockchain technology
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            I build innovative systems including AI-powered financial analyzers
            and blockchain-based verification platforms. Proficient in Python,
            C#, and modern web frameworks.
          </motion.p>

          <motion.div
            variants={item}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left"
          >
            {[
              {
                label: "Full-Stack",
                techs: ["React", "Next.js", "ASP.NET", "Flask", "FastAPI"],
              },
              {
                label: "AI",
                techs: ["Python", "GMFT", "Claude API", "Claude Agents"],
              },
              {
                label: "Blockchain & Web3",
                techs: ["Solidity", "Ethereum", "Solana", "Anchor"],
              },
            ].map(({ label, techs }) => (
              <div
                key={label}
                className="rounded-lg border border-border/50 bg-muted/30 p-4 space-y-2"
              >
                <p className="text-sm font-semibold">{label}</p>
                <div className="flex flex-wrap gap-1">
                  {techs.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-background border border-border/50 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
            >
              About Me
            </Link>
          </motion.div>

          <motion.div variants={item} className="pt-12 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a
                href="tel:+971567269454"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +971 56 7269454
              </a>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-border/50"></span>
              <a
                href="mailto:k3vinsamson@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                k3vinsamson@gmail.com
              </a>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-border/50"></span>
              <a
                href="https://github.com/kevin-samson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-border/50"></span>
              <a
                href="https://linkedin.com/in/kevin-samson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
