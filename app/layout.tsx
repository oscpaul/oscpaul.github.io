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
    {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "2 Brothers Auto & Muffler",
  "image": "https://www.devwordpressspace.site/path-to-your-logo.png",
  "url": "https://www.devwordpressspace.site/",
  "telephone": "+1-630-229-7330",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 S Westwood Ave",
    "addressLocality": "Addison",
    "addressRegion": "IL",
    "postalCode": "60101",
    "addressCountry": "US"
  },
              "priceRange": "$$", // optional, can be $ / $$ / $$$ depending on service

  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.9312",
  "longitude": "-87.9883"
  },
  "hasMap": "https://maps.google.com/?q=915+S+Westwood+Ave+Addison+IL+60101"
},
    {
      "@type": "Organization",
      "@id": "https://devwordpressspace.site/#organization",
      "name": "2 Brothers Auto & Muffler",
      "url": "https://devwordpressspace.site",
      "image": "https://devwordpressspace.site/images/services/oil-1.png",
      "logo": {
        "@type": "ImageObject",
        "url": "https://devwordpressspace.site/images/services/logo.jpg",
        "width": 300,
        "height": 100
      },
         "address": {
        "@type": "PostalAddress",
        "streetAddress": "915 S Westwood Ave",
        "addressLocality": "Addison",
        "addressRegion": "IL",
        "postalCode": "60101",
        "addressCountry": "US"
      },
      "telephone": "+1-630-229-7330",
      "sameAs": [
        "https://www.facebook.com/YOURPAGE",
        "https://www.google.com/maps?cid=YOURCID"
      ]
    },
    {
      "@type": "AutoRepair",
            "@id": "https://devwordpressspace.site/#autoRepair",

      "name": "2 Brothers Auto & Muffler",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "915 S Westwood Ave",
        "addressLocality": "Addison",
        "addressRegion": "IL",
        "postalCode": "60101",
        "addressCountry": "US"
      },
      "telephone": "+1-630-229-7330",
      "url": "https://devwordpressspace.site",
"image": "https://devwordpressspace.site/images/services/oil-1.png",
        "priceRange": "$$", // optional, can be $ / $$ / $$$ depending on service

      // Note: remove areaServed here or leave generic
      "areaServed": 
      [
      
      {
        "@type": "Place",
        "name": "Greater Addison Area"
      },
        {
      "@type": "County",
      "name": "DuPage County",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
          {
      "@type": "AdministrativeArea",
      "name": "Chicagoland / Western Suburbs",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
        ]
    },

    {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "DuPage County",
  "description": "DuPage County is a county located in the state of Illinois, part of the Chicago metropolitan area.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wheaton",
    "addressRegion": "IL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
 "latitude": "41.9312",
  "longitude": "-87.9883"
  },
  "containedInPlace": {
    "@type": "State",
    "name": "Illinois",
    "addressCountry": "US"
  },
  "hasPart": [
    {
      "@type": "City",
      "name": "Wheaton",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    {
      "@type": "City",
      "name": "Lombard",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
  ]
} 
  
  





  ]
}
  ;




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
