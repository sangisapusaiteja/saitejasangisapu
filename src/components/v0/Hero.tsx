"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/v0/button";
import TypingAnimation from "./TypingAnimation";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated gradient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8  from-primary/10 to-secondary/10 p-8 rounded-3xl backdrop-blur-lg border border-white/20"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 font-mono"
          >
            {personalInfo.greeting}
          </motion.p>

          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight px-4"
          >
            <span className="gradient-text text-glow block">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center min-h-12 sm:min-h-14"
          >
            <TypingAnimation roles={personalInfo.roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed px-4"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="glass hover:shadow-glow-blue transition-all duration-300 text-sm sm:text-lg px-5 sm:px-8 py-4 sm:py-6 bg-primary/20 border border-primary/50 backdrop-blur-lg w-full sm:w-auto"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="glass hover:shadow-glow-purple text-sm sm:text-lg px-5 sm:px-8 py-4 sm:py-6 border-2 border-white/20 hover:border-primary/50 hover:bg-primary/10 backdrop-blur-lg transition-all duration-300 w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass hover:shadow-glow-cyan text-sm sm:text-lg px-5 sm:px-8 py-4 sm:py-6 border-2 border-white/20 hover:border-secondary/50 hover:bg-secondary/10 backdrop-blur-lg transition-all duration-300 w-full sm:w-auto"
            >
              <a href={personalInfo.resumeUrl} download>
                <Download className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.2 },
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              },
            }}
            className="hidden sm:flex justify-center pt-12"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}