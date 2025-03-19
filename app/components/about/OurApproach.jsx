'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const OurApproach = () => {
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
            <div className="relative h-[450px] w-full">
              {/* Pattern background instead of image */}
              <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-soft">
                <div className="glass-effect w-full h-full rounded-lg relative flex items-center justify-center">
                  {/* Background image */}
                  <img
                    src="/logo.webp"
                    alt="Briech UAS Headquarters"
                    className="w-full h-fit object-cover"
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
                  
                  {/* Floating tech elements */}
                  <motion.div 
                    className="absolute bottom-10 right-10 w-20 h-20"
                    animate={{ 
                      y: [0, -10, 0], 
                      rotateZ: [0, 5, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    <div className="w-full h-full rounded-full border-2 border-gold/50 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-full border-2 border-blue-accent/50 flex items-center justify-center">
                        <div className="w-1/2 h-1/2 rounded-full bg-gold/20"></div>
                      </div>
                    </div>
                  </motion.div>
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
          </motion.div>
          
          {/* Left side - Text content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">
              Our <span className="text-gold">Approach</span>
            </h2>
            
            <div className="w-20 h-1 bg-gold mb-8"></div>
            
            <motion.p 
              className="text-black/80 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our 'Smart UAV Technology' approach is primarily based on intensive customer interaction. We carefully listen to our customers and develop solutions based on their challenges.
            </motion.p>
            
            <motion.p 
              className="text-black/80 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Sometimes we find the right partners to integrate innovative technology, sometimes we develop new solutions ourselves based on existing and proven technologies.
            </motion.p>
            
            {/* Features */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <div className="text-gold text-2xl font-bold">01</div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Customer-Centric</h3>
                  <p className="text-black/60 text-sm">Solutions tailored to specific client needs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-gold text-2xl font-bold">02</div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Innovative Technology</h3>
                  <p className="text-black/60 text-sm">Cutting-edge tech integration</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-gold text-2xl font-bold">03</div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Strategic Partnerships</h3>
                  <p className="text-black/60 text-sm">Collaborations with industry leaders</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-gold text-2xl font-bold">04</div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Proven Solutions</h3>
                  <p className="text-black/60 text-sm">Built on tested and reliable frameworks</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach; 