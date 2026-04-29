"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* TOP: column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
        {/* CAPABILITIES */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10"
        >
          <div className="eyebrow text-white/55 mb-4 sm:mb-5">// CAPABILITIES</div>
          <ul className="space-y-1.5 sm:space-y-2">
            {[
              ["Damisa", "/drones/damisa"],
              ["Argini", "/drones/argini"],
              ["Arsenio", "/drones/arsenio"],
              ["Xander", "/drones/xander"],
              ["Bfly", "/drones/bfly"],
            ].map(([name, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-tight hover:text-gold transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ABOUT / CONNECT */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10"
        >
          <div className="eyebrow text-white/55 mb-4 sm:mb-5">// ABOUT</div>
          <ul className="space-y-1.5 sm:space-y-2 mb-8 sm:mb-10">
            {[
              ["Mission", "/about"],
              ["Personnel", "/about"],
              ["Press", "/press"],
              ["Portfolio", "/portfolio"],
              ["Fleet", "/products"],
            ].map(([name, href]) => (
              <li key={name}>
                <Link
                  href={href}
                  className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-tight hover:text-gold transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="eyebrow text-white/55 mb-3 sm:mb-4">// CONNECT</div>
          <ul className="space-y-1.5 sm:space-y-2">
            <li>
              <a
                href="https://www.instagram.com/briechuas_/"
                target="_blank"
                rel="noreferrer"
                className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-tight hover:text-gold transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/profile.php?id=61574236304867"
                target="_blank"
                rel="noreferrer"
                className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-tight hover:text-gold transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://x.com/BriechUAS"
                target="_blank"
                rel="noreferrer"
                className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-tight hover:text-gold transition-colors"
              >
                X
              </a>
            </li>
          </ul>
        </motion.div>

        {/* TRANSMIT_MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gold text-black p-6 sm:p-8 md:p-12"
        >
          <div className="eyebrow text-black/65 mb-4 sm:mb-5">// TRANSMIT_MESSAGE</div>
          <Link href="/contact" className="btn-bracket btn-bracket-dark mb-8 sm:mb-10">
            ENQUIRE
          </Link>

          <div className="mt-8 sm:mt-10 mb-3 eyebrow text-black/65">
            // JOIN_OUR_MISSION
          </div>
          <p className="text-sm leading-relaxed mb-5 max-w-sm">
            Join our team of innovators — explore open opportunities and help
            forge the next generation of autonomous capability.
          </p>
          <Link href="/contact" className="btn-bracket btn-bracket-dark">
            POSITIONS
          </Link>

          <div className="mt-8 sm:mt-10 font-mono-tactical text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-black/75 space-y-1 break-words">
            <div>KUJE = ABUJA, NIGERIA</div>
            <div>+234 803 2027 605</div>
            <div>INFO@BRIECHUAS.COM</div>
          </div>
        </motion.div>
      </div>

      {/* GIANT WORDMARK */}
      <div className="px-2 sm:px-4 md:px-8 py-6 sm:py-10 md:py-14 border-b border-white/10 overflow-hidden">
        <h2 className="font-extrabold tracking-tighter leading-[0.85] uppercase text-white text-[13.5vw] sm:text-[14vw] md:text-[12vw] lg:text-[10.5vw] text-center whitespace-nowrap">
          BRIECH&nbsp;UAS
        </h2>
      </div>

      {/* META BAR */}
      <div className="px-4 md:px-8 py-4 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-1.5 md:gap-3 font-mono-tactical text-[9px] sm:text-[10px] uppercase tracking-[0.16em] md:tracking-[0.18em] text-white/55">
        <div className="flex items-center gap-4">
          <span>© {currentYear} BRIECH UAS</span>
        </div>
        <div>9.0820°N, 7.2476°E</div>
        <div>A BRIECH PRODUCTION</div>
      </div>
    </footer>
  );
};

export default Footer;
