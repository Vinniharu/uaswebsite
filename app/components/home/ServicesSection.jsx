'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaTools, FaWrench, FaLayerGroup, FaMicrochip, FaPaintRoller, FaUserGraduate } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaTools className="text-4xl" />,
      title: 'Advanced Drone Assembly & Manufacturing',
      description: 'End-to-end production of unmanned aerial systems using cutting-edge techniques and materials.'
    },
    {
      icon: <FaWrench className="text-4xl" />,
      title: 'Comprehensive Maintenance & Repair',
      description: 'Regular servicing and repairs to ensure optimal performance and extended operational life.'
    },
    {
      icon: <FaLayerGroup className="text-4xl" />,
      title: 'Structural Repairs of Composite Materials',
      description: 'Expert restoration of carbon fiber, fiberglass, and other advanced composite components.'
    },
    {
      icon: <FaMicrochip className="text-4xl" />,
      title: 'Electronic Component Overhaul & Calibration',
      description: 'Precision calibration and repair of sensors, flight controllers, and communication systems.'
    },
    {
      icon: <FaPaintRoller className="text-4xl" />,
      title: 'Bespoke Painting & Branding',
      description: 'Custom finishing options to match organizational requirements and operational environments.'
    },
    {
      icon: <FaUserGraduate className="text-4xl" />,
      title: 'Specialized Training Programs',
      description: 'Comprehensive training for operators, maintenance personnel, and mission planners.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-accent/5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Our <span className="text-gold">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-black/70 max-w-2xl mx-auto">
            We provide comprehensive support across the full lifecycle of unmanned aerial systems, from design and manufacturing to maintenance and training.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="glass-effect border border-gold/20 rounded-lg p-8 hover:border-gold/50 transition-all duration-300 relative group shadow-soft hover:shadow-gold"
              variants={itemVariants}
            >
              {/* Background highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              {/* Service content */}
              <div className="relative z-10">
                <div className="text-gold mb-6 group-hover:opacity-100 transition-opacity duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors duration-300 text-black">
                  {service.title}
                </h3>
                <p className="text-black/70 mb-6">
                  {service.description}
                </p>
                
                {/* Animated line */}
                <motion.div 
                  className="h-[2px] bg-gold/50 w-12 group-hover:w-24 transition-all duration-300"
                ></motion.div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-16 h-16 transform rotate-45 translate-x-8 translate-y-8 bg-gold/20 group-hover:bg-gold/30 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/contact">
            <button className="px-8 py-4 bg-gold text-white font-medium rounded transition-all duration-300 group flex items-center mx-auto hover:shadow-gold">
              Learn More About Our Services
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 