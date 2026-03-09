"use client";

import { useEffect, useState } from "react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews || []));
  }, []);

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1)
      : "0";

  const renderStars = (rating: number) => {
    return "⭐".repeat(rating);
  };

 
  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold mb-3">
            Customer Reviews
          </h2>

          {/* Google Rating */}
          <div className="flex items-center justify-center gap-3 mb-3">

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-6"
            />

            <span className="text-lg font-semibold">
              {averageRating} / 5
            </span>

            <span className="text-yellow-500 text-lg">
              ⭐⭐⭐⭐⭐
            </span>

      
          </div>

          <p className="text-gray-600">
            See why drivers trust our auto repair shop
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">

            <a
              href="https://search.google.com/local/writereview?placeid=ChIJif2lgB6tD4gR4tYawFkaKP0"
              target="_blank"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Leave a Google Review
            </a>

            <a
              href="https://www.google.com/search?sca_esv=a2755a786bd8ce70&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOX5g8qepDJr5so1FdwQcPHgdBsTbZ6K5C8fzUBCX0HXbZPfhpOsDFxYXCpsrDLaK3v42H936f1jXg0AoUC9oiYuo2BpIkBEGS5vbKJ0cl9Pkcjn9nf0OndfEc1jm_q1CIf0wYsM%3D&q=2+BROTHERS+AUTO+SERVICE/MUFFLERS+Reviews&sa=X&ved=2ahUKEwju77b-r4qTAxX5CnkGHaqrAqQQ0bkNegQINxAF&biw=1896&bih=878&dpr=1"
              target="_blank"
              className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              View All Reviews
            </a>

          </div>

        </div>

        {reviews.length === 0 && (
          <p className="text-center text-gray-500">
            Loading reviews...
          </p>
        )}

        {/* Review Slider */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-[320px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition snap-center"
            >

              <div className="flex items-center justify-between mb-3">

                <h3 className="font-semibold text-gray-900">
                  {review.author_name}
                </h3>

                <span className="text-yellow-500">
                  {renderStars(review.rating)}
                </span>

              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {review.text}
              </p>

              <p className="text-xs text-gray-400">
                {review.relative_time_description}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "2 Brothers Auto & Muffler",
            url: "https://devwordpressspace.site",
         
            review: reviews.map((r) => ({
              "@type": "Review",
              author: { "@type": "Person", name: r.author_name },
              reviewBody: r.text,
              reviewRating: {
                "@type": "Rating",
                ratingValue: r.rating,
                bestRating: 5,
              },
              "aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "5"
}
              datePublished: new Date().toISOString(),
            })),
          }),
        }}
      />
    </section>
  );
}
