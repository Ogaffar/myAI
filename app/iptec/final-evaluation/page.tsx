import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Final Evaluation | IPTeC Portfolio | Zainab Olayiwola, PharmD",
};

export default function FinalEvaluationPage() {
  return (
    <>
      <PageHeader
        label="IPTeC Documentation"
        title="Final Portfolio Evaluation"
        subtitle="Comprehensive end-of-year evaluation of teaching competencies, reflective practice, and overall contribution to pharmacy education."
      />

      <section className="bg-white" style={{ padding: "5rem 0" }}>
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
              <p
                className="font-body text-text-secondary"
                style={{ fontSize: "0.925rem", lineHeight: "1.85" }}
              >
                The final portfolio evaluation represents the culminating assessment of
                teaching competency development across the 2025-2026 academic year. It
                evaluates performance across all teaching modalities completed, the quality
                of student feedback provided, and demonstrated growth as a clinical educator.
                Completion of the final evaluation fulfills the formal requirements for IPTeC
                certification.
              </p>
            </div>

            <p
              className="font-mono text-center"
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-muted)",
                marginTop: "1rem",
              }}
            >
              Evaluation documentation is available upon request for program coordinators
              and academic hiring committees.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div style={{ marginTop: "3rem", textAlign: "center" }}>
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
