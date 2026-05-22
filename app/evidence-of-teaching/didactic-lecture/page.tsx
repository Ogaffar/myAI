import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Didactic Lecture | Evidence of Teaching | Zainab Olayiwola, PharmD",
  description:
    "A record of clinical pharmacy didactic presentations delivered by Zainab Olayiwola across five residency rotations at Ascension St. Vincent Evansville.",
};

const ENTRIES = [
  {
    title: "High Reliability & Just Culture in Hospital Pharmacy",
    date: "February 2026",
    rotation: "Administration Rotation",
    audience: "Director of Pharmacy & Pharmacists",
    setting: "Ascension St. Vincent",
    about:
      "This presentation was developed and delivered during my Administration rotation to the Director of Pharmacy and the pharmacist staff at Ascension St. Vincent Evansville. It introduced the principles of High Reliability Organizations (HROs) and the Just Culture framework as practical tools for building a safer pharmacy environment. The session used a real-world near-miss scenario — a look-alike/sound-alike medication error caught at bedside — to open conversation and contrast punitive versus just culture responses. Attendees worked through interactive STAR model scenarios to apply the concepts directly to their daily practice.",
    reflection:
      "This was one of the most meaningful presentations I gave during my residency because it spoke directly to the team I work alongside every day. Presenting to senior pharmacists and a Director of Pharmacy pushed me to anticipate a more experienced and critical audience. The interactive scenarios generated genuine discussion, which told me the content was landing. If I were to give this presentation again, I would build in more time for the scenario discussions, as those conversations were the most valuable part of the session.",
    downloadHref: "/high-reliability.pdf",
  },
  {
    title:
      "Optimizing Management of Chemotherapy-Induced Nausea and Vomiting (CINV)",
    date: "November 2025",
    rotation: "Oncology Rotation",
    audience: "Pharmacists & Pharmacy Residents",
    setting: "Ascension St. Vincent",
    about:
      "This presentation was delivered during my Oncology rotation and focused on optimizing CINV management across all risk categories. The session covered the five types of CINV and their distinct mechanisms, emetogenic risk stratification, antiemetic prophylaxis regimens per current NCCN guidelines, and the management of breakthrough and refractory cases. A strong emphasis was placed on the pharmacist's specific role in selecting guideline-concordant regimens, screening for drug interactions (including QTc risk with 5-HT3 receptor antagonists), and educating the multidisciplinary team.",
    reflection:
      "CINV is a topic that is deceptively straightforward until you get into the clinical nuances — the CYP3A4 interactions with aprepitant, the QT concerns with ondansetron, the distinction between breakthrough and refractory presentations. I found that preparing this presentation significantly deepened my own clinical knowledge in this area. The knowledge checks I embedded in the session worked well to keep the audience engaged and to identify gaps in understanding that I could address in real time.",
    downloadHref: "/cinv.pdf",
  },
  {
    title:
      "Venous Thromboembolism Management in Oncology Patients: From Risk Assessment to Personalized Anticoagulation",
    date: "November 2025",
    rotation: "Oncology Rotation",
    audience: "Pharmacists & Pharmacy Residents",
    setting: "Grand Rounds",
    about:
      "This Grand Rounds presentation was developed in direct connection with my ongoing research project on VTE prophylaxis patterns in high-risk cancer patients at Ascension St. Vincent. It guided attendees through the full clinical spectrum of cancer-associated thrombosis — from risk stratification using the Khorana Score through the critical appraisal of four landmark trials (Hokusai VTE Cancer, SELECT-D, CARAVAGGIO, and CANVAS) and the synthesis of current ASCO, ITAC, and NCCN guideline recommendations into a patient-centered decision framework. Three complex patient cases were used to apply the evidence in practice.",
    reflection:
      "Presenting on oncology-associated VTE allowed me to practice translating complex and sometimes conflicting guideline information into clear, concise, and easy-to-digest clinical content to guide actionable decisions. I utilized patient cases to highlight the nuances of bleeding risk, which kept the audience highly engaged. In the future, I want to incorporate a visual decision tree handout to help learners navigate the choice of anticoagulant more efficiently.",
    downloadHref: "/vte-oncology.pdf",
  },
  {
    title:
      "Vancomycin vs. Daptomycin: An Evidence-Based Framework for MRSA Bloodstream Infections",
    date: "October 2025",
    rotation: "Nephrology Rotation",
    audience: "Clinical Pharmacists & Staff",
    setting: "Ascension St. Vincent",
    about:
      "This presentation was developed during my Nephrology rotation and addressed one of the most clinically debated questions in infectious disease pharmacy: when to choose daptomycin over vancomycin for MRSA bloodstream infections. The session reviewed the landmark Fowler et al. NEJM 2006 RCT and subsequent real-world cohort data and meta-analyses, compared clinical failure rates, 30-day mortality, nephrotoxicity burden, monitoring requirements, and cost-effectiveness between the two agents, and concluded with a practical clinical decision framework guiding when to escalate to daptomycin — including the critical window of early switching within 3 days.",
    reflection:
      "This was one of the presentations where I felt most comfortable with the clinical content, which I think allowed me to focus more on the delivery. The audience was very engaged when I walked through the real-world consequences of vancomycin failure — the 45–48% clinical failure rate is a striking number that I think reframes how pharmacists think about this choice. I would have liked more time to explore the cost-effectiveness data, which generated questions I was not able to fully address within the session time.",
    downloadHref: "/daptomycin-vancomycin.pdf",
  },
  {
    title: "IV Vancomycin Dosing for Sepsis in a Peritoneal Dialysis Patient",
    date: "October 2025",
    rotation: "Nephrology Rotation",
    audience: "Clinical Pharmacists & Pharmacy Residents",
    setting: "Ascension St. Vincent",
    about:
      "This patient case presentation used a real clinical scenario — a 46-year-old woman with end-stage renal disease on peritoneal dialysis presenting to the ED with septic shock — to ground the pharmacokinetic principles of vancomycin dosing in PD in clinical reality. The session covered sepsis diagnostic criteria and scoring tools (SIRS, qSOFA, NEWS), the pathophysiology and classification of shock, the unique pharmacokinetics of vancomycin in peritoneal dialysis patients (half-life up to 7.5 days, only 28% removal by PD), and the appropriate application of AUC-guided dosing in this population.",
    reflection:
      "Renal dosing in peritoneal dialysis and sepsis is a complex topic for learners. By breaking the presentation down step by step into digestible concepts — providing foundational background before diving into drug dosing — I was able to make it easy to follow. The interactiveness of the patient case made it easy to apply these dosing strategies directly to an ICU patient workup and generated strong engagement from the audience.",
    downloadHref: "/vancomycin-pd.pdf",
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

export default function DidacticLecturePage() {
  return (
    <>
      <PageHeader
        label="Evidence of Teaching"
        title="Didactic Lecture"
        subtitle="Clinical pharmacy presentations delivered to pharmacists, pharmacy residents, and the multidisciplinary care team across five residency rotations."
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
              The following presentations were developed and delivered during structured
              residency rotations at Ascension St. Vincent Evansville. Each was grounded
              in the best available clinical evidence and designed to equip pharmacists and
              healthcare professionals with both the knowledge and reasoning framework
              needed to make better decisions for their patients.
            </p>
          </AnimatedSection>

          {/* Presentation entries */}
          {ENTRIES.map((entry, i) => (
            <AnimatedSection key={entry.downloadHref} delay={i * 0.1}>
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
                {entry.rotation}&nbsp;·&nbsp;{entry.audience}&nbsp;·&nbsp;{entry.setting}
              </p>

              {/* About */}
              <EntryLabel>About the Presentation</EntryLabel>
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

              {/* Reflection */}
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

              {/* Download */}
              <a
                href={entry.downloadHref}
                download
                className="inline-flex items-center font-body font-medium transition-all duration-150 hover:underline"
                style={{
                  fontSize: "0.825rem",
                  color: "var(--color-accent)",
                  gap: "0.35rem",
                }}
              >
                <span>↓</span>
                Download Slides (PDF)
              </a>
            </AnimatedSection>
          ))}

          {/* Next section link */}
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
                Next: Small Group Facilitation →
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </>
  );
}
