import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Story from "@/components/Story"
import Reviews from "@/components/Reviews"
import About from "@/components/About"
import CTA from "@/components/CTA"
import ImageClickSlider from "@/components/ImageClickSlider"
import Header from "@/components/Header"
import MobileAwareSection from "@/components/MobileAwareSection"
import Footer from "@/components/Footer"
import SquareEmbed from "@/components/SquareEmbed"
import SquareEmbed2 from "@/components/SquareEmbed2"

import Script from 'next/script';
export default function Home() {

const jsonLd=
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "2 BROTHERS AUTO SERVICE/MUFFLERS",
  "image": "",
  "@id": "",
  "url": "",
  "telephone": "(630) 229-7330",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 S Westwood Ave",
    "addressLocality": "Addison",
    "addressRegion": "IL",
    "postalCode": "60101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.9095969,
    "longitude": -87.9977708
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:30",
    "closes": "18:30"
  } 
}
  return (
    
    <main className="bg-sand text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
  
<Header />
      <Hero />
     <div className="w-full h-[500px] squareembed">
      
      </div>
      <SquareEmbed />
      <Services />
      <About />
      <Story />
      <Reviews />
      <CTA />
      <Footer />

    </main>
  )
}
