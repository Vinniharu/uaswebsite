"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaTools, FaClock, FaCogs } from "react-icons/fa";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FaUserTie />,
      title: "Expert-Led Innovation",
      description:
        "Our team of seasoned engineers and UAV specialists bring decades of combined experience to every project.",
    },
    {
      icon: <FaTools />,
      title: "End-to-End Solutions",
      description:
        "From initial design to deployment and comprehensive support, we handle every aspect of your UAV requirements.",
    },
    {
      icon: <FaClock />,
      title: "Rapid Response Support",
      description:
        "Our dedicated support team ensures minimal operational downtime with swift, effective solutions.",
    },
    {
      icon: <FaCogs />,
      title: "Custom-Tailored Systems",
      description:
        "We develop bespoke solutions perfectly matched to your specific industry applications and needs.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        <div className="mb-12">
          <div className="eyebrow text-black/60 mb-3">// OPERATOR_ADVANTAGE</div>
          <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Why Briech
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-black/80 leading-relaxed text-lg mb-6">
              At Briech UAS, we&apos;re committed to excellence in every aspect
              of unmanned aerial systems. Our focus on innovation, quality, and
              client satisfaction sets us apart.
            </p>

            <div className="relative h-72 md:h-96 w-full overflow-hidden border border-black/15">
              <img
                src="/img/abt1.JPG"
                alt="Briech UAS facility"
                className="w-full h-full object-cover grayscale"
              />
              <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white" />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-3 backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-gold leading-none">
                  100%
                </div>
                <div className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] mt-1">
                  CLIENT_SATISFACTION = ATTAINED
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 border border-black/15">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 sm:p-8 group hover:bg-gold/10 transition-colors duration-300 ${
                    index % 2 === 0 ? "md:border-r" : ""
                  } ${index < 2 ? "border-b" : ""} border-black/15`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-black/55">
                      // {String(index + 1).padStart(3, "0")}
                    </span>
                    <span className="text-gold text-lg">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
