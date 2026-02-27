import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Auto Repair Near Lombard, IL | 2 Brothers Auto & Muffler",
  description:
    "Looking for trusted auto repair near Lombard, IL? 2 Brothers Auto & Muffler in Addison provides brake repair, muffler service, exhaust repair, and engine diagnostics just minutes from Lombard.",
  alternates: {
    canonical:
      "https://www.devwordpressspace.site/service-areas/lombard-il",
  },
};

export default function LombardPage() {
  const faq = [
    {
      question: "How far is your shop from Lombard, IL?",
      answer:
        "Our Addison auto repair shop is just minutes from Lombard via Roosevelt Road (Route 38) and I-355.",
    },
    {
      question: "Do you service all makes and models?",
      answer:
        "Yes. Our ASE-certified technicians service all makes and models including domestic, Asian, and European vehicles.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": "https://www.devwordpressspace.site/#autoRepair",
        "name": "2 Brothers Auto & Muffler",
        "url": "https://www.devwordpressspace.site/",
        "telephone": "+1-630-229-7330",
        "priceRange": "$$",
        "image":
          "https://www.devwordpressspace.site/images/services/oil-1.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "915 S Westwood Ave",
          "addressLocality": "Addison",
          "addressRegion": "IL",
          "postalCode": "60101",
          "addressCountry": "US",
        },
        "areaServed": {
          "@type": "City",
          "name": "Lombard",
          "addressRegion": "IL",
          "addressCountry": "US",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.devwordpressspace.site/service-areas/lombard-il/#faq",
        "mainEntity": faq.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-bold mb-6">
        Auto Repair & Muffler Shop Near Lombard, IL
      </h1>

     <hr className="my-10" />

<h2 className="text-2xl font-semibold mb-4">
Serving Lombard & Surrounding DuPage County Areas
</h2>

<p className="mb-6">
We proudly provide auto repair services to drivers throughout 
DuPage County. If you're searching for trusted auto repair near 
Lombard, Addison, Elmhurst, or Villa Park, our experienced team 
is ready to help.
</p>

<p className="mb-6">
View all of the areas we serve here:
</p>

<Link
  href="/service-areas"
  className="text-blue-600 font-semibold hover:underline"
>
  View All Service Areas in DuPage County
</Link>
Why This Help

      <p className="mb-6">
        Our shop regularly serves customers from Lombard and throughout
        DuPage County. Whether you're commuting along Roosevelt Road,
        Finley Road, or I-355, our Addison location offers convenient,
        dealership-quality auto repair without dealership pricing.
      </p>

      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Brake repair & brake pad replacement</li>
        <li>Muffler & exhaust system repair</li>
        <li>Catalytic converter service</li>
        <li>Check engine light diagnostics</li>
        <li>Suspension & steering repair</li>
        <li>Oil changes & preventative maintenance</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Why Lombard Customers Choose 2 Brothers Auto
      </h2>

      <p className="mb-6">
        As a family-owned auto repair shop serving Addison and surrounding
        communities, we focus on honest recommendations, transparent pricing,
        and quality workmanship. Many Lombard residents trust us for long-term
        vehicle maintenance because we treat every vehicle like it’s our own.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-bold mb-4">
          Schedule Auto Repair Near Lombard Today
        </h2>
        <Link
          href="https://app.squareup.com/appointments/book/2pefuflo2hw9e3/LCTHN7ABYT9JV/start"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Book Your Appointment
        </Link>
      </div>
    </main>
  );
}
