"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OurCommitment = () => {
  const commitments = [
    {
      title: "Reliable, High-Performance UAV Systems",
      description:
        "We build our unmanned aerial vehicles for durability and efficiency, ensuring they perform reliably in even the most challenging conditions and mission-critical activities.",
    },
    {
      title: "International Aviation & Safety Compliance",
      description:
        "All our products and operations meet or exceed international aviation and safety regulations, ensuring peace of mind and legal compliance for our clients.",
    },
    {
      title: "Forward-Thinking Aerial Solutions",
      description:
        "Our approach incorporates AI, automation, and next-generation aerial solutions, ensuring our clients benefit from the latest advancements in UAV technology.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        <div className="mb-12">
          <div className="eyebrow text-black/60 mb-3">// FORWARD_OBJECTIVES</div>
          <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Our Commitment
          </h2>
          <p className="mt-6 text-black/75 max-w-2xl leading-relaxed">
            We are committed to excellence, reliability, and future-ready
            technology — a strategic partner dedicated to pushing the
            boundaries of UAV capability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-10">
          {/* commitments list */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-black/15">
              {commitments.map((c, i) => (
                <motion.div
                  key={i}
                  className={`p-7 md:p-9 ${
                    i < commitments.length - 1 ? "border-b border-black/15" : ""
                  } hover:bg-gold/5 transition-colors`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-black/55">
                      // OBJECTIVE_{String(i + 1).padStart(3, "0")}
                    </span>
                    <span className="text-gold font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {c.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* image panel */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden border border-black/15 bg-neutral-100">
              <Image
                src="/uavcareer2.webp"
                alt="Briech UAS commitment"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
              <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white" />
              <div className="absolute top-3 right-4 hud-list text-white/85">
                <div>
                  TRAJECTORY = <span className="text-gold">FORWARD</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-3 max-w-xs">
                <div className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-white/65 mb-1">
                  COMPLIANCE_RATE
                </div>
                <div className="text-3xl font-extrabold text-gold leading-none">
                  100%
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* gold accent banner CTA */}
        <Link href="/contact" className="block mt-6 group">
          <div className="bg-gold text-black px-6 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-colors hover:bg-black hover:text-gold">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                PARTNER&nbsp;WITH&nbsp;BRIECH
              </div>
              <div className="text-[12px] uppercase tracking-[0.15em] mt-1 opacity-80">
                Engage with our command for tailored UAS partnerships
              </div>
            </div>
            <span className="btn-bracket">ENQUIRE</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default OurCommitment;
