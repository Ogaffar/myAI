import type { Metadata } from "next";
import PortfolioPageLayout from "@/components/PortfolioPageLayout";

export const metadata: Metadata = {
  title: "High Reliability & Just Culture | Zainab Olayiwola, PharmD",
  description:
    "A presentation on building safety cultures in inpatient pharmacy — balancing accountability with learning through the lens of High Reliability Organizations.",
};

export default function HighReliabilityPage() {
  return (
    <PortfolioPageLayout
      label="Evidence of Teaching"
      title="High Reliability & Just Culture in Hospital Pharmacy"
      subtitle="A presentation on building safety cultures in inpatient pharmacy — balancing accountability with learning through the lens of High Reliability Organizations."
      setting="Pharmacy Leadership Presentation — Ascension St. Vincent"
      audience="Pharmacy Leadership & Staff Pharmacists"
      date="February 2026"
      overview="Medication errors are not fundamentally a problem of individual carelessness — they are a systems problem. High Reliability Organizations (HROs) in aviation, nuclear power, and military operations have long demonstrated that the safest environments are not those that eliminate human fallibility but those that are explicitly designed to catch, report, and learn from it. This presentation brought the core principles of HRO theory and Just Culture into the context of hospital pharmacy, challenging pharmacists and pharmacy leaders to examine how their daily practices, team norms, and institutional structures either support or undermine a culture of safety."
      sections={[
        {
          heading: "What Makes an Organization 'Highly Reliable'?",
          body: "The session opened by contrasting reactive safety cultures — those that respond to errors after harm has occurred — with the proactive and generative cultures characteristic of HROs. Drawing on the foundational work of Weick and Sutcliffe, five hallmarks of HROs were introduced: preoccupation with failure, reluctance to simplify interpretations, sensitivity to operations, commitment to resilience, and deference to expertise. Participants were asked to honestly assess where their own pharmacy department fell on Westrum's organizational culture typology — pathological, bureaucratic, or generative — and what specific structural features produced that outcome. This opening exercise set a tone of honest self-examination rather than abstract theorizing.",
        },
        {
          heading: "Just Culture: Accountability Without Blame",
          body: "The most common barrier to error reporting in pharmacy is the fear of punitive consequences. Just Culture, developed by David Marx, provides a framework for distinguishing between three types of behavior — human error, at-risk behavior, and reckless behavior — and prescribing a response proportionate to each. This section worked through the practical application of the Just Culture algorithm using real pharmacy error scenarios: a wrong-patient dispensing event during a high-volume shift, a pharmacist who routinely skips a verification step perceived as redundant, and a technician who falsifies a refrigerator temperature log. Participants practiced applying the algorithm to each scenario and debated where the line between systemic and individual accountability should fall — a productive tension that surfaced deeply held assumptions about professional responsibility.",
        },
        {
          heading: "From Near-Miss to Learning Event: Building a Reporting Culture",
          body: "HROs derive much of their safety advantage from the near-miss report — an event that could have caused harm but did not. Hospital pharmacies generate near-misses at every verification step, yet most go unreported. This section examined the psychological and structural barriers to reporting, including normalization of deviance, fear of embarrassment, and the perception that 'nothing bad happened so nothing needs to be done.' Evidence-based strategies for increasing near-miss reporting were presented: anonymous reporting systems, leadership modeling of personal error disclosure, and post-report feedback that closes the loop by showing reporters what changed as a result. Participants developed a brief action plan for how they could increase near-miss reporting on their unit within 30 days.",
        },
        {
          heading: "Implementing Safety Principles in a Pharmacy Leadership Role",
          body: "The final section translated HRO theory into leadership practice, with a focus on the specific behaviors and structures pharmacy managers can implement. Topics included how to conduct a psychologically safe post-event debrief, how to perform a proactive failure mode analysis before implementing a new workflow, and how to structure team huddles to surface safety concerns before they become incidents. The session closed with a discussion of the pharmacist's dual accountability: to the institution's safety culture and to the individual patient in front of them. Participants left with a leadership reflection prompt — 'What is one thing your team currently normalizes that you would not accept if you were the patient?' — to carry into their next team meeting.",
        },
      ]}
      objectives={[
        "Define the five hallmarks of High Reliability Organizations and apply them to evaluate a pharmacy department's current safety culture",
        "Distinguish between human error, at-risk behavior, and reckless behavior using the Just Culture algorithm to guide equitable accountability decisions",
        "Identify structural and psychological barriers to near-miss reporting and propose evidence-based strategies to overcome them",
        "Design a pharmacy-specific safety intervention — including a post-event debrief or proactive failure mode analysis — using HRO principles",
      ]}
      badge="Administration Rotation"
    />
  );
}
