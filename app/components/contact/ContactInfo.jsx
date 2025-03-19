'use client';

import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-slate-50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gold opacity-5 skew-x-12 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-blue-accent opacity-5 skew-x-12 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
            Contact <span className="text-gold">Information</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Section */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft p-6 border border-gold/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-gold mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Email</h3>
            <ul className="space-y-3">
              <li>
                <h4 className="font-medium text-black/70">General Inquiries:</h4>
                <a href="mailto:marketing@briechuas.com" className="text-blue-accent hover:text-gold transition-colors">
                  marketing@briechuas.com
                </a>
              </li>
              <li>
                <h4 className="font-medium text-black/70">Service Center:</h4>
                <a href="mailto:servicecentre@briechuas.com" className="text-blue-accent hover:text-gold transition-colors">
                  servicecentre@briechuas.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Phone Section */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft p-6 border border-gold/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-gold mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Phone</h3>
            <div className="text-center">
              <a href="tel:+2348032027605" className="text-blue-accent hover:text-gold transition-colors text-lg">
                +234 803 2027 605
              </a>
            </div>
          </motion.div>

          {/* Location Section */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft p-6 border border-gold/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-gold mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Location</h3>
            <p className="text-center text-black/70">
              Kuje FCT, Abuja, Nigeria
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo; 