"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

function fadeUp(delay: number, y = 20) {
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  };
}

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden bg-background"
    >
      {/* ── Decorative radial circle — top-right, half off-screen ────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[300px] -top-[100px] h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-6"
        style={{ paddingTop: "88px", paddingBottom: "96px" }}
      >
        {/* Pre-title badge */}
        <motion.div {...fadeUp(0.1)} className="mb-7">
          <span
            className="inline-block rounded-full border font-mono text-[0.7rem] uppercase tracking-[0.1em]"
            style={{
              backgroundColor: "var(--color-accent-light)",
              color: "var(--color-accent)",
              borderColor: "rgba(15,76,58,0.15)",
              padding: "0.3rem 0.9rem",
            }}
          >
            PGY-1 Pharmacy Resident · Ascension St. Vincent
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.25, 30)}
          className="font-display font-normal leading-[1.1] text-text-primary"
          style={{
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            maxWidth: "800px",
          }}
        >
          Dedicated to the Science of Healing
          <span style={{ color: "var(--color-gold)" }}>.</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          {...fadeUp(0.35, 20)}
          className="mt-2 font-display font-light"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "var(--color-text-secondary)",
          }}
        >
          Future Oncology Pharmacy Specialist.
        </motion.p>

        {/* Body paragraph */}
        <motion.p
          {...fadeUp(0.45, 15)}
          className="mt-6 font-body"
          style={{
            fontSize: "1rem",
            color: "var(--color-text-muted)",
            maxWidth: "540px",
            lineHeight: "1.8",
          }}
        >
          PharmD · University of Illinois at Chicago · Seven years of community
          pharmacy leadership · Now pioneering clinical excellence in oncology.
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUp(0.55, 15)}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/evidence-of-teaching/vte-oncology"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 font-body text-[0.9rem] font-medium text-white transition-all duration-[250ms] hover:scale-[1.02] hover:bg-accent-hover hover:shadow-accent"
          >
            View My Work
          </Link>
          <Link
            href="/curriculum-vitae"
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-border px-7 py-3.5 font-body text-[0.9rem] font-medium text-text-primary transition-all duration-[250ms] hover:border-accent hover:text-accent"
          >
            Download CV
          </Link>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted"
        style={{ animation: "bob 1.5s ease-in-out infinite alternate" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
