"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { mediaCoverage } from "@/app/data/press";

const MediaCoverage = () => {
  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        <div className="mb-12">
          <div className="eyebrow text-black/60 mb-3">// MEDIA_COVERAGE</div>
          <h2 className="bracket-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Featured Press
          </h2>
          <p className="mt-6 text-black/75 max-w-2xl leading-relaxed">
            Briech UAS featured in leading publications and media outlets
            across Nigeria and the African continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-black/15">
          {mediaCoverage.slice(0, 4).map((article, index) => {
            const isLeftCol = index % 2 === 0;
            const isLastRow = index >= mediaCoverage.slice(0, 4).length - 2;
            return (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`p-7 md:p-9 hover:bg-gold/10 transition-colors duration-300 flex flex-col group ${
                  isLeftCol ? "md:border-r" : ""
                } ${!isLastRow ? "border-b md:border-b" : "border-b md:border-b-0"} ${
                  index === mediaCoverage.slice(0, 4).length - 1 ? "border-b-0" : ""
                } border-black/15`}
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

                <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight leading-snug text-black mb-6 flex-grow group-hover:text-gold transition-colors">
                  {article.title}
                </h3>

                <span className="btn-bracket btn-bracket-dark self-start group-hover:!text-gold">
                  EXTERNAL LINK ↗
                </span>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link href="/press/media" className="btn-bracket btn-bracket-dark">
            ACCESS MORE COVERAGE
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCoverage;
