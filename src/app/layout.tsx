import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darahcoelhofotografia.com.br"),
  title: "Darah Coelho Fotografia | Fotógrafa em Goiânia",
  description:
    "Fotógrafa profissional em Goiânia especializada em ensaio de moda, casamento, gestante, newborn e fotografia para e-commerce. Atendimento personalizado com direção artística.",
  keywords: [
    "fotógrafa Goiânia",
    "fotografia Goiânia",
    "ensaio moda Goiânia",
    "Darah Coelho fotografia",
  ],
  authors: [{ name: "Darah Coelho" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://darahcoelhofotografia.com.br",
    siteName: "Darah Coelho Fotografia",
    title: "Darah Coelho Fotografia | Fotógrafa em Goiânia",
    description:
      "Fotógrafa profissional em Goiânia especializada em ensaio de moda, casamento, gestante e e-commerce. Atendimento personalizado.",
    images: [{ url: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,w_1200,h_630,f_auto,q_auto/darah/Darah%20coelho/darah-home", width: 1200, height: 630, alt: "Darah Coelho, fotógrafa em Goiânia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darah Coelho Fotografia | Fotógrafa em Goiânia",
    description: "Fotógrafa profissional em Goiânia especializada em moda, casamento e ensaios.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://darahcoelhofotografia.com.br" },
  verification: { google: "JSJvoOG-7KiUK3zLBba9tquixZe8vaEwXzPaxviTDDc" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z804NKR1DJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z804NKR1DJ');
          `}
        </Script>
      </head>
      <body>
        <SchemaOrg />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
