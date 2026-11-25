import type { Metadata } from "next";

const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Promotional Director | bespoke MKTG",
  description:
    "Your own Director of Promotions for an independent bar, club or restaurant, without the full time salary.",
  openGraph: {
    type: "website",
    siteName: "bespoke MKTG",
    title: "Promotional Director | bespoke MKTG",
    description:
      "Senior promotional direction for independent bars, clubs and restaurants, without adding another full time salary to payroll.",
    url: `${githubPagesBasePath}/promotional-director/`,
    images: [
      {
        url: `${githubPagesBasePath}/og/promotional-director.jpg`,
        width: 1200,
        height: 630,
        alt: "Your Director of Promotions. Without the salary.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promotional Director | bespoke MKTG",
    description:
      "Senior promotional direction for independent bars, clubs and restaurants, without adding another full time salary to payroll.",
    images: [`${githubPagesBasePath}/og/promotional-director.jpg`],
  },
};

export default function PromotionalDirectorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
