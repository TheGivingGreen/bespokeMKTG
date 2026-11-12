import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promotional Director | bespoke MKTG",
  description:
    "Your own Director of Promotions for an independent bar, club or restaurant, without the full time salary.",
};

export default function PromotionalDirectorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
