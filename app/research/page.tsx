import type { Metadata } from "next";
import ResearchContent from "./ResearchContent";

export const metadata: Metadata = {
  title: "Research | Zainab Olayiwola, PharmD",
  description:
    "Active research projects and poster presentations by Zainab Olayiwola, PharmD, PGY-1 Pharmacy Resident at Ascension St. Vincent Evansville.",
};

export default function ResearchPage() {
  return <ResearchContent />;
}
