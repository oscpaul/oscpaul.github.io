export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      
      <div className="max-w-xl text-center">

        <img
          src="/images/019be20938.webp"
          alt="404 monster under construction"
          className="mx-auto w-72 mb-8"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 – Page Under Construction
        </h1>

        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for is still being built.  
          Our little monster is working hard to fix things.
        </p>

        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Go Back Home
        </a>

      </div>

    </main>
  );
}
