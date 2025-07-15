"use client"
import { motion } from "framer-motion"

const ProductHero = () => {
  return (
    <motion.div
          className="text-center mb-16 pt-40 pb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-black">
            Our <span className="text-gold">Products</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto">
            Cutting-edge unmanned aerial systems designed for defense, security,
            and commercial applications.
          </p>
        </motion.div>
  )
}

export default ProductHero