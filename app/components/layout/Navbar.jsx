"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Capabilities", path: "/products", group: "capabilities" },
    { name: "Home", path: "/", group: "intel" },
    { name: "About", path: "/about", group: "intel" },
    { name: "Fleet", path: "/products", group: "intel" },
    { name: "Portfolio", path: "/portfolio", group: "intel" },
    { name: "Press", path: "/press", group: "intel" },
    { name: "Contact", path: "/contact", group: "intel" },
  ];

  // Light variant when sitting on the black hero (home + not scrolled), dark otherwise.
  const lightChrome = isHome && !isScrolled;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          lightChrome
            ? "bg-transparent text-white"
            : "bg-white/95 backdrop-blur text-black border-b border-black/10"
        }`}
      >
        <div className="grid grid-cols-3 h-16">
          {/* LEFT — menu toggle (1/3 width, hover gradient L→R) */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="relative h-16 w-full overflow-hidden group block text-left cursor-pointer"
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, rgba(212,175,55,0.85) 0%, rgba(212,175,55,0) 100%)",
              }}
            />
            <span className="absolute inset-y-0 left-3 md:left-8 z-10 inline-flex items-center gap-1.5 md:gap-2 font-mono-tactical uppercase tracking-[0.12em] text-[0.65rem] sm:text-[0.72rem] md:text-[0.78rem]">
              <span className="opacity-85">[</span>
              <motion.span
                animate={{ rotate: isMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="opacity-85 inline-block"
              >
                +
              </motion.span>
              <span>{isMenuOpen ? "CLOSE" : "MENU"}</span>
              <span className="opacity-85">]</span>
            </span>
          </button>

          {/* CENTER — wordmark / glyph (hidden on small phones to avoid crowding) */}
          <div className="hidden sm:flex items-center justify-center">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-mono-tactical text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.3em] uppercase opacity-90 hover:opacity-100"
            >
              BRIECH&nbsp;UAS
            </Link>
          </div>
          {/* On phones the center cell stays empty so MENU/ENQUIRE keep their 1/3 widths */}
          <div className="sm:hidden" aria-hidden="true" />

          {/* RIGHT — enquire (1/3 width, hover gradient R→L) */}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="relative h-16 w-full overflow-hidden group block text-right"
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, rgba(212,175,55,0.85) 0%, rgba(212,175,55,0) 100%)",
              }}
            />
            <span className="absolute inset-y-0 right-3 md:right-8 z-10 inline-flex items-center gap-1.5 md:gap-2 font-mono-tactical uppercase tracking-[0.12em] text-[0.65rem] sm:text-[0.72rem] md:text-[0.78rem]">
              <span className="opacity-85">[</span>
              <span>ENQUIRE</span>
              <span className="opacity-85">]</span>
            </span>
          </Link>
        </div>
      </motion.header>

      {/* DROPDOWN MENU PANEL — slides down behind the navbar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu-panel"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-gold text-black overflow-y-auto shadow-2xl flex flex-col"
          >
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 px-5 sm:px-8 md:px-16 py-8 sm:py-12 md:py-20 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.22, duration: 0.4 }}
              >
                <div className="eyebrow opacity-70 mb-4">// INTEL</div>
                <ul className="space-y-1">
                  {navLinks
                    .filter((l) => l.group === "intel")
                    .map((link) => (
                      <li key={link.path}>
                        <Link
                          href={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight uppercase hover:opacity-70 transition-opacity"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <div className="eyebrow opacity-70 mb-4">// CAPABILITIES</div>
                <ul className="space-y-1">
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
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight uppercase hover:opacity-70 transition-opacity"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="px-5 sm:px-8 md:px-16 pb-6 md:pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-1 font-mono-tactical text-[10px] md:text-[11px] tracking-[0.18em] uppercase opacity-80">
              <span>MENU = ENGAGED</span>
              <span>BOOT = AWAITING_COMMAND</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
