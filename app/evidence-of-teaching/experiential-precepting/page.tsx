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

const DATE_PILL_STYLE: React.CSSProperties = {
  fontSize: "0.65rem",
  letterSpacing: "0.1em",
  backgroundColor: "var(--color-accent-light)",
  color: "var(--color-accent)",
  border: "1px solid rgba(15,76,58,0.15)",
  borderRadius: "999px",
  padding: "0.25rem 0.8rem",
};

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

          {/* Entry 1 — Oncology CINV */}
          <AnimatedSection delay={0.1}>
            <div
              className="flex items-start justify-between gap-6"
              style={{ marginBottom: "0.875rem" }}
            >
              <h2
                className="font-display font-medium text-text-primary"
                style={{ fontSize: "1.5rem", lineHeight: "1.2" }}
              >
                Oncology Service — CINV Management Co-Precepting
              </h2>
              <span className="font-mono uppercase whitespace-nowrap flex-shrink-0" style={DATE_PILL_STYLE}>
                2025–2026
              </span>
            </div>
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              Co-Preceptor&nbsp;·&nbsp;APPE (P4) Student&nbsp;·&nbsp;Oncology Service, Ascension St. Vincent
            </p>

            <EntryLabel>About the Experience</EntryLabel>
            <p
              className="font-body text-text-secondary"
              style={{ fontSize: "0.925rem", lineHeight: "1.8", marginBottom: "1.25rem" }}
            >
              In this co-precepting experience, I worked with a fourth-year APPE pharmacy
              student on the oncology service, focusing on chemotherapy-induced nausea and
              vomiting management. My approach combined active shadowing and modeling —
              the student observed how pharmacists evaluate patient regimens and interact
              with the oncology team — with a structured topic discussion where the student
              presented core clinical concepts from their personalized notes. To elevate
              their understanding, I integrated the slide deck from my formal CINV
              presentation, walking them step by step through treatment algorithms, dosing
              nuances, and neuroreceptor targets. I provided immediate real-time verbal
              feedback following the discussion, highlighting the student&apos;s strong grasp
              of foundational drug mechanisms while guiding them on tailoring antiemetic
              regimens to specific patient risk profiles.
            </p>

            <EntryLabel>Reflection</EntryLabel>
            <p
              className="font-body text-text-secondary"
              style={{ fontSize: "0.925rem", lineHeight: "1.8", fontStyle: "italic" }}
            >
              Working with the advanced P4 student on the oncology rotation allowed me
              to step into a true coaching role — utilizing my own clinical knowledge to
              challenge their reasoning and providing immediate, actionable verbal feedback
              to refine their clinical autonomy. This experience reinforced my belief that
              the most effective precepting is not passive observation but active engagement,
              where I am simultaneously modeling, questioning, and creating space for the
              learner to develop their own clinical voice.
            </p>
          </AnimatedSection>

          <hr
            style={{
              margin: "2.5rem 0",
              border: "none",
              borderTop: "1px solid var(--color-border)",
            }}
          />

          {/* Entry 2 — ICU IPPE */}
          <AnimatedSection delay={0.18}>
            <div
              className="flex items-start justify-between gap-6"
              style={{ marginBottom: "0.875rem" }}
            >
              <h2
                className="font-display font-medium text-text-primary"
                style={{ fontSize: "1.5rem", lineHeight: "1.2" }}
              >
                Intensive Care Unit Service — Foundational Hospital Pharmacy Precepting
              </h2>
              <span className="font-mono uppercase whitespace-nowrap flex-shrink-0" style={DATE_PILL_STYLE}>
                2025–2026
              </span>
            </div>
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              Co-Preceptor&nbsp;·&nbsp;IPPE (P1) Student&nbsp;·&nbsp;ICU Service, Ascension St. Vincent
            </p>

            <EntryLabel>About the Experience</EntryLabel>
            <p
              className="font-body text-text-secondary"
              style={{ fontSize: "0.925rem", lineHeight: "1.8", marginBottom: "1.25rem" }}
            >
              In this co-precepting experience, I introduced a first-year IPPE pharmacy
              student to the foundations of hospital pharmacy in the intensive care unit.
              I demonstrated how to safely and effectively review and verify clinical orders
              within the electronic medical record for critically ill patients. The student
              accompanied me during multidisciplinary ICU rounds, where I served as an active
              facilitator — answering their real-time questions about ICU supportive care
              bundles and explaining the clinical rationale behind provider bedside
              recommendations. We actively reviewed clinical consults together, with me
              walking the student through the patient profile, demonstrating how to gather
              data, evaluate organ function, and formulate initial recommendations — giving
              them hands-on exposure to real-world clinical practice.
            </p>

            <EntryLabel>Reflection</EntryLabel>
            <p
              className="font-body text-text-secondary"
              style={{ fontSize: "0.925rem", lineHeight: "1.8", fontStyle: "italic", marginBottom: "1.5rem" }}
            >
              Presenting the introductory P1 student with the ICU environment taught me
              the importance of breaking down complex, fast-paced workflows into foundational
              knowledge that is easy to understand. The ICU can be an overwhelming environment
              for any learner — pacing the experience and creating deliberate moments of
              explanation rather than letting the rotation blur past them was essential.
              This experience has fully prepared me to independently precept with confidence
              and elevate any level of pharmacy learner in my future clinical practice.
            </p>

            {/* Formal Evaluation */}
            <EntryLabel>Formal Evaluation</EntryLabel>
            <div style={{ marginBottom: "1rem" }}>
              <span
                className="font-display"
                style={{ fontSize: "2rem", color: "var(--color-accent)", lineHeight: "1" }}
              >
                35 / 35
              </span>
              <p
                className="font-body"
                style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "0.25rem" }}
              >
                Accomplished across all 7 evaluation categories
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
                &ldquo;Very interesting critique. Addressed all sections very comprehensively and
                with confidence. Detailed background orients audience well to the topic.
                Very easy to follow along with the presentation — well organized.&rdquo;
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
                — Student Reviewer, May 2026
              </cite>
            </blockquote>

            <a
              href="/presentation-evaluation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-body transition-all duration-150 hover:underline"
              style={{ fontSize: "0.825rem", color: "var(--color-accent)", gap: "0.35rem" }}
            >
              <span>↗</span>
              View Full Evaluation Form (PDF)
            </a>
          </AnimatedSection>

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

          {/* ── Preceptor Feedback & Professional Growth ───────────────────── */}
          <AnimatedSection delay={0.1}>
            <hr
              style={{
                margin: "3rem 0 2.5rem 0",
                border: "none",
                borderTop: "1px solid var(--color-border)",
              }}
            />
            <GroupHeading>Preceptor Feedback &amp; Professional Growth</GroupHeading>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "1.25rem",
                padding: "2.5rem",
              }}
            >
              <h3
                className="font-display font-medium text-text-primary"
                style={{ fontSize: "1.35rem", marginBottom: "1.25rem" }}
              >
                Reflection on Preceptor Feedback
              </h3>
              <p
                className="font-body text-text-secondary"
                style={{ fontSize: "0.925rem", lineHeight: "1.85", marginBottom: "1.5rem" }}
              >
                Experiencing growth as a clinical educator requires a willingness to invite,
                accept, and actively implement constructive feedback. Throughout my residency
                training, initial evaluations from my preceptors noted that while my clinical
                knowledge and core content delivery were strong, I occasionally struggled with
                presentation mechanics — specifically, moving through presentations too quickly
                and exhibiting natural shyness when commanding a room. Early on, navigating
                complex clinical rotations alongside teaching requirements meant that balancing
                preparation time was a significant learning curve.
              </p>
              <p
                className="font-body text-text-secondary"
                style={{ fontSize: "0.925rem", lineHeight: "1.85", marginBottom: "1.5rem" }}
              >
                Rather than viewing these critiques as barriers, I utilized them as a
                blueprint for deliberate personal and professional development. I established
                a consistent feedback loop with my Residency Program Director, seeking regular
                feedback and mentorship on my communication style, pacing, and preparation
                strategies. Through this continuous guidance and intentional practice, I learned
                to slow down my delivery, project confidence, and structure my presentations
                efficiently.
              </p>
              <blockquote
                style={{
                  background: "var(--color-accent-light)",
                  borderLeft: "4px solid var(--color-accent)",
                  borderRadius: "0 0.75rem 0.75rem 0",
                  padding: "1.5rem 1.75rem 1.5rem 2rem",
                  margin: "0",
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                    color: "var(--color-text-primary)",
                    lineHeight: "1.6",
                  }}
                >
                  &ldquo;Because I know firsthand what it feels like to struggle with confidence,
                  I am better equipped to recognize these traits in my own students — allowing
                  me to provide the same supportive, transformative mentorship that was extended
                  to me.&rdquo;
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
                  — Zainab Olayiwola, PharmD
                </cite>
              </blockquote>
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
