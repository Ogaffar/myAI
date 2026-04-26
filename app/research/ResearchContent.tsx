"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const RESEARCH_PROJECTS = [
  {
    number: "PROJECT 01",
    title: "VTE Incidence & Prophylaxis in High-Risk Cancer Patients",
    description:
      "This study evaluates real-world prophylaxis patterns and VTE incidence in high-risk oncology patients at Ascension St. Vincent Evansville, assessing concordance with ASCO, NCCN, and ITAC guidelines. Findings aim to identify institutional gaps and drive pharmacist-led quality improvement in anticoagulation stewardship for cancer patients. This research was presented as a poster at the ASHP Midyear Clinical Meeting in Las Vegas, NV in December 2025.",
    institution: "Ascension St. Vincent Evansville",
    design: "Retrospective cohort",
    advisors: "Harpenau PharmD · Ismail PharmD · Wolf PharmD, BCOP",
  },
  {
    number: "PROJECT 02",
    title: "Safety Outcomes of Empiric Linezolid versus Vancomycin in MRSA Pneumonia",
    description:
      "A six-year, multi-center, retrospective cohort analysis comparing the safety outcomes of empiric linezolid versus vancomycin in patients with pneumonia and risk factors for MRSA infection. Zainab serves as co-researcher on this ongoing study, which aims to generate real-world evidence informing empiric antibiotic selection and supporting pharmacist-led antimicrobial stewardship. Anticipated findings suggest linezolid may be a safer alternative for this population.",
    institution: "Multi-center",
    design: "Retrospective cohort · 6-year span",
    advisors: "Harpenau PharmD · Konneker PharmD, BCPS",
  },
] as const;

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        className="font-mono uppercase"
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "var(--color-text-muted)",
          marginBottom: "0.25rem",
        }}
      >
        {label}
      </p>
      <p
        className="font-body font-medium text-text-primary"
        style={{ fontSize: "0.825rem" }}
      >
        {value}
      </p>
    </div>
  );
}

function ResearchCard({
  number,
  title,
  description,
  institution,
  design,
  advisors,
  delay,
  inView,
}: (typeof RESEARCH_PROJECTS)[number] & { delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className="rounded-[1.5rem] border border-border bg-surface transition-shadow duration-300 hover:shadow-medium"
      style={{ padding: "2.5rem" }}
    >
      {/* Top row: project number + status badge */}
      <div className="flex items-start justify-between gap-4">
        <p
          className="font-mono uppercase text-text-muted"
          style={{ fontSize: "0.7rem", letterSpacing: "0.12em", marginBottom: "0.5rem" }}
        >
          {number}
        </p>
        <span
          className="flex-shrink-0 font-mono uppercase text-accent"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            backgroundColor: "var(--color-accent-light)",
            border: "1px solid rgba(15,76,58,0.15)",
            borderRadius: "999px",
            padding: "0.25rem 0.75rem",
          }}
        >
          ONGOING
        </span>
      </div>

      {/* Title */}
      <h2
        className="font-display font-medium text-text-primary"
        style={{ fontSize: "1.6rem", lineHeight: "1.25", marginBottom: "1rem" }}
      >
        {title}
      </h2>

      {/* Divider */}
      <div
        className="border-t border-border"
        style={{ marginTop: "1.25rem", marginBottom: "1.25rem" }}
      />

      {/* Description */}
      <p
        className="font-body text-text-secondary"
        style={{ fontSize: "0.95rem", lineHeight: "1.85" }}
      >
        {description}
      </p>

      {/* Bottom meta row */}
      <div
        className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-0"
        style={{ marginTop: "1.5rem" }}
      >
        <MetaField label="Institution" value={institution} />
        <div
          className="hidden sm:block self-stretch w-px mx-8 flex-shrink-0"
          style={{ backgroundColor: "var(--color-border)" }}
        />
        <MetaField label="Study Design" value={design} />
        <div
          className="hidden sm:block self-stretch w-px mx-8 flex-shrink-0"
          style={{ backgroundColor: "var(--color-border)" }}
        />
        <MetaField label="Advisors" value={advisors} />
      </div>
    </motion.div>
  );
}

function PosterCard({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
      className="overflow-hidden rounded-[1.25rem] border border-border"
      style={{ display: "flex", background: "white" }}
    >
      {/* Left accent stripe */}
      <div
        className="flex-shrink-0"
        style={{ width: "6px", backgroundColor: "var(--color-accent)" }}
      />

      {/* Card body */}
      <div
        className="flex flex-1 flex-col gap-6 sm:flex-row"
        style={{ padding: "2rem 2rem 2rem 2.5rem" }}
      >
        {/* Main info */}
        <div className="flex-1">
          <span
            className="inline-block font-mono uppercase text-accent"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              backgroundColor: "var(--color-accent-light)",
              borderRadius: "4px",
              padding: "0.2rem 0.6rem",
            }}
          >
            ASHP Midyear Clinical Meeting
          </span>
          <h3
            className="font-display font-medium text-text-primary"
            style={{ fontSize: "1.35rem", lineHeight: "1.3", marginTop: "0.5rem" }}
          >
            Assessment of Prophylaxis Patterns and VTE Rates in High-Risk Cancer Patients
          </h3>
          <p
            className="font-body text-text-secondary"
            style={{ fontSize: "0.875rem", lineHeight: "1.7", marginTop: "0.75rem" }}
          >
            Institutional study examining the consistency of evidence-based VTE prophylaxis
            application in high-risk cancer patients, presented before a national audience of
            health-system pharmacists, residents, and clinical specialists.
          </p>
        </div>

        {/* Right meta block */}
        <div
          className="flex flex-row gap-8 sm:flex-col sm:gap-4 sm:flex-shrink-0"
          style={{ minWidth: "130px" }}
        >
          <MetaField label="Location" value="Las Vegas, NV" />
          <MetaField label="Date" value="December 2025" />
        </div>
      </div>
    </motion.div>
  );
}

function ResearchProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-white"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <p
            className="font-mono uppercase text-accent"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            Active Projects
          </p>
          <h2
            className="font-display font-medium text-text-primary"
            style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
          >
            Current Research
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col" style={{ gap: "2rem" }}>
          {RESEARCH_PROJECTS.map((project, i) => (
            <ResearchCard
              key={project.number}
              {...project}
              delay={0.1 + i * 0.12}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PosterPresentationsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-surface"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <p
            className="font-mono uppercase text-accent"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            Poster Presentations
          </p>
          <h2
            className="font-display font-medium text-text-primary"
            style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
          >
            Presented at National Conferences
          </h2>
        </motion.div>

        <PosterCard inView={inView} />
      </div>
    </section>
  );
}

export default function ResearchContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <PageHeader
          label="Academic & Clinical Research"
          title="Advancing Pharmacy Through Evidence"
          subtitle="Contributing to the body of clinical evidence that shapes how pharmacists make decisions for the most vulnerable patients."
        />
      </motion.div>

      <ResearchProjectsSection />
      <PosterPresentationsSection />
    </>
  );
}
