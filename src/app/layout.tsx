import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = "Rafael Pinheiro | Desenvolvedor Full Stack";
const siteDescription =
  "Portfólio de Rafael Pinheiro, desenvolvedor full stack focado em software com método, clareza de contexto, IA estruturada, SDD, TDD e context engineering.";

function resolveMetadataBase() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    "http://localhost:3000";

  return new URL(
    baseUrl.startsWith("http") ? baseUrl : `https://${baseUrl}`,
  );
}

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Portfólio Rafael Pinheiro",
  authors: [{ name: "Rafael Pinheiro" }],
  creator: "Rafael Pinheiro",
  publisher: "Rafael Pinheiro",
  keywords: [
    "Rafael Pinheiro",
    "desenvolvedor full stack",
    "portfolio desenvolvedor",
    "Next.js",
    "TypeScript",
    "Node.js",
    "SDD",
    "TDD",
    "context engineering",
    "IA estruturada",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Rafael Pinheiro",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Preview do portfólio de Rafael Pinheiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
