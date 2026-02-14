import Link from "next/link";

export const metadata = {
  title: "Service Areas | 2 Brothers Auto & Muffler",
  description:
    "2 Brothers Auto & Muffler proudly serves Addison, IL and surrounding communities including Lombard, Villa Park, Elmhurst, and Bensenville for auto repair, muffler, brake, and exhaust services."
};

export default function ServiceAreasPage() {
  const cities = [
    { name: "Lombard, IL", href: "/service-areas/lombard-il" },
    { name: "Villa Park, IL", href: "/service-areas/villa-park-il" },
    { name: "Elmhurst, IL", href: "/service-areas/elmhurst-il" },
    { name: "Bensenville, IL", href: "/service-areas/bensenville-il" }
  ];

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Auto Repair Service Areas
      </h1>

      <p className="mb-6">
        At <strong>2 Brothers Auto & Muffler</strong>, we are proud to serve drivers in Addison, IL and the surrounding communities.
        Our experienced mechanics provide high-quality auto repair, brake service, muffler replacement, and exhaust repair to keep your
        vehicle safe and running smoothly. If you live in one of the nearby towns, we are just a short drive away!
      </p>

      <h2 className="text-2xl font-semibold mb-4">Cities We Serve</h2>
      <ul className="space-y-3">
        {cities.map((city) => (
          <li key={city.name}>
            <Link
              href={city.href}
              className="text-blue-600 hover:underline"
            >
              Auto Repair in {city.name}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-8">
        Don’t see your city listed? We still welcome you! <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link> today to schedule your auto repair appointment.
      </p>
    </main>
  );
}
