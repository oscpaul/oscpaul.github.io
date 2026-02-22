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
 


  return (
    
    <main className="bg-sand text-charcoal">
  
  
<Header />
      <Hero />
     <div className="w-full squareembed">
      
      </div>
      <SquareEmbed />
      <Services />
      <About />
      <Story />
      <Reviews />
      <CTA />
      <Footer />
    <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

      </section>

    </main>
  )
}
