'use client';

import { motion } from 'framer-motion';

const OurTeam = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold opacity-5 -skew-x-12 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-accent opacity-5 -skew-x-12 -translate-x-1/4"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Our <span className="text-gold">Team</span>
          </h2>
          <div className="w-32 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-black/70 max-w-3xl mx-auto text-lg">
            At Briech UAS, we bring together a fully integrated team of specialists to deliver cutting-edge drone technology and unparalleled operational support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Engineering & Technical Team */}
          <motion.div
            className="group relative rounded-xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black">Engineering & Technical Team</h3>
            <ul className="space-y-3 text-black/70">
              <li>• Aeronautical, mechanical, and electrical engineers</li>
              <li>• Comprehensive R&D support</li>
              <li>• Custom drone solution development</li>
            </ul>
          </motion.div>

          {/* Certified Drone Pilots */}
          <motion.div
            className="group relative rounded-xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-blue-accent/10 flex items-center justify-center mb-6 group-hover:bg-blue-accent/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black">Certified Drone Pilots & Flight Operations</h3>
            <ul className="space-y-3 text-black/70">
              <li>• Highly trained and certified UAV pilots</li>
              <li>• Experience in various terrains and environments</li>
              <li>• Specialized flight training programs</li>
            </ul>
          </motion.div>

          {/* Assembly & Maintenance */}
          <motion.div
            className="group relative rounded-xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black">Assembly & Maintenance Technicians</h3>
            <ul className="space-y-3 text-black/70">
              <li>• Experts in drone assembly and repair</li>
              <li>• Comprehensive inventory management</li>
              <li>• Emergency troubleshooting and upgrades</li>
            </ul>
          </motion.div>

          {/* Consultancy */}
          <motion.div
            className="group relative rounded-xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-blue-accent/10 flex items-center justify-center mb-6 group-hover:bg-blue-accent/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black">Consultancy & Advisory Specialists</h3>
            <ul className="space-y-3 text-black/70">
              <li>• Strategic consultancy services</li>
              <li>• Industry-specific solutions</li>
              <li>• Regulatory compliance and risk management</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;