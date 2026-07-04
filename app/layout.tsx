import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.fullName}`,
    template: `%s | ${site.name} India`,
  },
  description: site.description,
  keywords: [
    "research training India",
    "SPSS training",
    "R Studio workshop",
    "data analysis consultancy",
    "questionnaire design",
    "research methodology",
    "academic writing",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: `${site.name} India`,
    title: `${site.name} — ${site.fullName}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.fullName}`,
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
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
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
