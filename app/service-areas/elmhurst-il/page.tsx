import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Auto Repair Near Elmhurst, IL | Muffler & Brake Shop | 2 Brothers Auto",
  description:
    "Looking for trusted auto repair near Elmhurst, IL? 2 Brothers Auto & Muffler in Addison provides muffler repair, brake service, exhaust repair and engine diagnostics just minutes away."
};

export default function ElmhurstPage() {
  return (
    <main
      className="container mx-auto px-6 py-12"
      itemScope
      itemType="https://schema.org/AutoRepair"
    >
      {/* Business Info */}
      <meta itemProp="name" content="2 Brothers Auto & Muffler" />
      <meta itemProp="telephone" content="+1-630-XXX-XXXX" />
      <meta itemProp="url" content="https://www.yourdomain.com/locations/elmhurst-il" />

      {/* Address */}
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="streetAddress" content="YOUR STREET ADDRESS" />
        <meta itemProp="addressLocality" content="Addison" />
        <meta itemProp="addressRegion" content="IL" />
        <meta itemProp="postalCode" content="60101" />
        <meta itemProp="addressCountry" content="US" />
      </div>

      {/* Area Served */}
      <div itemProp="areaServed" itemScope itemType="https://schema.org/City">
        <meta itemProp="name" content="Elmhurst" />
      </div>

      <h1 className="text-3xl font-bold mb-6">
        Auto Repair & Muffler Shop Near Elmhurst, IL
      </h1>

      <p className="mb-6">
        Searching for dependable <strong>auto repair near Elmhurst, IL</strong>? 
        <span itemProp="name"> 2 Brothers Auto & Muffler</span> proudly serves 
        Elmhurst drivers from our Addison location. We provide expert muffler repair, 
        brake service, exhaust repair, engine diagnostics, and complete auto repair 
        for all makes and models.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Muffler & Exhaust Repair Near Elmhurst
      </h2>

      {/* Service Schema */}
      <div
        itemProp="makesOffer"
        itemScope
        itemType="https://schema.org/Offer"
      >
        <div itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="Muffler Repair" />
          <meta itemProp="areaServed" content="Elmhurst IL" />
        </div>
      </div>

      <p className="mb-6">
        If your vehicle is louder than normal, rattling underneath, or failing emissions testing, 
        our experienced technicians provide professional muffler repair and complete exhaust 
        system replacement for Elmhurst residents.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Complete Auto Repair Services
      </h2>

      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Muffler repair & replacement</li>
        <li>Exhaust system repair</li>
        <li>Brake repair & pad replacement</li>
        <li>Engine diagnostics & check engine light repair</li>
        <li>Suspension & steering repair</li>
        <li>Catalytic converter replacement</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Why Elmhurst Drivers Choose Us
      </h2>

      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Family-owned & operated</li>
        <li>Transparent pricing with no surprises</li>
        <li>ASE-certified technicians</li>
        <li>Fast turnaround times</li>
        <li>Convenient Addison location just minutes from Elmhurst</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Conveniently Located Near Elmhurst
      </h2>

      <p className="mb-6">
        Our Addison auto repair shop is just a short drive from Elmhurst via 
        North Avenue (Route 64) and I-290, making us a convenient and trusted 
        choice for auto repair near Elmhurst.
      </p>

      {/* FAQ Microdata */}
      <section
        itemScope
        itemType="https://schema.org/FAQPage"
        className="mt-10"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        <div
          itemProp="mainEntity"
          itemScope
          itemType="https://schema.org/Question"
        >
          <h3 itemProp="name" className="font-semibold">
            How far is your shop from Elmhurst?
          </h3>
          <div
            itemProp="acceptedAnswer"
            itemScope
            itemType="https://schema.org/Answer"
          >
            <p itemProp="text">
              We are located in Addison, just minutes from Elmhurst via Route 64 and I-290.
            </p>
          </div>
        </div>

        <div
          itemProp="mainEntity"
          itemScope
          itemType="https://schema.org/Question"
          className="mt-4"
        >
          <h3 itemProp="name" className="font-semibold">
            Do you offer same-day exhaust or muffler repair?
          </h3>
          <div
            itemProp="acceptedAnswer"
            itemScope
            itemType="https://schema.org/Answer"
          >
            <p itemProp="text">
              Yes, many muffler and exhaust repairs can be completed the same day depending on the vehicle and parts availability.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-bold mb-4">
          Schedule Auto Repair Near Elmhurst Today
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Book Your Appointment
        </Link>
      </div>
    </main>
  );
}
