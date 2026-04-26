import type { Metadata } from "next";
import PortfolioPageLayout from "@/components/PortfolioPageLayout";

export const metadata: Metadata = {
  title: "Vancomycin vs. Daptomycin for MRSA | Zainab Olayiwola, PharmD",
  description:
    "A comprehensive, evidence-based comparison of two frontline agents for inpatient MRSA infections, with a clinical decision framework for pharmacists.",
};

export default function DaptomycinVancomycinPage() {
  return (
    <PortfolioPageLayout
      label="Evidence of Teaching"
      title="Vancomycin vs. Daptomycin: An Evidence-Based Framework for MRSA"
      subtitle="A comprehensive, evidence-based comparison of two frontline agents for inpatient MRSA infections, with a clinical decision framework for pharmacists."
      setting="Pharmacist Presentation — Ascension St. Vincent"
      audience="Clinical Pharmacists & Pharmacy Staff"
      date="October 2025"
      overview="Methicillin-resistant Staphylococcus aureus remains one of the most clinically challenging organisms encountered in inpatient pharmacy practice. While vancomycin has served as the cornerstone of MRSA therapy for decades, the increasing adoption of AUC/MIC-guided dosing, the emergence of hVISA strains, and the expanding indications for daptomycin have made the selection between these two agents a nuanced clinical decision. This presentation was developed to provide clinical pharmacists with a rigorous, evidence-grounded framework for choosing, dosing, and monitoring both agents in complex inpatient scenarios."
      sections={[
        {
          heading: "Mechanisms, Resistance, and the Case for Knowing Both Agents",
          body: "This section established the pharmacological foundation necessary for informed clinical decision-making. Vancomycin's mechanism — inhibition of cell wall synthesis by binding D-Ala-D-Ala peptidoglycan precursors — was contrasted with daptomycin's distinct mechanism of calcium-dependent membrane depolarization. Critically, the session addressed how vancomycin treatment failure is not always synonymous with resistance: the heteroresistant VISA (hVISA) phenotype can produce treatment failure at MICs well within the susceptible range, which has direct implications for how we interpret culture and sensitivity reports. The concept of daptomycin non-susceptibility induced by prior vancomycin exposure — a phenomenon with clinical relevance in persistent bacteremia — was also introduced.",
        },
        {
          heading: "AUC/MIC-Guided Vancomycin Dosing: The 2020 ASHP/IDSA/SIDP Guidelines",
          body: "The transition from trough-only monitoring to AUC/MIC-guided dosing represented one of the most significant shifts in inpatient pharmacy practice of recent years. This section walked participants through the rationale for the change — the strong correlation between AUC/MIC ≥ 400 and clinical outcomes, and the recognition that trough-only monitoring was an unreliable surrogate for AUC — and provided a practical guide to Bayesian pharmacokinetic software-assisted dosing. Participants worked through a case using two-point serum sampling to calculate an AUC and assess whether a patient's regimen met the target of 400–600 mg·h/L, while keeping nephrotoxicity risk in check.",
        },
        {
          heading: "Daptomycin: Indications, Dosing Optimization, and the Lung Exception",
          body: "Daptomycin's FDA-approved indications — complicated skin and soft tissue infections, S. aureus bacteremia, and right-sided endocarditis — belie its broader clinical utility and its important contraindication in pneumonia. This section explained the mechanism behind daptomycin's inactivation by pulmonary surfactant and drilled into the evidence base for high-dose daptomycin (10–12 mg/kg/day) in persistent MRSA bacteremia and left-sided endocarditis, including the relevant data from observational studies and the CAMERA2 trial evaluating combination therapy. Monitoring parameters — CPK elevation, eosinophilic pneumonia — were reviewed with a focus on the practical timing and thresholds that should trigger dose adjustment or discontinuation.",
        },
        {
          heading: "A Clinical Decision Framework for the Bedside Pharmacist",
          body: "The presentation closed with an integrated framework that synthesizes source of infection, MIC and resistance phenotype, organ function, and treatment history into an actionable decision tool. Three patient cases — a patient with MRSA bacteremia and concurrent AKI, a patient with MRSA pneumonia and a skin source, and a patient with persistent bacteremia after 72 hours of vancomycin — were used to apply the framework in real time. Participants were asked to defend their therapeutic recommendations, including when to escalate to ID consultation, how to define treatment failure, and how to document clinical reasoning in the pharmacy note.",
        },
      ]}
      objectives={[
        "Differentiate the mechanisms of action and resistance profiles of vancomycin and daptomycin against MRSA",
        "Apply the 2020 ASHP/IDSA/SIDP consensus guidelines to implement AUC/MIC-guided vancomycin dosing and monitoring",
        "Identify clinical scenarios where daptomycin is preferred, contraindicated, or requires dose optimization beyond standard labeling",
        "Develop a patient-specific antibiotic selection rationale for complex MRSA infections using source, MIC, organ function, and prior therapy",
        "Recognize pharmacokinetic/pharmacodynamic targets and toxicity monitoring parameters for both agents in the inpatient setting",
      ]}
      badge="Nephrology Rotation"
    />
  );
}
