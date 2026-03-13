export default function Hero() {
  return (
    <section className="w-full px-4 py-12 relative">
      <div className="max-w-6xl mx-auto">

        {/* Desktop Logo (left, slightly inset) */}
        <div className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 w-28 lg:w-36">
          <img
            src="/images/logo.png"
            alt="2 Brothers Auto & Muffler Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <h1 className="hero__heading text-3xl md:text-5xl font-bold">
            Auto Repair, Muffler & Brake Service in Addison, IL
          </h1>

          <h2 className="hero__subheading text-lg md:text-2xl">
            Reliable and Convenient Auto Service in Addison, IL
          </h2>

          <div className="hero__subheading text-sm md:text-base space-y-1">
            <p>915 S Westwood Ave, Addison, IL 60101</p>
            <p className="font-semibold">
              <a href="tel:16302297330" className="hover:text-blue-600">
                (630) 229-7330
              </a>
            </p>
          </div>

          {/* CTA + Mobile Logo */}
          <div className="flex flex-row items-center gap-4 mt-4 md:mt-6">
            {/* Mobile Logo */}
            <div className="w-12 sm:w-16 md:hidden">
              <img
                src="/images/logo.png"
                alt="2 Brothers Auto & Muffler Logo"
                  loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* CTA Button */}
            <a
              className="button px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              href="/service-areas/lombard-il"
            >
              Learn More
            </a>
          </div>

          {/* Social Icons */}
             <ul className="social__items" role="list">
              <li className="social__item">
                <a href="https://www.instagram.com/_mariorhernandez/" title="Like me on Instagram" target="_blank">
                  <span className="visually-hidden">Instagram </span>
                  <span className="social__item--icon">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path></svg>
                  </span>
                </a>
              </li>
              <li className="social__item">
                <a href="https://twitter.com/imariohernandez" title="Follow me on Twitter" target="_blank">
                  <span className="visually-hidden">Twitter </span>
                  <span className="social__item--icon">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.3 21.1 9.9 2.9H2.7l11.4 18.2zM2.7 21.1l7.2-6.6M14.1 9.5l7.2-6.6"></path></svg>
                  </span>
                </a>
              </li>
              <li className="social__item">
                <a href="https://github.com/mariohernandez" title="Collaborate with me on Github" target="_blank">
                  <span className="visually-hidden">Github </span>
                  <span className="social__item--icon">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path></svg>
                  </span>
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.linkedin.com/in/mariorhernandez/" title="Network with me on LinkedIn" target="_blank">
                  <span className="visually-hidden">LinkedIn </span>
                  <span className="social__item--icon">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                  </span>
                </a>
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
}
