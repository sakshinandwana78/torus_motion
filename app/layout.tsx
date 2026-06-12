import type { Metadata } from "next";
import { Inter, Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Torus Motion — Advanced Electric Motor Technology",
  description:
    "Torus Motion engineers high-performance axial flux and BLDC motors for EVs, robotics, industrial automation, and aerospace. Precision-engineered for maximum power density.",
  keywords: [
    "axial flux motor",
    "BLDC motor",
    "electric motor",
    "EV motor",
    "robotics motor",
    "high torque motor",
    "Torus Motion",
  ],
  openGraph: {
    title: "Torus Motion — Advanced Electric Motor Technology",
    description:
      "High-performance electric motors engineered for the next generation of mobility and automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
