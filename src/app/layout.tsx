import type { Metadata } from "next";
import "./globals.scss"
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Logo from "@/assets/logo.png"

export const metadata: Metadata = {
  title: "Hortifruti São Felipe",
  description: "Sua loja de hortifruti online de confiança.",
  icons: {
    icon: Logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
