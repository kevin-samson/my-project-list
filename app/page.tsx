"use client";

import React from "react";
import { motion } from "framer-motion";

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
      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6  pb-20 flex flex-col items-center justify-center min-h-screen">
        <div className="space-y-6 text-center max-w-3xl">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg font-light">Welcome</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I&apos;m{" "}
              <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Kevin Samson
              </span>
            </h1>
          </div>

          <p className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed">
            Full-stack developer specializing in AI-driven automation and
            blockchain technology
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I build innovative systems including AI-powered financial analyzers
            and blockchain-based verification platforms. Proficient in Python,
            C#, and modern web frameworks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8"></div>

          {/* Contact Links */}
          <div className="pt-12 border-t border-border/50">
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
          </div>
        </div>
      </main>
    </div>
  );
}
