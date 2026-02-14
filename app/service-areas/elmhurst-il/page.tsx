import Link from "next/link";

export const metadata = {
  title: "Auto Repair Near Elmhurst IL | 2 Brothers Auto & Muffler",
  description:
    "2 Brothers Auto & Muffler provides trusted auto repair near Elmhurst, IL. Brake repair, muffler service, exhaust repair, and engine diagnostics just minutes from Elmhurst in Addison."
};

export default function ElmhurstPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Auto Repair & Muffler Shop Serving Elmhurst, IL
      </h1>

      <p className="mb-6">
        Searching for a reliable auto repair shop near Elmhurst, IL? <strong>2 Brothers Auto & Muffler</strong> in Addison offers expert brake repair, muffler and exhaust services, engine diagnostics, and full-service auto repair for all makes and models.
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

      <h2 className="text-2xl font-semibold mt-6 mb-4">Why Elmhurst Drivers Choose Us</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Family-owned & operated shop</li>
        <li>Transparent, honest pricing</li>
        <li>Certified mechanics with years of experience</li>
        <li>Fast and reliable service</li>
      </ul>

      <p className="mt-6">
        Just a short drive from Elmhurst via North Avenue and Route 53, our Addison location is convenient for all your auto repair needs. <Link href="/contact" className="text-blue-600 hover:underline">Contact us today!</Link>
      </p>
    </main>
  );
}
