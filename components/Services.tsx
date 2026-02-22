import Image from "next/image";
import Script from 'next/script';

const services = [
  {
    title: "Routine Maintenance",
    overview:
      "Keeping your vehicle in top condition starts with regular routine maintenance. At 2 Brothers Auto & Muffler, we follow manufacturer-recommended schedules to ensure your car runs safely and efficiently.",
    details: [
      "Oil changes and filter replacements protect your engine and maintain fuel efficiency.",
      "Brake inspections and fluid checks ensure your vehicle stops safely and operates smoothly.",
      "Tire rotations help extend tire life and maintain proper traction on the road.",
      "Following manufacturer-recommended intervals prevents small issues from turning into expensive repairs."
    ],
    whyChooseUs:
      "Choosing 2 Brothers Auto & Muffler means trusting an experienced, family-owned shop with ASE-certified technicians who care about your vehicle’s long-term performance. Conveniently located in Addison, IL, we make routine maintenance easy, affordable, and reliable.",
    imagePrimary: "/images/services/oil-1.png",
    imageHover: "/images/services/oil-2.png",
    faq: [
      {
        question: "How often should I get an oil change?",
        answer: "We recommend following your vehicle manufacturer’s schedule, typically every 3,000 to 5,000 miles."
      },
      {
        question: "Do you perform multi-point inspections?",
        answer: "Yes, every routine maintenance includes a thorough multi-point inspection to catch potential issues early."
      }
    ]
  },
  {
    title: "Brake & Suspension Service",
    overview:
      "Maintaining your brakes and suspension is essential for safety, comfort, and vehicle performance. At 2 Brothers Auto & Muffler, we provide comprehensive brake and suspension inspections and repairs to keep your car driving smoothly.",
    details: [
      "Inspect brake pads, shoes, rotors, and drums for wear and proper function.",
      "Check brake fluid levels and system performance.",
      "Examine suspension components including shocks, struts, springs, and control arms.",
      "Inspect steering linkage, bushings, and ball joints for wear or damage.",
      "Test ride the vehicle to ensure brakes and suspension are performing safely and smoothly."
    ],
    whyChooseUs:
      "Our ASE-certified technicians provide expert brake and suspension services using high-quality parts and professional diagnostic tools. Choosing 2 Brothers Auto & Muffler ensures your vehicle is safe, comfortable, and reliable. Conveniently located in Addison, IL, we make brake and suspension service fast, thorough, and affordable.",
    imagePrimary: "/images/services/brakes-1.png",
    imageHover: "/images/services/brakes-2.png",
    faq: [
      {
        question: "How do I know if my brakes need service?",
        answer: "Squealing, grinding, or vibration when braking are signs your brakes need attention. Our experts can inspect and repair them promptly."
      },
      {
        question: "Do you service all types of vehicles?",
        answer: "Yes, we service all makes and models, including cars, trucks, and SUVs."
      }
    ]
  },
  {
    title: "Muffler Repair",
    overview:
      "A properly functioning muffler is essential for reducing noise, improving exhaust flow, and keeping your vehicle running efficiently. At 2 Brothers Auto & Muffler, we provide expert muffler repair and replacement for all makes and models.",
    details: [
      "Inspect the muffler and exhaust system for leaks, rust, or damage.",
      "Repair or replace damaged mufflers to restore proper function.",
      "Check exhaust pipes, hangers, and clamps for secure fit and alignment.",
      "Perform emissions checks to ensure compliance with local regulations.",
      "Test drive to ensure proper exhaust flow and quiet operation."
    ],
    whyChooseUs:
      "Our ASE-certified technicians use quality parts and expert techniques to repair or replace your muffler quickly and reliably. Choosing 2 Brothers Auto & Muffler guarantees your vehicle runs smoothly, quietly, and safely. Conveniently located in Addison, IL, we make muffler repair fast, affordable, and dependable.",
    imagePrimary: "/images/services/diagnostics-1.png",
    imageHover: "/images/services/diagnostics-2.png",
    faq: [
      {
        question: "How do I know if my muffler needs repair?",
        answer: "Loud exhaust noise, rattling, or visible damage are signs that your muffler may need service."
      },
      {
        question: "Can muffler repair be done the same day?",
        answer: "Yes, many muffler repairs can be completed the same day depending on parts availability."
      }
    ]
  }
];
const additionalFaq = [
  {
    question: "Do you offer same-day muffler repair in Addison, IL?",
    answer:
      "Yes, most muffler and exhaust repairs can be completed the same day depending on parts availability.",
  },
  {
    question: "Do you provide free brake inspections?",
    answer:
      "Yes, we offer free brake inspections for customers in Addison and surrounding areas.",
  },
  {
    question: "What types of vehicles do you service?",
    answer:
      "We service most domestic and foreign vehicles including cars, trucks, and SUVs.",
  },
];
export default function Services() {
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Keep each Service as a separate object
    ...services.map(service => ({
      "@type": "Service",
      "name": service.title,
      "description": service.overview,
      "provider": {
        "@type": "Organization",
        "name": "2 Brothers Auto & Muffler"
      },
      "areaServed": [
        { "@type": "City", "name": "Addison" },
        { "@type": "City", "name": "Elmhurst" },
        { "@type": "City", "name": "Bensenville" },
        { "@type": "City", "name": "Villa Park" },
        { "@type": "City", "name": "Lombard" },
        { "@type": "City", "name": "Chicago" }
      ]
    })),

    // ONE FAQPage for all services
{
  "@type": "FAQPage",
  "mainEntity": [
    ...services.flatMap(service =>
      service.faq.map(f => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer }
      }))
    ),
    ...additionalFaq.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    }))
  ]
}
  ]
};
  return (
    <section className="px-2 py-24 max-w-6xl mx-auto">
      {/* FAQ JSON-LD for all services */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grid md:grid-cols-3 mx-auto gap-8">
        {services.map(service => (
          <div key={service.title} className="group bg-white rounded-2xl overflow-hidden">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={service.imagePrimary}
                alt={service.title}
                fill
                className="object-contain transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0 filter sepia-[0.15] saturate-110"
              />
              <Image
                src={service.imageHover}
                alt={`${service.title} detail`}
                fill
                className="object-contain absolute inset-0 opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-110 filter sepia-[0.2] saturate-110"
              />
            </div>

            <div className="p-8 border rounded-lg shadow-sm" itemScope itemType="https://schema.org/Service">
              <h2 className="text-xl font-medium mb-3" itemProp="name">{service.title}</h2>
              <p className="text-stone text-sm leading-relaxed mb-3" itemProp="description">{service.overview}</p>
              {service.details && (
                <ul className="list-disc ml-5 mb-3 text-sm text-stone space-y-1">
                  {service.details.map((detail, index) => (
                    <li key={index} itemProp="serviceType">{detail}</li>
                  ))}
                </ul>
              )}
              {service.whyChooseUs && (
                <p className="text-stone text-sm leading-relaxed" itemProp="provider">
                  <span itemScope itemType="https://schema.org/Organization">
                    <span itemProp="name">2 Brothers Auto & Muffler</span> – {service.whyChooseUs}
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
