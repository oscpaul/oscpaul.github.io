import Link from "next/link";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: "Auto Repair Near Bensenville, IL | 2 Brothers Auto & Muffler",
  description:
    "Need auto repair near Bensenville, IL? 2 Brothers Auto & Muffler in Addison provides muffler repair, brake service, exhaust repair and engine diagnostics just minutes away.",
};

export default function BensenvillePage() {
  const faq = [
    {
      question: "How far is your shop from Bensenville?",
      answer:
        "We are located in Addison, just minutes from Bensenville via Route 83.",
    },

    {
      question: "Do you service all vehicle makes and models?",
      answer:
        "Absolutely! Our ASE-certified technicians handle all makes and models with precision and care.",
    },
  ];

  // JSON-LD: only areaServed and FAQ for this page
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
              "@id": "https://devwordpressspace.site/#autoRepair",

        "name": "2 Brothers Auto & Muffler",
        "areaServed": {
          "@type": "City",
          "name": "Bensenville"
        },
        "url": "https://devwordpressspace.site/locations/Bensenville-il"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <main
      className="container mx-auto px-6 py-12"
      itemScope
      itemType="https://schema.org/AutoRepair"
    >
      {/* JSON-LD specific to this page */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Business Info */}
      <meta itemProp="name" content="2 Brothers Auto & Muffler" />
      <meta itemProp="telephone" content="+1-630-229-7330" />
      <meta itemProp="url" content="https://devwordpressspace.site/locations/bensenville-il" />

      {/* Address */}
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="streetAddress" content="915 S Westwood Ave" />
        <meta itemProp="addressLocality" content="Addison" />
        <meta itemProp="addressRegion" content="IL" />
        <meta itemProp="postalCode" content="60101" />
        <meta itemProp="addressCountry" content="US" />
      </div>

      {/* Area Served */}
      <div itemProp="areaServed" itemScope itemType="https://schema.org/City">
        <meta itemProp="name" content="Bensenville" />
      </div>

      <h1 className="text-3xl font-bold mb-6">
        Auto Repair & Muffler Shop Near Bensenville, IL
      </h1>

      <p className="mb-6">
        Looking for reliable <strong>auto repair near Bensenville, IL</strong>?{" "}
        <span itemProp="name">2 Brothers Auto & Muffler</span> serves Bensenville
        residents from our Addison location. We specialize in muffler repair, brake service,
        exhaust repair, engine diagnostics, and full auto repair for all makes and models.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Muffler & Exhaust Repair Near Bensenville
      </h2>

      <div itemProp="makesOffer" itemScope itemType="https://schema.org/Offer">
        <div itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="Muffler Repair" />
          <meta itemProp="areaServed" content="Bensenville IL" />
        </div>
      </div>

      <p className="mb-6">
        If your vehicle is excessively loud, rattling, or failing emissions testing, we provide
        professional muffler repair and full exhaust replacement for Bensenville residents.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Why Bensenville Drivers Choose Us</h2>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Family-owned & operated</li>
        <li>Honest pricing & transparent recommendations</li>
        <li>ASE-certified technicians</li>
        <li>Fast, reliable service</li>
        <li>Convenient Addison location just minutes away</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Conveniently Located Near Bensenville</h2>
      <p className="mb-6">
        Our Addison shop is just a short drive from Bensenville via Route 83 and Lake Street,
        making us a trusted choice for quality auto repair near Bensenville.
      </p>

      {/* FAQ Microdata */}
  

      <div className="bg-gray-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-bold mb-4">Schedule Auto Repair Near Bensenville Today</h2>
        <Link href="https://app.squareup.com/appointments/book/2pefuflo2hw9e3/LCTHN7ABYT9JV/start" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Book Your Appointment
        </Link>
      </div>
    </main>
  );
}
