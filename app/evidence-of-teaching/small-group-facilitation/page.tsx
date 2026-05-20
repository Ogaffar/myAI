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
                Oncology Solid Tumors — T4 Therapeutic Case Conference Facilitation
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
              Teaching Assistant&nbsp;·&nbsp;T4 (P4) Pharmacy Students&nbsp;·&nbsp;Butler University College of Pharmacy
            </p>

            <EntryLabel>About the Presentation</EntryLabel>
            <p
              className="font-body text-text-secondary"
              style={{ fontSize: "0.925rem", lineHeight: "1.8", marginBottom: "1.25rem" }}
            >
              In this role, I served as a Teaching Assistant for Butler University&apos;s
              longitudinal T4 Therapeutic Case Conference course, facilitating weekly small
              group case study discussions on oncology solid tumor topics. Rather than
              presenting content, my role was to guide student reasoning — posing clinically
              grounded, open-ended questions that pushed students to evaluate complex
              therapeutic scenarios and arrive at evidence-based recommendations
              independently. The goal was to challenge surface-level pattern matching and
              encourage the kind of integrative clinical thinking that distinguishes a good
              pharmacist.
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
              Facilitation is harder than lecturing, and more rewarding. You cannot rely on
              having the right answer ready — you have to be responsive to where the students
              are and what they&apos;re wrestling with in real time. The oncology content added
              another layer because many students found the complexity of solid tumor
              management daunting. I found that the most productive moments came when I
              resisted the urge to fill silence too quickly and let students sit with the
              discomfort of not immediately knowing the answer. That is where the real
              thinking happened.
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
              Working with first-year students brought me back to the foundational skills
              that experienced pharmacists execute automatically — and reminded me how much
              intention those skills actually require. The most common areas for growth were
              not clinical knowledge but communication: pacing the interview, maintaining eye
              contact, and resisting the urge to bounce between topics before completing each
              one. I found that the most effective feedback was specific and immediate —
              citing the exact moment in the interview where something worked or could be
              stronger, rather than speaking in generalities. Real-time feedback is a skill
              I am continuing to develop.
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
