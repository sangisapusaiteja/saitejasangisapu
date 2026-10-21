"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        setTimeout(onComplete, 500); // Wait for exit animation
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            >
              <motion.div
                animate={{
                  y: ["0%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
          </div>

          {/* Glowing Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-[100px]"
          />

          {/* Main Logo Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* ST Logo with Cyber Effects */}
            <div className="relative">
              {/* Outer Glow Ring */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                className="absolute inset-0 -m-8"
              >
                <div className="w-full h-full rounded-full border-2 border-primary/30 animate-pulse" />
                <div className="absolute inset-0 w-full h-full rounded-full border border-secondary/20 blur-sm" />
              </motion.div>

              {/* Rotating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * 45}deg) translateY(-60px)`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary glow-blue" />
                </motion.div>
              ))}

              {/* Main ST Logo */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="relative w-32 h-32 flex items-center justify-center"
              >
                {/* Background Glass Effect */}
                <div className="absolute inset-0 glass rounded-2xl glow-purple" />

                {/* Animated Background Gradient */}
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)",
                      "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-2xl"
                />

                {/* ST Text with Multiple Layers */}
                <div className="relative z-10">
                  {/* Glitch Effect Background */}
                  <motion.div
                    animate={{
                      x: [0, -2, 2, 0],
                      opacity: [0, 0.5, 0.5, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="absolute inset-0 text-6xl font-black text-primary blur-sm"
                  >
                    ST
                  </motion.div>

                  {/* Main Text */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="text-6xl font-black gradient-text relative z-10"
                    style={{
                      textShadow:
                        "0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)",
                    }}
                  >
                    ST
                  </motion.h1>

                  {/* Reflection */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 0.6 }}
                    className="absolute top-full left-0 right-0 text-6xl font-black gradient-text opacity-20 blur-sm"
                    style={{
                      transform: "scaleY(-1)",
                      maskImage:
                        "linear-gradient(to bottom, transparent, black)",
                    }}
                  >
                    ST
                  </motion.div>
                </div>

                {/* Corner Accents */}
                {[
                  { position: "top-0 left-0", border: "border-l-2 border-t-2", radius: "rounded-tl-lg" },
                  { position: "top-0 right-0", border: "border-r-2 border-t-2", radius: "rounded-tr-lg" },
                  { position: "bottom-0 left-0", border: "border-l-2 border-b-2", radius: "rounded-bl-lg" },
                  { position: "bottom-0 right-0", border: "border-r-2 border-b-2", radius: "rounded-br-lg" },
                ].map(({ position, border, radius }, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                    className={`absolute ${position} w-6 h-6 -m-2`}
                  >
                    <div className={`w-full h-full ${border} border-primary ${radius}`} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col items-center gap-4"
            >
              <p className="text-sm text-gray-400 font-mono tracking-wider">
                INITIALIZING PORTFOLIO
              </p>

              {/* Loading Bar */}
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="h-full w-1/2 bg-gradient-to-r from-primary via-secondary to-accent"
                  style={{
                    boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
                  }}
                />
              </div>

              {/* Percentage Counter */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs font-mono gradient-text font-bold"
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  {Array.from("100%").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.p>
            </motion.div>
          </div>

          {/* Scanline Effect */}
          <motion.div
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}