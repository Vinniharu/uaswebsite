"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Drone from "../3d/Drone";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

const ProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      id: "damisa",
      name: "Damisa Combat Drone",
      description:
        "Next-generation unmanned aerial system for precision strikes",
      specs: ["Range: 150km", "Payload: 8kg", "Speed: 120km/h"],
      color: "#D4AF37",
      image: "/damisa.webp",
      modelPath: "/models/damisa.obj",
    },
    {
      id: "argini",
      name: "Argini Reconnaissance Drone",
      description: "Hybrid VTOL UAV for long-endurance intelligence missions",
      specs: ["Range: 200km", "Endurance: 16hrs", "Silent operation"],
      color: "#D4AF37",
      image: "/argini.webp",
      modelPath: "",
    },
    {
      id: "arsenio",
      name: "Arsenio Reconnaissance Drone",
      description: "High-endurance ISR drone with 8-hour flight capability",
      specs: ["Range: 180km", "Ceiling: 6000m", "Advanced sensors"],
      color: "#D4AF37",
      image: "/arsenio.webp",
      modelPath: "/models/arsenio.obj",
    },
    {
      id: "xander",
      name: "Xander Reconnaissance Drone",
      description: "Extended ISR platform with 6-hour endurance",
      specs: ["Range: 120km", "Stealth design", "Multi-spectrum imaging"],
      color: "#D4AF37",
      image: "/xander.webp",
      modelPath: "",
    },
    {
      id: "bfly",
      name: "Bfly Reconnaissance Drone",
      description: "Compact solution for rapid ISR missions",
      specs: ["Range: 80km", "Weight: 2.5kg", "Rapid deployment"],
      color: "#D4AF37",
      image: "/fly.webp",
      modelPath: "/models/bfly.obj",
    },
  ];

  // Auto-rotation through products
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % products.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [products.length]);

  // Variants for animations
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { 
      y: -10, 
      boxShadow: "0 30px 60px rgba(0,0,0,0.12)", 
      transition: { duration: 0.3 } 
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-black text-white">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Glowing accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/30"
            style={{
              width: Math.random() * 8 + 2 + "px",
              height: Math.random() * 8 + 2 + "px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-gold via-yellow-300 to-gold tracking-tight"
            variants={titleVariants}
          >
            Advanced UAV Systems
          </motion.h2>

          <motion.div
            className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6 mb-8"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>

          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            variants={titleVariants}
          >
            Our fleet of cutting-edge unmanned aerial systems combines advanced AI, 
            stealth technology, and precision engineering to redefine modern operations.
          </motion.p>
        </motion.div>

        {/* Featured product with 3D showcase */}
        <div className="mb-24">
          <motion.div 
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* 3D Model Display */}
              <div className="relative h-[400px] lg:h-full">
                <div className="absolute inset-0">
                  <motion.div
                    className="w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Canvas
                      camera={{ position: [0, 0, 8], fov: 40 }}
                      dpr={[1, 2]}
                      gl={{ antialias: true, alpha: true }}
                      style={{ background: "transparent" }}
                    >
                      <color attach="background" args={['#000']} />
                      <ambientLight intensity={0.4} />
                      <spotLight 
                        position={[10, 10, 10]} 
                        angle={0.15} 
                        penumbra={1} 
                        intensity={2} 
                        color="#FFFFFF" 
                      />
                      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6FBBFF" />
                      <Drone path={products[activeIndex].modelPath || "/models/damisa.obj"} />
                      <Environment preset="city" />
                      <OrbitControls
                        enableDamping
                        dampingFactor={0.05}
                        rotateSpeed={0.3}
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.8}
                      />
                    </Canvas>
                  </motion.div>
                </div>
                
                {/* Overlay tech details */}
                <div className="absolute top-6 left-6 rounded-lg px-3 py-1.5 bg-black/30 backdrop-blur-sm border border-gold/30 text-xs text-gold font-mono">
                  SYSTEM: ACTIVE
                </div>
                <div className="absolute bottom-6 left-6 z-10">
                  {products[activeIndex].specs.map((spec, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-center mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                      <div className="text-sm text-gray-300 font-mono">{spec}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  key={products[activeIndex].id}
                >
                  <h3 className="text-sm text-gold uppercase tracking-widest font-medium mb-2">
                    Next-Generation UAV
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {products[activeIndex].name}
                  </h2>
                  <div className="h-[2px] w-16 bg-gold mb-6"></div>
                  <p className="text-gray-300 mb-8">
                    {products[activeIndex].description}
                  </p>
                  <Link href={`/drones/${products[activeIndex].id}`}>
                    <button className="px-6 py-3 bg-gradient-to-r from-yellow-400/80 to-yellow-400/100 text-black font-medium rounded-lg hover:shadow-gold/50 hover:shadow-lg transition-all duration-300 group flex items-center">
                      View Specifications
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Product selector dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((product, idx) => (
              <button
                key={product.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === idx 
                    ? "bg-gold w-8" 
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`View ${product.name}`}
              />
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {products.map((product, index) => (
            <Link href={`/drones/${product.id}`} key={product.id}>
              <motion.div
                className="relative group rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-5 overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 animate-pulse-slow"></div>
                </div>

                {/* Top illumination */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black border border-gold/20">
                    <motion.div
                      animate={{
                        rotate: hoveredProduct === product.id ? 360 : 0,
                      }}
                      transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                    >
                      <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3L4 9V21H20V9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 21V15H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {product.description}
                  </p>
                  <motion.div
                    className="h-[1px] bg-gradient-to-r from-gold via-gold/50 to-transparent"
                    initial={{ width: 20 }}
                    whileInView={{ width: 60 }}
                    whileHover={{ width: 100 }}
                  ></motion.div>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4">
                    <motion.div
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 bg-black/50"
                      animate={{
                        scale: hoveredProduct === product.id ? 1.1 : 1,
                      }}
                    >
                      <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Call To Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/products">
            <button className="px-10 py-4 bg-transparent border border-gold text-gold font-medium rounded-lg hover:bg-gold hover:text-black transition-all duration-300 group flex items-center mx-auto backdrop-blur-sm">
              View Complete Fleet
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(100, 116, 139, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(100, 116, 139, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;
