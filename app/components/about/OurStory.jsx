"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const OurStory = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden pt-20">
      {/* full-bleed image background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/homeabout.JPG"
          alt="Briech UAS facility"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>
      {/* grid overlay */}
      <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none z-0" />

      {/* GIANT WORDMARK */}
      <div className="relative z-10 px-2 sm:px-4 md:px-8 pt-2 md:pt-4 pointer-events-none overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-extrabold tracking-tighter leading-[0.9] uppercase text-white text-[13.5vw] sm:text-[14vw] md:text-[12vw] lg:text-[10.5vw] text-center mix-blend-screen whitespace-nowrap"
        >
          ABOUT&nbsp;BRIECH
        </motion.h1>
      </div>

      {/* BOTTOM ROW — tagline + status readout */}
      <div className="relative z-10 mt-auto px-4 md:px-8 pb-10 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* tagline */}
          <motion.div
            className="md:col-span-2 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="eyebrow text-gold mb-3">// IDENTITY_PROFILE</div>
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.05] uppercase">
              A proudly Nigerian UAS manufacturer{" "}
              <span className="text-gold">forging</span> Africa&apos;s
              autonomous aerial future.
            </p>
            <p className="mt-5 text-white/80 max-w-xl text-base leading-relaxed">
              Briech UAS was established in 2021 with a vision to revolutionize
              aerial surveillance and unmanned systems. We are building
              Africa&apos;s biggest drone manufacturing facility in Kuje, Abuja
              — a 10-hectare campus producing the most advanced automation
              technology and unmanned aircraft systems on the continent.
            </p>
          </motion.div>

          {/* status readout */}
          <motion.div
            className="hud-list text-right text-white/80 self-end justify-self-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <div>
              FOUNDED = <span className="text-gold">2021</span>
            </div>
            <div>
              HQ = <span className="text-gold">KUJE_ABUJA</span>
            </div>
            <div>
              CHARTER = <span className="text-gold">AERIAL_DOMINANCE</span>
            </div>
            <div>
              STATUS = <span className="text-gold">OPERATIONAL</span>
            </div>
            <div className="mt-3">
              REACH = <span className="text-gold">AFRICA_AND_BEYOND</span>
            </div>
          </motion.div>
        </div>

        {/* stats row */}
        <motion.div
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/15 font-mono-tactical"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <Stat label="Established" value="2021" />
          <Stat label="Hectares" value="10+" />
          <Stat label="Discipline" value="UAV" />
          <Stat label="Coverage" value="AFRICA+" />
        </motion.div>
      </div>
    </section>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <div className="text-2xl md:text-3xl font-extrabold text-gold mb-1">{value}</div>
    <div className="text-[10px] text-white/55 uppercase tracking-[0.18em]">
      {label}
    </div>
  </div>
);

export default OurStory;
