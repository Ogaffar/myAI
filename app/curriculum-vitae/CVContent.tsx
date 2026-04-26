"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/* ── Data ─────────────────────────────────────────────────────────────── */

interface CVItem {
  title: string;
  organization: string;
  date: string;
  note?: string;
}

const EXPERIENCE: CVItem[] = [
  {
    title: "PGY-1 Pharmacy Resident",
    organization: "Ascension St. Vincent Evansville, Evansville, IN",
    date: "June 2025 – Present",
    note: "Completing structured residency rotations across Internal Medicine, Cardiology, Nephrology, Oncology, Infectious Disease, Administration, Med Safety/Informatics, Critical Care, and Pediatrics.",
  },
  {
    title: "Pharmacy Manager",
    organization: "Walmart Pharmacy, San Angelo, TX",
    date: "February 2023 – June 2025",
  },
  {
    title: "Staff Pharmacist",
    organization: "Walmart Pharmacy, San Angelo, TX",
    date: "May 2020 – February 2023",
  },
  {
    title: "Pharmacy Manager",
    organization: "CVS Caremark Pharmacy, Katy, TX",
    date: "November 2018 – April 2020",
  },
  {
    title: "Pharmacist Intern",
    organization: "Walgreens Pharmacy, Chicago, IL",
    date: "January 2017 – January 2018",
  },
  {
    title: "Pharmacist Intern",
    organization: "University of Chicago Medical Center, Chicago, IL",
    date: "June 2015 – March 2017",
  },
];

const TEACHING: CVItem[] = [
  {
    title: "Teaching Assistant – T4 Therapeutic Case Conference",
    organization: "Butler University College of Pharmacy",
    date: "January – April 2026",
  },
  {
    title: "Lab Coordinator – P1 MTM & Medication History Lab",
    organization: "Purdue University College of Pharmacy",
    date: "September 2025",
    note: "Facilitated simulated clinical interviews for first-year pharmacy students as primary evaluator for mock interviews and medication history assessments. Graded student performance using standardized rubrics across patient rapport, active listening, and clinical accuracy. Provided real-time constructive feedback focused on identifying medication discrepancies and collecting pertinent social and medical histories.",
  },
];

const RESEARCH: CVItem[] = [
  {
    title: "VTE Incidence & Prophylaxis in High-Risk Cancer Patients",
    organization: "Ascension St. Vincent Evansville",
    date: "July 2025 – Current",
    note: "Advisors: Harpenau PharmD, Ismail PharmD, Wolf PharmD BCOP",
  },
  {
    title: "Safety Outcomes: Empiric Linezolid vs. Vancomycin in MRSA Pneumonia",
    organization: "Multi-center",
    date: "July 2025 – Current",
    note: "Advisors: Harpenau PharmD, Konneker PharmD BCPS",
  },
];

const PRESENTATIONS = [
  {
    title: "High Reliability & Just Culture in Hospital Pharmacy",
    audience: "Pharmacy Leadership Staff Meeting",
    location: "Ascension St. Vincent, Evansville, IN",
    date: "February 2026",
  },
  {
    title: "Beta-Lactam Allergy Cross-Reactivity: Current Evidence and Clinical Implications",
    audience: "Infectious Disease Pharmacy Rounds",
    location: "Ascension St. Vincent, Evansville, IN",
    date: "January 2026",
  },
  {
    title: "Optimizing Anticoagulation in Atrial Fibrillation with Renal Impairment",
    audience: "Cardiology Pharmacy Rounds",
    location: "Ascension St. Vincent, Evansville, IN",
    date: "December 2025",
  },
  {
    title: "VTE in Oncology: From Risk Assessment to Personalized Anticoagulation",
    audience: "Grand Rounds – Pharmacists & Residents",
    location: "Ascension St. Vincent, Evansville, IN",
    date: "November 2025",
  },
  {
    title: "Vancomycin vs. Daptomycin: An Evidence-Based Framework for MRSA",
    audience: "Clinical Pharmacists & Staff",
    location: "Ascension St. Vincent, Evansville, IN",
    date: "October 2025",
  },
  {
    title: "Renal Dosing Optimization in Critically Ill Patients on Continuous Renal Replacement Therapy",
    audience: "Nephrology & Critical Care Teams",
    location: "Ascension St. Vincent, Evansville, IN",
    date: "September 2025",
  },
  {
    title: "Inpatient Insulin Management: A Pharmacist-Led Approach to Glycemic Control",
    audience: "Internal Medicine Pharmacy Rounds",
    location: "Ascension St. Vincent, Evansville, IN",
    date: "August 2025",
  },
  {
    title: "Transitions of Care: Reducing 30-Day Readmissions Through Pharmacist Intervention",
    audience: "Internal Medicine & Cardiology Teams",
    location: "Ascension St. Vincent, Evansville, IN",
    date: "July 2025",
  },
] as const;

const POSTER_PRESENTATIONS = [
  {
    title: "Assessment of Prophylaxis Patterns and VTE Rates in High-Risk Cancer Patients",
    conference: "ASHP Midyear Clinical Meeting",
    location: "Las Vegas, NV",
    date: "December 2025",
  },
] as const;

const COMMUNITY_SERVICE = [
  {
    title: "Pharmacy Student Mentorship Program",
    organization: "Butler University College of Pharmacy, Evansville, IN",
    date: "2025 – Present",
  },
  {
    title: "Brown Bag Medication Review Volunteer",
    organization: "Senior Living Community Outreach, Evansville, IN",
    date: "2025",
  },
  {
    title: "Community Health Fair Volunteer – Immunization & Medication Screening",
    organization: "Walmart Community Health Initiative, San Angelo, TX",
    date: "2021 – 2025",
  },
  {
    title: "Medication Therapy Management Outreach",
    organization: "Community Pharmacy Event, San Angelo, TX",
    date: "2021 – 2022",
  },
] as const;

const EDUCATION = [
  {
    degree: "Doctor of Pharmacy (PharmD)",
    institution: "University of Illinois Chicago College of Pharmacy",
    year: "2018",
  },
  {
    degree: "Bachelor of Science in Pharmaceutical Sciences",
    institution: "University of Illinois Chicago",
    year: "2014",
  },
] as const;

const AFFILIATIONS = [
  "American Society of Health-System Pharmacists (ASHP)",
  "Indiana Society of Health-System Pharmacists (ISHP)",
  "American College of Clinical Pharmacy (ACCP)",
  "Hematology/Oncology Pharmacy Association (HOPA)",
] as const;

/* ── Sub-components ───────────────────────────────────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-mono uppercase text-accent"
      style={{
        fontSize: "0.7rem",
        letterSpacing: "0.15em",
        paddingBottom: "0.75rem",
        borderBottom: "2px solid var(--color-accent)",
        marginBottom: "1.75rem",
      }}
    >
      {children}
    </p>
  );
}

function TimelineItem({
  title,
  organization,
  date,
  note,
  isLast,
}: {
  title: string;
  organization: string;
  date: string;
  note?: string;
  isLast?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        paddingLeft: "1.5rem",
        marginBottom: isLast ? 0 : "1.5rem",
        paddingBottom: isLast ? 0 : "1.5rem",
        borderBottom: isLast ? "none" : "1px solid var(--color-border)",
      }}
    >
      {/* Left timeline line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: "var(--color-border)",
        }}
      />
      {/* Accent dot */}
      <div
        style={{
          position: "absolute",
          left: "-3px",
          top: "4px",
          width: "8px",
          height: "8px",
          backgroundColor: "var(--color-accent)",
          borderRadius: "50%",
        }}
      />
      <p
        className="font-body font-semibold text-text-primary"
        style={{ fontSize: "0.9rem" }}
      >
        {title}
      </p>
      <p
        className="font-body text-text-secondary"
        style={{ fontSize: "0.875rem" }}
      >
        {organization}
      </p>
      <p
        className="font-mono text-text-muted"
        style={{ fontSize: "0.7rem", marginTop: "0.2rem" }}
      >
        {date}
      </p>
      {note && (
        <p
          className="font-body text-text-muted"
          style={{ fontSize: "0.825rem", marginTop: "0.4rem", fontStyle: "italic" }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

function PresentationItem({
  title,
  audience,
  location,
  date,
  isLast,
}: {
  title: string;
  audience: string;
  location: string;
  date: string;
  isLast?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        paddingLeft: "1.5rem",
        marginBottom: isLast ? 0 : "1.5rem",
        paddingBottom: isLast ? 0 : "1.5rem",
        borderBottom: isLast ? "none" : "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: "var(--color-border)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-3px",
          top: "4px",
          width: "8px",
          height: "8px",
          backgroundColor: "var(--color-accent)",
          borderRadius: "50%",
        }}
      />
      <p
        className="font-body font-semibold text-text-primary"
        style={{ fontSize: "0.9rem" }}
      >
        {title}
      </p>
      <p
        className="font-body text-text-secondary"
        style={{ fontSize: "0.875rem" }}
      >
        {audience}
      </p>
      <p
        className="font-mono text-text-muted"
        style={{ fontSize: "0.7rem", marginTop: "0.2rem" }}
      >
        {location} · {date}
      </p>
    </div>
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

/* ── Main layout ──────────────────────────────────────────────────────── */

export default function CVContent() {
  return (
    <>
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <PageHeader
          label="Professional Record"
          title="Curriculum Vitae"
          subtitle="A full account of clinical training, research, presentations, teaching, and professional service."
        />
      </motion.div>

      {/* Download button strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        className="bg-white"
        style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
      >
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col items-center gap-2">
          <Link
            href="/Zee_CV.pdf"
            download
            aria-label="Download full curriculum vitae as PDF"
            className="download-btn inline-flex items-center gap-2.5 rounded-full font-body font-medium text-white transition-all duration-200 hover:shadow-accent active:scale-[0.98]"
            style={{
              backgroundColor: "var(--color-accent)",
              padding: "0.875rem 2rem",
              fontSize: "0.925rem",
            }}
          >
            <span className="download-icon" style={{ fontSize: "1rem" }}>↓</span>
            Download Full CV (PDF)
          </Link>
          <p
            className="font-mono text-text-muted"
            style={{ fontSize: "0.7rem" }}
          >
            Last updated: June 2025
          </p>
        </div>
      </motion.div>

      {/* CV content */}
      <section
        className="bg-white"
        style={{ paddingTop: "3rem", paddingBottom: "5rem" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">

            {/* ── Left column: individually animated sections ─────────────── */}
            <div style={{ paddingLeft: "0.5rem" }}>

              {/* Professional Experience */}
              <AnimatedSection delay={0.05} className="mb-12">
                <SectionHeading>Professional Experience</SectionHeading>
                {EXPERIENCE.map((item, i) => (
                  <TimelineItem
                    key={item.title + item.date}
                    title={item.title}
                    organization={item.organization}
                    date={item.date}
                    note={item.note}
                    isLast={i === EXPERIENCE.length - 1}
                  />
                ))}
              </AnimatedSection>

              {/* Teaching Experience */}
              <AnimatedSection delay={0.05} className="mb-12">
                <SectionHeading>Teaching Experience</SectionHeading>
                {TEACHING.map((item, i) => (
                  <TimelineItem
                    key={item.title}
                    title={item.title}
                    organization={item.organization}
                    date={item.date}
                    note={item.note}
                    isLast={i === TEACHING.length - 1}
                  />
                ))}
              </AnimatedSection>

              {/* Research */}
              <AnimatedSection delay={0.05} className="mb-12">
                <SectionHeading>Research</SectionHeading>
                {RESEARCH.map((item, i) => (
                  <TimelineItem
                    key={item.title}
                    title={item.title}
                    organization={item.organization}
                    date={item.date}
                    note={item.note}
                    isLast={i === RESEARCH.length - 1}
                  />
                ))}
              </AnimatedSection>

              {/* Professional Presentations */}
              <AnimatedSection delay={0.05} className="mb-12">
                <SectionHeading>Professional Presentations</SectionHeading>
                {PRESENTATIONS.map((item, i) => (
                  <PresentationItem
                    key={item.title + item.date}
                    title={item.title}
                    audience={item.audience}
                    location={item.location}
                    date={item.date}
                    isLast={i === PRESENTATIONS.length - 1}
                  />
                ))}
              </AnimatedSection>

              {/* Poster Presentations */}
              <AnimatedSection delay={0.05} className="mb-12">
                <SectionHeading>Poster Presentations</SectionHeading>
                {POSTER_PRESENTATIONS.map((item) => (
                  <div
                    key={item.title}
                    style={{ position: "relative", paddingLeft: "1.5rem" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "2px",
                        backgroundColor: "var(--color-border)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "-3px",
                        top: "4px",
                        width: "8px",
                        height: "8px",
                        backgroundColor: "var(--color-accent)",
                        borderRadius: "50%",
                      }}
                    />
                    <p className="font-body font-semibold text-text-primary" style={{ fontSize: "0.9rem" }}>
                      {item.title}
                    </p>
                    <p className="font-body text-text-secondary" style={{ fontSize: "0.875rem" }}>
                      {item.conference}
                    </p>
                    <p className="font-mono text-text-muted" style={{ fontSize: "0.7rem", marginTop: "0.2rem" }}>
                      {item.location} · {item.date}
                    </p>
                  </div>
                ))}
              </AnimatedSection>

              {/* Community Service */}
              <AnimatedSection delay={0.05}>
                <SectionHeading>Community Service</SectionHeading>
                {COMMUNITY_SERVICE.map((item, i) => (
                  <TimelineItem
                    key={item.title}
                    title={item.title}
                    organization={item.organization}
                    date={item.date}
                    isLast={i === COMMUNITY_SERVICE.length - 1}
                  />
                ))}
              </AnimatedSection>

            </div>

            {/* ── Right column: sticky sidebar ───────────────────────────── */}
            <AnimatedSection
              delay={0.1}
              direction="right"
              className="flex flex-col gap-6 lg:self-start lg:sticky lg:top-[120px]"
            >

              {/* Education card */}
              <SidebarCard heading="Education">
                {EDUCATION.map((edu, i) => (
                  <div
                    key={edu.degree}
                    style={{
                      padding: "0.75rem 0",
                      borderBottom:
                        i < EDUCATION.length - 1
                          ? "1px solid var(--color-border)"
                          : "none",
                    }}
                  >
                    <p
                      className="font-body font-semibold text-text-primary"
                      style={{ fontSize: "0.875rem", lineHeight: "1.35" }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      className="font-body text-text-secondary"
                      style={{ fontSize: "0.825rem", marginTop: "0.2rem" }}
                    >
                      {edu.institution}
                    </p>
                    <p
                      className="font-mono text-accent"
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.08em",
                        marginTop: "0.2rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {edu.year}
                    </p>
                  </div>
                ))}
              </SidebarCard>

              {/* Affiliations card */}
              <SidebarCard heading="Professional Affiliations">
                {AFFILIATIONS.map((affiliation, i) => (
                  <div
                    key={affiliation}
                    className="flex items-center gap-3"
                    style={{
                      padding: "0.5rem 0",
                      borderBottom:
                        i < AFFILIATIONS.length - 1
                          ? "1px solid var(--color-border)"
                          : "none",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--color-gold)" }}
                    />
                    <span
                      className="font-body text-text-secondary"
                      style={{ fontSize: "0.825rem", lineHeight: "1.45" }}
                    >
                      {affiliation}
                    </span>
                  </div>
                ))}
              </SidebarCard>

            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}
