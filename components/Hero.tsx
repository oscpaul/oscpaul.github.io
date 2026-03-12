export default function Hero() {
  return (
    <section className="w-full px-4 py-12 relative">
      <div className="max-w-6xl mx-auto">

        {/* Desktop Logo (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-28 lg:w-36">
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
          <ul className="social__items flex flex-row gap-4 mt-4">
            {/* social icons here */}
          </ul>
        </div>
      </div>
    </section>
  );
}
