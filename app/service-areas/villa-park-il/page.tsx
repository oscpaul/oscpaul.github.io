import Link from "next/link";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: "Auto Repair Near Villa Park, IL | 2 Brothers Auto & Muffler",
  description:
    "Need auto repair near Villa Park, IL? 2 Brothers Auto & Muffler in Addison provides muffler repair, brake service, exhaust repair and engine diagnostics just minutes away.",
};

export default function VillaParkPage() {
  const faq = [
    {
      question: "How far is your shop from Villa Park?",
      answer:
        "We are located in Addison, just minutes from Villa Park via North Avenue (Route 64) and I-290.",
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
        "name": "2 Brothers Auto & Muffler",
        "areaServed": {
          "@type": "City",
          "name": "Villa Park"
        },
        "url": "https://devwordpressspace.site/locations/villa-park-il"
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
      <meta itemProp="url" content="https://devwordpressspace.site/locations/villa-park-il" />

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
        <meta itemProp="name" content="Villa Park" />
      </div>

      <h1 className="text-3xl font-bold mb-6">
        Auto Repair & Muffler Shop Near Villa Park, IL
      </h1>

      <p className="mb-6">
        Looking for reliable <strong>auto repair near Villa Park, IL</strong>?{" "}
        <span itemProp="name">2 Brothers Auto & Muffler</span> proudly serves
        Villa Park residents from our Addison location. We specialize in muffler repair, brake service,
        exhaust repair, engine diagnostics, and full auto repair for all makes and models.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Why Villa Park Drivers Choose Us</h2>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Family-owned & operated</li>
        <li>Transparent pricing and honest recommendations</li>
        <li>ASE-certified technicians</li>
        <li>Fast, reliable service</li>
        <li>Convenient Addison location just minutes from Villa Park</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Conveniently Located Near Villa Park</h2>
      <p className="mb-6">
        Our Addison shop is just a short drive from Villa Park via North Avenue (Route 64) and I-290,
        making us a trusted choice for quality auto repair near Villa Park.
      </p>

      {/* FAQ Microdata */}
  

      <div className="bg-gray-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-bold mb-4">Schedule Auto Repair Near Villa Park Today</h2>
        <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Book Your Appointment
        </Link>
      </div>
    </main>
  );
}
