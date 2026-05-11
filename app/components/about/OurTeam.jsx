"use client";

import { motion } from "framer-motion";

const OurTeam = () => {
  const teams = [
    {
      title: "Engineering & Technical Team",
      bullets: [
        "Aeronautical, mechanical, and electrical engineers",
        "Comprehensive R&D support",
        "Custom drone solution development",
      ],
    },
    {
      title: "Certified Drone Pilots & Flight Operations",
      bullets: [
        "Highly trained and certified UAV pilots",
        "Experience across diverse terrains and environments",
        "Specialized flight training programs",
      ],
    },
    {
      title: "Assembly & Maintenance Technicians",
      bullets: [
        "Experts in drone assembly and repair",
        "Comprehensive inventory management",
        "Emergency troubleshooting and upgrades",
      ],
    },
    {
      title: "Consultancy & Advisory Specialists",
      bullets: [
        "Strategic consultancy services",
        "Industry-specific solutions",
        "Regulatory compliance and risk management",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        <div className="mb-12">
          <div className="eyebrow text-black/60 mb-3">// PERSONNEL_DIVISIONS</div>
          <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Our Team
          </h2>
          <p className="mt-6 text-black/75 max-w-2xl leading-relaxed">
            A fully integrated team of specialists delivering cutting-edge
            drone technology and unparalleled operational support across every
            stage of the UAS lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-black/15">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              className={`p-8 md:p-10 hover:bg-gold/10 transition-colors duration-300 ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index < teams.length - 2 ? "md:border-b" : ""} ${
                index < teams.length - 1 ? "border-b md:border-b" : ""
              } border-black/15`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-black/55">
                  // {String(index + 1).padStart(3, "0")}
                </span>
                <span className="status-dot" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight mb-4 leading-snug">
                {team.title}
              </h3>
              <ul className="space-y-2 text-sm text-black/70">
                {team.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-gold font-mono-tactical mt-[2px]">
                      ›
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
