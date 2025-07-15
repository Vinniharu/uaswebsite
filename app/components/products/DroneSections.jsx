"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const DroneSections = ({ drone, reverse = false }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [drone.image1, drone.image2, drone.image3];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${drone.id % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image section */}
          <motion.div
            className="lg:w-1/2 relative hidden lg:block"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link href={`/drones/${drone.name.toLowerCase()}`}>
              <div className="relative h-[450px] w-full group cursor-pointer">
                <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-soft">
                  <div className="glass-effect w-full h-full rounded-lg relative flex items-center justify-center">
                    {/* Main image display */}
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                      <img 
                        src={images[currentImage]} 
                        alt={`${drone.name} ${drone.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                      
                      {/* Navigation arrows */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          prevImage();
                        }}
                        className="z-30 absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          nextImage();
                        }}
                        className="z-30 absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentImage(index);
                          }}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentImage 
                              ? 'bg-gold' 
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Gold overlay patterns */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(var(--gold) 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                        opacity: 0.3,
                      }}
                    ></div>

                    {/* Gold diagonal lines */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: `linear-gradient(45deg, var(--gold) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                        opacity: 0.2,
                      }}
                    ></div>

                    {/* View specs overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-4 py-2 bg-gold text-black font-medium rounded">
                        View Specifications
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold opacity-30 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-blue-accent opacity-30 rounded-lg"></div>

                {/* Gold accent */}
                <motion.div
                  className={`absolute top-1/2 ${reverse ? '-left-3' : '-right-3'} h-[2px] bg-gold`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "25%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </Link>
          </motion.div>

          {/* Content section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                {drone.name} <span className="text-gold">{drone.title}</span>
              </h2>
              <div className="px-3 py-1 bg-gold/10 rounded-full text-gold text-xs font-semibold">
                {drone.type}
              </div>
            </div>

            <p className="text-blue-accent font-medium mb-6 italic">
              {drone.description}
            </p>

            <div className="w-20 h-1 bg-gold mb-6"></div>

            <motion.p
              className="text-black/80 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {drone.content}
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-black">Key Features:</h3>
              <ul className="space-y-3">
                {drone.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 text-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/drones/${drone.name.toLowerCase()}`}
                className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors group"
              >
                <span>View Specifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DroneSections;