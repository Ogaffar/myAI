import type { Metadata } from "next";
import localFont from "next/font/local";

// Component imports
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorWrapper } from "./parts/error/error-wrapper";

// Configuration imports
import { PAGE_TITLE, PAGE_DESCRIPTION } from "@/configuration/ui";

// Styles
import "./globals.css";

// Font definitions with font-display for better performance
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Ensures text remains visible during font loading
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap", // Ensures text remains visible during font loading
});

// Metadata configuration with enhanced SEO and Open Graph tags
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://www.yoursite.com", // Replace with your actual site URL
    images: [
      {
        url: "/images/og-image.jpg", // Replace with your image
        width: 1200,
        height: 630,
        alt: PAGE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    image: "/images/twitter-image.jpg", // Replace with your image
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />
        {/* Additional metadata tags like Open Graph can go here */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TooltipProvider>
          <ErrorWrapper>{children}</ErrorWrapper>
        </TooltipProvider>
      </body>
    </html>
  );
}
