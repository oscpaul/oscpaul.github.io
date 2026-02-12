export default function NewSection() {
  return (
    <>
      {/* Hero section */}
      <section className="relative w-full bg-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Auto Care, Made Simple.
          </h1>
          <p className="text-stone-700 max-w-2xl mx-auto text-lg mb-10">
            Thoughtful repairs. Honest pricing. A better experience for your car —
            and for you.
          </p>

          <div className="flex justify-center">
            <button className="group relative overflow-hidden border border-charcoal px-8 py-4 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5">
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
      <section className="flex flex-col md:flex-row justify-center items-center w-full py-16 gap-6 max-w-6xl mx-auto px-6">
        {/* Left half */}
        <div
          className="w-full md:w-1/2 h-96 bg-cover bg-center rounded-3xl shadow-lg"
          style={{ backgroundImage: "url('https://picsum.photos/id/1015/800/600')" }}
        ></div>

        {/* Right half */}
        <div
          className="w-full md:w-1/2 h-96 bg-cover bg-center rounded-3xl shadow-lg"
          style={{ backgroundImage: "url('https://picsum.photos/id/1016/800/600')" }}
        ></div>
      </section>
    </>
  );
}
