import type { Metadata } from "next";
import "./globals.scss"
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Hortifruti São Felipe",
  description: "Sua loja de hortifruti online de confiança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
