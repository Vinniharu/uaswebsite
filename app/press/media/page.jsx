"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { mediaCoverage } from "@/app/data/press";

export default function MediaPage() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-light opacity-40 pointer-events-none z-0" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0) 65%)",
          }}
        />

        <div className="relative z-10 px-4 md:px-8 pt-6">
          <Link href="/press" className="btn-bracket btn-bracket-light">
            ‹ RETURN TO PRESS
          </Link>
        </div>

        <div className="relative z-10 px-2 sm:px-4 md:px-8 pt-6 md:pt-10 pointer-events-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-extrabold tracking-tighter leading-[0.9] uppercase text-white text-[13.5vw] sm:text-[14vw] md:text-[12vw] lg:text-[10.5vw] text-center mix-blend-screen whitespace-nowrap"
          >
            MEDIA&nbsp;COVERAGE
          </motion.h1>
        </div>

        <div className="relative z-10 mt-auto px-4 md:px-8 pb-10 md:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="md:col-span-2 max-w-2xl">
              <div className="eyebrow text-gold mb-3">// EXTERNAL_FEED</div>
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.05] uppercase">
                Briech UAS in{" "}
                <span className="text-gold">leading publications</span> across
                Nigeria and Africa.
              </p>
            </div>

            <div className="hud-list text-right text-white/80 self-end justify-self-end">
              <div>
                ARTICLES = <span className="text-gold">{String(mediaCoverage.length).padStart(3, "0")}</span>
              </div>
              <div>
                CHANNEL = <span className="text-gold">EXTERNAL_PRESS</span>
              </div>
              <div>
                ORIGIN = <span className="text-gold">CONTINENTAL</span>
              </div>
              <div className="mt-3">
                ACCESS = <span className="text-gold">PUBLIC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
        <div className="px-4 md:px-8">
          <div className="mb-10">
            <div className="eyebrow text-black/60 mb-3">// FEATURED_PRESS</div>
            <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
              Coverage Index
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black/15">
            {mediaCoverage.map((article, index) => {
              const total = mediaCoverage.length;
              const cols = 3;
              const fullRows = Math.floor(total / cols);
              const lastRowStart = fullRows * cols;
              const isLastRow = index >= lastRowStart;
              return (
                <motion.a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % 9) * 0.04 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className={`p-7 md:p-9 hover:bg-gold/10 transition-colors duration-300 flex flex-col group border-black/15 ${
                    (index + 1) % cols !== 0 ? "lg:border-r" : ""
                  } ${index % 2 === 0 ? "md:border-r" : ""} ${
                    !isLastRow ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-black/55">
                      // {String(index + 1).padStart(3, "0")}
                    </span>
                    <span className="status-dot" />
                  </div>

                  <div className="font-mono-tactical text-[11px] uppercase tracking-[0.18em] text-gold mb-2">
                    {article.publication}
                  </div>
                  <div className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-black/55 mb-4">
                    {article.date}
                  </div>

                  <h3 className="text-base md:text-lg font-extrabold uppercase tracking-tight leading-snug text-black mb-6 flex-grow group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>

                  <span className="btn-bracket btn-bracket-dark self-start group-hover:!text-gold">
                    EXTERNAL LINK ↗
                  </span>
                </motion.a>
              );
            })}
          </div>

          <div className="mt-10">
            <Link href="/press" className="btn-bracket btn-bracket-dark">
              ‹ RETURN TO PRESS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
