import Link from "next/link";

export const metadata = {
  title: "Auto Repair Near Villa Park IL | 2 Brothers Auto & Muffler",
  description:
    "Trusted auto repair near Villa Park, IL. 2 Brothers Auto & Muffler offers muffler, brake, exhaust, and engine repair services just minutes from Villa Park in Addison, IL."
};

export default function VillaParkPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Auto Repair & Muffler Shop Serving Villa Park, IL
      </h1>

      <p className="mb-">
        Looking for reliable auto repair near Villa Park, IL? <strong>2 Brothers Auto & Muffler</strong> in Addison, IL provides professional, affordable auto repair, brake service, muffler replacement, and exhaust repair for drivers in Villa Park and surrounding areas.
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

      <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Family-owned & operated</li>
        <li>Honest pricing and transparent service</li>
        <li>Experienced mechanics working on all makes and models</li>
        <li>Quick turnaround times and reliable repairs</li>
      </ul>

      <p className="mt-6">
        Conveniently located in Addison, we are just minutes from Villa Park via North Avenue (Route 64) and Route 53. <Link href="/contact" className="text-blue-600 hover:underline">Schedule your appointment today!</Link>
      </p>
    </main>
  );
}
