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
  const faqs = [
    {
      question: "Do you offer same-day muffler repair in Addison, IL?",
      answer:
        "Yes, most muffler and exhaust repairs can be completed the same day depending on parts availability.",
    },
    {
      question: "Do you provide free brake inspections?",
      answer:
        "Yes, we offer free brake inspections for customers in Addison and surrounding areas.",
    },
    {
      question: "What types of vehicles do you service?",
      answer:
        "We service most domestic and foreign vehicles including cars, trucks, and SUVs.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

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