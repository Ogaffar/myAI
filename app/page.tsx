"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CredentialsSection from "@/components/CredentialsSection";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const MODALITY_CARDS = [
  {
    category: "5 Presentations",
    title: "Didactic Lecture",
    description:
      "Clinical pharmacy presentations delivered to pharmacists and residents across five rotations — covering oncology, infectious disease, nephrology, and pharmacy leadership.",
    href: "/evidence-of-teaching/didactic-lecture",
  },
  {
    category: "2 Experiences",
    title: "Small Group Facilitation",
    description:
      "Case study facilitation and simulated clinical interview evaluation with first-year pharmacy students at Purdue University and Butler University.",
    href: "/evidence-of-teaching/small-group-facilitation",
  },
  {
    category: "9 Sessions",
    title: "Experiential Precepting",
    description:
      "Co-precepting and experiential didactics with APPE and IPPE pharmacy students across critical care, oncology, and internal medicine at Ascension St. Vincent.",
    href: "/evidence-of-teaching/experiential-precepting",
  },
] as const;

function ModalityCard({
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
      className="h-full"
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

        {/* Modality cards — 3-column grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {MODALITY_CARDS.map((card, i) => (
            <ModalityCard
              key={card.href}
              {...card}
              delay={0.1 + i * 0.12}
              inView={inView}
            />
          ))}
        </div>
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
