"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  technologies,
  techCategories,
  techBadges,
  type Tech,
} from "@/lib/data";

interface TechCardProps {
  tech: Tech;
  index: number;
  isInView: boolean;
}

function TechCard({ tech, index, isInView }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="glass p-4 sm:p-6 md:p-8 rounded-2xl text-center cursor-pointer group relative overflow-hidden will-change-transform"
    >
      {/* Gradient Border Animation */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-sm" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
          {tech.name}
        </h3>
        <span className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3 block group-hover:text-gray-300 transition-colors duration-300">
          {tech.category}
        </span>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTechs = selectedCategory
    ? technologies.filter((tech) => tech.category === selectedCategory)
    : technologies;

  return (
    <section
      id="tech-stack"
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider"
            >
              My Arsenal
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 gradient-text"
            >
              Tech Stack
            </motion.h2>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-8 sm:mb-12"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`glass px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-primary/20 border-2 border-primary text-white glow-blue"
                  : "border border-white/20 text-gray-400 hover:text-white hover:border-primary/50"
              }`}
            >
              All
            </button>
            {techCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`glass px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary/20 border-2 border-primary text-white glow-blue"
                    : "border border-white/20 text-gray-400 hover:text-white hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Tech Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            {filteredTechs.map((tech, index) => (
              <TechCard
                key={tech.name}
                tech={tech}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>

          {/* Floating badges */}
          <div className="mt-12 sm:mt-16 flex flex-wrap gap-2 sm:gap-3 justify-center">
            {techBadges.map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-300 border border-primary/30"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}