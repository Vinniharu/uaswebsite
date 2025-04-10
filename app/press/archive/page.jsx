"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// This data would typically come from an API or database
const allPressReleases = [
  {
    id: 1,
    date: "April 2, 2025",
    title: "Briech UAS Showcases Nigeria's First Indigenous Attack Drones and Bombs During CDS Visit",
    summary: "Chief of Defence Staff, General Christopher Musa, commends Briech UAS for advancing Nigeria's defence capabilities through locally manufactured unmanned aerial vehicles and explosive devices.",
    slug: "indigenous-attack-drones-cds-visit"
  }
];

export default function PressArchive() {
  return (
    <div className="min-h-screen py-24 pt-40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-black">
            Official Press <span className="text-gold">Archive</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto">
            Browse all official press releases and announcements from Briech UAS.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {allPressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.1 }}
                className="glass-effect border border-gold/20 rounded-lg p-6 shadow-soft hover:shadow-gold transition-all duration-300"
              >
                <div className="text-gold font-medium mb-2">{release.date}</div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  {release.title}
                </h3>
                <p className="text-black/70 mb-4">{release.summary}</p>
                <Link 
                  href={`/press/${release.slug}`} 
                  className="inline-flex items-center text-gold hover:text-gold/80 font-medium transition-colors"
                >
                  Read More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link 
              href="/press" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gold text-gold bg-transparent hover:bg-gold hover:text-white transition-colors duration-300 rounded-md font-medium"
            >
              Back to Press Page
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 