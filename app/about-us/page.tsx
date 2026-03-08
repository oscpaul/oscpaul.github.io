export const metadata = {
  title: "Under Construction",
  robots: "noindex, nofollow",
};

export default function UnderConstruction() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-500 to-blue-700 text-white px-6">

      <div className="text-center max-w-lg">

        {/* Tailwind Logo / Monster */}
        <div className="flex justify-center mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="Tailwind Logo"
            className="w-28 animate-bounce"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🚧 Page Under Construction
        </h1>

        <p className="text-lg text-blue-100 mb-8">
          We're building something awesome.  
          This page will be available soon.
        </p>

        <a
          href="/"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
        >
          Back to Home
        </a>

      </div>

    </main>
  );
}
