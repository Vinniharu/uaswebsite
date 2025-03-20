'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const XanderSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gold opacity-5 skew-x-12 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-blue-accent opacity-5 skew-x-12 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Right side - Image with animations */}
          <motion.div 
            className="lg:w-1/2 relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link href="/drones/xander">
              <div className="relative h-[450px] w-full group cursor-pointer">
                {/* Pattern background instead of image */}
                <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-soft">
                  <div className="glass-effect w-full h-full rounded-lg relative flex items-center justify-center">
                    {/* Background image */}
                    <img 
                      src="/xander.webp" 
                      alt="Xander Reconnaissance Drone" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    
                    {/* Blue overlay patterns */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(var(--blue-accent) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                      opacity: 0.2
                    }}></div>
                    
                    {/* Blue circuit-like pattern */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(to right, var(--blue-accent) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--blue-accent) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                      opacity: 0.15
                    }}></div>

                    {/* View specs overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-4 py-2 bg-gold text-black font-medium rounded">
                        View Specifications
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold opacity-30 rounded-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-blue-accent opacity-30 rounded-lg"></div>
                
                {/* Blue accent */}
                <motion.div 
                  className="absolute top-1/2 -left-3 h-[2px] bg-blue-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '25%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </Link>
          </motion.div>
          
          {/* Left side - Text content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Xander <span className="text-gold">Reconnaissance Drone</span>
              </h2>
              <div className="px-3 py-1 bg-blue-accent/10 rounded-full text-blue-accent text-xs font-semibold">
                VTOL
              </div>
            </div>
            
            <p className="text-gold font-medium mb-6 italic">
              Extended ISR mission capability with 6-hour operational endurance
            </p>
            
            <div className="w-20 h-1 bg-gold mb-6"></div>
            
            <motion.p 
              className="text-black/80 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Named after the Greek word for "Defender of Man," Xander embodies the essence of legendary guardians—unwavering, vigilant, and ever-watchful. The Xander ensures that no enemy moves unseen, no battlefield remains unknown, and no mission is compromised.
            </motion.p>
            
            {/* Features */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-black">Key Features:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Extended Endurance & Efficiency with 6-hour flight time</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Advanced Surveillance Technology for ground mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Stealth & Covert Operations for undetectable missions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Autonomous Navigation with object recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Secure & Resilient Communication against cyber threats</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Versatile Deployment Capability with VTOL functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Modular Payload Integration for customizable sensors</span>
                </li>
              </ul>
            </motion.div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/drones/xander" className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors group">
                <span>View Specifications</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default XanderSection; 