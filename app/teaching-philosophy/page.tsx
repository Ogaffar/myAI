import type { Metadata } from "next";
import TeachingContent from "./TeachingContent";

export const metadata: Metadata = {
  title: "Teaching Philosophy | Zainab Olayiwola, PharmD",
  description:
    "Zainab Olayiwola's teaching philosophy: rooted in compassion, accountability, and the conviction that grace and high standards are not mutually exclusive.",
};

export default function TeachingPhilosophyPage() {
  return <TeachingContent />;
}
