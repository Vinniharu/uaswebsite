"use client";

import { motion } from "framer-motion";

const PressHero = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold opacity-5 -skew-x-12 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-accent opacity-5 -skew-x-12 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 pt-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-black">
            Briech UAS <span className="text-gold">Press</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto">
            Official press releases and featured media coverage about Africa's premier 
            unmanned aerial systems manufacturer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PressHero; 