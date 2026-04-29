"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "akk-pipeline",
    code: "001",
    sector: "ENERGY_INFRASTRUCTURE",
    partner: "NNPC",
    title: "AKK Pipeline Surveillance",
    description:
      "Comprehensive security for the Ajaokuta-Kaduna-Kano (AKK) Gas Pipeline, a critical 614-kilometer infrastructure asset vital to Nigeria's energy security.",
    points: [
      "Pipeline vandalism",
      "Illegal tapping operations",
      "Environmental hazards",
    ],
    summary:
      "Using state-of-the-art real-time data analytics and AI-powered threat detection, we ensure the operational integrity of this crucial national asset, supporting uninterrupted power generation and industrial development across Nigeria.",
    image: "/images/pipe.png",
    altText: "Drone monitoring AKK pipeline",
  },
  {
    id: "dss-operations",
    code: "002",
    sector: "INTELLIGENCE_OPS",
    partner: "DSS",
    title: "Intelligence & Surveillance",
    description:
      "In collaboration with the Department of State Services (DSS), Briech UAS executes high-value Intelligence, Surveillance, and Reconnaissance (ISR) operations in North East Nigeria.",
    points: [
      "Persistent surveillance in challenging environments",
      "Real-time tracking of hostile movements",
      "Enhanced border security",
      "Critical intelligence for counter-terrorism operations",
    ],
    summary:
      "This strategic partnership equips the DSS with actionable intelligence that enables rapid response capabilities and precision operations in high-threat environments.",
    image: "/images/dss.png",
    altText: "Drone providing intelligence surveillance",
  },
  {
    id: "niger-delta",
    code: "003",
    sector: "MARITIME_DEFENCE",
    partner: "NIGERIAN_AIR_FORCE",
    title: "Niger Delta Security Initiative",
    description:
      "Supporting the Nigerian Air Force (NAF) in the strategically important Niger Delta region, our specialized drones protect vital oil and gas infrastructure from sabotage, illegal bunkering, and militant activity.",
    points: [
      "Covert aerial reconnaissance",
      "Real-time threat mapping and visualization",
      "Intelligence for pre-emptive operations",
      "Support for rapid deployment strategies",
    ],
    summary:
      "Our multi-spectral imaging and night-vision capabilities ensure continuous situational awareness in this challenging operational environment, 24 hours a day.",
    image: "/images/niger.png",
    altText: "Drone monitoring Niger Delta region",
  },
  {
    id: "army-support",
    code: "004",
    sector: "TACTICAL_SUPPORT",
    partner: "NIGERIAN_ARMY",
    title: "Tactical Support Programme",
    description:
      "As a trusted partner of the Nigerian Army, Briech UAS delivers battlefield intelligence and tactical reconnaissance across North East, West, and Central Nigeria.",
    points: [
      "Advanced border surveillance systems",
      "Convoy protection operations",
      "Counterinsurgency mission support",
      "Urban security and monitoring",
    ],
    summary:
      "Equipped with high-resolution electro-optical and infrared sensors, our fleet identifies potential threats, tracks suspicious movements, and provides ground forces with the actionable intelligence needed for mission success.",
    image: "/images/army.png",
    altText: "Drone supporting military operations",
  },
];

export default function Portfolio() {
  return (
    <>
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

        <div className="relative z-10 px-2 sm:px-4 md:px-8 pt-2 md:pt-4 pointer-events-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-extrabold tracking-tighter leading-[0.9] uppercase text-white text-[13.5vw] sm:text-[14vw] md:text-[12vw] lg:text-[10.5vw] text-center mix-blend-screen whitespace-nowrap"
          >
            FIELD&nbsp;PORTFOLIO
          </motion.h1>
        </div>

        <div className="relative z-10 mt-auto px-4 md:px-8 pb-10 md:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <motion.div
              className="md:col-span-2 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="eyebrow text-gold mb-3">// MISSION_DOSSIER</div>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.05] uppercase">
                Strategic UAS deployments delivering{" "}
                <span className="text-gold">real-time aerial intelligence</span>{" "}
                across national security and infrastructure.
              </p>
              <p className="mt-5 text-white/80 max-w-xl text-base leading-relaxed">
                Briech UAS supports mission-critical national security and
                infrastructure programmes — from energy corridor surveillance
                to counter-terrorism ISR.
              </p>
            </motion.div>

            <motion.div
              className="hud-list text-right text-white/80 self-end justify-self-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div>
                MISSIONS = <span className="text-gold">04_ACTIVE</span>
              </div>
              <div>
                THEATRE = <span className="text-gold">NIGERIA</span>
              </div>
              <div>
                CLEARANCE = <span className="text-gold">SOVEREIGN</span>
              </div>
              <div>
                CHARTER = <span className="text-gold">DEFENCE+ENERGY</span>
              </div>
              <div className="mt-3">
                STATUS = <span className="text-gold">OPERATIONAL</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
        <div className="px-4 md:px-8">
          <div className="mb-12">
            <div className="eyebrow text-black/60 mb-3">// CASE_FILES</div>
            <h2 className="bracket-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-6 text-black/75 max-w-2xl leading-relaxed">
              Four operational deployments demonstrating Briech&apos;s
              capability to deliver mission-critical aerial intelligence at
              national scale.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {projects.map((project, index) => {
              const reverse = index % 2 === 1;
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
                >
                  {/* IMAGE */}
                  <div
                    className={`lg:col-span-7 ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* image header */}
                    <div className="flex items-center justify-between px-5 py-3 border-x border-t border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
                      <span className="text-black/55">
                        // FILE_{project.code}
                      </span>
                      <span className="text-gold">
                        SECTOR = {project.sector}
                      </span>
                    </div>

                    <div className="relative h-[320px] md:h-[460px] w-full bg-grid border-x border-black/15 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.altText}
                        fill
                        priority={index < 2}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
                      <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
                      <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
                      <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white" />

                      <div className="absolute top-4 right-4 hud-list text-white/85 text-right">
                        <div>
                          PARTNER ={" "}
                          <span className="text-gold">{project.partner}</span>
                        </div>
                        <div>
                          STATUS = <span className="text-gold">COMPLETED</span>
                        </div>
                      </div>
                    </div>

                    {/* image footer */}
                    <div className="flex items-center justify-between px-5 py-3 border border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
                      <span className="text-black/55">// LIVE_FEED = ARCHIVE</span>
                      <span className="status-dot" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`lg:col-span-5 ${
                      reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="border border-black/15 h-full flex flex-col">
                      <div className="flex items-center justify-between px-5 py-3 border-b border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
                        <span className="text-black/55">
                          // CASE_BRIEF
                        </span>
                        <span className="text-gold">{project.partner}</span>
                      </div>

                      <div className="p-6 md:p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight mb-4">
                          {project.title}
                        </h3>
                        <p className="text-black/80 leading-relaxed text-sm md:text-base mb-6">
                          {project.description}
                        </p>

                        <div className="border-t border-black/15 pt-5 mb-5">
                          <div className="eyebrow text-black/55 mb-3">
                            // KEY_FOCUS_AREAS
                          </div>
                          <ul className="space-y-2">
                            {project.points.map((p, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-black/75 leading-relaxed"
                              >
                                <span className="text-gold font-mono-tactical mt-[2px] shrink-0">
                                  ›
                                </span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p className="text-black/70 leading-relaxed text-sm mt-auto pt-5 border-t border-black/15">
                          {project.summary}
                        </p>

                        <div className="mt-6">
                          <Link
                            href="/contact"
                            className="btn-bracket btn-bracket-dark"
                          >
                            ACCESS BRIEFING
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BEYOND THE HORIZON — closing copy + accent banner */}
      <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
        <div className="px-4 md:px-8">
          <div className="mb-10">
            <div className="eyebrow text-black/60 mb-3">// FORWARD_HORIZON</div>
            <h2 className="bracket-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
              Beyond the Horizon
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-black/80 leading-relaxed text-lg mb-5">
                Briech UAS continues to pioneer next-generation drone
                technology to address Nigeria&apos;s evolving security
                landscape. Our commitment to innovation, precision, and
                national defence positions us as the leading force in
                UAS-driven surveillance and intelligence solutions.
              </p>
              <p className="text-black/70 leading-relaxed">
                Through these missions and more, we remain dedicated to
                securing Nigeria&apos;s future — one flight at a time.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="border border-black/15 p-6 font-mono-tactical text-[11px] uppercase tracking-[0.18em] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-black/55">DOMAINS</span>
                  <span className="text-gold">DEFENCE · ENERGY · ISR</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/55">PARTNERS</span>
                  <span className="text-gold">SOVEREIGN_FORCES</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/55">DEPLOYMENT</span>
                  <span className="text-gold">CONTINENTAL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/55">DOCTRINE</span>
                  <span className="text-gold">SMART_UAV</span>
                </div>
              </div>
            </motion.div>
          </div>

          <Link href="/contact" className="block mt-10 group">
            <div className="bg-gold text-black px-6 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-colors hover:bg-black hover:text-gold">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                  PARTNER&nbsp;ON&nbsp;A&nbsp;MISSION
                </div>
                <div className="text-[12px] uppercase tracking-[0.15em] mt-1 opacity-80">
                  Engage Briech command for sovereign UAS partnerships
                </div>
              </div>
              <span className="btn-bracket">ENQUIRE</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
