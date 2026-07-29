import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bespoke MKTG | Nothing About You Gets Recycled",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
