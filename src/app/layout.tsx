import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  title: "Lucila | Social Media Manager y Community Manager",
  description:
    "Social Media Manager, Community Manager y Licenciada en Comunicación Social (UNLP). Estrategia, contenido y gestión de redes sociales para tu negocio.",
  openGraph: {
    title: "Lucila | lucila.comunicacion",
    description:
      "Social Media Manager, Community Manager y Licenciada en Comunicación Social (UNLP).",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f2f5f0",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
