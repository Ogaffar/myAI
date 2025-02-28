import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { PAGE_TITLE, PAGE_DESCRIPTION, SITE_URL, THEME_COLOR } from "@/configuration/ui";
import "./globals.css";
import { ErrorWrapper } from "./parts/error/error-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";

// Font optimization - preload with display swap for better performance
const geistSans = localFont({
  src: [
    {
      path: "./fonts/GeistVF.woff2", // Prefer WOFF2 for better compression
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/GeistVF.woff", // Fallback
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const geistMono = localFont({
  src: [
    {
      path: "./fonts/GeistMonoVF.woff2", // Prefer WOFF2 for better compression
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/GeistMonoVF.woff", // Fallback
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
  fallback: ["Menlo", "Monaco", "Courier New", "monospace"],
});

// Extended metadata
export const metadata: Metadata = {
  title: {
    template: `%s | ${PAGE_TITLE}`,
    default: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: ["application", "web app", "dashboard"], // Add your keywords
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name or Company",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: PAGE_TITLE,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
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
    images: [`${SITE_URL}/twitter-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: `${SITE_URL}/manifest.json`,
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={300}>
            <main className="relative flex min-h-screen flex-col">
              <ErrorWrapper>{children}</ErrorWrapper>
            </main>
            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
