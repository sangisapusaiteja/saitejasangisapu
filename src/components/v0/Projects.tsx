"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/v0/button";
import { projects } from "@/lib/data";

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  gradient: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.02, y: -8 }}
      className="glass p-6 sm:p-8 rounded-2xl relative overflow-hidden group cursor-pointer will-change-transform"
    >
      {/* Gradient Border Animation */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl blur-xl`}
      />

      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-primary/50 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {project.liveLink && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="glass border-primary/50 hover:bg-primary/20 hover:border-primary transition-all duration-300 w-full sm:w-auto text-sm"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="glass border-white/20 hover:bg-secondary/20 hover:border-secondary transition-all duration-300 w-full sm:w-auto text-sm"
            >
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
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
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 gradient-text"
            >
              Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-gray-400 mt-4 max-w-2xl mx-auto px-4"
            >
              A collection of projects showcasing my expertise in building
              modern, scalable web applications
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}