
// app/layout.tsx

import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeProvider from "./theme-provider";
import { Inter, Young_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import PortfolioShell from "@/components/PortfolioShell";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-young-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suyash Yadav | Full Stack Developer & Designer",
  description: "Full Stack Developer & Designer crafting clean web applications, scalable backends, and pixel-perfect digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} ${youngSerif.variable} antialiased hide-scrollbar`}>
        <ThemeProvider>
          <PortfolioShell>{children}</PortfolioShell>
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}