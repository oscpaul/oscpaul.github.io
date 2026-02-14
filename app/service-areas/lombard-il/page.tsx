import Link from "next/link";
import React from "react"; // optional but safe

export const metadata = {
  title: "Auto Repair Near Lombard IL | 2 Brothers Auto & Muffler",
  description:
    "Looking for trusted auto repair near Lombard, IL? 2 Brothers Auto & Muffler provides muffler, brake, exhaust repair, and engine diagnostics just minutes away in Addison, IL."
};

// ✅ Default export function component
export default function LombardPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Auto Repair & Muffler Shop Serving Lombard, IL
      </h1>

      <p className="mb-6">
        Looking for reliable auto repair near Lombard, IL? <strong>2 Brothers Auto & Muffler</strong> in Addison, IL is your trusted local shop. 
        We offer high-quality brake repair, muffler and exhaust services, engine diagnostics, and full-service auto repair for all makes and models.
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

      <h2 className="text-2xl font-semibold mt-6 mb-4">Why Lombard Drivers Choose Us</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Family-owned & operated</li>
        <li>Honest pricing & transparent service</li>
        <li>Experienced mechanics working on all makes and models</li>
        <li>Fast, reliable service and repairs</li>
      </ul>

      <p className="mt-6">
        Conveniently located in Addison, we are just minutes from Lombard via North Avenue (Route 64) and Route 53.{" "}
        <Link href="/contact" className="text-blue-600 hover:underline">
          Schedule your appointment today!
        </Link>
      </p>
    </main>
  );
}
