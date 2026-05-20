import type { Metadata } from "next";
import Link from "next/link";
import PortfolioPageLayout from "@/components/PortfolioPageLayout";

export const metadata: Metadata = {
  title: "Vancomycin Dosing in PD | Evidence of Teaching | Zainab Olayiwola, PharmD",
  description:
    "A patient case presentation on sepsis management and the nuanced pharmacokinetics of IV vancomycin dosing in peritoneal dialysis patients.",
};

export default function VancomycinPdPage() {
  return (
    <>
      <PortfolioPageLayout
        label="Patient Case Presentation"
        title="IV Vancomycin Dosing for Sepsis in a Peritoneal Dialysis Patient"
        subtitle="Applying sepsis diagnostics and pharmacokinetic principles to vancomycin dosing in a high-complexity patient with end-stage renal disease on peritoneal dialysis."
        setting="Ascension St. Vincent Evansville"
        audience="Clinical Pharmacists & Pharmacy Residents"
        date="October 2025"
        badge="Nephrology Rotation"
        overview="Vancomycin dosing in patients on peritoneal dialysis presents one of the most pharmacokinetically challenging scenarios in clinical pharmacy. Standard dosing algorithms based on creatinine clearance are inapplicable, dialysis clearance of vancomycin is substantially reduced compared to hemodialysis, and the risk of both underdosing and accumulation-related toxicity is high. This case presentation used a real patient scenario — a 46-year-old woman with end-stage renal disease on peritoneal dialysis presenting to the ED with sepsis — to ground abstract pharmacokinetic principles in clinical reality."
        sections={[
          {
            heading: "The Patient Case: Sepsis in a PD Patient",
            body: "The case centered on a 46-year-old female with ESRD on peritoneal dialysis, obesity, and rheumatoid arthritis presenting with cough, fever, tachycardia, and lightheadedness. Initial ED findings revealed BP 66/43 mmHg, SpO2 85% on room air, temperature 102.4°F, and a lactic acid of 3.4 — meeting criteria for septic shock. Cultures from blood, peritoneal fluid, and vaginal lesion were drawn, with the vaginal lesion growing moderate gram-positive cocci not identified as S. aureus or beta-hemolytic Streptococcus. This deliberately complex presentation was chosen to force attendees to reason through organism uncertainty, source localization, and antimicrobial selection simultaneously.",
          },
          {
            heading: "Sepsis: Diagnosis and Classification",
            body: "Before reaching vancomycin dosing, the presentation established a rigorous diagnostic foundation. The current sepsis definition — a life-threatening organ dysfunction caused by a dysregulated host response to infection — was contrasted with the now less-favored SIRS criteria, which poorly predicts sepsis-related death. Three diagnostic tools were compared in detail: SIRS criteria, qSOFA (Respiratory Rate ≥22, Altered mental status, Systolic BP ≤100 mmHg), and the NEWS score — an aggregate 6-parameter scoring system with risk stratification from low (0–4) to high (7+). The four types of shock (hypovolemic, cardiogenic, obstructive, distributive/septic) were mapped to their pathophysiology to help attendees correctly classify this patient's presentation as septic shock.",
          },
          {
            heading: "Vancomycin Pharmacokinetics in Peritoneal Dialysis",
            body: "The pharmacokinetic section addressed the core clinical challenge: peritoneal dialysis removes only approximately 28% of vancomycin, compared to substantially higher removal with hemodialysis. The mean elimination half-life of vancomycin in PD patients extends to up to 7.5 days, versus 4–6 hours in patients with normal renal function. This dramatically altered pharmacokinetic profile necessitates extended dosing intervals — typically every 48–72 hours — and close AUC-guided monitoring rather than standard trough-based dosing. Critically, intraperitoneal vancomycin administration is reserved for peritoneal infections only and is NOT appropriate for systemic infections, a common clinical misconception addressed directly.",
          },
          {
            heading: "Clinical Application and Dosing Decision",
            body: "The final section applied all of the above to the patient case. After initial resuscitation (IV fluid bolus 30 mL/kg, norepinephrine drip, cefepime 2g, vancomycin 2000 mg loading dose, supplemental oxygen), the patient stabilized with improvement in BP, lactate, and SpO2. Attendees were guided through the vancomycin dosing decision for ongoing therapy: how to estimate residual drug concentrations in a PD patient, when to redose, how to set AUC targets, and how to build a monitoring plan given the absence of conventional renal clearance. The case reinforced that pharmacist expertise in renal pharmacokinetics is essential to patient safety in dialysis-dependent populations.",
          },
        ]}
        objectives={[
          "Review the diagnostic criteria and current definitions of sepsis and septic shock",
          "Differentiate qSOFA, SIRS, and NEWS scoring tools and their clinical utility",
          "Explain the pharmacokinetics of vancomycin in peritoneal dialysis patients",
          "Apply AUC-guided vancomycin dosing principles in a patient with ESRD on PD",
          "Identify when intraperitoneal vancomycin is and is not appropriate",
        ]}
      />

      {/* Download slides */}
      <section className="bg-white" style={{ paddingBottom: "4rem" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <Link
            href="/vancomycin-pd.pdf"
            download
            aria-label="Download Vancomycin PD presentation slides as PDF"
            className="inline-flex items-center gap-2.5 rounded-full font-body font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{
              backgroundColor: "var(--color-accent)",
              padding: "0.875rem 1.75rem",
              fontSize: "0.925rem",
            }}
          >
            <span style={{ fontSize: "1rem" }}>↓</span>
            Download Slides (PDF)
          </Link>
        </div>
      </section>
    </>
  );
}
