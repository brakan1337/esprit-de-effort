import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "L'Esprit de l'Effort",
  description:
    "Association dédiée au dépassement de soi, aux sports d'endurance extrêmes, aux expéditions et à la création de films documentaires.",
  keywords: [
    "endurance",
    "sport extrême",
    "double ironman",
    "triathlon",
    "expédition",
    "documentaire",
    "dépassement de soi",
  ],
  openGraph: {
    title: "L'Esprit de l'Effort",
    description:
      "Dépasse tes limites. Vis l'essentiel. Association pour les sports d'endurance extrêmes et expéditions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
