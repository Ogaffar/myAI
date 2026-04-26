"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const COLUMNS = [
  {
    heading: "Education",
    items: [
      {
        title: "Doctor of Pharmacy (PharmD)",
        detail: "University of Illinois at Chicago",
        year: "2018",
      },
      {
        title: "Bachelor of Science, Biochemistry",
        detail: "University of Illinois at Chicago",
        year: "2014",
      },
    ],
  },
  {
    heading: "Licensure",
    items: [
      {
        title: "Registered Pharmacist (RPh)",
        detail: "Indiana Board of Pharmacy · #26031455A",
        year: "2025",
      },
      {
        title: "Registered Pharmacist (RPh)",
        detail: "Texas State Board of Pharmacy · #63507",
        year: "2018",
      },
    ],
  },
  {
    heading: "Certifications",
    items: [
      {
        title: "Pharmacy-Based Immunization Delivery",
        detail: "",
        year: "2017",
      },
      {
        title: "Cardiopulmonary Resuscitation (CPR)",
        detail: "",
        year: "2017",
      },
      {
        title: "Basic Cardiac Life Support (BCLS)",
        detail: "",
        year: "2017",
      },
      {
        title: "GFACT — GIAC Foundational Cybersecurity Technologies",
        detail: "",
        year: "2023",
      },
      {
        title: "GSEC — GIAC Security Essentials",
        detail: "",
        year: "2023",
      },
    ],
  },
] as const;

export default function CredentialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-surface"
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
            Qualifications
          </p>
          <h2
            className="font-display font-medium text-text-primary"
            style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
          >
            Education, Licensure &amp; Certifications
          </h2>
        </motion.div>

        {/* Three columns */}
        <div className="grid gap-10 md:grid-cols-3">
          {COLUMNS.map((col, colIdx) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + colIdx * 0.12, ease: EASE }}
            >
              {/* Column heading */}
              <p
                className="font-mono uppercase text-accent"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  paddingBottom: "0.75rem",
                  marginBottom: "0",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {col.heading}
              </p>

              {/* Credential items */}
              {col.items.map((item) => (
                <div
                  key={item.title + item.year}
                  style={{
                    padding: "0.875rem 0",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p
                      className="font-body font-medium text-text-primary"
                      style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
                    >
                      {item.title}
                    </p>
                    {item.year && (
                      <span
                        className="font-mono flex-shrink-0 rounded bg-gold-light text-gold"
                        style={{
                          fontSize: "0.65rem",
                          padding: "0.15rem 0.5rem",
                        }}
                      >
                        {item.year}
                      </span>
                    )}
                  </div>
                  {item.detail && (
                    <p
                      className="font-body mt-0.5 text-text-muted"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {item.detail}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
