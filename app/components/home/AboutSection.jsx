"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        {/* SECTION HEADER */}
        <div className="mb-12">
          <div className="eyebrow text-black/60 mb-3">// FORWARD_OPERATING_VIEW</div>
          <h2 className="bracket-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Our Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* IMAGE PANEL */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[420px] md:h-[520px] w-full bg-neutral-100 overflow-hidden border border-black/10">
              <Image
                src="/img/heroimg.JPG"
                alt="Briech UAS"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* corner brackets */}
              <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white" />
              <div className="absolute top-3 right-4 hud-list text-white/85">
                <div>SECTOR_07 = ACTIVE</div>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="eyebrow text-black/60 mb-3">// WHO_WE_ARE</div>
            <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-6">
              About Briech UAS
            </h3>

            <p className="text-black/80 mb-5 leading-relaxed text-lg">
              Briech UAS is a leading manufacturer of unmanned aerial vehicles
              registered in Nigeria in 2021. We are committed to becoming a
              world-leading robotic aerial surveillance company, building
              Africa&apos;s biggest drone manufacturing facility in Kuje,
              Abuja.
            </p>

            <p className="text-black/65 mb-8 leading-relaxed">
              Our customer-centric approach focuses on solving individual
              customer needs and adjusting our UAS designs to critical mission
              particularities.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-black/15 font-mono-tactical">
              <Stat label="Established" value="2021" />
              <Stat label="Models" value="5+" />
              <Stat label="Local" value="100%" />
              <Stat label="Support" value="24/7" />
            </div>

            <div className="mt-10">
              <Link href="/about" className="btn-bracket btn-bracket-dark">
                ACCESS FULL OBJECTIVE
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <div className="text-3xl font-extrabold text-black mb-1">{value}</div>
    <div className="text-[10px] text-black/55 uppercase tracking-[0.18em]">
      {label}
    </div>
  </div>
);

export default AboutSection;
