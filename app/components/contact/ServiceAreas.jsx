"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ServiceAreas = () => {
  const sectors = [
    {
      name: "Security & Defence",
      description:
        "Force multiplication for sovereign defence and protective services.",
    },
    {
      name: "Industrial Inspections",
      description:
        "Asset integrity surveys across pipelines, power, and heavy industry.",
    },
    {
      name: "Environmental & Agricultural Monitoring",
      description:
        "Aerial intelligence for crop health, conservation, and resource mapping.",
    },
    {
      name: "Urban Planning & Surveying",
      description:
        "High-resolution mapping for civic infrastructure and development.",
    },
    {
      name: "Emergency & Humanitarian Services",
      description:
        "Rapid-response aerial coordination for disaster relief and SAR.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        <div className="mb-12">
          <div className="eyebrow text-black/60 mb-3">// SERVICE_SECTORS</div>
          <h2 className="bracket-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Service Areas
          </h2>
          <p className="mt-6 text-black/75 max-w-2xl leading-relaxed">
            Briech UAS provides drone solutions across five primary domains —
            from sovereign defence to humanitarian rapid-response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black/15">
          {sectors.map((sector, index) => {
            const isLastRow = index >= sectors.length - (sectors.length % 3 || 3);
            return (
              <motion.div
                key={index}
                className={`p-8 md:p-10 hover:bg-gold/10 transition-colors duration-300 border-black/15 ${
                  index < sectors.length - 1 ? "border-b" : ""
                } md:border-b ${
                  index % 2 === 0 ? "md:border-r" : ""
                } lg:border-b lg:border-r ${
                  (index + 1) % 3 === 0 ? "lg:border-r-0" : ""
                } ${
                  index >= Math.floor(sectors.length / 3) * 3
                    ? "lg:border-b-0"
                    : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-black/55">
                    // SECTOR_{String(index + 1).padStart(3, "0")}
                  </span>
                  <span className="status-dot" />
                </div>
                <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight mb-3 leading-snug">
                  {sector.name}
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  {sector.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* gold accent banner */}
        <Link href="mailto:Info@briechuas.com" className="block mt-6 group">
          <div className="bg-gold text-black px-6 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-colors hover:bg-black hover:text-gold">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                CUSTOM&nbsp;UAS&nbsp;SOLUTIONS
              </div>
              <div className="text-[12px] uppercase tracking-[0.15em] mt-1 opacity-80">
                Discuss your specific requirements with our team
              </div>
            </div>
            <span className="btn-bracket">DISCUSS BRIEFING</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ServiceAreas;
