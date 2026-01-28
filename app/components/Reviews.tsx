"use client";

import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section className="section bg-gray-50">
      <div className="container max-w-4xl">
        <h2 className="text-4xl mb-10 text-center">
          Client Reviews
        </h2>

        <div className="space-y-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <p className="text-gray-700 mb-2">“{r.text}”</p>
              <span className="text-sm text-green-700">
                — {r.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
