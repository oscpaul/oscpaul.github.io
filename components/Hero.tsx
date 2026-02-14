export default function Hero() {
  return (
    <>
      {/* Hero section */}
      <section className="relative w-full bg-white py-2 text-center">
        <div className="max-w-6xl mx-auto px-2">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
         Welcome to 2 Brothers Auto & Muffler – Addison, IL

If you're looking for trusted, affordable, and experienced auto repair in Addison, IL, 2 Brothers Auto & Muffler is your local, family-owned solution. Conveniently located in Addison, we proudly serve drivers throughout Illinois, including nearby communities like Lombard, Villa Park, Bensenville, Elmhurst, and Wood Dale.

With decades of combined experience, our certified mechanics specialize in muffler repair, exhaust systems, brakes, engine diagnostics, suspension work, and complete auto repair services for domestic and foreign vehicles.
          </h1>
          <p className="text-stone-700 max-w-2xl mx-auto text-lg mb-10">
            Thoughtful repairs. Honest pricing. A better experience for your car —
            and for you.
          </p>

          <div className="flex justify-center">
            <button className="group relative overflow-hidden border border-charcoal px-2 py-2 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5">
              {/* Highlight overlay */}
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
            </button>
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
        <div
          className="w-full md:w-1/2 h-96 bg-cover bg-center rounded-3xl shadow-lg"
          style={{ backgroundImage: `url(/images/2brothers-2.webp)` }}
        ></div>
      </section>
    </>
  );
}
