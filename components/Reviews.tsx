export default function Reviews() {
  const reviews = [
    {
      name: "Jane Doe",
      text: "Fantastic service! My car was ready ahead of schedule, and the staff was super friendly.",
      rating: 5,
    },
    {
      name: "John Smith",
      text: "Honest pricing and excellent repairs. I highly recommend AutoCare!",
      rating: 4,
    },
    {
      name: "Emily Johnson",
      text: "Quick, professional, and reliable. I feel safe leaving my car here.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 mb-12">
          Real feedback from drivers who trust AutoCare for their vehicles.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center"
            >
              <p className="text-gray-700 mb-4 text-center">"{review.text}"</p>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      star < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.945c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.945a1 1 0 00-.364-1.118L2.04 9.372c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.945z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-800 font-semibold">{review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
