'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaArrowLeft } from 'react-icons/fa';

const DroneNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  // Split the pathname to detect if we're in a drones page
  const pathSegments = pathname.split('/');
  const droneId = pathSegments.length > 2 && pathSegments[1] === 'drones' ? pathSegments[2] : null;

  // Determine the accent color based on current drone
  let accentColor = '#D4AF37'; // default gold color

  // This is a fallback - we should ideally get this from the drone data
  if (droneId) {
    switch (droneId) {
      case 'damisa':
        accentColor = '#db3a34'; // Red-ish
        break;
      case 'argini':
        accentColor = '#3d5a80'; // Blue-ish
        break;
      case 'arsenio':
        accentColor = '#415a77'; // Darker blue
        break;
      case 'xander':
        accentColor = '#38b000'; // Green
        break;
      case 'bfly':
        accentColor = '#ffb703'; // Gold/yellow
        break;
      default:
        accentColor = '#D4AF37'; // default gold
    }
  }

  const navbarVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const linkVariants = {
    initial: { opacity: 0, y: -5 },
    animate: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3, 
        delay: 0.3 + (i * 0.1) 
      } 
    }),
    hover: { 
      scale: 1.05, 
      color: accentColor,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.header
      className="fixed w-full z-50 transition-all duration-300 bg-black/40 border-b border-white/10 py-3"
      initial="initial"
      animate="animate"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Back Button */}
        {/* <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <Link href="/products" className="flex items-center group mr-6">
            <FaArrowLeft 
              className="text-white/80 group-hover:text-white mr-2" 
              style={{ transition: 'color 0.2s' }}
            />
            <span className="text-white/80 group-hover:text-white text-sm" style={{ transition: 'color 0.2s' }}>
              Return to Main Site
            </span>
          </Link>
        </motion.div> */}

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="/logo.webp"
            alt="Briech UAS"
            width={160}
            height={160}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <Link
                href={link.path}
                className={`uppercase tracking-wider text-sm font-medium relative group
                  ${pathname === link.path 
                    ? 'text-white' 
                    : 'text-white/70 hover:text-white'
                  }`}
                style={pathname === link.path ? { color: accentColor } : {}}
              >
                {link.name}
                <span 
                  className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300 w-0 group-hover:w-full"
                  style={{ backgroundColor: accentColor }}
                ></span>
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            variants={linkVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            custom={navLinks.length}
          >
            <Link 
              href="/contact"
              className="px-5 py-2 text-black font-medium transition duration-300 rounded-sm"
              style={{ 
                backgroundColor: accentColor,
                boxShadow: `0 0 15px ${accentColor}50`
              }}
            >
              Request Info
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white/80 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-black/95 absolute top-full left-0 w-full py-5 shadow-md border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/products"
              className="text-lg py-2 border-b border-white/10 flex items-center transition duration-200 text-white/70 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaArrowLeft className="mr-2" />
              Return to Main Site
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg py-2 border-b border-white/10 transition duration-200
                  ${pathname === link.path 
                    ? 'font-medium' 
                    : 'text-white/70 hover:text-white'
                  }`}
                style={pathname === link.path ? { color: accentColor } : {}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-block text-center mt-4 px-5 py-2 text-black font-medium transition duration-300 rounded-sm"
              style={{ 
                backgroundColor: accentColor,
                boxShadow: `0 0 15px ${accentColor}50`
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Info
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default DroneNavbar; 