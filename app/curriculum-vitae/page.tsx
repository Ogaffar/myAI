import type { Metadata } from "next";
import CVContent from "./CVContent";

export const metadata: Metadata = {
  title: "Curriculum Vitae | Zainab Olayiwola, PharmD",
  description:
    "Full curriculum vitae for Zainab Olayiwola, PharmD — clinical training, research, teaching, presentations, and professional service.",
};

export default function CurriculumVitaePage() {
  return <CVContent />;
}
