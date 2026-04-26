"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const TESTIMONIALS = [
  {
    quote:
      "Zee is incredibly resilient and highly adaptable. Having witnessed her transition from the community setting to the structured environment of residency, I have seen her grow tremendously. I couldn't be more proud of her progress and am excited to see the impact she will make as she continues her journey.",
    name: "Mary Ewusie, PharmD",
    title: "Walmart Health & Wellness Market Director",
  },
  {
    quote:
      "Zee is a trailblazer. She remains calm and composed under pressure and is extremely personable. She is a great leader and a compassionate pharmacist; it was truly a pleasure to work with her.",
    name: "Paul K., PharmD",
    title: "Clinical Colleague",
  },
] as const;

function TestimonialCard({
  quote,
  name,
  title,
  delay,
  inView,
}: {
  quote: string;
  name: string;
  title: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className="flex flex-col rounded-[1.25rem] p-10"
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Decorative large quotation mark */}
      <p
        aria-hidden="true"
        className="font-display font-normal leading-[0.8] select-none"
        style={{
          fontSize: "5rem",
          color: "rgba(255,255,255,0.15)",
          marginBottom: "-0.5rem",
        }}
      >
        &ldquo;
      </p>

      {/* Quote */}
      <p
        className="font-body"
        style={{
          fontSize: "1.025rem",
          lineHeight: "1.8",
          color: "rgba(255,255,255,0.85)",
          fontStyle: "italic",
        }}
      >
        {quote}
      </p>

      {/* Divider */}
      <div
        className="my-6"
        style={{
          width: "32px",
          height: "1px",
          background: "rgba(255,255,255,0.2)",
        }}
      />

      {/* Attribution */}
      <div>
        <p
          className="font-body font-semibold text-white"
          style={{ fontSize: "0.9rem" }}
        >
          {name}
        </p>
        <p
          className="font-mono uppercase"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.5)",
            marginTop: "0.2rem",
          }}
        >
          {title}
        </p>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-accent"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16 text-center"
        >
          <p
            className="font-mono uppercase"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "0.5rem",
            }}
          >
            What Colleagues Say
          </p>
          <h2
            className="font-display font-normal text-white"
            style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
          >
            Trusted. Resilient. Exceptional.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={t.name}
              {...t}
              delay={0.15 + i * 0.15}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
