import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Pinheiro | Full-stack developer",
  description:
    "Portfólio de Rafael Pinheiro, desenvolvedor full-stack focado em software com método, IA estruturada, SDD, TDD e context engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
