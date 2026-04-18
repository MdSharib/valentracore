import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "ValentraCore | Premium Medical Operating Layer",
  description: "A world-class, cinematic digital product experience for a medical-tech brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={clsx("bg-background text-foreground antialiased selection:bg-accent-glow selection:text-white hide-scrollbar", inter.variable, outfit.variable, inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
