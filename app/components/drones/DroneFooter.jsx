"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DroneFooter = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const droneId = pathSegments.length > 2 && pathSegments[1] === 'drones' ? pathSegments[2] : null;

  // Determine the accent color based on current drone
  let accentColor = '#D4AF37'; // default gold color

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

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="inline-block">
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
            <p className="text-white/70 text-sm">
              Africa's Premier Unmanned Aerial Systems Manufacturer delivering
              cutting-edge drone technology for commercial, security, and
              defense operations.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-medium" style={{ color: accentColor }}>Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-medium" style={{ color: accentColor }}>Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/drones/damisa"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Damisa Combat Drone
                </Link>
              </li>
              <li>
                <Link
                  href="/drones/argini"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Argini Reconnaissance Drone
                </Link>
              </li>
              <li>
                <Link
                  href="/drones/arsenio"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Arsenio Reconnaissance Drone
                </Link>
              </li>
              <li>
                <Link
                  href="/drones/xander"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Xander Reconnaissance Drone
                </Link>
              </li>
              <li>
                <Link
                  href="/drones/bfly"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Bfly Reconnaissance Drone
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-medium" style={{ color: accentColor }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt style={{ color: accentColor }} className="mt-1 flex-shrink-0" />
                <span className="text-white/70">Kuje, Abuja, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone style={{ color: accentColor }} className="flex-shrink-0" />
                <span className="text-white/70">+234 803 2027 605</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope style={{ color: accentColor }} className="flex-shrink-0" />
                <span className="text-white/70">marketing@briechuas.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Briech UAS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-white/50 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/50 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default DroneFooter; 