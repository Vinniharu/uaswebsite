'use client';

import { motion } from 'framer-motion';

const DamisaSection = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-black">
            Our <span className="text-gold">Products</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto">
            Cutting-edge unmanned aerial systems designed for defense, security, and commercial applications.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Image with animations */}
          <motion.div 
            className="lg:w-1/2 relative hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-[450px] w-full">
              {/* Pattern background instead of image */}
              <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-soft">
                <div className="glass-effect w-full h-full rounded-lg relative flex items-center justify-center">
                  {/* Background image */}
                  <img 
                    src="/damisa.webp" 
                    alt="Damisa Combat Drone" 
                    className="w-full h-full object-cover"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                  
                  {/* Gold overlay patterns */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(var(--gold) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                    opacity: 0.3
                  }}></div>
                  
                  {/* Gold diagonal lines */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(45deg, var(--gold) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    opacity: 0.2
                  }}></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold opacity-30 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-blue-accent opacity-30 rounded-lg"></div>
              
              {/* Gold accent */}
              <motion.div 
                className="absolute top-1/2 -right-3 h-[2px] bg-gold"
                initial={{ width: 0 }}
                whileInView={{ width: '25%' }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Text content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Damisa <span className="text-gold">Combat Drone</span>
              </h2>
              <div className="px-3 py-1 bg-gold/10 rounded-full text-gold text-xs font-semibold">
                Attack
              </div>
            </div>
            
            <p className="text-blue-accent font-medium mb-6 italic">
              Next-generation unmanned aerial system for precision strikes and battlefield dominance
            </p>
            
            <div className="w-20 h-1 bg-gold mb-6"></div>
            
            <motion.p 
              className="text-black/80 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The Damisa Attack Drone, named after the Hausa word for "tiger," embodies raw power, precision, and intelligence. Built for unrivaled battlefield dominance with stealth, agility, and lethal precision, it delivers swift and unstoppable performance in the harshest combat environments.
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
                  <div className="mt-1 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Precision Strike Capability with guided munitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>High-Speed Maneuverability with aerodynamic design</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Electronic Warfare Resilience with adaptive frequency hopping</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Extended Operational Range with 16-hour endurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Smart Payload Adaptability for diverse mission profiles</span>
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
              <a href="/contact" className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors group">
                <span>Request specifications</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DamisaSection; 