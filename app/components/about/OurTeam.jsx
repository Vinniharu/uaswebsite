'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const OurTeam = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gold opacity-5 skew-x-12 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-blue-accent opacity-5 skew-x-12 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
            Our <span className="text-gold">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto">
            At Briech UAS, we bring together a fully integrated team of specialists to deliver cutting-edge drone technology and unparalleled operational support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Team Category 1 */}
          <motion.div 
            className="p-6 rounded-lg bg-white shadow-soft border border-gold/10 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Pattern background */}
            <div className="absolute top-0 right-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(var(--gold) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              opacity: 0.05
            }}></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black">Engineering & Technical Team</h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Aeronautical, mechanical, and electrical engineers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Comprehensive R&D support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Custom drone solution development</span>
                </li>
              </ul>
              
              <div className="h-[120px] relative rounded overflow-hidden">
                <img 
                  src="/pilot2.webp" 
                  alt="Engineering Team" 
                  className="w-full h-full object-cover"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-3 text-white">
                    <div className="text-sm font-semibold">Innovation & Design</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Team Category 2 */}
          <motion.div 
            className="p-6 rounded-lg bg-white shadow-soft border border-gold/10 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Pattern background */}
            <div className="absolute top-0 right-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(var(--blue-accent) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              opacity: 0.05
            }}></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black">Certified Drone Pilots & Flight Operations</h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-accent mt-1">•</span>
                  <span>Highly trained and certified UAV pilots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-accent mt-1">•</span>
                  <span>Experience in various terrains and operational environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-accent mt-1">•</span>
                  <span>Specialized flight training programs</span>
                </li>
              </ul>
              
              <div className="h-[120px] relative rounded overflow-hidden">
                <img 
                  src="/pilot1.webp" 
                  alt="Drone Pilots" 
                  className="w-full h-full object-cover"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-3 text-white">
                    <div className="text-sm font-semibold">Expert Navigation</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Team Category 3 */}
          <motion.div 
            className="p-6 rounded-lg bg-white shadow-soft border border-gold/10 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Pattern background */}
            <div className="absolute top-0 right-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(var(--gold) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              opacity: 0.05
            }}></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black">Assembly & Maintenance Technicians</h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Experts in drone assembly and repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Comprehensive inventory management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Emergency troubleshooting and system upgrades</span>
                </li>
              </ul>
              
              <div className="h-[120px] relative rounded overflow-hidden">
                <img 
                  src="/pilot3.webp" 
                  alt="Maintenance Technicians" 
                  className="w-full h-full object-cover"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-3 text-white">
                    <div className="text-sm font-semibold">Precision Repair</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Team Category 4 */}
          <motion.div 
            className="p-6 rounded-lg bg-white shadow-soft border border-gold/10 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Pattern background */}
            <div className="absolute top-0 right-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(var(--blue-accent) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              opacity: 0.05
            }}></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black">Consultancy & Advisory Specialists</h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-accent mt-1">•</span>
                  <span>Strategic consultancy services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-accent mt-1">•</span>
                  <span>Industry-specific solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-accent mt-1">•</span>
                  <span>Regulatory compliance and risk management</span>
                </li>
              </ul>
              
              <div className="h-[120px] relative rounded overflow-hidden">
                <img 
                  src="/pilot4.webp" 
                  alt="Consultancy Team" 
                  className="w-full h-full object-cover"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-3 text-white">
                    <div className="text-sm font-semibold">Strategic Guidance</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam; 