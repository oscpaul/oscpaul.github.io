"use client";

import Image from "next/image";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-4xl mb-16 text-center">
          Recent Projects
        </h2>

        {/* CENTERED, NARROW GRID */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* SQUARE IMAGE */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <h3 className="mt-6 text-lg font-medium">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 max-w-xs">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
