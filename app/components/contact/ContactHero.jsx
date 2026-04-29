"use client";

import { motion } from "framer-motion";

const ContactHero = () => {
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
          className="font-extrabold tracking-tighter leading-[0.9] uppercase text-white text-[13.5vw] sm:text-[14vw] md:text-[12vw] lg:text-[10.5vw] text-center mix-blend-screen whitespace-nowrap"
        >
          GET&nbsp;IN&nbsp;TOUCH
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
            <div className="eyebrow text-gold mb-3">// TRANSMIT_MESSAGE</div>
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.05] uppercase">
              Engage with{" "}
              <span className="text-gold">Briech command</span> for inquiries,
              partnerships, and tailored UAS solutions.
            </p>
            <p className="mt-5 text-white/80 max-w-xl text-base leading-relaxed">
              Ready to elevate your operations with cutting-edge drone
              technology? Reach our team for inquiries, customized solutions,
              or to schedule a consultation.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:Info@briechuas.com"
                className="btn-bracket btn-bracket-gold"
              >
                TRANSMIT MESSAGE
              </a>
              <a
                href="tel:+2348032027605"
                className="btn-bracket btn-bracket-light"
              >
                CALL COMMAND
              </a>
            </div>
          </motion.div>

          {/* status readout */}
          <motion.div
            className="hud-list text-right text-white/80 self-end justify-self-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <div>
              CHANNEL = <span className="text-gold">OPEN</span>
            </div>
            <div>
              RESPONSE_TIME = <span className="text-gold">24H</span>
            </div>
            <div>
              CHARTER = <span className="text-gold">CIVILIAN+DEFENCE</span>
            </div>
            <div>
              CLEARANCE = <span className="text-gold">REQUEST_GRANTED</span>
            </div>
            <div className="mt-3">
              SECTOR = <span className="text-gold">9.0820°N_7.2476°E</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
