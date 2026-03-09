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

     
    </main>
  );



}
