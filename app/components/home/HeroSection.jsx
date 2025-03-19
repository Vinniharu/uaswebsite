"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  // Pre-defined particle positions to avoid hydration mismatches
  const particlePositions = [
    { left: 20, top: 30 },
    { left: 85, top: 15 },
    { left: 40, top: 80 },
    { left: 10, top: 60 },
    { left: 70, top: 45 },
    { left: 15, top: 10 },
    { left: 50, top: 35 },
    { left: 8, top: 90 },
    { left: 35, top: 50 },
    { left: 55, top: 85 },
    { left: 25, top: 25 },
    { left: 90, top: 12 },
    { left: 42, top: 75 },
    { left: 75, top: 70 },
    { left: 5, top: 55 },
  ];

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-white to-gray-light">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        {/* We'll use a pattern background instead of an image to avoid 404 errors */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, #e0e0e0 25%, transparent 25%, transparent 75%, #e0e0e0 75%, #e0e0e0), 
                              linear-gradient(45deg, #e0e0e0 25%, transparent 25%, transparent 75%, #e0e0e0 75%, #e0e0e0)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        ></div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent"></div>

        {/* Gold accent lines */}
        <motion.div
          className="absolute left-0 top-1/3 w-full h-[2px] bg-gold/50"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute right-0 top-2/3 w-full h-[2px] bg-blue-accent/50"
          initial={{ width: 0, opacity: 0, x: "100%" }}
          animate={{ width: "100%", opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        ></motion.div>
      </div>

      {/* Animated tech pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 35%, var(--gold) 0.5px, transparent 1px),
            radial-gradient(circle at 75% 44%, var(--blue-accent) 0.5px, transparent 1px),
            radial-gradient(circle at 46% 60%, var(--gold) 0.5px, transparent 1px)`,
            backgroundSize: "120px 120px",
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 2 === 0 ? "bg-gold/70" : "bg-blue-accent/70"
            }`}
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Flying drone illustration */}
      <motion.div
        className="absolute right-[10%] top-[30%] w-32 h-32 opacity-80"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.8 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="relative">
          <div className="absolute w-20 h-6 bg-gold/20 rounded-full transform rotate-45 blur-sm"></div>
          <div className="absolute w-16 h-2 bg-gold/30 rounded-full transform -rotate-45 blur-sm left-8 top-3"></div>
          <motion.div
            className="absolute w-8 h-3 bg-gold rounded-lg left-6 top-2 z-10"
            animate={{ rotateZ: [0, 5, 0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute w-10 h-1 bg-blue-accent rounded-full left-10 top-2 transform rotate-45"
            animate={{ width: [10, 15, 10] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute w-10 h-1 bg-blue-accent rounded-full left-1 top-2 transform -rotate-45"
            animate={{ width: [10, 15, 10] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-between">
        <div className="max-w-3xl">
          <motion.div
            className="inline-block bg-white/60 backdrop-blur-sm p-2 mb-4 rounded-sm shadow-soft"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Next Generation
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Africa's Premier{" "}
            <span className="text-gold">Unmanned Aerial Systems</span>{" "}
            Manufacturer
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-black/80 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Delivering cutting-edge drone technology for commercial, security,
            and defense operations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/products">
              <button className="px-8 py-4 bg-gold text-white font-medium rounded hover:shadow-gold transition-all duration-300 transform hover:scale-105 flex items-center group">
                Explore Our Solutions
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 bg-white border border-gold text-gold font-medium rounded hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center group">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
        <div className="hidden md:flex justify-center items-center w-1/2">
          <motion.img
            src="/icon.webp"
            alt="Briech UAS"
            width={220}
            height={220}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              y: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              rotate: {
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            className="drop-shadow-xl"
          />
        </div>
      </div>

      {/* Scrolldown indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-black/50 text-sm mb-2">Scroll Down</span>
        <motion.div
          className="w-px h-8 bg-gold/50"
          animate={{
            height: [20, 40, 20],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
