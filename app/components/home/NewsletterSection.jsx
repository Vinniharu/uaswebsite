'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Mock API call - in production, connect to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </div>
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-accent/10 blur-3xl opacity-50"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--gold) 1px, transparent 1px),
            linear-gradient(to bottom, var(--gold) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Stay Updated With <span className="text-gold">Drone Technology</span> Advancements
          </h2>
          
          <p className="text-black/70 mb-10">
            Subscribe to our newsletter for the latest in UAV innovations, industry insights, and Briech UAS updates
          </p>
          
          <motion.form 
            onSubmit={handleSubscribe}
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative flex shadow-soft">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full glass-effect border border-gold/30 pl-5 pr-36 py-4 rounded-l focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 text-black placeholder:text-black/50"
                disabled={isSubmitting || isSuccess}
              />
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`absolute right-0 px-6 py-4 bg-gold text-white font-medium transition-all duration-300 rounded-r hover:shadow-gold flex items-center ${isSubmitting ? 'opacity-70' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    Subscribing...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center">
                    <FaPaperPlane className="mr-2" />
                    Subscribed!
                  </span>
                ) : (
                  <span className="flex items-center">
                    <FaPaperPlane className="mr-2" />
                    Subscribe
                  </span>
                )}
              </button>
            </div>
            
            {error && (
              <motion.p 
                className="text-red-500 mt-2 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.p>
            )}
            
            {isSuccess && (
              <motion.p 
                className="text-gold mt-2 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Thank you for subscribing! Check your email soon for updates.
              </motion.p>
            )}
            
            <p className="text-black/50 mt-4 text-xs">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection; 