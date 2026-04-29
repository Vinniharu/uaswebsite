"use client";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Link from "next/link";
import Drone from "../3d/Drone";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden pt-16">
      {/* faint grid texture */}
      <div className="absolute inset-0 bg-grid-light opacity-40 pointer-events-none z-0" />
      {/* gold radial glow behind drone (centered) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0) 65%)",
        }}
      />

      {/* FULL-BLEED 3D DRONE BACKGROUND — stationary */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <Canvas
            camera={{ position: [0, 0.4, 4], fov: 40 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1.4} />
            <directionalLight position={[-10, 5, -5]} intensity={0.6} />
            <pointLight position={[0, -5, 0]} intensity={0.5} color="#D4AF37" />
            <group scale={0.4} rotation={[0.05, 0, 0]}>
              <Drone path="/models/damisa.obj" />
            </group>
          </Canvas>
        </motion.div>
      </div>

      {/* GIANT WORDMARK */}
      <div className="relative z-10 px-2 sm:px-4 md:px-8 pt-2 md:pt-4 pointer-events-none overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-extrabold tracking-tighter leading-[0.9] uppercase text-white text-[13.5vw] sm:text-[14vw] md:text-[12vw] lg:text-[10.5vw] text-center mix-blend-screen whitespace-nowrap"
        >
          BRIECH&nbsp;UAS
        </motion.h1>
      </div>

      {/* BOTTOM ROW — tagline left, status readout right */}
      <div className="relative z-10 mt-auto px-4 md:px-8 pb-10 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* tagline */}
          <motion.div
            className="md:col-span-2 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="eyebrow text-gold mb-3">
              // NEXT_GENERATION_SYSTEMS
            </div>
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.05] uppercase">
              Forging Africa&apos;s next generation of{" "}
              <span className="text-gold">autonomous aerial</span> dominance.
            </p>
            <p className="mt-5 text-white/70 max-w-xl text-base leading-relaxed">
              Africa&apos;s premier UAS manufacturer delivering cutting-edge
              drone technology for commercial, security, and defense
              operations.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/products" className="btn-bracket btn-bracket-gold">
                EXPLORE SOLUTIONS
              </Link>
              <Link href="/contact" className="btn-bracket btn-bracket-light">
                CONTACT COMMAND
              </Link>
            </div>
          </motion.div>

          {/* status readout */}
          <motion.div
            className="hud-list text-right text-white/75 self-end justify-self-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <div>
              PAGE = <span className="text-gold">LOADED</span>
            </div>
            <div>
              UI_PROTOCOLS = <span className="text-gold">ONLINE</span>
            </div>
            <div>
              AUTH_CHECK = <span className="text-gold">PASSED</span>
            </div>
            <div>
              LIVE_FEED = <span className="text-gold">STANDBY</span>
            </div>
            <div className="mt-3">
              USER_STATUS ={" "}
              <span className="text-gold">COMMAND_GRANTED</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
