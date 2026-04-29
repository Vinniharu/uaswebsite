"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const pressReleasesData = [
  {
    id: 1,
    date: "April 2, 2025",
    title:
      "Briech UAS Showcases Nigeria's First Indigenous Attack Drones and Bombs During CDS Visit",
    slug: "indigenous-attack-drones-cds-visit",
    location: "ABUJA, NIGERIA",
    classification: "OFFICIAL_BRIEFING",
    image: "/press/indigenous-attack-drones.jpg",
    content: `
      <p>In a landmark event on April 2, 2025, Briech UAS, a leading Nigerian unmanned aerial systems manufacturer, hosted the Chief of Defence Staff (CDS), General Christopher Musa, at its headquarters in Abuja. This visit marked the official unveiling of Nigeria's first indigenous attack drones and locally manufactured bombs, a major milestone in the nation's journey towards self-reliance in defence technology.</p>
      <p>General Musa commended Briech UAS for its dedication to advancing Nigeria's defence capabilities, emphasizing that the development of indigenous unmanned aerial vehicles (UAVs) is crucial in addressing the country's evolving security challenges. The newly launched UAVs boast an endurance of 14 hours and a telemetry range of 200 km, positioning Nigeria as a formidable player in drone warfare and surveillance operations.</p>
      <p>The event saw the presence of several distinguished guests, including representatives from the Chief of Army Staff (COAS), the Governor of Plateau State, and key officials from the Nigeria Police Force. Their attendance underscored the collective commitment to leveraging cutting-edge technology for national security and law enforcement operations.</p>
      <p>As part of the demonstration, Briech UAS tested two of its latest reconnaissance drones—the Argini and the Arsenio. The Arsenio drone performed an aerial reconnaissance exercise, hovering around the company's office in Kuje while providing a live video feed of the event as it unfolded. This showcased the drone's real-time surveillance capabilities, highlighting its potential application in intelligence gathering and security monitoring.</p>
      <p>Dr. Bright Echefu, Chairman of Briech UAS, highlighted the urgent need for advanced drone technology, citing the alarming trend of drone-assisted attacks in Nigeria. Between January and March 2025, at least 12 such attacks targeted military convoys and bases, reinforcing the importance of strengthening Nigeria's aerial defence capabilities.</p>
      <p>To further underscore Briech UAS's technological advancements, one of the company's explosive devices (bombs) was tested as the distinguished guests were departing. The controlled detonation demonstrated the explosive capabilities of Briech UAS's weapon systems, reinforcing the company's commitment to producing highly effective defence solutions.</p>
      <p>Briech UAS remains committed to innovation and strategic partnerships to enhance Nigeria's security architecture. The successful unveiling of these attack drones and bombs signals a new era in indigenous defence manufacturing, reducing dependence on foreign military hardware and bolstering the country's ability to respond to emerging threats.</p>
      <p>This milestone event is a testament to Nigeria's growing expertise in defense technology, and Briech UAS is proud to be at the forefront of this transformative journey. As we look ahead, we remain steadfast in our mission to provide world-class UAV solutions tailored to Nigeria's security needs.</p>
    `,
  },
];

export default function PressReleasePage() {
  const params = useParams();
  const { slug } = params;

  const [pressRelease, setPressRelease] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      const found = pressReleasesData.find((r) => r.slug === slug);
      setPressRelease(found);
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(t);
  }, [slug]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white text-black flex items-center justify-center pt-20">
        <div className="font-mono-tactical text-[11px] uppercase tracking-[0.25em] text-black/55 flex items-center gap-3">
          <span className="status-dot" />
          LOADING_BRIEFING…
        </div>
      </main>
    );
  }

  if (!pressRelease) {
    return (
      <main className="min-h-screen bg-white text-black pt-20">
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="eyebrow text-black/60 mb-3">// 404 · BRIEFING_NOT_FOUND</div>
          <h1 className="bracket-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6">
            No Briefing
          </h1>
          <p className="text-black/75 max-w-xl mb-8 leading-relaxed">
            The press release you&apos;re looking for couldn&apos;t be found in
            the archive.
          </p>
          <Link href="/press" className="btn-bracket btn-bracket-dark">
            ‹ RETURN TO PRESS
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative bg-black text-white overflow-hidden pt-20 pb-12 md:pb-16">
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none z-0" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0) 65%)",
          }}
        />

        <div className="relative z-10 px-4 md:px-8 pt-6 mb-8">
          <Link href="/press" className="btn-bracket btn-bracket-light">
            ‹ RETURN TO PRESS
          </Link>
        </div>

        <div className="relative z-10 px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <motion.div
              className="lg:col-span-9"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="eyebrow text-gold mb-4">
                // {pressRelease.classification || "OFFICIAL_BRIEFING"}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[1.02] mb-6">
                {pressRelease.title}
              </h1>
              <div className="font-mono-tactical text-xs uppercase tracking-[0.18em] text-white/70 flex flex-wrap gap-x-6 gap-y-2">
                <span>
                  DATE = <span className="text-gold">{pressRelease.date.toUpperCase()}</span>
                </span>
                {pressRelease.location && (
                  <span>
                    LOCATION ={" "}
                    <span className="text-gold">{pressRelease.location}</span>
                  </span>
                )}
                <span>
                  STATUS = <span className="text-gold">PUBLISHED</span>
                </span>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-3 hud-list text-white/80 lg:text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div>
                BRIEFING_ID ={" "}
                <span className="text-gold">
                  {String(pressRelease.id).padStart(3, "0")}
                </span>
              </div>
              <div>
                CHANNEL = <span className="text-gold">PUBLIC_AFFAIRS</span>
              </div>
              <div>
                CLEARANCE = <span className="text-gold">UNCLASSIFIED</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMAGE */}
      {pressRelease.image && (
        <section className="bg-white border-t border-black/10">
          <div className="px-4 md:px-8 py-10 md:py-14">
            <div className="flex items-center justify-between px-5 py-3 border-x border-t border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
              <span className="text-black/55">// VISUAL_RECORD</span>
              <span className="text-gold">FRAME_01/01</span>
            </div>
            <div className="relative h-[320px] md:h-[480px] w-full bg-grid border-x border-black/15 overflow-hidden">
              <img
                src={pressRelease.image}
                alt={pressRelease.title}
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white" />
            </div>
            <div className="flex items-center justify-between px-5 py-3 border border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
              <span className="text-black/55">// SOURCE = BRIECH_ARCHIVE</span>
              <span className="status-dot" />
            </div>
          </div>
        </section>
      )}

      {/* BODY */}
      <section className="bg-white border-t border-black/10 py-16 md:py-20">
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3 lg:sticky lg:top-24 self-start">
              <div className="eyebrow text-black/60 mb-3">// FILE_DOSSIER</div>
              <div className="border border-black/15 p-5 font-mono-tactical text-[11px] uppercase tracking-[0.18em] space-y-3">
                <div className="flex justify-between">
                  <span className="text-black/55">DATE</span>
                  <span className="text-gold">{pressRelease.date.toUpperCase()}</span>
                </div>
                {pressRelease.location && (
                  <div className="flex justify-between">
                    <span className="text-black/55">LOCATION</span>
                    <span className="text-gold">{pressRelease.location}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-black/55">ID</span>
                  <span className="text-gold">
                    {String(pressRelease.id).padStart(3, "0")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/55">TYPE</span>
                  <span className="text-gold">PRESS_RELEASE</span>
                </div>
              </div>
            </div>

            <motion.article
              className="lg:col-span-9 prose-tactical text-black/80 leading-relaxed [&>p]:mb-5 [&>p]:text-base md:[&>p]:text-lg [&>p:first-child]:text-lg md:[&>p:first-child]:text-xl [&>p:first-child]:text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              dangerouslySetInnerHTML={{ __html: pressRelease.content }}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-black/15 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <Link href="/press/archive" className="btn-bracket btn-bracket-dark">
              ‹ ALL BRIEFINGS
            </Link>
            <Link href="/press" className="btn-bracket btn-bracket-dark">
              RETURN TO PRESS
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-black/10 py-10 md:py-14">
        <div className="px-4 md:px-8">
          <Link href="/contact" className="block group">
            <div className="bg-gold text-black px-6 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-colors hover:bg-black hover:text-gold">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                  PRESS&nbsp;ENQUIRIES
                </div>
                <div className="text-[12px] uppercase tracking-[0.15em] mt-1 opacity-80">
                  Engage Briech public affairs for interviews, statements, and
                  briefings
                </div>
              </div>
              <span className="btn-bracket">CONTACT COMMAND</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
