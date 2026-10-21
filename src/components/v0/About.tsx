"use client";

import { useRef } from "react";
import { Code2, Database, Layers, Zap } from "lucide-react";
import { aboutContent } from "@/lib/data";
import { motion, useInView } from "framer-motion";

const iconMap = { Layers, Code2, Zap, Database } as const;

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
              {aboutContent.subtitle}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 gradient-text"
            >
              {aboutContent.title}
            </motion.h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 w-full"
            >
              <div className="glass p-6 sm:p-8 rounded-2xl glow-blue">
                {aboutContent.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-base sm:text-lg text-gray-300 leading-relaxed ${i < aboutContent.paragraphs.length - 1 ? "mb-6" : ""}`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {aboutContent.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="glass p-3 sm:p-4 rounded-xl text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
              {aboutContent.highlights.map((highlight, index) => {
                const Icon = iconMap[highlight.icon];
                return (
                  <motion.div
                    key={highlight.title}
                    className="glass p-5 sm:p-6 rounded-xl glow-purple group cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}