"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CredentialsSection from "@/components/CredentialsSection";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const PORTFOLIO_CARDS = [
  {
    category: "Infectious Disease",
    title: "VTE in Oncology: From Risk Assessment to Personalized Anticoagulation",
    description:
      "A Grand Rounds presentation synthesizing landmark trial data and current ASCO, ITAC, and NCCN guidelines for managing VTE in cancer patients.",
    href: "/evidence-of-teaching/vte-oncology",
  },
  {
    category: "Infectious Disease",
    title: "Vancomycin vs. Daptomycin: An Evidence-Based Framework for MRSA",
    description:
      "A comprehensive, evidence-based comparison of two frontline agents for inpatient MRSA infections, with a clinical decision framework for pharmacists.",
    href: "/evidence-of-teaching/daptomycin-vancomycin",
  },
  {
    category: "Pharmacy Leadership",
    title: "High Reliability & Just Culture in Hospital Pharmacy",
    description:
      "A presentation on building safety cultures in inpatient pharmacy — balancing accountability with learning through the lens of High Reliability Organizations.",
    href: "/evidence-of-teaching/high-reliability",
  },
  {
    category: "Oncology",
    title: "Optimizing Management of CINV",
    description:
      "A comprehensive review of CINV classification, emetogenic risk stratification, and antiemetic prophylaxis strategies per NCCN guidelines.",
    href: "/evidence-of-teaching/cinv",
  },
  {
    category: "Critical Care / Nephrology",
    title: "IV Vancomycin Dosing in a Peritoneal Dialysis Patient",
    description:
      "A patient case applying sepsis diagnostics and vancomycin pharmacokinetic principles to a high-complexity patient with ESRD on peritoneal dialysis.",
    href: "/evidence-of-teaching/vancomycin-pd",
  },
] as const;

function PortfolioCard({
  category,
  title,
  description,
  href,
  delay,
  inView,
}: {
  category: string;
  title: string;
  description: string;
  href: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      <Link
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
      >
        {/* Top accent bar */}
        <div className="h-1 w-full bg-accent" />

        {/* Card body */}
        <div className="flex flex-1 flex-col p-8">
          {/* Category tag */}
          <p
            className="font-mono uppercase text-accent"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
            }}
          >
            {category}
          </p>

          {/* Title */}
          <h3
            className="font-display font-medium leading-[1.3] text-text-primary"
            style={{ fontSize: "1.35rem" }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="mt-3 font-body text-text-secondary"
            style={{ fontSize: "0.875rem", lineHeight: "1.7" }}
          >
            {description}
          </p>

          {/* Read more — pushed to bottom */}
          <p
            className="mt-auto pt-6 font-body font-medium text-accent transition-colors duration-200 group-hover:text-accent-hover"
            style={{ fontSize: "0.825rem" }}
          >
            Read More →
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

function PortfolioPreviewSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-background"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <p
            className="font-mono uppercase text-text-muted"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            Evidence of Teaching
          </p>
          <h2
            className="font-display font-medium text-text-primary"
            style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
          >
            From the Classroom to the Bedside
          </h2>
        </motion.div>

        {/* Cards grid — 3-up row 1, 2-up centered row 2 */}
        <div className="grid grid-cols-6 gap-6">
          {PORTFOLIO_CARDS.map((card, i) => (
            <div
              key={card.href}
              className={`col-span-6 sm:col-span-3 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <PortfolioCard
                {...card}
                delay={0.1 + i * 0.1}
                inView={inView}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
          className="mt-10 text-center"
        >
          <Link
            href="/evidence-of-teaching"
            className="font-body font-medium transition-opacity duration-200 hover:opacity-70"
            style={{
              fontSize: "0.9rem",
              color: "var(--color-accent)",
              borderBottom: "1px solid var(--color-accent)",
              paddingBottom: "2px",
            }}
          >
            View All Presentations →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <CredentialsSection />
      <PortfolioPreviewSection />
    </>
  );
}
