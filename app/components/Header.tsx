"use client";

import { motion } from "framer-motion";
     import Link from "next/link";
export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b"
    >
      <div className="container flex items-center justify-between h-16">
        <span className="text-xl font-semibold tracking-tight">
          GreenView
        </span>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#" className="hover:text-green-700">Services</a>
          <a href="#" className="hover:text-green-700">Projects</a>
          <a href="#" className="hover:text-green-700">Reviews</a>
        </nav>

 

<Link href="/contact">
  <button className="rounded-md bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition">
    Contact
  </button>
</Link>

      </div>
    </motion.header>
  );
}
