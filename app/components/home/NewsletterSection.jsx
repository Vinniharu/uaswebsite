"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow text-black/60 mb-3">// TRANSMIT_MESSAGE</div>
          <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Signal In
          </h2>
          <p className="mt-6 text-black/75 leading-relaxed text-lg max-w-xl">
            Subscribe for the latest in UAV innovations, mission updates, and
            company news from Briech UAS command.
          </p>

          <form onSubmit={handleSubscribe} className="mt-10 max-w-xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="OPERATOR_EMAIL"
                className="flex-grow px-4 py-3 bg-white border border-black/25 focus:outline-none focus:border-gold text-black placeholder:text-black/40 placeholder:font-mono placeholder:text-[12px] placeholder:tracking-[0.15em] transition-colors"
                disabled={isSubmitting || isSuccess}
              />
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="btn-bracket btn-bracket-solid-dark justify-center min-w-[180px]"
              >
                {isSubmitting
                  ? "TRANSMITTING…"
                  : isSuccess
                  ? "TRANSMITTED"
                  : "TRANSMIT"}
              </button>
            </div>

            {error && (
              <p className="text-red-600 mt-3 text-sm font-mono-tactical">
                {error}
              </p>
            )}
            {isSuccess && (
              <p className="text-gold mt-3 text-sm font-mono-tactical uppercase tracking-[0.15em]">
                SIGNAL_RECEIVED — STAND_BY
              </p>
            )}
            <p className="text-black/45 mt-4 text-[11px] font-mono-tactical uppercase tracking-[0.15em]">
              Privacy preserved. Disengage at any time.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
