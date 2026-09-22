import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Santos — Desenvolvedor Fullstack",
  description:
    "Portfólio de João Santos, desenvolvedor fullstack com atuação em APIs, interfaces web, cloud e automação de deploy.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
