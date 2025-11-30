import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import Cook from '@/app/components/Home/Cook'
import Expert from '@/app/components/Home/Expert'
import Gallery from '@/app/components/Home/Gallery'
import Link from 'next/link';
import Newsletter from '@/app/components/Home/Newsletter'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
export const metadata: Metadata = {
  title: 'Kitchen',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
   viewportFit: 'cover', // Optional, for full-screen experience on some devices
};

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* --- Banner --- */}
      <section className="w-full bg-gray-100 text-white py-20 text-center">
     
      </section>

      {/* --- Section 1: Centered Button --- */}
      <section className="flex items-center justify-center h-64 bg-gray-100">
      <Link href='/about'>
                <button className='text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                  Order-To-Go
                </button>
              </Link>
      </section>

      {/* --- Section 2: 2/3 + 1/3 layout --- */}
    {/* --- Section 2: 2/3 + 1/3 layout with larger height --- */}
<section className="grid grid-cols-1 md:grid-cols-3 min-h-[1000px]">
  {/* Left (2/3) */}
  <div className="md:col-span-2 p-8 bg-gray-200">
    <h2 className="text-2xl font-bold mb-2">About Us</h2>
    <p>Welcome to The Golden Lantern, a neighborhood pan-Asian take-out spot in the heart of Shaw, DC. We’re a small kitchen with a big love for the flavors we grew up with - wok-tossed fried rice, crispy katsu, fragrant dumplings, and comforting bowls inspired by kitchens across East and Southeast Asia.</p>
  </div>

  {/* Right (1/3) */}
  <div className="md:col-span-1 p-8 bg-gray-300">
    <h2 className="text-2xl font-bold mb-2"></h2>
    <p>Kitchen Hours:  4 PM–1 AM Daily</p>
    <p>Phone Number: 312-379-9882</p>
  </div>
</section>


    </main>
  );
}
