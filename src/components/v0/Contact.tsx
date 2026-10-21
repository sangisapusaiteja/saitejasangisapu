"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Download, Send } from "lucide-react";
import { Button } from "@/components/v0/button";
import { socialLinks, contactContent, personalInfo } from "@/lib/data";

const iconMap = { Mail, Linkedin, Github } as const;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
              {contactContent.subtitle}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 gradient-text"
            >
              {contactContent.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-gray-400 mt-4 px-4"
            >
              {contactContent.description}
            </motion.p>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass p-6 sm:p-8 md:p-12 rounded-3xl glow-blue relative overflow-hidden"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-3xl animate-pulse" />

            <div className="relative z-10 space-y-10">
              {/* Email CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {contactContent.ctaTitle}
                </h3>
                <p className="text-gray-400 mb-8">
                  {contactContent.ctaDescription}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="glass glow-purple hover:glow-blue transition-all duration-300 text-sm sm:text-lg px-6 sm:px-10 py-5 sm:py-7 bg-gradient-to-r from-primary to-secondary border-0"
                >
                  <a href={personalInfo.email}>
                    <Send className="mr-2 h-5 w-5" />
                    {contactContent.ctaText}
                  </a>
                </Button>
              </motion.div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="text-gray-500 text-sm">or connect via</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-3 sm:gap-4"
              >
                {socialLinks.map((social, index) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target={social.name !== "Email" ? "_blank" : undefined}
                      rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass p-3 sm:p-4 md:p-6 rounded-xl text-center group cursor-pointer border border-white/10 hover:border-primary/50 transition-all duration-300"
                    >
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 glow-blue`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-white" />
                      </div>
                      <h4 className="text-white text-xs sm:text-sm md:text-base font-semibold group-hover:gradient-text transition-all duration-300">
                        {social.name}
                      </h4>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Download Resume */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2 }}
                className="text-center pt-6"
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 border-white/20 hover:border-secondary/50 hover:bg-secondary/10 backdrop-blur-lg transition-all duration-300"
                >
                  <a href={personalInfo.resumeUrl} download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.4 }}
            className="text-center mt-16 text-gray-500"
          >
            <p className="text-sm" dangerouslySetInnerHTML={{ __html: contactContent.footerText }} />
            <p className="text-xs mt-2">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}