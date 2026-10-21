"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, personalInfo } from "@/lib/data";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "md:bg-[#0a0a0a]/80 md:backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("#")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-black gradient-text cursor-pointer"
            >
              {personalInfo.logo}
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-white font-medium transition-colors duration-300 relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2.5 rounded-xl bg-[#1a1a2e] border border-white/10 group overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative z-10"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.div>

              {/* Pulse animation when menu is open */}
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl border-2 border-primary"
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            {/* Enhanced Backdrop with animated gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              style={{
                background: 'radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.15) 0%, rgba(10, 10, 10, 0.95) 50%), radial-gradient(ellipse at bottom left, rgba(168, 85, 247, 0.15) 0%, rgba(10, 10, 10, 0.95) 50%)'
              }}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm glass border-l-2 border-primary/30 p-8 overflow-y-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(20, 20, 30, 0.95) 100%)'
              }}
            >
              {/* Decorative gradient orbs */}
              <div className="absolute top-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-40 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />

              {/* Header Section */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative z-10 mb-12 mt-8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-8 bg-linear-to-b from-primary to-secondary rounded-full" />
                  <h2 className="text-xl font-bold gradient-text">Navigation</h2>
                </div>
                <p className="text-xs text-gray-500 ml-4">Explore my portfolio</p>
              </motion.div>

              {/* Navigation Items */}
              <div className="flex flex-col gap-3 relative z-10">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.5,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative text-left cursor-pointer"
                  >
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                    {/* Content */}
                    <div className="relative flex items-center gap-4 p-4 rounded-xl">
                      {/* Index number */}
                      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xs font-bold gradient-text">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Item name */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-300 group-hover:text-white group-hover:gradient-text transition-all duration-300">
                          {item.name}
                        </h3>
                      </div>

                      {/* Arrow indicator */}
                      <motion.div
                        initial={{ x: -5, opacity: 0 }}
                        animate={{ x: 0, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        className="text-primary"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Bottom border gradient */}
                    <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                  </motion.button>
                ))}
              </div>

              {/* Footer decoration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative z-10 mt-auto pt-8"
              >
                <div className="glass p-4 rounded-xl border border-primary/20">
                  <p className="text-xs text-gray-500 text-center">
                    © 2026 Portfolio
                  </p>
                  <div className="flex justify-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}