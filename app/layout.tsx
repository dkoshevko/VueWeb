import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/basics/Header";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from "@/components/basics/Footer";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VueWeb",
  description: "Transformez Votre Présence en Ligne",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "url": "https://www.vueweb.fr",
  "name": "VueWeb",
  "description": "Agence web spécialisée dans la création de sites web modernes et optimisés.",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@vueweb.fr",
    "telephone": "+33 7 78 80 74 66",
    "contactType": "Customer Service",
    "areaServed": "FR",
    "availableLanguage": "French"
  },
  "sameAs": [
    "https://www.instagram.com/vueweb",
    "https://www.linkedin.com/company/vueweb"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "postalCode": "75000",
    "addressCountry": "FR"
  },
  "openingHours": "Mo-Fr 09:00-18:00"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
