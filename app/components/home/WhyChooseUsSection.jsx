'use client';

import { motion } from 'framer-motion';
import { FaUserTie, FaTools, FaClock, FaCogs } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FaUserTie />,
      title: 'Expert-Led Innovation',
      description: 'Our team of seasoned engineers and UAV specialists bring decades of combined experience to every project.'
    },
    {
      icon: <FaTools />,
      title: 'End-to-End Solutions',
      description: 'From initial design to deployment and comprehensive support, we handle every aspect of your UAV requirements.'
    },
    {
      icon: <FaClock />,
      title: 'Rapid Response Support',
      description: 'Our dedicated support team ensures minimal operational downtime with swift, effective solutions.'
    },
    {
      icon: <FaCogs />,
      title: 'Custom-Tailored Systems',
      description: 'We develop bespoke solutions perfectly matched to your specific industry applications and needs.'
    }
  ];

  return (
    <section className="py-24 relative bg-gray-light overflow-hidden">
      {/* Diagonal background element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-blue-accent/5 skew-y-12 transform origin-top-right"></div>
      </div>
      
      {/* Alternating line pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute h-px bg-gold/50"
            style={{
              top: `${(i * 5) + 2}%`,
              left: i % 2 === 0 ? '0' : '50%',
              width: i % 2 === 0 ? '40%' : '30%'
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Why Choose <span className="text-gold">Briech UAS</span>
            </h2>
            <div className="w-20 h-1 bg-gold mb-8"></div>
            <p className="text-black/70 mb-10 leading-relaxed">
              At Briech UAS, we're committed to excellence in every aspect of unmanned aerial systems. Our focus on innovation, quality, and client satisfaction sets us apart in the industry.
            </p>
            
            {/* Features list */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-soft border border-gold/30 flex items-center justify-center text-gold">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                    <p className="text-black/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right side - Image/Decorative element */}
          <motion.div 
            className="lg:w-1/2 relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] max-w-md mx-auto">
              {/* Main image background - replaced with gradient */}
              <div className="absolute inset-0 glass-effect bg-gradient-to-br from-white to-gray-light rounded-lg overflow-hidden shadow-soft">
                {/* Background image */}
                <div className="absolute inset-0">
                  <img 
                    src="/uavcareer.webp" 
                    alt="UAV Career" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="w-full h-full opacity-40 mix-blend-overlay" style={{
                  background: `linear-gradient(45deg, var(--gold-light) 0%, var(--white) 100%)`,
                }}>
                  {/* Circuit-like pattern */}
                  <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: `
                      linear-gradient(to right, var(--gold) 1px, transparent 1px),
                      linear-gradient(to bottom, var(--gold) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>
              </div>
              
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 35%, var(--gold) 0.5px, transparent 1px),
                    radial-gradient(circle at 75% 44%, var(--gold) 0.5px, transparent 1px),
                    radial-gradient(circle at 46% 60%, var(--gold) 0.5px, transparent 1px)`,
                  backgroundSize: '60px 60px'
                }}></div>
              </div>
              
              {/* Animated border */}
              <motion.div 
                className="absolute inset-0 border-2 border-gold/30 rounded-lg"
                animate={{ 
                  boxShadow: ['0 0 0 rgba(212, 175, 55, 0)', '0 0 15px rgba(212, 175, 55, 0.3)', '0 0 0 rgba(212, 175, 55, 0)'] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              ></motion.div>
              
              {/* Gold accents */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold"></div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-gold"></div>
              
              {/* Tech element */}
              <div className="absolute top-1/4 right-0 transform translate-x-1/2 glass-effect p-4 rounded border border-gold/30 shadow-soft">
                <div className="text-gold text-xs">ADVANCED TECHNOLOGY</div>
                <div className="w-full h-px bg-gold/50 my-2"></div>
                <div className="text-black/70 text-sm">Next-Gen UAV Systems</div>
              </div>
              
              {/* Performance element */}
              <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 glass-effect p-4 rounded border border-gold/30 shadow-soft">
                <div className="text-gold text-xs">PERFORMANCE</div>
                <div className="w-full h-px bg-gold/50 my-2"></div>
                <div className="text-black/70 text-sm">Industry-Leading Capabilities</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 