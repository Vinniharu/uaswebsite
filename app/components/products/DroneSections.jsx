"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const DroneSections = ({ drone }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [drone.image1, drone.image2, drone.image3];

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Alternate image / content order
  const reverse = drone.id % 2 === 0;
  const slug = drone.name.toLowerCase();

  return (
    <section className="py-16 md:py-24 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        {/* section header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="eyebrow text-black/60 mb-2">
              // SYSTEM_{String(drone.id).padStart(3, "0")} ·{" "}
              <span className="text-gold">{drone.type.toUpperCase()}</span>
            </div>
            <h2 className="bracket-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
              {drone.name}
            </h2>
          </div>
          <span className="status-dot hidden md:inline-block" />
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch ${reverse ? "" : ""
            }`}
        >
          {/* IMAGE PANEL */}
          <motion.div
            className={`lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* image header */}
            <div className="flex items-center justify-between px-5 py-3 border-x border-t border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
              <span className="text-black/55">// VISUAL_FEED = ACTIVE</span>
              <span className="text-gold">
                FRAME_{String(currentImage + 1).padStart(2, "0")}/
                {String(images.length).padStart(2, "0")}
              </span>
            </div>

            <div className="relative h-[360px] md:h-[480px] w-full bg-grid border-x border-black/15 overflow-hidden">
              <Image
                src={images[currentImage]}
                alt={`${drone.name} ${drone.title}`}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

              {/* corner brackets */}
              <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white" />

              {/* nav arrows */}
              <button
                onClick={prevImage}
                aria-label="Previous frame"
                className="absolute z-50 left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/70 hover:bg-gold hover:text-black text-white flex items-center justify-center font-mono-tactical text-sm transition-colors"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                aria-label="Next frame"
                className="absolute z-50 right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/70 hover:bg-gold hover:text-black text-white flex items-center justify-center font-mono-tactical text-sm transition-colors"
              >
                ›
              </button>

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="btn-bracket btn-bracket-light opacity-0 group-hover:opacity-100 transition-opacity">
                  ACCESS SPECS
                </span>
              </div>
            </div>

            {/* image footer with indicators */}
            <div className="flex items-center justify-between px-5 py-3 border border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
              <div className="flex items-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentImage(index);
                    }}
                    aria-label={`Frame ${index + 1}`}
                    className={`h-1.5 transition-all ${index === currentImage
                        ? "w-8 bg-gold"
                        : "w-4 bg-black/25 hover:bg-black/50"
                      }`}
                  />
                ))}
              </div>
              <span className="text-black/55">{drone.title.toUpperCase()}</span>
            </div>
          </motion.div>

          {/* CONTENT PANEL */}
          <motion.div
            className={`lg:col-span-5 ${reverse ? "lg:order-1" : "lg:order-2"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="border border-black/15 h-full flex flex-col">
              {/* role row */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
                <span className="text-black/55">// ROLE_PROFILE</span>
                <span className="text-gold">{drone.title.toUpperCase()}</span>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <p className="text-gold font-mono-tactical text-xs uppercase tracking-[0.15em] mb-4 leading-relaxed">
                  {drone.description}
                </p>

                <p className="text-black/80 leading-relaxed text-sm md:text-base mb-6">
                  {drone.content}
                </p>

                <div className="border-t border-black/15 pt-5 mt-auto">
                  <div className="eyebrow text-black/55 mb-3">
                    // KEY_FEATURES
                  </div>
                  <ul className="space-y-2 mb-6">
                    {drone.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-black/75 leading-relaxed"
                      >
                        <span className="text-gold font-mono-tactical mt-[2px] shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/drones/${slug}`}
                    className="btn-bracket btn-bracket-dark"
                  >
                    ACCESS SPECS
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DroneSections;
