'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const OurCommitment = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold opacity-5 -skew-x-12 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-accent opacity-5 -skew-x-12 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
            Our <span className="text-gold">Commitment</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto">
            We are committed to excellence, reliability, and future-ready technology. As a strategic partner dedicated to pushing the boundaries of UAV technology.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side - Image with animation */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-md">
              {/* Hexagon pattern */}
              <div className="absolute -top-6 -left-6 w-72 h-72">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold/10">
                  <defs>
                    <pattern id="hexagons" width="10" height="18" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
                      <g stroke="currentColor" strokeWidth="0.5" fill="none">
                        <path d="M10,6.4L5,12.8L0,6.4L5,0L10,6.4z" />
                        <path d="M5,12.8L0,19.2L5,25.6L10,19.2L5,12.8z" />
                        <path d="M15,6.4L20,12.8L15,19.2L10,12.8L15,6.4z" />
                      </g>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#hexagons)" />
                </svg>
              </div>
          
              {/* Main image */}
              <div className="glass-effect rounded-lg overflow-hidden relative border border-gold/20 shadow-soft">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="/uavcareer2.webp" 
                    alt="Our Commitment to Excellence" 
                    className="w-full h-full object-cover"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full border border-gold/30 flex items-center justify-center shadow-soft z-10"
                animate={{ 
                  y: [0, -10, 0], 
                  rotate: [0, 10, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full border border-blue-accent/30 flex items-center justify-center shadow-soft z-10"
                animate={{ 
                  y: [0, 10, 0], 
                  rotate: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Commitment points */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-10">
              {/* Commitment Point 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold text-xl">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliable, High-Performance UAV Systems</h3>
                <p className="text-black/70">
                  We build our unmanned aerial vehicles for durability and efficiency, ensuring they perform reliably in even the most challenging conditions and mission-critical activities.
                </p>
              </motion.div>
              
              {/* Commitment Point 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 w-12 h-12 bg-blue-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-blue-accent font-bold text-xl">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">International Aviation and Safety Compliance</h3>
                <p className="text-black/70">
                  All our products and operations meet or exceed international aviation and safety regulations, ensuring peace of mind and legal compliance for our clients.
                </p>
              </motion.div>
              
              {/* Commitment Point 3 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold text-xl">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Forward-Thinking Aerial Solutions</h3>
                <p className="text-black/70">
                  Our approach incorporates AI, automation, and next-generation aerial solutions, ensuring our clients benefit from the latest advancements in UAV technology.
                </p>
              </motion.div>
              
              {/* Call to action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <a href="/contact" className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors group">
                  <span>Partner with us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment; 