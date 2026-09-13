import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Error404 · Full-Stack Web & Backend Developer",
  description:
    "Portfolio of Error404 (Dev Codes) — full-stack web and backend developer building practical, production-minded web applications, REST APIs, automation workflows, and AI-assisted developer tooling. Based in Lagos / Abuja, Nigeria.",
  keywords: [
    "Error404",
    "Dev Codes",
    "Full-Stack Developer",
    "Backend Developer",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "n8n",
    "TypeScript",
    "Nigeria Developer",
    "API Platform",
  ],
  authors: [{ name: "Error404" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Error404 · Full-Stack Web & Backend Developer",
    description:
      "Full-stack developer building production-minded web apps, APIs, automation workflows, and AI tooling.",
    url: "https://devcodes.dev",
    siteName: "Error404",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Error404 · Full-Stack Web & Backend Developer",
    description:
      "Full-stack developer building production-minded web apps, APIs, automation workflows, and AI tooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
