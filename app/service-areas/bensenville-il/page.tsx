import Link from "next/link";

export const metadata = {
  title: "Auto Repair Near Bensenville IL | 2 Brothers Auto & Muffler",
  description:
    "2 Brothers Auto & Muffler offers trusted auto repair near Bensenville, IL. Services include brake repair, muffler and exhaust repair, engine diagnostics, and full-service auto repair in Addison."
};

export default function BensenvillePage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Auto Repair & Muffler Shop Serving Bensenville, IL
      </h1>

      <p className="mb-6">
        Need reliable auto repair near Bensenville, IL? <strong>2 Brothers Auto & Muffler</strong> in Addison provides professional brake repair, muffler and exhaust service, engine diagnostics, and full-service auto repair for all types of vehicles.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Muffler repair & replacement</li>
        <li>Exhaust system repair</li>
        <li>Brake repair & pad replacement</li>
        <li>Engine diagnostics & check engine light repair</li>
        <li>Suspension & steering repair</li>
        <li>Catalytic converter replacement</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose 2 Brothers Auto for Bensenville Drivers</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Family-owned & operated business</li>
        <li>Honest, upfront pricing with no hidden fees</li>
        <li>Experienced mechanics working on all makes and models</li>
        <li>Quick, high-quality repairs</li>
      </ul>

      <p className="mt-6">
        Our Addison location is conveniently close to Bensenville via I-294 and Route 83. <Link href="/contact" className="text-blue-600 hover:underline">Schedule your appointment today!</Link>
      </p>
    </main>
  );
}
