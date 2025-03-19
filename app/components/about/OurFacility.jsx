'use client';

import { motion } from 'framer-motion';

const OurFacility = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold opacity-5 -skew-x-12 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-accent opacity-5 -skew-x-12 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
            Our <span className="text-gold">Facility</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto">
            We are building Africa's biggest drone manufacturing facility in Kuje, Abuja, Nigeria.
          </p>
        </motion.div>

        {/* Grid of facility features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Feature 1 */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-soft border border-gold/10 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="mb-4 text-gold text-5xl font-light">100K</div>
            <h3 className="text-xl font-semibold mb-2">Square Meters</h3>
            <p className="text-black/60 text-sm">
              100,000 sqm of land in Abuja, Nigeria for our state-of-the-art facility
            </p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-soft border border-gold/10 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="mb-4 text-gold text-5xl font-light">100M</div>
            <h3 className="text-xl font-semibold mb-2">Share Capital</h3>
            <p className="text-black/60 text-sm">
              One hundred million share capital private limited liability company
            </p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-soft border border-gold/10 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="mb-4 text-gold text-5xl font-light">$17.6M</div>
            <h3 className="text-xl font-semibold mb-2">Capital Employment</h3>
            <p className="text-black/60 text-sm">
              Capital employment of 17.6 Million Dollars for cutting-edge technology
            </p>
          </motion.div>
          
          {/* Feature 4 */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-soft border border-gold/10 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="mb-4 text-gold text-5xl font-light">700m</div>
            <h3 className="text-xl font-semibold mb-2">Runway</h3>
            <p className="text-black/60 text-sm">
              Will host a 700m runway, three factories, and a large 300 sqm hangar
            </p>
          </motion.div>
        </div>

        {/* Facility illustration/image */}
        <motion.div 
          className="relative h-[400px] rounded-lg overflow-hidden shadow-soft border border-gold/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src="/argini.webp" 
            alt="Briech UAS Facility Concept" 
            className="w-full h-full object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white max-w-2xl">
              <h3 className="text-2xl font-bold mb-2">Future-Ready Infrastructure</h3>
              <p className="opacity-80">
                Our facility is designed to support the most advanced automation technology and unmanned aircraft systems, setting new standards in Africa's aerospace sector.
              </p>
            </div>
          </div>
          
          {/* Animated elements */}
          <motion.div 
            className="absolute top-10 right-10 w-32 h-32"
            animate={{ 
              y: [0, -15, 0], 
              rotateZ: [0, 10, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <div className="w-full h-full border-2 border-dashed border-gold/30 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurFacility; 