export const siteConfig = {
  name: "Zainab Olayiwola Portfolio",
  title: "Clinical Pharmacist & Pharmacy Educator",
  description:
    "Portfolio of Zainab Olayiwola, PGY-1 pharmacy resident and future oncology pharmacy specialist.",
  email: "ztolayiwola@gmail.com",
  phone: "(773) 808-1544",
} as const;

export const bioParagraph1 =
  "Zainab Olayiwola is a PharmD graduate of the University of Illinois at Chicago College of Pharmacy, bringing over seven years of community pharmacy leadership to her current role as a PGY-1 Pharmacy Resident at Ascension St. Vincent Evansville. Her path — from pharmacy manager to clinical resident — reflects an unwavering commitment to patient advocacy, evidence-based practice, and continuous growth. Driven by a passion for oncology, she is building the clinical expertise and teaching portfolio needed to shape the next generation of pharmacists and make a lasting impact on cancer care.";

export const aboutStats = [
  { value: "7+ Years", label: "Pharmacy Experience" },
  { value: "PGY-2", label: "Oncology — MCW, July 2025" },
  { value: "2", label: "Active Research Projects" },
] as const;

// Placeholder — will be replaced with full content in future prompts
export const credentialsContent = {
  heading: "Credentials & Certifications",
  items: [
    {
      title: "PharmD",
      institution: "University of Illinois at Chicago",
      year: "2024",
    },
    {
      title: "PGY-1 Pharmacy Residency",
      institution: "Ascension St. Vincent Evansville",
      year: "2025",
    },
  ],
} as const;

// Placeholder — will be replaced with full content in future prompts
export const testimonialsContent = {
  heading: "What Students Say",
  items: [
    {
      quote: "Placeholder testimonial from a student or colleague.",
      author: "Student Name",
      role: "PharmD Candidate",
    },
  ],
} as const;
