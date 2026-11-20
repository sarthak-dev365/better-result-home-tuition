
import "./globals.css";

import OfferBar from "@/components/layout/OfferBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Home Tuition & Online Tutors for Classes 1–12",
    template: "%s | Better Result Home Tuition",
  },
  description:
    "Find home and online tutors for Classes 1–12, board examinations, Commerce, JEE and NEET preparation with Better Result Home Tuition.",
  applicationName: SITE_NAME,
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico" },
  category: "Education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Home Tuition & Online Tutors for Classes 1–12",
    description:
      "Find home and online tutors for Classes 1–12, board examinations, Commerce, JEE and NEET preparation.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Better Result Home Tuition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Result Home Tuition",
    description:
      "Home and online tuition support for Classes 1–12, board exams, JEE and NEET.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <OfferBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              email: "betterresulthometuition@gmail.com",
              telephone: "+91-70373-74833",
              description:
                "Home and online tuition support for Classes 1–12, board examinations, Commerce, JEE and NEET preparation.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Shivalock Colony, Chakshha Nagar, Near Vidhan Sabha",
                addressLocality: "Dehradun",
                addressRegion: "Uttarakhand",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
