"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

export default function Portfolio() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6
      }
    }
  };

  // Replace random particles with fixed predetermined positions
  const particles = useMemo(() => [
    { left: 20.45, top: 30.25, duration: 5.5, delay: 0.2, opacity: "70" },
    { left: 85.12, top: 15.87, duration: 4.8, delay: 0.4, opacity: "50" },
    { left: 40.36, top: 80.93, duration: 6.2, delay: 0.6, opacity: "40" },
    { left: 10.78, top: 60.14, duration: 5.3, delay: 0.8, opacity: "70" },
    { left: 70.29, top: 45.65, duration: 7.1, delay: 1.0, opacity: "50" },
    { left: 15.53, top: 10.42, duration: 4.9, delay: 1.2, opacity: "40" },
    { left: 50.81, top: 35.17, duration: 6.4, delay: 1.4, opacity: "70" },
    { left: 8.23, top: 90.56, duration: 5.8, delay: 1.6, opacity: "50" },
    { left: 35.69, top: 50.38, duration: 7.3, delay: 1.8, opacity: "40" },
    { left: 55.94, top: 85.27, duration: 6.7, delay: 2.0, opacity: "70" },
    { left: 25.41, top: 25.76, duration: 5.2, delay: 2.2, opacity: "50" },
    { left: 90.37, top: 12.18, duration: 7.5, delay: 2.4, opacity: "40" },
    { left: 42.84, top: 75.49, duration: 6.1, delay: 2.6, opacity: "70" },
    { left: 75.16, top: 70.83, duration: 5.7, delay: 2.8, opacity: "50" },
    { left: 5.62, top: 55.91, duration: 6.9, delay: 3.0, opacity: "40" },
  ], []);

  // Project data
  const projects = [
    {
      id: "akk-pipeline",
      title: "NNPC AKK Pipeline Surveillance",
      description: "Comprehensive security for the Ajaokuta-Kaduna-Kano (AKK) Gas Pipeline, a critical 614-kilometer infrastructure asset vital to Nigeria's energy security.",
      points: [
        "Pipeline vandalism",
        "Illegal tapping operations",
        "Environmental hazards"
      ],
      summary: "Using state-of-the-art real-time data analytics and AI-powered threat detection, we ensure the operational integrity of this crucial national asset, supporting uninterrupted power generation and industrial development across Nigeria.",
      image: "/images/pipe.png", // Image placeholder
      altText: "Drone monitoring AKK pipeline"
    },
    {
      id: "dss-operations",
      title: "DSS Intelligence & Surveillance Operations",
      description: "In collaboration with the Department of State Services (DSS), Briech UAS executes high-value Intelligence, Surveillance, and Reconnaissance (ISR) operations in North East Nigeria.",
      points: [
        "Persistent surveillance in challenging environments",
        "Real-time tracking of hostile movements",
        "Enhanced border security",
        "Critical intelligence for counter-terrorism operations"
      ],
      summary: "This strategic partnership equips the DSS with actionable intelligence that enables rapid response capabilities and precision operations in high-threat environments.",
      image: "/images/dss.png", // Image placeholder
      altText: "Drone providing intelligence surveillance"
    },
    {
      id: "niger-delta",
      title: "Nigerian Air Force Niger Delta Security Initiative",
      description: "Supporting the Nigerian Air Force (NAF) in the strategically important Niger Delta region, our specialized drones protect vital oil and gas infrastructure from sabotage, illegal bunkering, and militant activity.",
      points: [
        "Covert aerial reconnaissance",
        "Real-time threat mapping and visualization",
        "Intelligence for pre-emptive operations",
        "Support for rapid deployment strategies"
      ],
      summary: "Our multi-spectral imaging and night-vision capabilities ensure continuous situational awareness in this challenging operational environment, 24 hours a day.",
      image: "/images/niger.png", // Image placeholder
      altText: "Drone monitoring Niger Delta region"
    },
    {
      id: "army-support",
      title: "Nigerian Army Tactical Support Program",
      description: "As a trusted partner of the Nigerian Army, Briech UAS delivers battlefield intelligence and tactical reconnaissance across North East, West, and Central Nigeria.",
      points: [
        "Advanced border surveillance systems",
        "Convoy protection operations",
        "Counterinsurgency mission support",
        "Urban security and monitoring"
      ],
      summary: "Equipped with high-resolution electro-optical and infrared sensors, our fleet identifies potential threats, tracks suspicious movements, and provides ground forces with the actionable intelligence needed for mission success.",
      image: "/images/army.png", // Image placeholder
      altText: "Drone supporting military operations"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5" 
            style={{
              backgroundImage: `linear-gradient(30deg, var(--gold) 1px, transparent 1px),
                              linear-gradient(150deg, var(--gold) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
              backgroundPosition: '0 0, 40px 40px'
            }}>
          </div>
          
          {/* Gold accent lines */}
          <motion.div 
            className="absolute left-0 top-1/4 w-full h-[1px] bg-gold/30"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          ></motion.div>
          <motion.div 
            className="absolute right-0 bottom-1/4 w-full h-[1px] bg-gold/20"
            initial={{ width: 0, opacity: 0, x: '100%' }}
            animate={{ width: '100%', opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          ></motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full bg-gold/${particle.opacity}`}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block bg-white/60 backdrop-blur-sm p-2 mb-4 rounded-sm shadow-soft">
              <span className="text-sm font-medium text-gold uppercase tracking-wider">Our Strategic Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our <span className="text-gold">Portfolio</span>
            </h1>
            <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-black/80 mb-0">
              At Briech UAS, we deliver cutting-edge Unmanned Aerial Systems (UAS) solutions for mission-critical national security and infrastructure projects. Our expertise in intelligence, surveillance, and reconnaissance (ISR) operations provides real-time aerial intelligence that supports strategic decision-making across multiple sectors.
            </p>
          </motion.div>
        </div>

        {/* Flying drone illustration */}
        <motion.div
          className="absolute right-[5%] top-[30%] w-32 h-32 opacity-80 hidden md:block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="relative">
            <div className="absolute w-20 h-6 bg-gold/20 rounded-full transform rotate-45 blur-sm"></div>
            <div className="absolute w-16 h-2 bg-gold/30 rounded-full transform -rotate-45 blur-sm left-8 top-3"></div>
            <motion.div 
              className="absolute w-8 h-3 bg-gold rounded-lg left-6 top-2 z-10"
              animate={{ rotateZ: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="absolute w-10 h-1 bg-gold/80 rounded-full left-10 top-2 transform rotate-45"
              animate={{ width: [10, 15, 10] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="absolute w-10 h-1 bg-gold/80 rounded-full left-1 top-2 transform -rotate-45"
              animate={{ width: [10, 15, 10] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 relative bg-gray-light">
        <div className="absolute top-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        <div className="absolute bottom-0 right-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
        
        <div className="container mx-auto px-4 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Featured <span className="text-gold">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative glass-effect rounded-lg overflow-hidden hover:shadow-gold transition-all duration-300 border border-gold/20"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>
                  {/* Image Section */}
                  <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 z-10 opacity-40"></div>
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(var(--gold) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                      opacity: 0.3,
                      zIndex: 5
                    }}></div>
                    
                    {/* Image Placeholder - Use actual images when available */}
                    <div className="absolute inset-0 bg-black/10 z-[1]">
                      <div className="w-full h-full relative">
                        {/* This is a fallback pattern in case images don't load */}
                        <div className="absolute inset-0 opacity-70" style={{
                          backgroundImage: index % 2 === 0 
                            ? `linear-gradient(45deg, var(--gold-dark) 25%, transparent 25%, transparent 75%, var(--gold-dark) 75%, var(--gold-dark))`
                            : `linear-gradient(135deg, var(--gold-dark) 25%, transparent 25%, transparent 75%, var(--gold-dark) 75%, var(--gold-dark))`,
                          backgroundSize: '30px 30px'
                        }}></div>
                        
                        {/* Actual images */}
                        <Image 
                          src={project.image}
                          alt={project.altText}
                          fill
                          priority={index < 2}
                          style={{
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                        />
                        
                        {/* Overlay gradient for better text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-[2]"></div>
                      </div>
                    </div>
                    
                    {/* Gold accent corner */}
                    <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-20 h-20 z-20`}>
                      <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-full h-full border-t-2 border-r-2 border-gold opacity-60`}></div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8">
                    <div className="h-full flex flex-col">
                      <h3 className="text-2xl font-bold mb-4 text-black flex items-center">
                        <span className="text-gold mr-2">⬡</span>
                        {project.title}
                      </h3>
                      
                      <p className="text-black/80 mb-6">{project.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="w-4 h-[2px] bg-gold mr-2"></span>
                          Key Focus Areas
                        </h4>
                        <ul className="space-y-2">
                          {project.points.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-gold mr-2">▹</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <p className="text-black/80 mt-auto">
                        {project.summary}
                      </p>
                      
                      {/* Decorative elements */}
                      <div className={`absolute ${index % 2 === 0 ? 'bottom-0 left-0' : 'bottom-0 right-0'} w-16 h-16 opacity-10`}>
                        <div className={`absolute ${index % 2 === 0 ? 'bottom-0 left-0' : 'bottom-0 right-0'} w-full h-full border-b-2 border-l-2 border-gold`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Beyond the Horizon Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5" 
            style={{
              backgroundImage: `radial-gradient(var(--gold) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Beyond the <span className="text-gold">Horizon</span>
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-black/80 mb-8">
              Briech UAS continues to pioneer next-generation drone technology to address Nigeria's evolving security landscape. Our commitment to innovation, precision, and national defense positions us as the leading force in UAS-driven surveillance and intelligence solutions.
            </p>
            <p className="text-lg text-black/80 mb-8">
              Through these projects and more, we remain dedicated to securing Nigeria's future—one flight at a time.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/products">
                <button className="px-8 py-4 bg-gold text-white font-medium rounded hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center group">
                  Explore Our Solutions
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white border border-gold text-gold font-medium rounded hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center group">
                  Contact Us For Partnership
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

