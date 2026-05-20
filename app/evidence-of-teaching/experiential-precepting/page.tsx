// NOTE FOR ZAINAB: Three co-precepting entries have placeholder dates and reflections.
// Please provide: (1) the date/month for each co-precepting session,
// (2) your personal reflection for each session (2-4 sentences, first person).
// Update these directly in this file under the CO_PRECEPTING_ENTRIES array.

import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title:
    "Experiential Precepting | Evidence of Teaching | Zainab Olayiwola, PharmD",
  description:
    "Experiential precepting and topic facilitation experiences by Zainab Olayiwola with APPE and IPPE pharmacy students at Ascension St. Vincent Evansville.",
};

const CO_PRECEPTING_ENTRIES = [
  {
    title: "Supportive Care in the ICU",
    date: "[DATE — TO BE CONFIRMED BY ZAINAB]",
    meta: "Co-Preceptor · Other Healthcare Professional Students · Ascension St. Vincent Evansville",
    about:
      "In this co-precepting experience, I contributed to the design and delivery of a rotation focused on supportive care in the intensive care unit setting. My role involved participating in patient care discussions, guiding learners through clinical decision-making for complex ICU patients, and contributing to the assessment of learner performance and professional development.",
    reflection:
      "[ZAINAB TO COMPLETE — What did you find most valuable about this experience? What did the students struggle with most? How did you approach giving feedback in a high-stakes clinical environment?]",
  },
  {
    title: "Acid Base Disorders and Parenteral Nutrition",
    date: "[DATE — TO BE CONFIRMED BY ZAINAB]",
    meta: "Co-Preceptor · Other Healthcare Professional Students · Ascension St. Vincent Evansville",
    about:
      "This co-precepting experience focused on two foundational areas of clinical pharmacy: acid-base disorder interpretation and parenteral nutrition management. I contributed to patient care discussions and the assessment of learner reasoning in these domains, which require the ability to integrate laboratory data, clinical context, and pharmacokinetic principles simultaneously.",
    reflection: "[ZAINAB TO COMPLETE]",
  },
  {
    title: "Oncology: Principles and Supportive Care",
    date: "[DATE — TO BE CONFIRMED BY ZAINAB]",
    meta: "Co-Preceptor · Other Healthcare Professional Students · Ascension St. Vincent Evansville",
    about:
      "This co-precepting experience covered foundational oncology pharmacy principles and supportive care management, including areas such as chemotherapy toxicity, antiemesis, pain management, and infection prophylaxis in immunocompromised patients. I supported learners in applying these principles to the care of oncology patients during their rotation.",
    reflection: "[ZAINAB TO COMPLETE]",
  },
] as const;

const CONDENSED_ENTRIES = [
  {
    title: "Diabetic Foot Infection",
    meta: "Topic Discussion Facilitation · APPE Students",
    body: "Facilitated a structured topic discussion on diabetic foot infection management with APPE pharmacy students, guiding the group through diagnostic criteria, antimicrobial selection, surgical considerations, and the pharmacist's role in long-term wound care and antibiotic stewardship.",
  },
  {
    title: "Congestive Heart Failure",
    meta: "Topic Discussion Facilitation · APPE Students",
    body: "Facilitated a topic discussion on congestive heart failure pharmacotherapy with APPE students, covering guideline-directed medical therapy, diuretic optimization, and the pharmacist's role in heart failure clinic and transitions of care.",
  },
  {
    title: "Community-Acquired Pneumonia & Diabetic Foot Infection",
    meta: "Patient Case Presentation Evaluation · APPE Students",
    body: "Evaluated APPE student patient case presentations covering community-acquired pneumonia and diabetic foot infection, providing structured feedback on clinical reasoning, evidence appraisal, recommendation quality, and presentation delivery.",
  },
  {
    title: "Chemotherapy-Induced Nausea and Vomiting",
    meta: "Topic Discussion Evaluation · APPE Students",
    body: "Evaluated student-led topic discussions on CINV management, assessing the quality of evidence synthesis, guideline application, and the clarity of clinical recommendations for prophylaxis and breakthrough management.",
  },
  {
    title: "Using CredibleMeds to Identify QTc-Prolonging Drugs",
    meta: "Clinical Skills Facilitation · APPE Students",
    body: "Facilitated a practical session on using the CredibleMeds database to identify, classify, and clinically manage drug-induced QTc prolongation risk — a high-stakes skill for pharmacists managing oncology, psychiatric, and critical care patients.",
  },
  {
    title: "ICU Rotation Teaching",
    meta: "Clinical Facilitation · IPPE Students",
    body: "Contributed to the teaching and supervision of IPPE pharmacy students during an ICU rotation, providing guidance on ICU pharmacotherapy principles, monitoring parameters, and the pharmacist's role in the critical care team.",
  },
] as const;

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

function GroupHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-mono uppercase"
      style={{
        fontSize: "0.7rem",
        letterSpacing: "0.15em",
        color: "var(--color-accent)",
        paddingBottom: "0.75rem",
        borderBottom: "2px solid var(--color-accent)",
        marginBottom: "2rem",
      }}
    >
      {children}
    </p>
  );
}

export default function ExperientialPreceptingPage() {
  return (
    <>
      <PageHeader
        label="Evidence of Teaching"
        title="Experiential Precepting"
        subtitle="Co-precepting and experiential teaching with APPE and IPPE pharmacy students across critical care, oncology, and internal medicine rotations at Ascension St. Vincent Evansville."
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
              Experiential education is where clinical reasoning meets real patients under
              real pressure. In both co-precepting and topic facilitation roles, my goal was
              to help students bridge the gap between what they know and what they can do —
              pushing them to apply their knowledge in the moment and reflect critically on
              their own clinical decisions.
            </p>
          </AnimatedSection>

          {/* ── Co-Precepting ──────────────────────────────────────────────── */}
          <AnimatedSection delay={0.05}>
            <GroupHeading>Co-Precepting</GroupHeading>
            <p
              className="font-body text-text-muted"
              style={{
                fontSize: "0.875rem",
                fontStyle: "italic",
                marginBottom: "2rem",
              }}
            >
              As a co-preceptor, I contributed to the design, delivery, and assessment of
              the following rotation experiences alongside primary preceptors at Ascension
              St. Vincent Evansville.
            </p>
          </AnimatedSection>

          {CO_PRECEPTING_ENTRIES.map((entry, i) => (
            <AnimatedSection key={entry.title} delay={0.1 + i * 0.08}>
              {i > 0 && (
                <hr
                  style={{
                    margin: "2.5rem 0",
                    border: "none",
                    borderTop: "1px solid var(--color-border)",
                  }}
                />
              )}

              {/* Header row */}
              <div
                className="flex items-start justify-between gap-6"
                style={{ marginBottom: "0.875rem" }}
              >
                <h2
                  className="font-display font-medium text-text-primary"
                  style={{ fontSize: "1.5rem", lineHeight: "1.2" }}
                >
                  {entry.title}
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
                  {entry.date}
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
                {entry.meta}
              </p>

              <EntryLabel>About the Experience</EntryLabel>
              <p
                className="font-body text-text-secondary"
                style={{
                  fontSize: "0.925rem",
                  lineHeight: "1.8",
                  marginBottom: "1.25rem",
                }}
              >
                {entry.about}
              </p>

              <EntryLabel>Reflection</EntryLabel>
              <p
                className="font-body text-text-secondary"
                style={{
                  fontSize: "0.925rem",
                  lineHeight: "1.8",
                  fontStyle: "italic",
                  marginBottom: "1rem",
                }}
              >
                {entry.reflection}
              </p>

              {/* Setting tag instead of download link */}
              <span
                className="font-mono uppercase"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  color: "var(--color-text-muted)",
                }}
              >
                Institutional Setting
              </span>
            </AnimatedSection>
          ))}

          {/* ── Experiential Didactics ─────────────────────────────────────── */}
          <AnimatedSection delay={0.1}>
            <hr
              style={{
                margin: "3rem 0 2.5rem 0",
                border: "none",
                borderTop: "1px solid var(--color-border)",
              }}
            />
            <GroupHeading>Experiential Didactics</GroupHeading>
            <p
              className="font-body text-text-muted"
              style={{
                fontSize: "0.875rem",
                fontStyle: "italic",
                marginBottom: "2rem",
              }}
            >
              The following sessions involved facilitating or evaluating topic discussions,
              patient case presentations, and clinical teaching activities with APPE and
              IPPE pharmacy students at Ascension St. Vincent Evansville.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div>
              {CONDENSED_ENTRIES.map((entry, i) => (
                <div
                  key={entry.title}
                  style={{
                    padding: "1.25rem 0",
                    borderBottom:
                      i < CONDENSED_ENTRIES.length - 1
                        ? "1px solid var(--color-border)"
                        : "none",
                  }}
                >
                  <p
                    className="font-body font-semibold text-text-primary"
                    style={{ fontSize: "0.925rem" }}
                  >
                    {entry.title}
                  </p>
                  <p
                    className="font-mono uppercase"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      color: "var(--color-text-muted)",
                      marginTop: "0.2rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {entry.meta}
                  </p>
                  <p
                    className="font-body text-text-secondary"
                    style={{ fontSize: "0.875rem", lineHeight: "1.7" }}
                  >
                    {entry.body}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Bottom navigation */}
          <AnimatedSection delay={0.1}>
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              <Link
                href="/evidence-of-teaching/small-group-facilitation"
                className="font-body font-medium transition-colors duration-200 hover:opacity-75"
                style={{ fontSize: "0.875rem", color: "var(--color-accent)" }}
              >
                ← Small Group Facilitation
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </>
  );
}
