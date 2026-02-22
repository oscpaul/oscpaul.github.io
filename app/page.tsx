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

        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </main>
  )
}
