"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        padding: "4rem 1rem",
        background: "linear-gradient(180deg,#0f172a 0%, #0b1220 60%)",
        color: "#fff",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 900, textAlign: "center" }}
      >
        <motion.h1
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            margin: 0,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textShadow: "0 6px 24px rgba(2,6,23,0.6)",
          }}
        >
          Kevin Samson
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ color: "#cbd5e1", marginTop: 12, fontSize: "1.05rem" }}
        >
          I build delightful web experiences — projects, experiments and notes
          about the things I’m exploring in web and systems engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <a
            style={{
              background: "#fff",
              color: "#0b1220",
              padding: "0.6rem 1rem",
              borderRadius: 8,
              fontWeight: 600,
              boxShadow: "0 8px 30px rgba(2,6,23,0.35)",
              textDecoration: "none",
            }}
          >
            Explore Projects
          </a>

          <a
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
              padding: "0.6rem 1rem",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            About Me
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
