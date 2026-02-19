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
  metadataBase: new URL("https://devwordpressspace.site"),

  title: {
    default: "Auto Repair in Addison, IL | 2 Brothers Auto & Muffler"
  },

  description:
    "Expert muffler repair, brakes, exhaust systems, and engine diagnostics in Addison, IL. Trusted local auto repair shop. Call today.",

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
    url: "https://devwordpressspace.site",
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
  "@type": "AutoRepair",
  name: "2 Brothers Auto & Muffler",
  image: "https://devwordpressspace.site/images/services/logo.jpg",
  logo: "https://devwordpressspace.site/images/services/logo.jpg",
  url: "https://devwordpressspace.site",
  telephone: "+1-630-229-7330",
  address: {
    "@type": "PostalAddress",
    streetAddress: "915 S Westwood Ave",
    addressLocality: "Addison",
    addressRegion: "IL",
    postalCode: "60101",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "41.9095969",
    longitude: "-87.9977708",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "08:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00"
    }
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Addison"
  },
  sameAs: [
    "https://www.facebook.com/YOURPAGE",
    "https://www.google.com/maps?cid=YOURCID"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Repair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Muffler Repair"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exhaust System Repair"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brake Repair"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Engine Diagnostics"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Suspension Repair"
        }
      }
    ]
  },
  {
    "@type": "Organization",
    "name": "2 Brothers Auto & Muffler",
    "url": "https://devwordpressspace.site",
    
  },
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
      <link rel="icon" href="https://devwordpressspace.site/images/services/logo.jpg" /> {/* Adjust the href if you use a different name/format */}
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
