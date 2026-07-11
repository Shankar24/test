import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "CARES | Applied Research, Analytics & Training",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "research training India",
    "SPSS training",
    "R Studio workshop",
    "PLS-SEM",
    "data analysis consultancy",
    "questionnaire design",
    "research methodology",
    "academic writing",
    "dashboard development",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: `${site.name} India`,
    title: "CARES | Applied Research, Analytics & Training",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "CARES | Applied Research, Analytics & Training",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.fullName,
  alternateName: site.name,
  url: site.url,
  telephone: site.phoneHref,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Golden Square, 1101, 3rd Floor, 24th Main, JP Nagar 1st Phase",
    addressLocality: "Bangalore",
    postalCode: "560078",
    addressCountry: "IN",
  },
  areaServed: "IN",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cares-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
