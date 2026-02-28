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

  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : "0";

  return (
    <section>
      <h2>Customer Reviews</h2>

      {reviews.length === 0 && <p>Loading reviews...</p>}

      {reviews.map((review, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p>⭐ {review.rating}</p>
          <p>{review.text}</p>
          <p>
            - {review.author_name} ({review.relative_time_description})
          </p>
        </div>
      ))}

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "2 Brothers Auto & Muffler",
            url: "https://devwordpressspace.site",
              aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: averageRating,
              reviewCount: reviews.length,
            },
            review: reviews.map((r) => ({
              "@type": "Review",
              author: { "@type": "Person", name: r.author_name },
              reviewBody: r.text,
              reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
              datePublished: new Date().toISOString(),
            })),
          }),
        }}
      />
    </section>
  );
}
