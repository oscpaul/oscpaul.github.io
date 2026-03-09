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
      "@type": "Service",
      "name": "Auto Repair Near Lombard IL",
      "serviceType": "Auto Repair",
      "areaServed": {
        "@type": "City",
        "name": "Lombard"
      },
      "provider": {
        "@id": "https://www.devwordpressspace.site/#autoRepair"
      }
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
      {
  "@type": "ImageObject",
  "contentUrl": "https://www.devwordpressspace.site/images/2brothers-1.webp",
  "description": "Brake repair service near Lombard Illinois"
},

      
    ],
  };


return (
    <main className="container mx-auto px-6 py-12">
 <div className="rounded-lg overflow-hidden shadow mt-10">
<iframe
src="https://www.google.com/maps?q=Lombard,IL&output=embed"
className="w-full h-[350px] border-0"
loading="lazy"
/>
</div>
      
      <h2 className="text-2xl font-semibold mb-4">
        Why Lombard Customers Choose 2 Brothers Auto
      </h2>

      <p className="mb-6">
        As a family-owned auto repair shop serving Addison and nearby
        communities, we focus on honest recommendations, transparent
        pricing, and quality workmanship. Many Lombard residents trust
        us with long-term vehicle maintenance because we take the time
        to explain repairs clearly and treat every vehicle as if it were
        our own.
      </p>

      <p className="mb-6">
        Our goal is simple: provide dependable auto repair services that
        help Lombard drivers stay safe on the road while avoiding the
        high costs often associated with dealership service centers.
      </p>

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

      <Link
        href="/service-areas"
        className="text-blue-600 font-semibold hover:underline"
      >
        View All Service Areas in DuPage County
      </Link>

      <hr className="my-10" />

      {/* FAQ Section */}
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

      <div className="space-y-6">
        {faq.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-6 rounded-lg text-center mt-12">
        <h2 className="text-xl font-bold mb-4">
          Schedule Auto Repair Near Lombard Today
        </h2>

        <p className="mb-4">
          Looking for dependable auto repair near Lombard? Schedule your
          appointment with our experienced mechanics today.
        </p>

        <p className="mb-6">
          Back to our{" "}
          <Link href="/" className="text-blue-600 underline">
            Homepage
          </Link>
        </p>

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
