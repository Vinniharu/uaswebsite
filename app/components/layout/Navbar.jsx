'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

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
      color: 'var(--gold)',
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-soft py-3' : 'bg-transparent py-5'
      }`}
      initial="initial"
      animate="animate"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
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
                    ? 'text-gold' 
                    : 'text-black/80 hover:text-black'
                  }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300
                    ${pathname === link.path 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                    }`}
                ></span>
              </Link>
            </motion.div>
          ))}
          {/* <motion.button
            variants={linkVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            custom={navLinks.length}
            className="px-5 py-2 bg-gold text-white font-medium transition duration-300 rounded-sm hover:shadow-gold"
          >
            Contact Us
          </motion.button> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black/80 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden glass-effect absolute top-full left-0 w-full py-5 shadow-soft"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg py-2 border-b border-gray-200 transition duration-200
                  ${pathname === link.path 
                    ? 'text-gold font-medium' 
                    : 'text-black/80 hover:text-gold'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {/* <Link
              href="/contact"
              className="inline-block text-center mt-4 px-5 py-2 bg-gold text-white hover:shadow-gold transition duration-300 rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link> */}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar; 