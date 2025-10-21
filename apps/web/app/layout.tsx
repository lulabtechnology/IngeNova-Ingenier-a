import "./globals.css";
import type { Metadata } from "next";
import { Schema } from "./(site)/schema";

export const metadata: Metadata = {
  title: "IngeNova Ingeniería — Proyectos con resultados medibles",
  description:
    "Ingeniería industrial, civil y energía. Automatización, OEE, MEP, QA y SCADA. Ejecutamos proyectos con foco en ROI y tiempos.",
  openGraph: {
    title: "IngeNova Ingeniería",
    description:
      "Ingeniería industrial, civil y energía. Automatización, OEE, MEP, QA y SCADA.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "IngeNova Ingeniería",
    images: [{ url: "/imagenes/hero-ingnov.svg", width: 1200, height: 630 }],
    locale: "es_PA",
    type: "website"
  },
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-body antialiased">
        {children}
        <Schema />
      </body>
    </html>
  );
}
