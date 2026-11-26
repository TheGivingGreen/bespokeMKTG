import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Netlify sets URL to the project's primary address at build time (bespoke-mktg.com once the
// domain is connected). Link previews need absolute image URLs, so they resolve against it.
const siteUrl = process.env.URL ?? "https://bespoke-mktg.com";

const homeDescription =
  "Original brand direction, marketing strategy, social content, campaigns, experiences, and websites shaped by more than 30 years of creative judgment.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "bespoke MKTG | Nothing About You Gets Recycled",
  openGraph: {
    type: "website",
    siteName: "bespoke MKTG",
    title: "bespoke MKTG | Nothing About Your Brand Gets Recycled",
    description: homeDescription,
    images: [
      {
        url: `${githubPagesBasePath}/og/home.jpg`,
        width: 1200,
        height: 630,
        alt: "bespoke MKTG: Nothing about your brand gets recycled.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bespoke MKTG | Nothing About Your Brand Gets Recycled",
    description: homeDescription,
    images: [`${githubPagesBasePath}/og/home.jpg`],
  },
  description:
    "Original brand direction, marketing strategy, social content, campaigns, experiences, and websites shaped by more than 30 years of creative judgment.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${githubPagesBasePath}/favicon.svg`,
    shortcut: `${githubPagesBasePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
