import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADMYBRAND AI Suite - Transform Your Marketing with AI Intelligence",
  description:
    "Generate high-converting campaigns, analyze performance with precision, and scale your brand exponentially using our revolutionary AI-powered marketing suite.",
  keywords:
    "AI marketing, campaign generation, marketing automation, brand scaling, performance analytics",
  authors: [{ name: "ADMYBRAND" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </ThemeProvider>
    </html>
  );
}
