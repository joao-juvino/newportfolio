import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Santos — Engenheiro de Software",
  description:
    "João Santos, Engenheiro de Software com experiência em backend, APIs, integrações e sistemas distribuídos. Projetos, trajetória e competências.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
