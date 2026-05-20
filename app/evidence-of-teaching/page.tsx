import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Evidence of Teaching | Zainab Olayiwola, PharmD",
  description:
    "A portfolio of clinical pharmacy presentations demonstrating Zainab Olayiwola's evidence-based teaching across oncology, infectious disease, critical care, and pharmacy leadership.",
};

const PRESENTATIONS = [
  {
    category: "Oncology",
    rotation: "Oncology Rotation",
    date: "November 2025",
    audience: "Pharmacists & Pharmacy Residents",
    title: "VTE in Oncology: From Risk Assessment to Personalized Anticoagulation",
    description:
      "Grand Rounds presentation synthesizing landmark trial data (Hokusai, SELECT-D, CARAVAGGIO, CANVAS) and current ASCO, ITAC, and NCCN guidelines for cancer-associated thrombosis.",
    href: "/evidence-of-teaching/vte-oncology",
  },
  {
    category: "Infectious Disease",
    rotation: "Nephrology Rotation",
    date: "October 2025",
    audience: "Clinical Pharmacists & Staff",
    title: "Vancomycin vs. Daptomycin: An Evidence-Based Framework for MRSA",
    description:
      "Comprehensive evidence-based comparison of two frontline MRSA agents with a clinical decision framework covering efficacy, safety, monitoring, and cost-effectiveness.",
    href: "/evidence-of-teaching/daptomycin-vancomycin",
  },
  {
    category: "Pharmacy Leadership",
    rotation: "Administration Rotation",
    date: "February 2026",
    audience: "Director of Pharmacy & Pharmacists",
    title: "High Reliability & Just Culture in Hospital Pharmacy",
    description:
      "A presentation on building safety-first pharmacy cultures through High Reliability Organization principles and the Just Culture framework, with interactive scenario exercises.",
    href: "/evidence-of-teaching/high-reliability",
  },
  {
    category: "Oncology",
    rotation: "Oncology Rotation",
    date: "November 2025",
    audience: "Pharmacists & Pharmacy Residents",
    title: "Optimizing Management of Chemotherapy-Induced Nausea and Vomiting (CINV)",
    description:
      "A comprehensive review of CINV classification, emetogenic risk stratification, antiemetic prophylaxis regimens per NCCN guidelines, and the pharmacist's role in optimizing care.",
    href: "/evidence-of-teaching/cinv",
  },
  {
    category: "Critical Care / Nephrology",
    rotation: "Nephrology Rotation",
    date: "October 2025",
    audience: "Clinical Pharmacists & Residents",
    title: "IV Vancomycin Dosing for Sepsis in a Peritoneal Dialysis Patient",
    description:
      "A patient case presentation covering sepsis pathophysiology, diagnostic criteria, and the nuanced pharmacokinetics of vancomycin dosing in peritoneal dialysis patients.",
    href: "/evidence-of-teaching/vancomycin-pd",
  },
] as const;

/* ── Inline meta icons ────────────────────────────────────────────────── */

function RotationIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="11" height="9.5" rx="1.25" stroke="currentColor" strokeWidth="1.1" />
      <path d="M1 5h11" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4 1v2M9 1v2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <circle cx="5" cy="4" r="2" stroke="currentColor" strokeWidth="1.1" />
      <path d="M1 11.5c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="10" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.1" />
      <path d="M12.5 11.5c0-1.66-1.12-3-2.5-3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="6.5" r="5.25" stroke="currentColor" strokeWidth="1.1" />
      <path d="M6.5 4v2.75l1.75 1.25" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Presentation card ────────────────────────────────────────────────── */

function PresentationCard({
  category,
  rotation,
  date,
  audience,
  title,
  description,
  href,
}: (typeof PRESENTATIONS)[number]) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ borderColor: "var(--color-border)" }}
    >
      {/* Category tag */}
      <span
        className="mb-4 inline-block self-start rounded-full font-mono text-[0.65rem] uppercase tracking-[0.1em]"
        style={{
          backgroundColor: "var(--color-accent-light)",
          color: "var(--color-accent)",
          padding: "0.3rem 0.9rem",
        }}
      >
        {category}
      </span>

      {/* Title */}
      <h3
        className="font-display font-medium leading-[1.25] text-text-primary transition-colors duration-200 group-hover:text-accent"
        style={{ fontSize: "1.2rem", marginBottom: "0.875rem" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="font-body text-text-secondary"
        style={{
          fontSize: "0.9rem",
          lineHeight: "1.75",
          marginBottom: "1.5rem",
          flexGrow: 1,
        }}
      >
        {description}
      </p>

      {/* Meta lines */}
      <div
        className="flex flex-col gap-2 border-t pt-4"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div
          className="flex items-center gap-2 font-body"
          style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}
        >
          <span style={{ color: "var(--color-accent)", opacity: 0.7 }}>
            <RotationIcon />
          </span>
          {rotation}
        </div>
        <div
          className="flex items-center gap-2 font-body"
          style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}
        >
          <span style={{ color: "var(--color-accent)", opacity: 0.7 }}>
            <ClockIcon />
          </span>
          {date}
        </div>
        <div
          className="flex items-center gap-2 font-body"
          style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}
        >
          <span style={{ color: "var(--color-accent)", opacity: 0.7 }}>
            <PeopleIcon />
          </span>
          {audience}
        </div>
      </div>

      {/* CTA */}
      <p
        className="mt-4 font-body font-medium transition-colors duration-200 group-hover:text-accent"
        style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}
      >
        View Presentation&nbsp;→
      </p>
    </Link>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────── */

export default function EvidenceIndexPage() {
  return (
    <>
      <PageHeader
        label="Teaching Portfolio"
        title="Evidence of Teaching"
        subtitle="A curated collection of clinical pharmacy presentations delivered across five rotations, demonstrating evidence-based reasoning, guideline synthesis, and pharmacist-led education."
      />

      {/* ── Presentation grid ─────────────────────────────────────────── */}
      <section className="bg-white" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="mx-auto max-w-[1200px] px-6">

          {/* Section label + heading */}
          <AnimatedSection delay={0}>
            <p
              className="font-mono uppercase text-accent"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                marginBottom: "0.625rem",
              }}
            >
              Clinical Presentations
            </p>
            <h2
              className="font-display font-normal text-text-primary"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", marginBottom: "3rem" }}
            >
              All Presentations
            </h2>
          </AnimatedSection>

          {/* 6-col grid: row 1 = 3 × col-span-2, row 2 = 2 × col-span-3 */}
          <div className="grid grid-cols-6 gap-6">
            {PRESENTATIONS.map((p, i) => (
              <div
                key={p.href}
                className={`col-span-6 sm:col-span-3 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
              >
                <AnimatedSection delay={i * 0.07}>
                  <PresentationCard {...p} />
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teaching approach callout ──────────────────────────────────── */}
      <section style={{ paddingBottom: "5rem", backgroundColor: "white" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection delay={0}>
            <div
              className="flex flex-col gap-10 rounded-[1.5rem] p-12 md:flex-row md:gap-16"
              style={{
                backgroundColor: "var(--color-accent-light)",
                border: "1px solid rgba(15,76,58,0.12)",
              }}
            >
              {/* Left — text */}
              <div style={{ flex: "0 0 60%" }}>
                <h2
                  className="font-display font-medium text-text-primary"
                  style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
                >
                  Teaching Approach
                </h2>
                <p
                  className="font-body text-text-secondary"
                  style={{
                    fontSize: "0.925rem",
                    lineHeight: "1.8",
                    marginBottom: "1.5rem",
                  }}
                >
                  Each presentation was developed during structured residency rotations and
                  grounded in the best available clinical evidence. The goal across every session
                  was the same: equip pharmacists and students with both the knowledge and the
                  reasoning framework to make better decisions for their patients — not just to
                  know what the guidelines say, but to understand why.
                </p>
                <Link
                  href="/teaching-philosophy"
                  className="font-body font-medium transition-colors duration-200 hover:underline"
                  style={{ fontSize: "0.875rem", color: "var(--color-accent)" }}
                >
                  Read Full Teaching Philosophy&nbsp;→
                </Link>
              </div>

              {/* Right — stats */}
              <div className="flex flex-row gap-10 md:flex-col md:justify-center md:gap-8" style={{ flex: "0 0 40%" }}>
                {[
                  { value: "5", label: "Clinical Presentations" },
                  { value: "4", label: "Residency Rotations" },
                  { value: "2", label: "University Teaching Roles" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p
                      className="font-display leading-none"
                      style={{ fontSize: "2.5rem", color: "var(--color-accent)" }}
                    >
                      {value}
                    </p>
                    <p
                      className="font-mono uppercase"
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.08em",
                        color: "var(--color-text-muted)",
                        marginTop: "0.375rem",
                      }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
