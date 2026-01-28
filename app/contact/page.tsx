"use client";

import Image from "next/image";

export default function ContactPage() {
  const phoneNumber = "+1 (555) 123-4567";

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 px-6 py-12">
      {/* SMALL TEXT AT TOP */}
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg">
          We'd love to hear about your project. Call us or check out our work below.
        </p>
        {/* PHONE NUMBER */}
        <a
          href={`tel:${phoneNumber.replace(/\D/g, "")}`}
          className="mt-6 inline-block rounded-md bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition"
        >
          {phoneNumber}
        </a>
      </div>

      {/* CENTERED IMAGE */}
      <div className="relative w-[50vw] h-[50vw] sm:w-[400px] sm:h-[400px]">
        <Image
          src="/images/contact-hero.jpg" // replace with your image
          alt="Beautiful landscaped garden"
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>
    </main>
  );
}
