"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type QuotePopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function QuotePopup({ open, onClose }: QuotePopupProps) {
  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Centered popup */}
          <div className="fixed inset-0 z-50 grid place-items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-[360px] rounded-lg bg-white p-6 shadow-xl"
            >
              <h2 className="text-lg font-semibold mb-2">
                Get a Free Quote
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                Tell us a little about your project.
              </p>

              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                <textarea
                  placeholder="Project details"
                  rows={3}
                  className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
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
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
