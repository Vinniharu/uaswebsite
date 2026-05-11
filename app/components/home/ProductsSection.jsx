"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const ProductsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      id: "damisa",
      name: "Damisa Combat Drone",
      shortName: "Damisa",
      role: "Combat / Strike UAS",
      description:
        "Next-generation unmanned aerial system for precision strikes",
      specs: ["Range: 150km", "Payload: 8kg", "Speed: 120km/h"],
      image: "/img/damisa1.JPG",
    },
    {
      id: "argini",
      name: "Argini Reconnaissance Drone",
      shortName: "Argini",
      role: "Hybrid VTOL / ISR",
      description: "Hybrid VTOL UAV for long-endurance intelligence missions",
      specs: ["Range: 200km", "Endurance: 16hrs", "Silent operation"],
      image: "/img/argini1.jpg",
    },
    {
      id: "arsenio",
      name: "Arsenio Reconnaissance Drone",
      shortName: "Arsenio",
      role: "Long-Endurance ISR",
      description: "High-endurance ISR drone with 8-hour flight capability",
      specs: ["Range: 180km", "Ceiling: 6000m", "Advanced sensors"],
      image: "/img/arsenio1.JPG",
    },
    {
      id: "xander",
      name: "Xander Reconnaissance Drone",
      shortName: "Xander",
      role: "Stealth ISR",
      description: "Extended ISR platform with 6-hour endurance",
      specs: ["Range: 120km", "Stealth design", "Multi-spectrum imaging"],
      image: "/img/xander1.jpg",
    },
    {
      id: "bfly",
      name: "Bfly Reconnaissance Drone",
      shortName: "Bfly",
      role: "Compact Tactical ISR",
      description: "Compact solution for rapid ISR missions",
      specs: ["Range: 80km", "Weight: 2.5kg", "Rapid deployment"],
      image: "/img/bfly1.jpg",
    },
  ];

  const featured = products.slice(0, 2);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % products.length),
      6000
    );
    return () => clearInterval(id);
  }, [products.length]);

  return (
    <section className="bg-white text-black border-t border-black/10">
      {/* ============ CAPABILITIES ============ */}
      <div className="py-20 md:py-28 px-4 md:px-8">
        <div className="mb-10">
          <div className="eyebrow text-black/60 mb-3">// AUTONOMOUS_INTERCEPTION</div>
          <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Capabilities
          </h2>
          <p className="mt-6 text-black/75 max-w-2xl leading-relaxed">
            Briech UAS combines combat, reconnaissance, and AI-enhanced
            mission systems to extend operational reach, accelerate response
            times, and enhance survivability across diverse mission domains.
          </p>
        </div>

        {/* Command list + visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-black/15">
          {/* command list */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-black/15 font-mono-tactical">
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/15 text-[11px] uppercase tracking-[0.15em]">
              <span>CONTROLS = ACTIVE</span>
              <span className="text-black/40">[+] [-]</span>
            </div>
            <div className="px-4 py-3 border-b border-black/15 text-[11px] uppercase tracking-[0.15em] flex items-center justify-between">
              <span>SELECT_DRONE</span>
              <span className="text-gold">
                — {String(activeIndex + 1).padStart(3, "0")}
              </span>
            </div>
            <ul>
              {products.map((p, i) => (
                <li
                  key={p.id}
                  onClick={() => setActiveIndex(i)}
                  className={`px-4 py-3 flex items-center justify-between cursor-pointer text-[13px] uppercase tracking-[0.12em] border-b border-black/10 transition-colors ${
                    i === activeIndex
                      ? "bg-gold/15 text-black"
                      : "hover:bg-black/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {i === activeIndex && (
                      <span className="status-dot" />
                    )}
                    {p.shortName}
                  </span>
                  <span className="text-black/40">
                    {String(i + 1).padStart(3, "0")}
                  </span>
                </li>
              ))}
            </ul>
            <div className="px-4 py-4 border-t border-black/15">
              <div className="text-[10px] uppercase tracking-[0.15em] text-black/55 mb-2">
                Briefing
              </div>
              <p className="text-[12px] text-black/75 leading-relaxed">
                {products[activeIndex].description}.
              </p>
            </div>
            <div className="px-4 py-4 border-t border-black/15 text-[10px] uppercase tracking-[0.15em] text-gold space-y-1">
              {products[activeIndex].specs.map((s, i) => (
                <div key={i}>{s.replace(":", " =")}</div>
              ))}
            </div>
          </div>

          {/* visualization */}
          <div className="lg:col-span-8 relative bg-grid">
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/15 font-mono-tactical text-[11px] uppercase tracking-[0.15em]">
              <span>// LIVE_FEED = ACTIVE</span>
              <span className="status-dot" />
            </div>
            <div className="relative h-[360px] md:h-[460px] w-full">
              <motion.div
                key={products[activeIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={products[activeIndex].image}
                  alt={products[activeIndex].name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="p-6 md:p-12"
                />
              </motion.div>
              {/* HUD readout — hidden on phones to keep the drone image clean */}
              <div className="hidden md:block absolute top-4 right-4 hud-list text-black/70 text-right">
                <div>
                  ZONE_SCAN_INITIATED →{" "}
                  <span className="text-gold">SECTOR_07</span>
                </div>
                <div>
                  DRONE_01 = <span className="text-gold">DEPLOYED</span>
                </div>
                <div>
                  DRONE_02 = <span className="text-gold">DEPLOYED</span>
                </div>
                <div>
                  DRONE_03 = <span className="text-gold">HOLDING_PATTERN</span>
                </div>
              </div>
              <div className="hidden md:block absolute bottom-4 left-4 hud-list text-black/70">
                <div>
                  SCAN_PROTOCOL = <span className="text-gold">ENGAGED</span>
                </div>
                <div>BASELINE_RANGE = 500M</div>
                <div>MAX_RANGE = 1.5KM</div>
                <div>
                  SIGNAL_STRENGTH ={" "}
                  <span className="text-gold">OPTIMAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ OUR SYSTEMS ============ */}
      <div className="py-20 md:py-28 px-4 md:px-8 border-t border-black/10">
        <div className="mb-10">
          <div className="eyebrow text-black/60 mb-3">// OPERATIONAL_SUPERIORITY</div>
          <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Our fleets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((p) => (
            <SystemCard key={p.id} product={p} />
          ))}
        </div>

        {/* gold accent banner */}
        <Link
          href="/products"
          className="block mt-6 group"
        >
          <div className="bg-gold text-black px-6 md:px-8 py-5 flex items-center justify-between transition-colors hover:bg-black hover:text-gold">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                BRIECH&nbsp;FLEET
              </div>
              <div className="text-[12px] uppercase tracking-[0.15em] mt-1 opacity-80">
                Briech&apos;s full lineup of combat and reconnaissance unmanned aerial systems
              </div>
            </div>
            <span className="btn-bracket">ACCESS SPECS</span>
          </div>
        </Link>

        {/* secondary product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {products.slice(2).map((p) => (
            <SystemCard key={p.id} product={p} compact />
          ))}
        </div>
      </div>
    </section>
  );
};

const SystemCard = ({ product, compact = false }) => (
  <Link
    href={`/drones/${product.id}`}
    className="group block bg-white border border-black/15 hover:border-gold transition-colors"
  >
    <div className="flex items-center justify-between px-5 py-3 border-b border-black/15">
      <span className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">
        {product.shortName}
      </span>
      <span className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-black/55 flex items-center gap-2">
        <svg
          className="w-3 h-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <path d="M21 4v5h-5" />
        </svg>
        ROTATE
      </span>
    </div>
    <div
      className={`relative w-full ${
        compact ? "h-44 md:h-52" : "h-64 md:h-80"
      } bg-grid`}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        style={{ objectFit: "contain" }}
        className="p-4 md:p-8"
      />
    </div>
    <div className="flex items-center justify-between px-5 py-3 border-t border-black/15">
      <span className="font-mono-tactical text-[11px] uppercase tracking-[0.15em] text-black/65">
        {product.role}
      </span>
      <span className="btn-bracket btn-bracket-dark group-hover:!text-gold">
        ACCESS SPECS
      </span>
    </div>
  </Link>
);

export default ProductsSection;
