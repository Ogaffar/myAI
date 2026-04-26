import type { Metadata } from "next";
import PortfolioPageLayout from "@/components/PortfolioPageLayout";

export const metadata: Metadata = {
  title: "VTE in Oncology | Zainab Olayiwola, PharmD",
  description:
    "A Grand Rounds presentation synthesizing landmark trial data and current ASCO, ITAC, and NCCN guidelines for managing VTE in cancer patients.",
};

export default function VteOncologyPage() {
  return (
    <PortfolioPageLayout
      label="Evidence of Teaching"
      title="VTE in Oncology: From Risk Assessment to Personalized Anticoagulation"
      subtitle="A Grand Rounds presentation synthesizing landmark trial data and current ASCO, ITAC, and NCCN guidelines for managing VTE in cancer patients."
      setting="Hospital Grand Rounds — Ascension St. Vincent"
      audience="Pharmacists & Pharmacy Residents"
      date="November 2025"
      overview="Venous thromboembolism is a leading cause of preventable mortality in cancer patients, yet its management is complicated by disease- and treatment-related factors that make standard anticoagulation protocols insufficient. This Grand Rounds presentation was developed at Ascension St. Vincent Evansville to bridge the gap between landmark trial evidence and individualized clinical decision-making. The session challenged participants to move beyond algorithm-following toward a risk-stratified, patient-centered approach that accounts for bleeding risk, tumor histology, drug interactions, and patient preference."
      sections={[
        {
          heading: "Epidemiology & The Clinical Stakes",
          body: "Cancer patients face a four- to seven-fold increased risk of VTE compared to the general population, with certain malignancies — pancreatic, gastric, and brain cancers among them — carrying substantially higher baseline risk. VTE is the second leading cause of death in ambulatory cancer patients after the cancer itself. This opening section established why this topic demands pharmacist expertise: anticoagulation decisions in oncology are rarely straightforward, and the consequences of both under-treatment (recurrent thrombosis) and over-treatment (major bleeding, particularly GI and intracranial) are severe.",
        },
        {
          heading: "Landmark Trials: HOKUSAI-VTE Cancer, SELECT-D & CARAVAGGIO",
          body: "The presentation performed a head-to-head analysis of the three pivotal trials that shifted oncology VTE management from LMWH to direct oral anticoagulants. HOKUSAI-VTE Cancer established edoxaban as non-inferior to dalteparin for the composite outcome of recurrent VTE or major bleeding, while SELECT-D demonstrated rivaroxaban's superiority for recurrent VTE with a notable signal for GI bleeding in luminal GI cancers. CARAVAGGIO subsequently showed apixaban non-inferior to dalteparin with no statistically significant increase in major bleeding — including in GI malignancies. Participants were guided through critical appraisal of each trial's design, endpoints, and applicability to clinical practice.",
        },
        {
          heading: "Building a Clinical Decision Framework",
          body: "Rather than presenting a single algorithm, this section equipped attendees with a structured decision matrix that integrates the Khorana Score for VTE risk stratification, tumor histology and bleeding-site risk, concurrent chemotherapy and drug-drug interaction profiles, and patient renal and hepatic function. The framework was applied to three patient cases of increasing complexity — a patient with newly diagnosed pancreatic adenocarcinoma starting gemcitabine, a patient with GI malignancy and recent luminal bleeding, and a patient on concurrent checkpoint inhibitor therapy with thrombocytopenia — to demonstrate how evidence translates to individualized recommendations.",
        },
        {
          heading: "The Pharmacist's Role in Shared Decision-Making",
          body: "The final section addressed the communication and counseling dimensions of anticoagulation management in oncology. Cancer patients face unique psychosocial burdens — injection fatigue with LMWH, fear of bleeding, and pill burden — that meaningfully affect adherence. This section presented a framework for pharmacist-led shared decision-making conversations, including how to present comparative bleeding and clotting risks in accessible language, how to involve oncology nursing in monitoring plans, and how to identify and manage DOAC drug interactions with targeted therapies. Participants were asked to reflect on how they currently integrate patient preference into anticoagulation selection.",
        },
      ]}
      objectives={[
        "Stratify VTE risk in cancer patients using validated tools including the Khorana Score and tumor histology",
        "Compare the efficacy and safety profiles of DOACs versus LMWH based on SELECT-D, HOKUSAI, and CARAVAGGIO trial data",
        "Identify patient-specific factors that favor LMWH over DOAC therapy, including GI malignancy and severe thrombocytopenia",
        "Apply a structured clinical decision framework to recommend individualized anticoagulation regimens in complex oncology cases",
      ]}
      badge="Oncology Rotation"
    />
  );
}
