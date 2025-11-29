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

    <main>
      
    <div>
           

    </div>
      <Hero />
    
      <Expert />
           <Link href="/about">
            Go to First Post
          </Link>
 
    
    </main>
  )
}
