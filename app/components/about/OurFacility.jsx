"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const OurFacility = () => {
  const stats = [
    { value: "100K", label: "Square Meters" },
    { value: "100M", label: "Share Capital" },
    { value: "$17.6M", label: "Capital Employed" },
    { value: "700M", label: "Runway Length" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        <div className="mb-12">
          <div className="eyebrow text-black/60 mb-3">// FORWARD_OPERATING_BASE</div>
          <h2 className="bracket-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Our Facility
          </h2>
          <p className="mt-6 text-black/75 max-w-2xl leading-relaxed">
            We are building Africa&apos;s biggest drone manufacturing facility
            in Kuje, Abuja, Nigeria — a future-ready campus engineered to
            support the most advanced automation technology and unmanned
            aircraft systems.
          </p>
        </div>

        {/* stat strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 border border-black/15 font-mono-tactical mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`p-6 md:p-8 ${
                i < stats.length - 1 ? "border-b md:border-b-0" : ""
              } ${i % 2 === 0 ? "md:border-r border-r" : ""} ${
                i < 2 ? "border-b md:border-b-0" : ""
              } ${i === 2 ? "md:border-r" : ""} border-black/15`}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] text-black/55 uppercase tracking-[0.18em]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* banner image with HUD overlay */}
        <motion.div
          className="relative h-[420px] md:h-[560px] w-full overflow-hidden border border-black/15 bg-neutral-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/img/damisa3.jpg"
            alt="Briech UAS facility"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* corner brackets */}
          <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-white" />
          <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-white" />
          <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-white" />
          <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-white" />

          {/* HUD readout top-right */}
          <div className="absolute top-6 right-6 hud-list text-white/85 text-right">
            <div>
              LOCATION = <span className="text-gold">KUJE_ABUJA</span>
            </div>
            <div>
              RUNWAY = <span className="text-gold">700M</span>
            </div>
            <div>
              CAPITAL = <span className="text-gold">17.6M_USD</span>
            </div>
            <div>
              LAND = <span className="text-gold">100K_SQM</span>
            </div>
            <div>
              HANGAR = <span className="text-gold">300_SQM</span>
            </div>
          </div>

          {/* caption */}
          <div className="absolute bottom-6 left-6 right-6 max-w-2xl">
            <div className="eyebrow text-gold mb-2">// INFRASTRUCTURE_BRIEF</div>
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white mb-2">
              Future-Ready Infrastructure
            </h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-xl">
              Three factories, a 300 sqm hangar, and a 700-metre runway — set
              to deliver continental-scale UAS manufacturing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurFacility;
