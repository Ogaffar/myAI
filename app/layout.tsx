import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zainab Olayiwola, PharmD",
    template: "%s | Zainab Olayiwola, PharmD",
  },
  description:
    "PGY-1 Pharmacy Resident at Ascension St. Vincent Evansville and future PGY-2 Oncology Pharmacy Specialist at the Medical College of Wisconsin.",
  keywords: [
    "pharmacy",
    "oncology pharmacy",
    "PGY-1 resident",
    "PharmD",
    "Zainab Olayiwola",
    "clinical pharmacy",
    "pharmacy resident",
    "Ascension St. Vincent",
  ],
  openGraph: {
    title: "Zainab Olayiwola, PharmD",
    description:
      "PGY-1 Pharmacy Resident at Ascension St. Vincent Evansville and future PGY-2 Oncology Pharmacy Specialist at the Medical College of Wisconsin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
