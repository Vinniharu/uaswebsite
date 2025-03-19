'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold opacity-5 -skew-x-12 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-accent opacity-5 -skew-x-12 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4">
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
                <div className="glass-effect w-full h-full rounded-lg relative">
                  {/* Background image */}
                  <Image 
                    src="/bgdrone.webp" 
                    alt="Drone background" 
                    fill 
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
                  
                  {/* Gold circuit-like pattern */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(to right, var(--gold) 1px, transparent 1px),
                      linear-gradient(to bottom, var(--gold) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    opacity: 0.15
                  }}></div>
                  
                  {/* Floating drone silhouette */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-20"
                    animate={{ 
                      y: [0, -10, 0], 
                      rotateZ: [0, 2, 0, -2, 0],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute w-20 h-4 bg-gold/30 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-sm"></div>
                      <div className="absolute w-36 h-2 bg-blue-accent/20 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 blur-sm"></div>
                      <div className="absolute w-16 h-4 bg-gold rounded-lg left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">
              About <span className="text-gold">Briech UAS</span>
            </h2>
            
            <div className="w-20 h-1 bg-gold mb-8"></div>
            
            <motion.p 
              className="text-black/80 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Briech UAS is a leading manufacturer of unmanned aerial vehicles registered in Nigeria in 2021. We are committed to becoming a world-leading robotic aerial surveillance company, building Africa's biggest drone manufacturing facility in Kuje, Abuja.
            </motion.p>
            
            <motion.p 
              className="text-black/80 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our customer-centric approach focuses on solving individual customer needs and adjusting our UAS designs to critical mission particularities.
            </motion.p>
            
            {/* Stats in gold boxes */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect border border-gold/30 p-4 text-center rounded shadow-gold">
                <div className="text-gold text-2xl font-bold">2021</div>
                <div className="text-black/60 text-sm">Established</div>
              </div>
              <div className="glass-effect border border-gold/30 p-4 text-center rounded shadow-gold">
                <div className="text-gold text-2xl font-bold">5+</div>
                <div className="text-black/60 text-sm">Drone Models</div>
              </div>
              <div className="glass-effect border border-gold/30 p-4 text-center rounded shadow-gold">
                <div className="text-gold text-2xl font-bold">100%</div>
                <div className="text-black/60 text-sm">Nigerian Made</div>
              </div>
              <div className="glass-effect border border-gold/30 p-4 text-center rounded shadow-gold">
                <div className="text-gold text-2xl font-bold">24/7</div>
                <div className="text-black/60 text-sm">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 