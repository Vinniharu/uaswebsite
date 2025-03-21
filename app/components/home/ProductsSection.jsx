"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Drone from "../3d/Drone";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: "damisa",
      name: "Damisa Combat Drone",
      description:
        "Next-generation unmanned aerial system for precision strikes",
      color: "#D4AF37",
      image: "/damisa.webp",
    },
    {
      id: "argini",
      name: "Argini Reconnaissance Drone",
      description: "Hybrid VTOL UAV for long-endurance intelligence missions",
      color: "#D4AF37",
      image: "/argini.webp",
    },
    {
      id: "arsenio",
      name: "Arsenio Reconnaissance Drone",
      description: "High-endurance ISR drone with 8-hour flight capability",
      color: "#D4AF37",
      image: "/arsenio.webp",
    },
    {
      id: "xander",
      name: "Xander Reconnaissance Drone",
      description: "Extended ISR platform with 6-hour endurance",
      color: "#D4AF37",
      image: "/xander.webp",
    },
    {
      id: "bfly",
      name: "Bfly Reconnaissance Drone",
      description: "Compact solution for rapid ISR missions",
      color: "#D4AF37",
      image: "/fly.webp",
    },
  ];

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
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "80px", transition: { duration: 1 } },
  };

  // Generate a unique pattern for each product
  const getProductPattern = (index) => {
    const patterns = [
      // Angular pattern
      `repeating-linear-gradient(45deg, var(--gray-light) 0, var(--gray-light) 5px, var(--white) 5px, var(--white) 10px)`,
      // Circular pattern
      `radial-gradient(circle at center, var(--white) 0, var(--gray-light) 100%)`,
      // Horizontal stripes
      `repeating-linear-gradient(0deg, var(--gray-light) 0, var(--gray-light) 4px, var(--white) 4px, var(--white) 8px)`,
      // Diagonal pattern
      `repeating-linear-gradient(135deg, var(--gray-light) 0, var(--gray-light) 10px, var(--white) 10px, var(--white) 20px)`,
      // Dotted pattern
      `radial-gradient(var(--gray-light) 1px, var(--white) 1px)`,
    ];

    return patterns[index % patterns.length];
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-light">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[#f8f8f8] skew-y-6 scale-125 -z-[1]"></div>

      {/* Line decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gold/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-blue-accent/20"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold inline-block text-black"
            variants={titleVariants}
          >
            Product <span className="text-gold">Highlights</span>
          </motion.h2>

          <motion.div
            className="h-1 bg-gold mx-auto mt-4 mb-8"
            variants={lineVariants}
          ></motion.div>

          <motion.p
            className="text-black/70 max-w-2xl mx-auto"
            variants={titleVariants}
          >
            Our fleet of advanced unmanned aerial systems is designed to meet
            the diverse needs of modern operations, from tactical reconnaissance
            to precision engagement.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {products.map((product, index) => (
            <Link href={`/drones/${product.id}`} key={product.id}>
              <motion.div
                className="relative group"
                variants={cardVariants}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative h-[300px] w-full overflow-hidden glass-effect rounded-lg shadow-soft">
                  {/* Product pattern background */}
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
                    <div className="w-full h-full bg-white">
                      {/* Generated pattern background */}
                      <div
                        className="absolute inset-0 opacity-50"
                        style={{
                          background: getProductPattern(index),
                          backgroundSize:
                            index % 2 === 0 ? "10px 10px" : "20px 20px",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Gold accent light */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 opacity-25 bg-gradient-to-t from-transparent to-gold/20"
                      animate={{
                        opacity: hoveredProduct === product.id ? 0.4 : 0.2,
                      }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>

                  {/* Product image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-full h-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <Canvas
                        camera={{ position: [0, 0, 8], fov: 40 }}
                        dpr={[1, 2]}
                        gl={{ antialias: true, alpha: true }}
                        style={{ background: "transparent" }}
                      >
                        <ambientLight intensity={0.8} />
                        <directionalLight
                          position={[10, 10, 5]}
                          intensity={1}
                        />
                        <pointLight
                          position={[-10, -10, -10]}
                          intensity={0.5}
                        />
                        <Drone path="/drone3d.obj" />
                        <OrbitControls
                          enableDamping
                          dampingFactor={0.05}
                          rotateSpeed={0.3}
                          enableZoom={false}
                          enablePan={false}
                          autoRotate
                          autoRotateSpeed={0.5}
                        />
                      </Canvas>
                    </motion.div>
                  </div>

                  {/* Drone silhouette icon */}
                  <div className="absolute top-10 right-10">
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center"
                      animate={{
                        y: hoveredProduct === product.id ? [-5, 5, -5] : 0,
                        rotateZ:
                          hoveredProduct === product.id ? [-3, 3, -3] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <div className="w-10 h-3 bg-gold rounded-lg"></div>
                      <div className="absolute w-3 h-10 bg-blue-accent/50 rounded-lg transform rotate-90"></div>
                    </motion.div>
                  </div>

                  {/* Border */}
                  <div className="absolute inset-0 border border-gold/20 rounded-lg group-hover:border-gold/50 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-black/70 text-sm mb-4">
                      {product.description}
                    </p>
                    <motion.div
                      className="h-[2px] bg-gold"
                      initial={{ width: 40 }}
                      whileHover={{ width: 100 }}
                      animate={{
                        width: hoveredProduct === product.id ? 100 : 40,
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/products">
            <button className="px-8 py-3 bg-gold text-white font-medium rounded hover:shadow-gold transition-all duration-300 group flex items-center mx-auto">
              View All Products
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
    </section>
  );
};

export default ProductsSection;
