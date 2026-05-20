import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "IPTeC Portfolio | Zainab Olayiwola, PharmD",
  description:
    "IPTeC teaching portfolio documentation including teaching log, midpoint evaluation, and final portfolio evaluation for Zainab Olayiwola, PGY-1 Pharmacy Resident.",
};

function DocumentIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="3"
        width="18"
        height="24"
        rx="2"
        stroke="var(--color-accent)"
        strokeWidth="1.75"
      />
      <path
        d="M9 10h10M9 14.5h10M9 19h6"
        stroke="var(--color-accent)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M23 3v6h6"
        stroke="var(--color-accent)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 3l6 6"
        stroke="var(--color-accent)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CARDS = [
  {
    id: "teaching-log",
    icon: true,
    title: "Teaching Log 2025-26",
    description:
      "A complete record of all teaching activities completed during the 2025-2026 residency year, including session dates, student levels, teaching modalities, and contact hours logged toward IPTeC certification.",
    linkLabel: "View Teaching Log →",
    linkHref: "/iptec/teaching-log",
    download: { label: "Download Log", href: "/iptec-teaching-log.xlsx" },
  },
  {
    id: "midpoint",
    icon: false,
    title: "Midpoint Portfolio Evaluation",
    description:
      "Formal mid-year evaluation of teaching competency development, submitted to the IPTeC program reviewing progress across facilitation, assessment, and professionalism domains.",
    linkLabel: "View Evaluation →",
    linkHref: "/iptec/midpoint-evaluation",
    download: null,
  },
  {
    id: "final",
    icon: false,
    title: "Final Portfolio Evaluation",
    description:
      "End-of-year comprehensive evaluation of teaching competencies, reflective practice, and overall contribution to pharmacy education across the 2025-2026 academic year.",
    linkLabel: "View Evaluation →",
    linkHref: "/iptec/final-evaluation",
    download: null,
  },
] as const;

export default function IptecIndexPage() {
  return (
    <>
      <PageHeader
        label="Individualized Pharmacy Teaching Experience Certificate"
        title="IPTeC Portfolio"
        subtitle="A structured documentation of teaching activities, competency development, and formal evaluation across the 2025-2026 academic year — submitted as part of the IPTeC certification through Butler University College of Pharmacy."
      />

      {/* ── What is IPTeC? ─────────────────────────────────────────────── */}
      <section className="bg-white" style={{ padding: "4rem 0" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection delay={0}>
            <div
              className="rounded-[1.5rem] border"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                padding: "2.5rem",
              }}
            >
              <h2
                className="font-display font-medium text-text-primary"
                style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
              >
                About the IPTeC Program
              </h2>
              <p
                className="font-body text-text-secondary"
                style={{ fontSize: "0.925rem", lineHeight: "1.85" }}
              >
                The Individualized Pharmacy Teaching Experience Certificate (IPTeC) is a
                structured teaching certification offered through Butler University College of
                Pharmacy to PGY-1 pharmacy residents who demonstrate commitment to pharmacy
                education. The program requires residents to complete a defined number of
                teaching hours across multiple modalities — including didactic instruction,
                small group facilitation, and experiential precepting — and to undergo formal
                evaluation at midpoint and at the end of the academic year. Completion of
                IPTeC reflects not only the time invested in teaching, but a deliberate
                commitment to developing the skills and habits of a clinical educator.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Documents grid ─────────────────────────────────────────────── */}
      <section
        className="bg-white"
        style={{ padding: "2rem 0 5rem 0" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((card, i) => (
              <AnimatedSection key={card.id} delay={i * 0.08}>
                <div
                  className="flex h-full flex-col rounded-[1.25rem] border bg-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: "var(--color-border)",
                    padding: "2rem",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 8px 24px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 1px 3px rgba(0,0,0,0.06)";
                  }}
                >
                  {card.icon && (
                    <div style={{ marginBottom: "1.25rem" }}>
                      <DocumentIcon />
                    </div>
                  )}

                  <h3
                    className="font-display font-medium text-text-primary"
                    style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}
                  >
                    {card.title}
                  </h3>

                  <p
                    className="font-body text-text-secondary"
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: "1.7",
                      flexGrow: 1,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {card.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={card.linkHref}
                      className="font-body font-medium transition-colors duration-200 hover:underline"
                      style={{ fontSize: "0.85rem", color: "var(--color-accent)" }}
                    >
                      {card.linkLabel}
                    </Link>

                    {card.download && (
                      <a
                        href={card.download.href}
                        download
                        className="inline-flex items-center gap-1.5 rounded-full font-body font-medium text-white transition-all duration-200 hover:opacity-90"
                        style={{
                          backgroundColor: "var(--color-accent)",
                          fontSize: "0.8rem",
                          padding: "0.35rem 1rem",
                        }}
                      >
                        <span style={{ fontSize: "0.85rem" }}>↓</span>
                        {card.download.label}
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
