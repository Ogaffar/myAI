"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];


const CORE_VALUES = [
  "Compassion over protocol",
  "Grace paired with accountability",
  "Evidence-based reasoning",
  "Learning through questioning",
  "Leading by example",
] as const;

const TEACHING_ROLES = [
  {
    title: "Teaching Assistant — T4 Therapeutic Case Conference",
    institution: "Butler University · January–April 2026",
    description:
      "Facilitated small group case study discussions, using open-ended questions to develop students' independent clinical reasoning.",
    materialHref: "/neutropenic-fever-case.pdf",
    materialLabel: "View Teaching Case: Neutropenic Fever & Vancomycin →",
  },
  {
    title: "Lab Coordinator — P1 MTM & Medication History Lab",
    institution: "Purdue University · September 2025",
    description:
      "Facilitated simulated clinical interviews for first-year pharmacy students, serving as primary evaluator for mock interviews and medication history assessments. Graded performance using standardized rubrics across patient rapport, active listening, and clinical accuracy. Provided real-time constructive feedback focused on identifying medication discrepancies and collecting pertinent social and medical histories.",
    materialHref: "/mtm-rubric.pdf",
    materialLabel: "View Sample Grading Rubric (MTM Lab) →",
  },
] as const;

function DocIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="flex-shrink-0">
      <rect x="2" y="1.5" width="8" height="11" rx="1" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4 5h4M4 7h4M4 9h2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6" fill="var(--color-accent-light)" />
      <path d="M4.5 7l2 2 3-3.5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SidebarCard({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
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
        {heading}
      </p>
      {children}
    </div>
  );
}

export default function TeachingContent() {
  return (
    <>
      {/* ── Page header ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <PageHeader
          label="My Approach to Education"
          title="Teaching Philosophy"
          subtitle="Rooted in the belief that compassion and accountability are the twin pillars of a high-functioning environment — in the classroom and at the bedside."
        />
      </motion.div>

      {/* ── Main content ────────────────────────────────────────────────── */}
      <section
        className="bg-white"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">

            {/* ── LEFT: Prose ─────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            >
              {/* Opening lede */}
              <p
                className="font-body font-normal text-text-primary"
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                }}
              >
                As a clinical pharmacist, my primary objective as an educator is to help
                transition pharmacy students from passive learners into independent, critically
                thinking professionals.
              </p>

              {/* Paragraph 1 */}
              <p
                className="font-body text-text-secondary"
                style={{ fontSize: "1rem", lineHeight: "1.85", marginBottom: "1.5rem" }}
              >
                My goal as an educator is to ensure that the concepts we discuss are not just
                memorized for an exam, but can be applied independently to real-world clinical
                practice. In the rapidly evolving landscape of healthcare, I strive to equip
                students with a structured learning framework for evidence-based
                decision-making so they can confidently advocate for optimal patient care
                at the bedside.
              </p>

              {/* Subheading 1 */}
              <h3
                className="font-display font-medium text-text-primary"
                style={{ fontSize: "1.25rem", margin: "1.75rem 0 0.75rem 0" }}
              >
                The Clinical Classroom: Interactive Methodology in Practice
              </h3>

              {/* Paragraph 2 */}
              <p
                className="font-body text-text-secondary"
                style={{ fontSize: "1rem", lineHeight: "1.85", marginBottom: "1.5rem" }}
              >
                To foster independent thinking, I utilize a collaborative and engaging approach
                to teaching. I view case presentations and discussions as a bidirectional learning
                opportunity where both the learner and I can challenge and evaluate our
                understanding of clinical practice. To ensure comprehension and bridge the gap
                between theory and practice, I routinely implement targeted knowledge checks
                and patient case examples to reiterate core concepts. Rather than lecturing
                statically, I ask open-ended questions that encourage students to share their
                thought processes, allowing me to evaluate their clinical reasoning in real time
                and guide them toward justifiable, evidence-based recommendations.
              </p>

              {/* Subheading 2 */}
              <h3
                className="font-display font-medium text-text-primary"
                style={{ fontSize: "1.25rem", margin: "1.75rem 0 0.75rem 0" }}
              >
                Cultivating a Supportive Environment and Continuous Growth
              </h3>

              {/* Paragraph 3 */}
              <p
                className="font-body text-text-secondary"
                style={{ fontSize: "1rem", lineHeight: "1.85", marginBottom: "1.5rem" }}
              >
                Effective learning requires a safe psychological environment where students
                feel empowered to acknowledge gaps in their knowledge and view them as
                opportunities to grow. I emphasize open, transparent communication and
                establish clear expectations from day one. I am deeply committed to providing
                constructive, real-time feedback that is actionable and specific. I believe
                education is an evolving practice — I actively seek feedback from my learners
                to refine my own teaching methodologies, ensuring that I continuously grow
                as a mentor, preceptor, and clinician.
              </p>

              {/* Paragraph 4 */}
              <p
                className="font-body text-text-secondary"
                style={{ fontSize: "1rem", lineHeight: "1.85", marginBottom: "1.5rem" }}
              >
                In the teaching setting, I focus on asking mentally stimulating, open-ended
                questions that push students to critically evaluate complex clinical scenarios
                rather than arrive at surface-level answers. As a Lab Coordinator at Purdue
                University, I put this into practice by facilitating simulated clinical
                interviews for first-year pharmacy students, serving as their primary evaluator
                and providing real-time constructive feedback on patient rapport, active
                listening, and clinical accuracy. The goal was never perfection in the
                simulation — it was to make every session a genuine learning event.
              </p>

              {/* Khalil Gibran blockquote */}
              <blockquote
                style={{
                  background: "var(--color-accent-light)",
                  borderLeft: "4px solid var(--color-accent)",
                  borderRadius: "0 0.75rem 0.75rem 0",
                  padding: "2rem 2rem 2rem 2.5rem",
                  margin: "2.5rem 0 0",
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "1.4rem",
                    fontStyle: "italic",
                    color: "var(--color-text-primary)",
                    lineHeight: "1.6",
                  }}
                >
                  &ldquo;The teacher who is indeed wise does not bid you to enter the house of
                  his wisdom but rather leads you to the threshold of your mind.&rdquo;
                </p>
                <cite
                  className="font-mono"
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-accent)",
                    marginTop: "0.75rem",
                    fontStyle: "normal",
                  }}
                >
                  — Khalil Gibran
                </cite>
              </blockquote>
            </motion.div>

            {/* ── RIGHT: Sticky sidebar ────────────────────────────────────── */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="flex flex-col gap-6 lg:self-start lg:sticky lg:top-[120px]"
            >
              {/* Card 1 — Core Values */}
              <SidebarCard heading="Core Values">
                {CORE_VALUES.map((value, i) => (
                  <div
                    key={value}
                    className="flex items-center gap-3"
                    style={{
                      padding: "0.5rem 0",
                      borderBottom:
                        i < CORE_VALUES.length - 1
                          ? "1px solid var(--color-border)"
                          : "none",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--color-gold)" }}
                    />
                    <span
                      className="font-body text-text-primary"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </SidebarCard>

              {/* Card 2 — Teaching Experience */}
              <SidebarCard heading="Teaching Experience">
                {TEACHING_ROLES.map((role, i) => (
                  <div
                    key={role.title}
                    style={{
                      padding: "0.875rem 0",
                      borderBottom:
                        i < TEACHING_ROLES.length - 1
                          ? "1px solid var(--color-border)"
                          : "none",
                    }}
                  >
                    <p
                      className="font-body font-semibold text-text-primary"
                      style={{ fontSize: "0.875rem", lineHeight: "1.35" }}
                    >
                      {role.title}
                    </p>
                    <p
                      className="font-mono uppercase text-accent"
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.08em",
                        marginTop: "0.2rem",
                      }}
                    >
                      {role.institution}
                    </p>
                    <p
                      className="font-body text-text-muted"
                      style={{
                        fontSize: "0.775rem",
                        lineHeight: "1.65",
                        marginTop: "0.4rem",
                      }}
                    >
                      {role.description}
                    </p>
                    <a
                      href={role.materialHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-body transition-colors duration-150 hover:underline"
                      style={{
                        fontSize: "0.775rem",
                        color: "var(--color-accent)",
                        marginTop: "0.5rem",
                      }}
                    >
                      <DocIcon />
                      {role.materialLabel}
                    </a>
                  </div>
                ))}
              </SidebarCard>

              {/* Card 3 — Formal Evaluation */}
              <SidebarCard heading="Formal Evaluation">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircleIcon />
                    <div>
                      <p
                        className="font-body text-text-primary"
                        style={{ fontSize: "0.875rem", lineHeight: "1.45" }}
                      >
                        Pharmacy Residency Presentation Evaluation Form
                      </p>
                      <p
                        className="font-body text-text-muted"
                        style={{ fontSize: "0.775rem", marginTop: "0.2rem" }}
                      >
                        Critical Appraisal · Ascension St. Vincent Evansville
                      </p>
                      <a
                        href="/presentation-evaluation.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-body transition-colors duration-150 hover:underline"
                        style={{
                          fontSize: "0.775rem",
                          color: "var(--color-accent)",
                          marginTop: "0.4rem",
                        }}
                      >
                        View Evaluation Form →
                      </a>
                    </div>
                  </div>
                </div>
              </SidebarCard>

              {/* Card 4 — IPTeC Teaching Portfolio */}
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
                    paddingBottom: "0.75rem",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  IPTeC Teaching Portfolio
                </p>
                <p
                  className="font-body text-text-muted"
                  style={{ fontSize: "0.8rem", lineHeight: "1.65", marginBottom: "1.25rem" }}
                >
                  A complete record of teaching activities, reflections, philosophy,
                  and precepting experiences submitted as part of the IPTeC certification
                  program through Butler University College of Pharmacy.
                </p>
                <a
                  href="/iptec-portfolio.pdf"
                  download
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg font-body font-medium text-white transition-colors duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    fontSize: "0.8rem",
                    padding: "0.65rem 1rem",
                  }}
                >
                  <span>↓</span>
                  IPTeC Teaching Portfolio
                </a>
              </div>
            </motion.aside>

          </div>
        </div>
      </section>
    </>
  );
}
