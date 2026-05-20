import type { Metadata } from "next";
import Link from "next/link";
import PortfolioPageLayout from "@/components/PortfolioPageLayout";

export const metadata: Metadata = {
  title: "CINV Management | Evidence of Teaching | Zainab Olayiwola, PharmD",
  description:
    "A comprehensive clinical pharmacy presentation on chemotherapy-induced nausea and vomiting: classification, risk stratification, antiemetic regimens, and the pharmacist's role.",
};

export default function CinvPage() {
  return (
    <>
      <PortfolioPageLayout
        label="Pharmacist Presentation"
        title="Optimizing Management of Chemotherapy-Induced Nausea and Vomiting"
        subtitle="A comprehensive review of CINV classification, emetogenic risk stratification, antiemetic prophylaxis strategies, and the expanding role of the pharmacist in CINV management."
        setting="Ascension St. Vincent Evansville"
        audience="Pharmacists & Pharmacy Residents"
        date="November 2025"
        badge="Oncology Rotation"
        overview="Chemotherapy-induced nausea and vomiting is one of the most feared and debilitating side effects of cancer treatment, with significant consequences for patient quality of life, treatment adherence, and clinical outcomes. Poorly controlled CINV can lead to dehydration, electrolyte imbalances, nutritional deficiencies, and ultimately dose reductions or treatment discontinuation that compromise clinical response. This presentation was developed to equip pharmacists with a comprehensive, guideline-concordant framework for preventing and managing CINV across all risk categories — from minimal to highly emetogenic chemotherapy regimens."
        sections={[
          {
            heading: "Classification of CINV",
            body: "The presentation began by defining the five distinct patterns of CINV, each with a different underlying mechanism and clinical management approach. Acute CINV occurs within 24 hours of chemotherapy, driven primarily by serotonin release from enterochromaffin cells activating 5-HT3 receptors. Delayed CINV onset occurs beyond 24 hours, peaks at 48–72 hours, and can persist up to 120 hours — driven by substance P activation of central neurokinin-1 receptors. Anticipatory CINV is a conditioned response that develops prior to treatment based on prior negative experience. Breakthrough CINV occurs despite adequate prophylaxis and requires rescue antiemetics. Refractory CINV persists when both prophylaxis and rescue treatment fail.",
          },
          {
            heading: "Risk Stratification & Emetogenic Potential",
            body: "A structured framework for classifying emetogenic potential was presented across four levels: minimal (<10% emesis risk), low (10–30%), moderate (30–90%), and high (>90%). Patient-specific risk factors were reviewed including younger age, female sex, anxiety, history of motion sickness or morning sickness, low alcohol consumption, and prior CINV. Treatment-related risk factors including regimen dose, schedule, combination regimens, and multi-day oral regimens were also addressed. Attendees applied this framework to classify common agents including cisplatin, carboplatin, doxorubicin, paclitaxel, and gemcitabine.",
          },
          {
            heading: "Antiemetic Regimens by Risk Category",
            body: "The presentation provided a complete, evidence-based guide to antiemetic selection mapped to emetogenic risk. High emetic risk regimens require a 3–4 drug combination: NK1 receptor antagonist + 5-HT3 receptor antagonist + olanzapine + dexamethasone, with continuation of olanzapine and dexamethasone through days 2–4 for delayed CINV. Moderate risk regimens use 2–3 drugs. Low risk regimens require a single agent. Minimal risk regimens require no routine prophylaxis. Drug-specific clinical pearls were highlighted including the QT prolongation risk of ondansetron (IV dose limit 16 mg), CYP3A4 interactions between aprepitant and dexamethasone, and the contraindication of dexamethasone in systemic fungal infections.",
          },
          {
            heading: "Breakthrough CINV & Non-Pharmacologic Interventions",
            body: "Management of breakthrough CINV was addressed with an emphasis on adding rescue agents from a different drug class on a scheduled rather than PRN basis. Olanzapine 2.5–10 mg daily is recommended first-line for breakthrough if not used prophylactically. The section on non-pharmacologic interventions covered ginger supplementation, behavioral desensitization for anticipatory CINV, music therapy, nutrition support, and physical exercise — all of which serve as adjuncts to pharmacologic therapy. The presentation closed with a direct statement of the pharmacist's role: evaluating emetogenic risk, selecting guideline-concordant regimens, screening for drug interactions and QT risk, and educating the multidisciplinary team on optimal CINV prevention.",
          },
        ]}
        objectives={[
          "Define the five types of CINV: acute, delayed, anticipatory, breakthrough, and refractory",
          "Identify patient-specific and treatment-related risk factors for CINV",
          "Classify the emetogenic potential of common chemotherapeutic agents",
          "Select appropriate antiemetic prophylaxis regimens by emetogenic risk category per NCCN guidelines",
          "Manage breakthrough and refractory CINV using agents from different drug classes",
          "Describe the pharmacist's role in optimizing CINV management across the care team",
        ]}
      />

      {/* Download slides */}
      <section className="bg-white" style={{ paddingBottom: "4rem" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <Link
            href="/cinv.pdf"
            download
            aria-label="Download CINV presentation slides as PDF"
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
