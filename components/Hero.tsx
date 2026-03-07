export default function Hero() {
  return (
    <>
      {/* Hero section */}

<section className="w-full text-center space-y-6 md:space-y-8 px-4 py-8">

  <h1 className="hero__heading text-3xl md:text-5xl font-bold">
    2 Brothers Auto & Muffler
  </h1>

  <h2 className="hero__subheading text-lg md:text-2xl">
    Muffler & Brake Repair in Addison, IL
  </h2>

  <div className="hero__subheading text-sm md:text-base space-y-1">
    <p>915 S Westwood Ave, Addison, IL 60101</p>

    <p className="hero__subheading font-semibold">
      <a href="tel:16302297330" className="hover:text-blue-600">
        (630) 229-7330
      </a>
    </p>
  </div>

  {/* Social Icons */}
  <ul className="flex justify-center gap-4 flex-wrap">
    <li className="social__item">
      <span className="visually-hidden">Instagram</span>
      <span className="social__item--icon">{/* svg */}</span>
    </li>

    <li className="social__item">
      <span className="visually-hidden">Twitter</span>
      <span className="social__item--icon">{/* svg */}</span>
    </li>

    <li className="social__item">
      <span className="visually-hidden">Github</span>
      <span className="social__item--icon">{/* svg */}</span>
    </li>

    <li className="social__item">
      <span className="visually-hidden">LinkedIn</span>
      <span className="social__item--icon">{/* svg */}</span>
    </li>
  </ul>

  {/* CTA */}
  <div className="pt-2">
    <a
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      href="https://www.google.com/maps?q=915+S+Westwood+Ave,+Addison,+IL+60101"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get Directions
    </a>
  </div>

</section>
      
      <section className="relative w-full bg-white py-2 text-center">
        <div className="max-w-6xl mx-auto px-2">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
       2 Brothers Auto & Muffler Service – Muffler & Brake Repair in Addison, IL
        </h1>
          <h2>
                      Serving Addison, Lombard, Elmhurst, Villa Park, and all of DuPage County.
          </h2>
          <h3>
            Need fast, reliable muffler repair or exhaust system service near you in Addison, IL? 2 Brothers Auto Service has you covered. Conveniently located at 915 S Westwood Ave, just off Lake Street and minutes from Army Trail Rd, we specialize in muffler replacement, exhaust repair, and full exhaust system maintenance for all vehicles. Our experienced technicians provide honest diagnostics, quality parts, and same-day service whenever possible. Stop by today or call to restore your car’s performance, reduce noise, and get back on the road safely.  
          </h3>

          <div className="flex justify-center">
              <a
              href="#services"
              className="group relative overflow-hidden border border-charcoal px-4 py-2 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-r from-transparent via-charcoal/10 to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform duration-700 ease-out
                "
              />
              <span className="relative z-10">Our Services</span>
            </a>
          </div>
        </div>
      </section>

      {/* Rounded split images section */}
      <section className="flex flex-col md:flex-row justify-center items-center w-full py-2 gap-6 max-w-6xl mx-auto px-2">
        {/* Left half */}
    
      </section>
    </>
  );
}
