import Image from "next/image"
import Script from 'next/script';

const services = [
  {
    title: "Routine Maintenance",
    description: "Oil changes, inspections, and tune-ups done right.",
    imagePrimary: "/images/services/oil-1.png",
    imageHover: "/images/services/oil-2.png",
  },
  {
    title: "Brake & Suspension",
    description: "Safe, smooth, and dependable stopping power.",
    imagePrimary: "/images/services/brakes-1.png",
    imageHover: "/images/services/brakes-2.png",
  },
  {
    title: "Engine Diagnostics",
    description: "Clear answers without the runaround.",
    imagePrimary: "/images/services/diagnostics-1.png",
    imageHover: "/images/services/diagnostics-2.png",
  },
]

export default function Services() {
  return (
    <section className="px-2 py-24 max-w-6xl mx-auto">
     
      
      <h2 className="text-3xl font-semibold mb-16 text-center">
Schedule Your Auto Repair in Addison Today

If your vehicle needs service, trust the experienced team at 2 Brothers Auto & Muffler. We are committed to providing reliable, affordable, and professional auto repair services in Addison, Illinois.

Call today to schedule an appointment or stop by our shop in Addison. We look forward to serving you and becoming your trusted neighborhood auto repair shop.      </h2>

      <div className="grid md:grid-cols-3 mx-auto">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`group bg-white rounded-2xl overflow-hidden
              md:col-span-2"}
            `}
          >
            {/* Image — SAME SIZE EVERY TIME */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              {/* Primary Image */}
              <Image
                src={service.imagePrimary}
                alt={service.title}
                fill
                className="
                  object-cover
                  transition-all duration-700 ease-out
                  group-hover:scale-105
                  group-hover:opacity-0
                  filter sepia-[0.15] saturate-110
                "
              />

              {/* Hover Image */}
              <Image
                src={service.imageHover}
                alt={`${service.title} detail`}
                fill
                className="
                  absolute inset-0
                  opacity-0
                  scale-105
                  transition-all duration-700 ease-out
                  group-hover:opacity-100
                  group-hover:scale-110
                  filter sepia-[0.2] saturate-110
                "
              />
            </div>

            {/* Text */}
            <div className="p-8">
              <h3 className="text-xl font-medium mb-3">
                {service.title}
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
        
      </div>
  
    </section>
  )
}
