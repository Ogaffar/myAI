import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Teaching Log | IPTeC Portfolio | Zainab Olayiwola, PharmD",
};

const STATS = [
  { value: "2", label: "University Partnerships" },
  { value: "2", label: "Teaching Modalities" },
  { value: "P1 & T4", label: "Student Levels Taught" },
  { value: "2025-26", label: "Academic Year" },
] as const;

const TABLE_ROWS = [
  {
    role: "T4 Therapeutic Case Conference TA",
    institution: "Butler University",
    format: "Small Group Facilitation",
    period: "Jan–Apr 2026",
  },
  {
    role: "P1 MTM & Medication History Lab Coordinator",
    institution: "Purdue University",
    format: "Simulated Clinical Interviews",
    period: "September 2025",
  },
] as const;

export default function TeachingLogPage() {
  return (
    <>
      <PageHeader
        label="IPTeC Documentation"
        title="Teaching Log 2025-2026"
        subtitle="A complete record of teaching activities, hours, and student interactions across the PGY-1 residency year, submitted as part of the IPTeC certification program."
      />

      {/* ── Download prompt ────────────────────────────────────────────── */}
      <section className="bg-white" style={{ paddingTop: "4rem" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection delay={0}>
            <div
              className="mx-auto rounded-[1.25rem] text-center"
              style={{
                backgroundColor: "var(--color-accent-light)",
                border: "1px solid rgba(15,76,58,0.15)",
                padding: "2rem",
                maxWidth: "600px",
              }}
            >
              <h2
                className="font-display font-medium text-text-primary"
                style={{ fontSize: "1.35rem", marginBottom: "0.875rem" }}
              >
                Download the Full Teaching Log
              </h2>
              <p
                className="font-body text-text-secondary"
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.75",
                  marginBottom: "1.5rem",
                }}
              >
                The complete IPTeC Teaching Log is available as an Excel file, containing all
                session dates, student levels, teaching modalities, contact hours, and
                cumulative totals for the 2025-2026 academic year.
              </p>
              <a
                href="/iptec-teaching-log.xlsx"
                download
                aria-label="Download IPTeC Teaching Log as Excel file"
                className="inline-flex items-center gap-2.5 rounded-full font-body font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{
                  backgroundColor: "var(--color-accent)",
                  padding: "0.875rem 1.75rem",
                  fontSize: "0.925rem",
                }}
              >
                <span style={{ fontSize: "1rem" }}>↓</span>
                Download Teaching Log (.xlsx)
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Teaching activities summary ────────────────────────────────── */}
      <section className="bg-white" style={{ padding: "3rem 0 5rem 0" }}>
        <div className="mx-auto max-w-[1200px] px-6">

          <AnimatedSection delay={0.05}>
            <h2
              className="font-display font-normal text-text-primary"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                marginBottom: "2.5rem",
              }}
            >
              Teaching Activities Overview
            </h2>
          </AnimatedSection>

          {/* Stat cards */}
          <AnimatedSection delay={0.1}>
            <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-[1rem] border text-center"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                    padding: "1.5rem 1rem",
                  }}
                >
                  <p
                    className="font-display leading-none"
                    style={{
                      fontSize: value.length > 4 ? "1.75rem" : "2.5rem",
                      color: "var(--color-accent)",
                    }}
                  >
                    {value}
                  </p>
                  <p
                    className="font-mono uppercase"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      color: "var(--color-text-muted)",
                      marginTop: "0.5rem",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Roles table */}
          <AnimatedSection delay={0.15}>
            <div
              className="overflow-hidden rounded-[0.75rem] border"
              style={{ borderColor: "var(--color-border)" }}
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "var(--color-accent)" }}>
                    {["Role", "Institution", "Format", "Period"].map((h) => (
                      <th
                        key={h}
                        className="font-mono uppercase text-white"
                        style={{
                          fontSize: "0.7rem",
                          letterSpacing: "0.1em",
                          padding: "0.875rem 1.25rem",
                          textAlign: "left",
                          fontWeight: 500,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, i) => (
                    <tr
                      key={row.role}
                      style={{
                        backgroundColor:
                          i % 2 === 0 ? "white" : "var(--color-surface)",
                      }}
                    >
                      <td
                        className="font-body font-medium text-text-primary"
                        style={{
                          fontSize: "0.875rem",
                          padding: "1rem 1.25rem",
                          borderTop: "1px solid var(--color-border)",
                        }}
                      >
                        {row.role}
                      </td>
                      <td
                        className="font-body text-text-secondary"
                        style={{
                          fontSize: "0.875rem",
                          padding: "1rem 1.25rem",
                          borderTop: "1px solid var(--color-border)",
                        }}
                      >
                        {row.institution}
                      </td>
                      <td
                        className="font-body text-text-secondary"
                        style={{
                          fontSize: "0.875rem",
                          padding: "1rem 1.25rem",
                          borderTop: "1px solid var(--color-border)",
                        }}
                      >
                        {row.format}
                      </td>
                      <td
                        className="font-mono text-text-muted"
                        style={{
                          fontSize: "0.8rem",
                          padding: "1rem 1.25rem",
                          borderTop: "1px solid var(--color-border)",
                        }}
                      >
                        {row.period}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Back link */}
          <AnimatedSection delay={0.2}>
            <div style={{ marginTop: "3rem" }}>
              <Link
                href="/iptec"
                className="group inline-flex items-center gap-1.5 font-body transition-colors duration-200 hover:text-accent"
                style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}
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
                Back to IPTeC Portfolio
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </>
  );
}
