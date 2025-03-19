'use client';

import { motion } from 'framer-motion';

const ServicesSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-black">
            Our <span className="text-gold">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto">
            Comprehensive UAS Services tailored to commercial, security, and defense applications. Our operations are backed by highly experienced engineers, certified drone pilots, assembly technicians, and industry-leading consultants.
          </p>
        </motion.div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service 1 */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft border border-gold/10 p-6 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -skew-x-12 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="mb-4 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Structural Repairs of Composite Materials</h3>
            <p className="text-black/70 mb-6">
              Our expertise in composite material repair ensures your drones maintain structural integrity and optimal performance.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>Repair & Reinforcement of damaged carbon fiber and advanced composites</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>Aero-Structural Optimization for maintained aerodynamic efficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>High-Precision Fabrication using advanced techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>Extended drone lifespan and mission readiness</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Service 2 */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft border border-gold/10 p-6 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -skew-x-12 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="mb-4 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Bespoke Painting & Branding</h3>
            <p className="text-black/70 mb-6">
              Enhance both aesthetics and performance with our customization services.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>Military-Grade Camouflage & Stealth Coatings for reduced radar visibility</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>High-Visibility Commercial Branding for industrial and enterprise UAVs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>Protective & Heat-Resistant Coatings for harsh environments</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>Distinctive visual identity with functional benefits</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Service 3 */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft border border-gold/10 p-6 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -skew-x-12 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="mb-4 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Electronic Component Overhaul & Calibration</h3>
            <p className="text-black/70 mb-6">
              Ensure reliable electronics and avionics systems with our comprehensive services.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>Flight Control System Diagnostics & Repair for smooth operation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>Sensor Calibration & Optimization for precise navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>Power System Overhaul for maximum endurance</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-gold">•</div>
                <span>Peak accuracy and efficiency with minimal downtime</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Advanced Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Training Services */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft border border-gold/10 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-48 relative">
              <img 
                src="/pilot3.webp" 
                alt="Drone Training Services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Training Services</h3>
                  <p className="text-white/80">Empower your team with technical expertise and flight mastery</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-sm mr-2">1</span>
                  Maintenance Training
                </h4>
                <ul className="space-y-2 pl-8">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-gold">•</div>
                    <span>Structural repairs and composite material handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-gold">•</div>
                    <span>Electronic diagnostics and troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-gold">•</div>
                    <span>Battery safety and power system maintenance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-sm mr-2">2</span>
                  Pilot Training
                </h4>
                <ul className="space-y-2 pl-8">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-gold">•</div>
                    <span>Basic & Advanced Flight Operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-gold">•</div>
                    <span>Autonomous & Manual Flight Controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-gold">•</div>
                    <span>Mission-Specific Training for various applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Consultancy Services */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft border border-gold/10 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-48 relative">
              <img 
                src="/pilot2.webp" 
                alt="Drone Consultancy Services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Consultancy & Advisory Services</h3>
                  <p className="text-white/80">Leverage our expertise for strategic implementation</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-blue-accent/10 text-blue-accent flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Strategic Consultancy</h4>
                    <p className="text-black/70">Expert guidance for operational efficiency and effectiveness across your UAS deployment</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-blue-accent/10 text-blue-accent flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Customized Solutions</h4>
                    <p className="text-black/70">Industry-specific approaches tailored to your unique operational needs</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-blue-accent/10 text-blue-accent flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Regulatory Compliance</h4>
                    <p className="text-black/70">Comprehensive support for navigating complex regulatory requirements and risk management</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-soft border border-gold/10 p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to elevate your drone operations?</h3>
          <p className="text-black/70 max-w-2xl mx-auto mb-8">
            Whether you need repairs, training, or comprehensive consultancy services, our team of experts is here to support your mission-critical activities.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-lg hover:bg-gold/90 transition-colors group">
            <span className="text-lg font-medium">Get in touch with our team</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 