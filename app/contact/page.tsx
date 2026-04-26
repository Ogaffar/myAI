import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Zainab Olayiwola, PharmD",
  description:
    "Get in touch with Zainab Olayiwola, PharmD — open to oncology pharmacy collaborations, research discussions, residency mentorship, and professional opportunities.",
};

export default function ContactPage() {
  return <ContactContent />;
}
