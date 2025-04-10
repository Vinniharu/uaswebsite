"use client";

import { motion } from "framer-motion";

const MediaContact = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gold opacity-5 -skew-x-12 translate-x-1/4"></div>
      <div className="absolute top-0 left-0 w-1/5 h-1/3 bg-blue-accent opacity-5 -skew-x-12 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">
            Media <span className="text-gold">Contact</span>
          </h2>
          <div className="w-20 h-1 bg-gold mb-8"></div>
          <p className="text-black/70 max-w-3xl">
            For press inquiries, interview requests, or additional information, please contact our press team.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect border border-gold/20 rounded-lg p-8 shadow-soft h-full">
              <h3 className="text-2xl font-bold text-black mb-6">Press Inquiries</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gold font-medium mb-1">Media Relations</p>
                  <p className="text-black/80">Sarah Johnson</p>
                  <p className="text-black/80">Director of Communications</p>
                </div>
                
                <div>
                  <p className="text-gold font-medium mb-1">Email</p>
                  <p className="text-black/80">press@briechuas.com</p>
                </div>
                
                <div>
                  <p className="text-gold font-medium mb-1">Phone</p>
                  <p className="text-black/80">+234 (0) 123 456 7890</p>
                </div>
                
                <div>
                  <p className="text-gold font-medium mb-1">Office Hours</p>
                  <p className="text-black/80">Monday-Friday: 9:00 AM - 5:00 PM WAT</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect border border-gold/20 rounded-lg p-8 shadow-soft h-full">
              <h3 className="text-2xl font-bold text-black mb-6">Media Resources</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gold font-medium mb-1">Press Kit</p>
                  <p className="text-black/80 mb-2">
                    Download our press kit containing logos, high-resolution images, and company information.
                  </p>
                  <button className="inline-flex items-center justify-center px-4 py-2 border border-gold text-gold bg-transparent hover:bg-gold hover:text-white transition-colors duration-300 rounded-md text-sm font-medium">
                    Download Press Kit
                  </button>
                </div>
                
                <div>
                  <p className="text-gold font-medium mb-1">Product Images</p>
                  <p className="text-black/80 mb-2">
                    Access high-resolution images of our unmanned aerial vehicles and systems.
                  </p>
                  <button className="inline-flex items-center justify-center px-4 py-2 border border-gold text-gold bg-transparent hover:bg-gold hover:text-white transition-colors duration-300 rounded-md text-sm font-medium">
                    View Image Gallery
                  </button>
                </div>
                
                <div>
                  <p className="text-gold font-medium mb-1">Brand Guidelines</p>
                  <p className="text-black/80 mb-2">
                    Information on proper usage of Briech UAS branding elements.
                  </p>
                  <button className="inline-flex items-center justify-center px-4 py-2 border border-gold text-gold bg-transparent hover:bg-gold hover:text-white transition-colors duration-300 rounded-md text-sm font-medium">
                    View Brand Guidelines
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaContact; 