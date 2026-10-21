"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { experiences, type ExperienceItem } from "@/lib/data";

interface TimelineItemProps {
  experience: ExperienceItem;
  index: number;
  isInView: boolean;
}

function TimelineItem({ experience, index }: TimelineItemProps) {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 30 }}
      animate={itemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative"
    >
      {/* Timeline Line - hidden on mobile, shown on lg */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-primary via-secondary to-transparent" />

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={itemInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
        className="hidden lg:flex absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 rounded-full bg-linear-to-r from-primary to-secondary glow-blue z-10 items-center justify-center"
      >
        <div className="w-3 h-3 rounded-full bg-background" />
      </motion.div>

      {/* Content Card */}
      <div className={`flex w-full lg:w-auto ${index % 2 === 0 ? "justify-start lg:pr-[calc(50%+3rem)]" : "justify-start lg:justify-end lg:pl-[calc(50%+3rem)]"} mb-8 sm:mb-12 lg:mb-16`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -8 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="glass p-6 sm:p-8 rounded-2xl w-full lg:max-w-2xl group cursor-pointer relative overflow-hidden will-change-transform"
        >
          {/* Gradient glow on hover */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          {/* Header */}
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                  {experience.role}
                </h3>
                <p className="text-sm sm:text-base text-primary font-semibold">{experience.company}</p>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2 text-gray-400 mb-4 sm:mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-mono">{experience.duration}</span>
          </div>

          {/* Achievements */}
          <ul className="space-y-3">
            {experience.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                className="flex items-start gap-3 text-gray-300"
              >
                <div className="w-2 h-2 rounded-full bg-linear-to-r from-primary to-secondary mt-2 shrink-0" />
                <span className="text-sm leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider"
            >
              Career Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 gradient-text"
            >
              Experience
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.company}-${index}`}
                experience={experience}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* End of Timeline */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: experiences.length * 0.2 + 0.5 }}
            className="flex justify-center mt-8"
          >
            <div className="w-12 h-12 rounded-full bg-linear-to-r from-primary via-secondary to-accent glow-cyan flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-background" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}