"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { mediaCoverage } from "@/app/data/press";

export default function MediaPage() {
  return (
    <div className="min-h-screen py-24 pt-40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-black">
            Featured <span className="text-gold">Press Coverage</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto">
            Briech UAS featured in leading publications and media outlets across Nigeria and Africa.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaCoverage.map((article, index) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.1 }}
                className="glass-effect border border-gold/10 rounded-lg p-6 shadow-soft hover:shadow-gold transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-2">
                  <div className="text-sm font-medium text-gold">{article.publication}</div>
                  <div className="text-xs text-black/40">{article.date}</div>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-3 flex-grow">
                  {article.title}
                </h3>
                
                <div className="flex items-center text-gold mt-2">
                  <span className="text-sm font-medium">Read Article</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link 
              href="/press" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gold text-gold bg-transparent hover:bg-gold hover:text-white transition-colors duration-300 rounded-md font-medium"
            >
              Back to Press Page
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
