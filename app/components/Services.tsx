"use client";

import { motion } from "framer-motion";

const services = [
  "Landscape Design",
  "Garden Installation",
  "Outdoor Lighting",
  "Hardscaping",
  "Lawn Care",
];

export default function Services() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="text-4xl mb-12 text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-medium">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
