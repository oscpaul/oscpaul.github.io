export default function Hero() {
  return (
    <>
      {/* Hero section */}
      <section className="hero mb-100 margin-inline-flex flow-30">
  <header>
    <h1 className="hero__heading">2 Brothers Auto & Muffler – Addison, IL</h1>
    </header>
    <h2 className="hero__subheading">Muffler & Brake Repair in Addison, IL</h2>
    <ul className="social__items" role="list">
      <li className="social__item"><span className="visually-hidden">Instagram </span><span className="social__item--icon"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path></svg></span></li>
      <li className="social__item"><span className="visually-hidden">Twitter </span><span className="social__item--icon"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.3 21.1 9.9 2.9H2.7l11.4 18.2zM2.7 21.1l7.2-6.6M14.1 9.5l7.2-6.6" className="st0"></path></svg></span></li>
      <li className="social__item"><span className="visually-hidden">Github </span><span className="social__item--icon"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path></svg></span></li>
      <li className="social__item"><span className="visually-hidden">LinkedIn </span><span className="social__item--icon"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg></span></li>
      </ul>
      <div className="hero__cta"><a className="button" href="https://www.google.com/maps?q=915+S+Westwood+Ave,+Addison,+IL+60101">Learn more</a></div>
      
      
       <div className="mt-6 rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps?q=915+S+Westwood+Ave,+Addison,+IL+60101&output=embed"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
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
        <div
          className="w-full md:w-1/2 h-96 bg-cover bg-center rounded-3xl shadow-lg"
          style={{ backgroundImage: `url(/images/2brothers-1.webp)` }}
        ></div>

        {/* Right half */}
      <div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl shadow-lg overflow-hidden">
  <img
    src="/images/2brother1.png"
    className="w-full h-full object-cover"
    alt="Two brothers"
  />
</div>
      </section>
    </>
  );
}
