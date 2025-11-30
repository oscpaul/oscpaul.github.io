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


export default function Home() {
  return (
    <main className="min-h-screen">

      {/* --- Banner --- */}
      <section className="w-full bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Next.js Site</h1>
        <p className="text-lg mt-2 opacity-90">This is the banner section</p>
      </section>

      {/* --- Section 1: Centered Button --- */}
      <section className="flex items-center justify-center h-64 bg-gray-100">
      <Link href='/about'>
                <button className='text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                  View Menu
                </button>
              </Link>
      </section>

      {/* --- Section 2: 2/3 + 1/3 layout --- */}
    {/* --- Section 2: 2/3 + 1/3 layout with larger height --- */}
<section className="grid grid-cols-1 md:grid-cols-3 min-h-[1000px]">
  {/* Left (2/3) */}
  <div className="md:col-span-2 p-8 bg-gray-200">
    <h2 className="text-2xl font-bold mb-2">Left Section (2/3)</h2>
    <p>This section takes two-thirds of the width on medium+ screens.</p>
  </div>

  {/* Right (1/3) */}
  <div className="md:col-span-1 p-8 bg-gray-300">
    <h2 className="text-2xl font-bold mb-2">Right Section (1/3)</h2>
    <p>This section takes one-third of the width.</p>
  </div>
</section>


    </main>
  );
}
