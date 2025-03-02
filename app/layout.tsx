import type { Metadata } from "next";
import localFont from "next/font/local";
// Component imports
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorWrapper } from "./parts/error/error-wrapper";
// Configuration imports
import { PAGE_TITLE, PAGE_DESCRIPTION } from "@/configuration/ui";
// Styles
import "./globals.css";
// Font definitions
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// Metadata configuration
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative w-full">
          <TooltipProvider>
            <ErrorWrapper>{children}</ErrorWrapper>
          </TooltipProvider>
        </div>
      </body>
    </html>
  );
}
