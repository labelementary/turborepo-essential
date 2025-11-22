import type { Metadata } from "next";
import "@/styles/root-layout.css";
import { cn } from "@repo/lib";
import { fonts } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Turborepo Essential",
  description:
    "Turborepo Essential Starter Template to start your next Turborepo project.",
  icons: {
    icon: "favicon.png",
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
      className={cn(
        fonts.GeistSans.variable,
        fonts.GeistMono.variable,
        "font-geistMono"
      )}
    >
      <body>{children}</body>
    </html>
  );
}
