export default function Hero() {
  return (
    <>
      {/* Hero section */}
      <section className="relative w-full bg-white py-2 text-center">
        <div className="max-w-6xl mx-auto px-2">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
       2 Brothers Auto & Muffler Service – Muffler & Brake Repair in Addison, IL
        </h1>
          <h3>
Need fast, reliable muffler repair or exhaust system service near you in Addison, IL? 2 Brothers Auto Service has you covered. Conveniently located at 915 S Westwood Ave, just off Lake Street and minutes from Army Trail Rd, we specialize in muffler replacement, exhaust repair, and full exhaust system maintenance for all vehicles. Our experienced technicians provide honest diagnostics, quality parts, and same-day service whenever possible. Stop by today or call to restore your car’s performance, reduce noise, and get back on the road safely.          </h3>
          <p className="text-stone-700 max-w-2xl mx-auto text-lg mb-10">
            Thoughtful repairs. Honest pricing. A better experience for your car —
            and for you.
          </p>

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
