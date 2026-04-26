"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const BODY_PARAGRAPHS = [
  "Having spent seven years in community pharmacy, including five years in management, I have seen firsthand that a leader's primary responsibility is to build the potential of those around them. I approach leadership by identifying the unique strengths of my team members and providing them with the grace to grow — the space to develop their skills and confidence through patient guidance and mentorship.",
  "However, I believe that grace and accountability are not mutually exclusive; rather, they are the twin pillars of a high-functioning environment. By holding my team to clear standards, I empower them to take ownership of their roles.",
  "This philosophy extends directly to my clinical practice. I believe in modeling the change I wish to see in the profession. Whether I am managing a busy pharmacy or navigating the complexities of clinical care during my residency, I set the same rigorous expectations for myself that I do for others. Leading by example is not just a strategy; it is a commitment to integrity that ensures my patients receive the most dedicated, resourceful, and empathetic care possible.",
  "In the teaching setting, I focus on asking mentally stimulating, open-ended questions that push students to critically evaluate complex clinical scenarios rather than arrive at surface-level answers. I believe the best educators do not simply transfer knowledge — they cultivate the mindset to apply it. As a Lab Coordinator at Purdue University, I put this into practice by facilitating simulated clinical interviews for first-year pharmacy students, serving as their primary evaluator and providing real-time constructive feedback on patient rapport, active listening, and clinical accuracy. The goal was never perfection in the simulation — it was to make every session a genuine learning event.",
] as const;

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
  },
  {
    title: "Lab Coordinator — P1 MTM & Medication History Lab",
    institution: "Purdue University · September 2025",
    description:
      "Facilitated simulated clinical interviews for first-year pharmacy students, serving as primary evaluator for mock interviews and medication history assessments. Graded performance using standardized rubrics across patient rapport, active listening, and clinical accuracy. Provided real-time constructive feedback focused on identifying medication discrepancies and collecting pertinent social and medical histories.",
  },
] as const;

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
              {/* Lede — large opening sentence */}
              <p
                className="font-body font-normal text-text-primary"
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                }}
              >
                My professional philosophy is rooted in the belief that the
                highest level of care is achieved only when compassion and
                resourcefulness work in tandem.
              </p>

              {/* Body paragraphs */}
              {BODY_PARAGRAPHS.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-text-secondary"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.85",
                    marginBottom: "1.5rem",
                  }}
                >
                  {paragraph}
                </p>
              ))}

              {/* Styled blockquote */}
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
                  &ldquo;Good teaching cannot be reduced to technique; good
                  teaching comes from the identity and integrity of the
                  teacher.&rdquo;
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
                  — Parker J. Palmer
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
                  </div>
                ))}
              </SidebarCard>
            </motion.aside>

          </div>
        </div>
      </section>
    </>
  );
}
