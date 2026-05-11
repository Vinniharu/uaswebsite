"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const OurApproach = () => {
  const features = [
    {
      title: "Customer-Centric",
      description: "Solutions tailored to specific client needs and mission particularities.",
    },
    {
      title: "Innovative Technology",
      description: "Cutting-edge tech integration across hardware, autonomy, and sensors.",
    },
    {
      title: "Strategic Partnerships",
      description: "Collaborations with industry leaders to extend operational reach.",
    },
    {
      title: "Proven Solutions",
      description: "Built on tested and reliable frameworks battle-validated in the field.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        {/* SECTION HEADER */}
        <div className="mb-12">
          <div className="eyebrow text-black/60 mb-3">// OPERATIONAL_DOCTRINE</div>
          <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* IMAGE PANEL */}
          <motion.div
            className="lg:col-span-7 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[420px] md:h-[520px] w-full bg-neutral-100 overflow-hidden border border-black/10">
              <Image
                src="/img/ee.JPG"
                alt="Briech UAS engineering"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
              <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white" />
              <div className="absolute top-3 right-4 hud-list text-white/85">
                <div>
                  DOCTRINE = <span className="text-gold">SMART_UAV</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="lg:col-span-5 order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-6">
              Smart UAV Technology
            </h3>

            <p className="text-black/80 mb-5 leading-relaxed text-lg">
              Our &lsquo;Smart UAV Technology&rsquo; approach is primarily
              based on intensive customer interaction. We carefully listen to
              our customers and develop solutions based on their challenges.
            </p>

            <p className="text-black/65 leading-relaxed">
              Sometimes we find the right partners to integrate innovative
              technology, sometimes we develop new solutions ourselves based
              on existing and proven technologies.
            </p>
          </motion.div>
        </div>

        {/* feature grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 border border-black/15">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 sm:p-8 hover:bg-gold/10 transition-colors duration-300 ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index < features.length - 2 ? "md:border-b" : ""} border-black/15 ${
                index < features.length - 1 ? "border-b md:border-b" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-black/55">
                  // {String(index + 1).padStart(3, "0")}
                </span>
                <span className="status-dot" />
              </div>
              <h4 className="text-lg md:text-xl font-extrabold uppercase tracking-tight mb-3 leading-snug">
                {feature.title}
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
