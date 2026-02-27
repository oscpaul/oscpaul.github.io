import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from 'next/head'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});










export const metadata: Metadata = {
  metadataBase: new URL("https://www.devwordpressspace.site"),

    alternates: {
    canonical: 'https://www.devwordpressspace.site',
  },

  title: {
    default: "Muffler & Brake Repair in Addison, IL | 2 Brothers Auto Service",
    template: "%s | 2 Brothers Auto & Muffler",
  },
  description:
    "Expert muffler repair, exhaust systems, brake service,  suspension service, and engine diagnostics in Addison, Lombard, Villa Park IL and surrounding areas. Trusted local auto repair shop. Call today.",

  keywords: [
    "Auto repair Addison IL",
    "Muffler repair Addison",
    "Exhaust repair near me",
    "Brake service Addison IL",
    "Engine diagnostics Addison",
    "Suspension repair Addison",
    "2 Brothers Auto & Muffler",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.devwordpressspace.site",
    title: "2 Brothers Auto & Muffler | Auto Repair in Addison, IL",
    description:
      "Expert muffler repair, exhaust systems, brakes, engine diagnostics, and suspension work in Addison, IL.",
    siteName: "2 Brothers Auto & Muffler",
    images: [
      {
        url: "/images/services/logo.jpg",
        width: 1200,
        height: 630,
        alt: "2 Brothers Auto & Muffler - Addison, IL",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};





const schema = {
  "@context": "https://schema.org",
  "@graph": [

    // Organization
    {
      "@type": "Organization",
      "@id": "https://devwordpressspace.site/#organization",
      "name": "2 Brothers Auto & Muffler",
      "url": "https://devwordpressspace.site/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://devwordpressspace.site/images/services/logo.jpg",
        "width": 300,
        "height": 100
      },
      "telephone": "+1-630-229-7330",
      "sameAs": [
        "https://www.facebook.com/YOURPAGE",
        "https://www.google.com/maps?cid=YOURCID"
      ]
    },

    // AutoRepair
    {
      "@type": "AutoRepair",
      "@id": "https://devwordpressspace.site/#autorepair",
      "name": "2 Brothers Auto & Muffler",
      "url": "https://devwordpressspace.site/",
      "image": "https://devwordpressspace.site/images/services/oil-1.png",
      "telephone": "+1-630-229-7330",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "915 S Westwood Ave",
        "addressLocality": "Addison",
        "addressRegion": "IL",
        "postalCode": "60101",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.9312,
        "longitude": -87.9883
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        {
          "@type": "Place",
          "name": "Greater Addison Area"
        },
        {
          "@type": "AdministrativeArea",
          "name": "DuPage County",
          "addressRegion": "IL",
          "addressCountry": "US"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Chicagoland / Western Suburbs",
          "addressRegion": "IL",
          "addressCountry": "US"
        }
      ],
      "hasMap": "https://maps.google.com/?q=915+S+Westwood+Ave+Addison+IL+60101",
      "parentOrganization": {
        "@id": "https://devwordpressspace.site/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://devwordpressspace.site/"
      }
    },

    // Service: Brake Repair
    {
      "@type": "Service",
      "@id": "https://devwordpressspace.site/#brake-repair",
      "name": "Brake Repair",
      "serviceType": "Brake Repair",
      "description": "Professional brake inspection, brake pad replacement, and full brake system repair services in Addison, IL.",
      "provider": {
        "@id": "https://devwordpressspace.site/#autorepair"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "DuPage County",
        "addressRegion": "IL",
        "addressCountry": "US"
      },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "99",
          "priceValidUntil": "2026-12-31"
        },
        "availability": "https://schema.org/InStock"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://devwordpressspace.site/",
        "servicePhone": "+1-630-229-7330",
        "availableLanguage": "English"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://devwordpressspace.site/"
      }
    },

    // Service: Oil Change
    {
      "@type": "Service",
      "@id": "https://devwordpressspace.site/#oil-change",
      "name": "Oil Change Service",
      "serviceType": "Oil Change",
      "description": "Full synthetic and conventional oil change services for all vehicle types in Addison, Illinois.",
      "provider": {
        "@id": "https://devwordpressspace.site/#autorepair"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "DuPage County",
        "addressRegion": "IL",
        "addressCountry": "US"
      },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "49",
          "priceValidUntil": "2026-12-31"
        },
        "availability": "https://schema.org/InStock"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://devwordpressspace.site/",
        "servicePhone": "+1-630-229-7330",
        "availableLanguage": "English"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://devwordpressspace.site/"
      }
    },

    // Service: Muffler & Exhaust Repair
    {
      "@type": "Service",
      "@id": "https://devwordpressspace.site/#muffler-repair",
      "name": "Muffler & Exhaust Repair",
      "serviceType": "Muffler & Exhaust Repair",
      "description": "Complete muffler replacement and exhaust system repair services in Addison and surrounding areas.",
      "provider": {
        "@id": "https://devwordpressspace.site/#autorepair"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "DuPage County",
        "addressRegion": "IL",
        "addressCountry": "US"
      },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "129",
          "priceValidUntil": "2026-12-31"
        },
        "availability": "https://schema.org/InStock"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://devwordpressspace.site/",
        "servicePhone": "+1-630-229-7330",
        "availableLanguage": "English"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://devwordpressspace.site/"
      }
    }

  ]
};










export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
   <Head>
      <link rel="icon" href="https://www.devwordpressspace.site/images/services/logo.jpg" /> {/* Adjust the href if you use a different name/format */}
    </Head>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        
         <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="beforeInteractive" // Load before the page becomes interactive
        />
        
<Script
          src="https://cdn.jsdelivr.net/npm/gsap-external-plugins@1.0.2/InertiaPlugin.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/Draggable.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="beforeInteractive" // Load before the page becomes interactive
        />

          <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Draggable.min.js"
          strategy="afterInteractive"
        />

        {/* InertiaPlugin (Club GSAP) */}
        <Script
          src="https://assets.codepen.io/16327/InertiaPlugin.min.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
