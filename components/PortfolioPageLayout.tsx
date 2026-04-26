"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

export interface PortfolioPageLayoutProps {
  label: string;
  title: string;
  subtitle: string;
  setting: string;
  audience: string;
  date: string;
  overview: string;
  sections: Array<{ heading: string; body: string }>;
  objectives: string[];
  badge: string;
}

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/* ── Inline SVG icons ─────────────────────────────────────────────────── */

function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="12" height="11" rx="1" stroke="white" strokeWidth="1.25" />
      <path d="M5 14V10h2v4M9 14V10h2v4" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M5 6h1M8 6h1M5 8.5h1M8 8.5h1" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M2 6h12" stroke="white" strokeWidth="1.25" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="6" cy="5" r="2.25" stroke="white" strokeWidth="1.25" />
      <path d="M1.5 13.5c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="11.5" cy="5.5" r="1.75" stroke="white" strokeWidth="1.25" />
      <path d="M14.5 13.5c0-1.933-1.343-3.5-3-3.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="10" rx="1.5" stroke="white" strokeWidth="1.25" />
      <path d="M2 7h12" stroke="white" strokeWidth="1.25" />
      <path d="M5 2v3M11 2v3" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
      <rect x="5" y="9.5" width="2" height="2" rx="0.5" fill="white" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6" fill="var(--color-accent-light)" />
      <path d="M4.5 7l2 2 3-3.5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Meta pill ────────────────────────────────────────────────────────── */

function MetaPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 opacity-80">{icon}</div>
      <div>
        <p
          className="font-mono uppercase"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "0.2rem",
          }}
        >
          {label}
        </p>
        <p
          className="font-body font-medium text-white"
          style={{ fontSize: "0.875rem" }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

/* ── Main layout ──────────────────────────────────────────────────────── */

export default function PortfolioPageLayout({
  label,
  title,
  subtitle,
  setting,
  audience,
  date,
  overview,
  sections,
  objectives,
  badge,
}: PortfolioPageLayoutProps) {
  return (
    <>
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <PageHeader label={label} title={title} subtitle={subtitle} />
      </motion.div>

      {/* Meta strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        className="bg-accent"
        style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-12">
            <MetaPill icon={<BuildingIcon />} label="Setting" value={setting} />
            <div className="hidden sm:block h-8 w-px" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
            <MetaPill icon={<PeopleIcon />} label="Audience" value={audience} />
            <div className="hidden sm:block h-8 w-px" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
            <MetaPill icon={<CalendarIcon />} label="Date" value={date} />
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <section
        className="bg-white"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Back navigation */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
            className="mb-10"
          >
            <Link
              href="/evidence-of-teaching"
              className="group inline-flex items-center gap-1.5 font-body text-text-muted transition-colors duration-200 hover:text-accent"
              style={{ fontSize: "0.875rem" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              >
                <path
                  d="M10 12L6 8l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Evidence of Teaching
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">

            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            >
              {/* Overview */}
              <p
                className="font-mono uppercase text-accent"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                }}
              >
                Overview
              </p>
              <p
                className="font-body text-text-secondary"
                style={{
                  fontSize: "1.025rem",
                  lineHeight: "1.85",
                  marginBottom: "3rem",
                }}
              >
                {overview}
              </p>

              {/* Dynamic sections */}
              {sections.map((section) => (
                <div key={section.heading} style={{ marginBottom: "2.5rem" }}>
                  <h2
                    className="font-display font-medium text-text-primary"
                    style={{
                      fontSize: "1.4rem",
                      marginBottom: "0.75rem",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    {section.heading}
                  </h2>
                  <p
                    className="font-body text-text-secondary"
                    style={{ fontSize: "0.95rem", lineHeight: "1.85" }}
                  >
                    {section.body}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Right column — sticky sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="lg:self-start lg:sticky lg:top-[120px]"
            >
              <div
                className="rounded-[1.25rem] border border-border bg-surface"
                style={{ padding: "1.75rem" }}
              >
                <p
                  className="font-mono uppercase text-accent"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    marginBottom: "1.25rem",
                  }}
                >
                  Learning Objectives
                </p>

                {/* Objectives list */}
                <ul>
                  {objectives.map((obj, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5"
                      style={{
                        padding: "0.625rem 0",
                        borderBottom:
                          i < objectives.length - 1
                            ? "1px solid var(--color-border)"
                            : "none",
                      }}
                    >
                      <CheckIcon />
                      <span
                        className="font-body text-text-secondary"
                        style={{ fontSize: "0.875rem", lineHeight: "1.6" }}
                      >
                        {obj}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Rotation badge */}
                <div style={{ marginTop: "1.25rem" }}>
                  <span
                    className="inline-block rounded-full font-mono uppercase text-accent"
                    style={{
                      backgroundColor: "var(--color-accent-light)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      padding: "0.3rem 0.9rem",
                    }}
                  >
                    {badge}
                  </span>
                </div>
              </div>
            </motion.aside>

          </div>
        </div>
      </section>
    </>
  );
}
