"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pressReleases = [
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

const PressReleases = () => {
  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        <div className="mb-12">
          <div className="eyebrow text-black/60 mb-3">// OFFICIAL_BRIEFINGS</div>
          <h2 className="bracket-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Press Releases
          </h2>
          <p className="mt-6 text-black/75 max-w-2xl leading-relaxed">
            Official announcements and company news transmitted directly from
            Briech UAS command.
          </p>
        </div>

        <div className="border-t border-black/15">
          {pressReleases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true, amount: 0.3 }}
              className="border-b border-black/15 hover:bg-gold/5 transition-colors group"
            >
              <Link
                href={`/press/${release.slug}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start py-8 md:py-10"
              >
                {/* date / index */}
                <div className="lg:col-span-3">
                  <div className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-black/55 mb-2">
                    // BRIEFING_{String(release.id).padStart(3, "0")}
                  </div>
                  <div className="font-mono-tactical text-sm uppercase tracking-[0.12em] text-gold">
                    {release.date}
                  </div>
                </div>

                {/* title + summary */}
                <div className="lg:col-span-7">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight leading-tight mb-3 group-hover:text-gold transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed text-sm md:text-base">
                    {release.summary}
                  </p>
                </div>

                {/* CTA */}
                <div className="lg:col-span-2 flex lg:justify-end">
                  <span className="btn-bracket btn-bracket-dark group-hover:!text-gold">
                    READ BRIEFING
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link href="/press/archive" className="btn-bracket btn-bracket-dark">
            ACCESS FULL ARCHIVE
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PressReleases;
