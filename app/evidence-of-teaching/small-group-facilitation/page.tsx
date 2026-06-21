import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title:
    "Small Group Facilitation | Evidence of Teaching | Zainab Olayiwola, PharmD",
  description:
    "Small group facilitation experiences by Zainab Olayiwola including simulated clinical interviews at Purdue University and case study facilitation at Butler University.",
};

function EntryLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-mono uppercase"
      style={{
        fontSize: "0.65rem",
        letterSpacing: "0.12em",
        color: "var(--color-accent)",
        marginBottom: "0.4rem",
      }}
    >
      {children}
    </p>
  );
}

function DocIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <rect x="2" y="1" width="7.5" height="10.5" rx="1" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4 4.5h4M4 6.5h4M4 8.5h2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export default function SmallGroupFacilitationPage() {
  return (
    <>
      <PageHeader
        label="Evidence of Teaching"
        title="Small Group Facilitation"
        subtitle="Hands-on facilitation of clinical skills labs and case-based discussions for first-year pharmacy students across two university partnerships."
      />

      <section className="bg-white" style={{ padding: "4rem 0" }}>
        <div className="mx-auto max-w-[1200px] px-6">

          {/* Section intro */}
          <AnimatedSection delay={0}>
            <p
              className="font-body text-text-secondary"
              style={{
                fontSize: "1rem",
                lineHeight: "1.85",
                maxWidth: "680px",
                marginBottom: "3rem",
              }}
            >
              Small group facilitation demands a different skillset than lecturing — less
              telling, more drawing out. In both roles below, the goal was to create the
              conditions for students to think through clinical problems on their own, using
              questions and structured feedback rather than direct instruction.
            </p>
          </AnimatedSection>

          {/* Entry 1 */}
          <AnimatedSection delay={0.1}>
            {/* Header row */}
            <div
              className="flex items-start justify-between gap-6"
              style={{ marginBottom: "0.875rem" }}
            >
              <h2
                className="font-display font-medium text-text-primary"
                style={{ fontSize: "1.5rem", lineHeight: "1.2" }}
              >
                RX 517: Advanced Pharmacotherapeutics — Small Group Case Facilitation
              </h2>
              <span
                className="font-mono uppercase whitespace-nowrap flex-shrink-0"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  backgroundColor: "var(--color-accent-light)",
                  color: "var(--color-accent)",
                  border: "1px solid rgba(15,76,58,0.15)",
                  borderRadius: "999px",
                  padding: "0.25rem 0.8rem",
                }}
              >
                January–April 2026
              </span>
            </div>

            {/* Meta row */}
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              Advanced Clinical Case Facilitator&nbsp;·&nbsp;P3 (Third-Year) Pharmacy Students&nbsp;·&nbsp;Butler University College of Pharmacy
            </p>

            <EntryLabel>About the Presentation</EntryLabel>
            <p
              className="font-body text-text-secondary"
              style={{ fontSize: "0.925rem", lineHeight: "1.8", marginBottom: "1.25rem" }}
            >
              In this role, I served as an Advanced Clinical Case Facilitator for Butler
              University&apos;s RX 517 Advanced Pharmacotherapeutics course, leading small groups
              of third-year pharmacy students through complex, multi-disease-state patient
              cases requiring them to balance guideline recommendations with patient-specific
              nuances — renal impairment, comorbidities, and drug-drug interactions. I
              challenged students to defend their therapeutic recommendations using clinical
              guidelines and drug references, and utilized open-ended questions to push
              them to evaluate why a specific drug or dose was selected, driving them to
              think like clinical pharmacists.
            </p>

            <EntryLabel>Reflection</EntryLabel>
            <p
              className="font-body text-text-secondary"
              style={{
                fontSize: "0.925rem",
                lineHeight: "1.8",
                fontStyle: "italic",
                marginBottom: "1.25rem",
              }}
            >
              Facilitating across two completely different learner levels has expanded my
              versatility as an educator. With the first-year students at Purdue, I learned
              the importance of patience and building confidence, focusing heavily on
              foundational communication and the basics of patient care. With the advanced
              RX 517 students at Butler, my role shifted to facilitator — where the key to
              success was stepping back and allowing students to clinically reason and
              collaborate with their peers. Navigating both environments has prepared me to
              effectively precept and mentor any level of learner I encounter in my future
              clinical practice.
            </p>

            <EntryLabel>Supporting Materials</EntryLabel>
            <a
              href="/neutropenic-fever-case.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-body transition-all duration-150 hover:underline"
              style={{ fontSize: "0.825rem", color: "var(--color-accent)", gap: "0.4rem" }}
            >
              <DocIcon />
              View Teaching Case: Neutropenic Fever &amp; Vancomycin Dosing
            </a>
          </AnimatedSection>

          {/* Divider */}
          <hr
            style={{
              margin: "2.5rem 0",
              border: "none",
              borderTop: "1px solid var(--color-border)",
            }}
          />

          {/* Entry 2 */}
          <AnimatedSection delay={0.15}>
            {/* Header row */}
            <div
              className="flex items-start justify-between gap-6"
              style={{ marginBottom: "0.875rem" }}
            >
              <h2
                className="font-display font-medium text-text-primary"
                style={{ fontSize: "1.5rem", lineHeight: "1.2" }}
              >
                P1 Medication Therapy Management &amp; Medication History Lab
              </h2>
              <span
                className="font-mono uppercase whitespace-nowrap flex-shrink-0"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  backgroundColor: "var(--color-accent-light)",
                  color: "var(--color-accent)",
                  border: "1px solid rgba(15,76,58,0.15)",
                  borderRadius: "999px",
                  padding: "0.25rem 0.8rem",
                }}
              >
                September 2025
              </span>
            </div>

            {/* Meta row */}
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              Lab Coordinator&nbsp;·&nbsp;P1 (First-Year) Pharmacy Students&nbsp;·&nbsp;Purdue University College of Pharmacy
            </p>

            <EntryLabel>About the Presentation</EntryLabel>
            <p
              className="font-body text-text-secondary"
              style={{ fontSize: "0.925rem", lineHeight: "1.8", marginBottom: "1.25rem" }}
            >
              In this role, I facilitated simulated clinical interviews for first-year
              pharmacy students as part of Purdue University&apos;s P1 MTM and Medication
              History Lab. I served as the primary evaluator for mock patient interviews and
              medication history assessments, grading student performance using standardized
              rubrics across core competencies: patient introduction and verification, purpose
              statement, allergy assessment, medication history collection (prescription and
              non-prescription), use of patient-friendly language, open-ended questioning,
              nonverbal communication, organization and flow, and professional confidence.
              Beyond grading, I provided real-time constructive feedback during and
              immediately after each simulation, with a specific focus on identifying
              medication discrepancies and collecting accurate social and medical histories.
            </p>

            <EntryLabel>Reflection</EntryLabel>
            <p
              className="font-body text-text-secondary"
              style={{
                fontSize: "0.925rem",
                lineHeight: "1.8",
                fontStyle: "italic",
                marginBottom: "1.25rem",
              }}
            >
              With the first-year students at Purdue, I learned the importance of patience
              and building confidence, focusing heavily on foundational communication and the
              basics of patient care. The most common areas for growth were not clinical
              knowledge but communication — pacing the interview, maintaining eye contact,
              and resisting the urge to move between topics before completing each one.
              I found that specific, immediate feedback citing the exact moment in the
              interview where something worked or could be stronger was far more effective
              than general commentary.
            </p>

            <EntryLabel>Supporting Materials</EntryLabel>
            <a
              href="/mtm-rubric.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-body transition-all duration-150 hover:underline"
              style={{ fontSize: "0.825rem", color: "var(--color-accent)", gap: "0.4rem" }}
            >
              <DocIcon />
              View Sample Grading Rubric (MTM Lab)
            </a>
          </AnimatedSection>

          {/* ── Formal Evaluation ──────────────────────────────────────────── */}
          <AnimatedSection delay={0.1}>
            <hr
              style={{
                margin: "3rem 0 2.5rem 0",
                border: "none",
                borderTop: "1px solid var(--color-border)",
              }}
            />
            <EntryLabel>Formal Evaluation</EntryLabel>
            <div style={{ marginBottom: "1rem" }}>
              <span
                className="font-display"
                style={{ fontSize: "2rem", color: "var(--color-accent)", lineHeight: "1" }}
              >
                Outstanding
              </span>
              <p
                className="font-body"
                style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "0.25rem" }}
              >
                Rated across objectives, content, organization, delivery, and professionalism
              </p>
            </div>

            <blockquote
              style={{
                background: "var(--color-accent-light)",
                borderLeft: "4px solid var(--color-accent)",
                borderRadius: "0 0.75rem 0.75rem 0",
                padding: "1.5rem 1.75rem 1.5rem 2rem",
                margin: "0 0 1rem",
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "var(--color-text-primary)",
                  lineHeight: "1.65",
                }}
              >
                &ldquo;Great job! Great use of open-ended questions and well rehearsed.
                Summary was very helpful when conflicting parts arose.&rdquo;
              </p>
              <cite
                className="font-mono"
                style={{
                  display: "block",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-accent)",
                  marginTop: "0.75rem",
                  fontStyle: "normal",
                }}
              >
                — A. Hardesty, Evaluator, April 2026
              </cite>
            </blockquote>

            <a
              href="/teaching-evaluations.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-body transition-all duration-150 hover:underline"
              style={{ fontSize: "0.825rem", color: "var(--color-accent)", gap: "0.35rem" }}
            >
              <span>↗</span>
              View Full Evaluation Forms (PDF)
            </a>
          </AnimatedSection>

          {/* Bottom navigation */}
          <AnimatedSection delay={0.1}>
            <div
              className="flex items-center justify-between"
              style={{
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              <Link
                href="/evidence-of-teaching/didactic-lecture"
                className="font-body font-medium transition-colors duration-200 hover:opacity-75"
                style={{ fontSize: "0.875rem", color: "var(--color-accent)" }}
              >
                ← Didactic Lecture
              </Link>
              <Link
                href="/evidence-of-teaching/experiential-precepting"
                className="font-body font-medium transition-colors duration-200 hover:opacity-75"
                style={{ fontSize: "0.875rem", color: "var(--color-accent)" }}
              >
                Experiential Precepting →
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </>
  );
}
