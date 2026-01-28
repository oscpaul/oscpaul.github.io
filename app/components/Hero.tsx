"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        {/* HERO TEXT */}
        <h1 className="text-5xl sm:text-4xl mb-6 leading-tight">
          Thoughtful Landscaping,
          <br /> Beautiful Results
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600">
          We design calm, modern outdoor spaces that feel timeless and intentional.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md bg-green-600 px-8 py-4 text-white hover:bg-green-700 transition"
        >
          Get a Free Quote
        </button>

        {/* INLINE POPUP */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mx-auto mt-8 w-full max-w-[360px] rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-2 text-lg font-semibold">Get a Free Quote</h2>
                <p className="mb-4 text-sm text-gray-600">
                  Tell us a little about your project.
                </p>

                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-md bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  />

                  <textarea
                    placeholder="Project details"
                    rows={3}
                    className="w-full rounded-md bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  />

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="rounded bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700 transition"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* HERO IMAGE */}
      <div className="mx-auto mt-20 max-w-5xl">
        <div className="relative h-[360px] overflow-hidden rounded-2xl">
          <Image
            src="/images/hero.jpg"
            alt="Landscaped garden"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
