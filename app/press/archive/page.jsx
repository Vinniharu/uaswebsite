"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const allPressReleases = [
  {
    id: 1,
    date: "April 2, 2025",
    title:
      "Briech UAS Showcases Nigeria's First Indigenous Attack Drones and Bombs During CDS Visit",
    summary:
      "Chief of Defence Staff, General Christopher Musa, commends Briech UAS for advancing Nigeria's defence capabilities through locally manufactured unmanned aerial vehicles and explosive devices.",
    slug: "indigenous-attack-drones-cds-visit",
  },
];

export default function PressArchive() {
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
            className="font-extrabold tracking-tighter leading-[0.9] uppercase text-white text-[10vw] sm:text-[11vw] lg:text-[10.5vw] text-center mix-blend-screen whitespace-nowrap"
          >
            PRESS&nbsp;ARCHIVE
          </motion.h1>
        </div>

        <div className="relative z-10 mt-auto px-4 md:px-8 pb-10 md:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="md:col-span-2 max-w-2xl">
              <div className="eyebrow text-gold mb-3">// FULL_BRIEFING_LOG</div>
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.05] uppercase">
                Every official briefing transmitted from{" "}
                <span className="text-gold">Briech command</span>.
              </p>
            </div>

            <div className="hud-list text-right text-white/80 self-end justify-self-end">
              <div>
                ENTRIES = <span className="text-gold">{String(allPressReleases.length).padStart(3, "0")}</span>
              </div>
              <div>
                CHANNEL = <span className="text-gold">PUBLIC_AFFAIRS</span>
              </div>
              <div>
                CLEARANCE = <span className="text-gold">UNCLASSIFIED</span>
              </div>
              <div className="mt-3">
                ARCHIVE = <span className="text-gold">2025_ONWARDS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
        <div className="px-4 md:px-8">
          <div className="mb-10">
            <div className="eyebrow text-black/60 mb-3">// COMPLETE_DOSSIER</div>
            <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
              All Briefings
            </h2>
          </div>

          <div className="border-t border-black/15">
            {allPressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="border-b border-black/15 hover:bg-gold/5 transition-colors group"
              >
                <Link
                  href={`/press/${release.slug}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start py-8 md:py-10"
                >
                  <div className="lg:col-span-3">
                    <div className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-black/55 mb-2">
                      // BRIEFING_{String(release.id).padStart(3, "0")}
                    </div>
                    <div className="font-mono-tactical text-sm uppercase tracking-[0.12em] text-gold">
                      {release.date}
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight leading-tight mb-3 group-hover:text-gold transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed text-sm md:text-base">
                      {release.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-2 flex lg:justify-end">
                    <span className="btn-bracket btn-bracket-dark group-hover:!text-gold">
                      READ BRIEFING
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
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
