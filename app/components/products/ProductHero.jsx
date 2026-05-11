"use client";

import { motion } from "framer-motion";

const ProductHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden pt-20">
      {/* faint grid texture */}
      <div className="absolute inset-0 bg-grid-light opacity-40 pointer-events-none z-0" />
      {/* gold radial glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0) 65%)",
        }}
      />

      {/* GIANT WORDMARK */}
      <div className="relative z-10 px-2 sm:px-4 md:px-8 pt-2 md:pt-4 pointer-events-none overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-extrabold tracking-tighter leading-[0.9] uppercase text-white text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[10.5vw] text-center mix-blend-screen whitespace-nowrap"
        >
          BRIECH&nbsp;FLEET
        </motion.h1>
      </div>

      {/* BOTTOM ROW */}
      <div className="relative z-10 mt-auto px-4 md:px-8 pb-10 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <motion.div
            className="md:col-span-2 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="eyebrow text-gold mb-3">// FLEET_DEPLOYMENT</div>
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.05] uppercase">
              Cutting-edge unmanned systems for{" "}
              <span className="text-gold">defence, security,</span> and
              commercial dominance.
            </p>
            <p className="mt-5 text-white/80 max-w-xl text-base leading-relaxed">
              Five purpose-built airframes spanning combat strike, hybrid
              VTOL reconnaissance, and rapid-deploy tactical ISR — engineered
              and assembled at our Kuje facility.
            </p>
          </motion.div>

          <motion.div
            className="hud-list text-right text-white/80 self-end justify-self-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <div>
              ROSTER = <span className="text-gold">5_AIRFRAMES</span>
            </div>
            <div>
              CLASSES = <span className="text-gold">STRIKE+ISR</span>
            </div>
            <div>
              ORIGIN = <span className="text-gold">KUJE_ABUJA</span>
            </div>
            <div>
              READINESS = <span className="text-gold">DEPLOYABLE</span>
            </div>
            <div className="mt-3">
              ACCESS = <span className="text-gold">SPECS_GRANTED</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
