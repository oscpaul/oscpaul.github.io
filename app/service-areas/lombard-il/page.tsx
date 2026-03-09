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


      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <ol className="flex gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/service-areas">Service Areas</Link>
          </li>
          <li>/</li>
          <li>Lombard, IL</li>
        </ol>
      </nav>

      {/* Schema */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-bold mb-6">
        Auto Repair & Muffler Shop Near Lombard, IL
      </h1>

      <p className="mb-6">
        If you're searching for reliable auto repair near Lombard, IL,
        2 Brothers Auto & Muffler in Addison provides trusted mechanical
        services for drivers throughout the western suburbs of Chicago.
        Our experienced technicians help Lombard residents keep their
        vehicles running safely with professional diagnostics,
        preventative maintenance, and high-quality repairs.
      </p>

      <img
  src="/images/2brothers-1.webp"
  alt="Auto repair shop serving Lombard Illinois at 2 Brothers Auto & Muffler"
  className="w-full rounded-lg shadow mb-8"
/>

      <p className="mb-6">
        Located just minutes from Lombard, our shop is easily accessible
        via Roosevelt Road (Route 38), Highland Avenue, and Interstate 355.
        Many customers choose our Addison auto repair shop because we
        provide dealership-level service with honest pricing and a
        family-owned approach to customer care.
      </p>

      <hr className="my-10" />

      <h2 className="text-2xl font-semibold mb-4">
        Auto Repair for Drivers in Lombard, Illinois
      </h2>

      <p className="mb-6">
        Lombard is one of the most active communities in DuPage County,
        with thousands of residents commuting daily throughout the
        Chicago metropolitan area. Because vehicles in Lombard often
        experience both highway travel and stop-and-go suburban traffic,
        routine maintenance and timely repairs are essential to keep
        cars dependable and safe.
      </p>

      <p className="mb-6">
        Our technicians regularly service vehicles owned by Lombard
        drivers who commute toward Chicago, shop near Yorktown Center,
        or travel between nearby communities such as Addison, Villa Park,
        Elmhurst, and Glendale Heights. Whether your vehicle needs a
        quick oil change or advanced engine diagnostics, our team is
        equipped to handle the job.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Common Auto Repairs for Lombard Drivers
      </h2>

<img
  src="/images/2brother1.png"
  alt="Brake repair service near Lombard IL"
  className="w-full rounded-lg shadow mb-8"
/>
      
      <p className="mb-6">
        Vehicles driven in the Lombard area often experience wear related
        to commuting and seasonal Midwest weather conditions. Our
        mechanics diagnose and repair a wide range of automotive issues
        using professional diagnostic tools and proven repair methods.
      </p>

<ul className="list-disc ml-6 space-y-2 mb-8">
  <li>
    <Link href="/">Brake repair and brake pad replacement</Link>
  </li>
  <li>
    <Link href="/about">Muffler and exhaust system repair</Link>
  </li>

</ul>

      
    </main>
  );



}
