export default function Hero() {
  return (
    <>
      <section className="relative w-full px-4 py-8">

        {/* Logo */}
        <div className="absolute left-2 top-6 w-16 sm:w-20 md:static md:w-28 lg:w-36">
          <img
            src="/images/logo.png"
            alt="2 Brothers Auto & Muffler Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8">

          <h1 className="hero__heading text-3xl md:text-5xl font-bold">
            Auto Repair, Muffler & Brake Service in Addison, IL
          </h1>

          <h2 className="hero__subheading text-lg md:text-2xl">
            Reliable and Convenient Auto Service in Addison, IL
          </h2>

          <div className="hero__subheading text-sm md:text-base space-y-1">
            <p>915 S Westwood Ave, Addison, IL 60101</p>

            <p className="hero__subheading font-semibold">
              <a href="tel:16302297330" className="hover:text-blue-600">
                (630) 229-7330
              </a>
            </p>
          </div>

          {/* CTA */}
          <div className="hero__cta">
            <a className="button" href="/service-areas/lombard-il">
              Learn more
            </a>
          </div>

          {/* Social Icons */}
          <ul className="social__items" role="list">
            {/* icons unchanged */}
          </ul>

        </div>
      </section>
    </>
  );
}
