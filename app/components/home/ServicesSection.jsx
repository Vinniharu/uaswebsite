"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaTools,
  FaWrench,
  FaLayerGroup,
  FaMicrochip,
  FaPaintRoller,
  FaUserGraduate,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaTools className="text-2xl" />,
      title: "Drone Manufacturing",
      description:
        "End-to-end production of unmanned aerial systems using cutting-edge techniques.",
    },
    {
      icon: <FaWrench className="text-2xl" />,
      title: "Maintenance & Repair",
      description:
        "Regular servicing and repairs to ensure optimal performance and extended life.",
    },
    {
      icon: <FaLayerGroup className="text-2xl" />,
      title: "Structural Repairs",
      description:
        "Expert restoration of carbon fiber, fiberglass, and composite components.",
    },
    {
      icon: <FaMicrochip className="text-2xl" />,
      title: "Component Calibration",
      description:
        "Precision calibration of sensors, flight controllers, and avionics.",
    },
    {
      icon: <FaPaintRoller className="text-2xl" />,
      title: "Custom Branding",
      description:
        "Bespoke finishing and painting options to match organizational identity.",
    },
    {
      icon: <FaUserGraduate className="text-2xl" />,
      title: "Training Programs",
      description:
        "Comprehensive training for operators, engineers, and mission planners.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        <div className="mb-12">
          <div className="eyebrow text-black/60 mb-3">// MISSION_SUPPORT</div>
          <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Services
          </h2>
          <p className="mt-6 text-black/75 max-w-2xl leading-relaxed">
            Supporting the full lifecycle of unmanned aerial systems — from
            manufacture to maintenance, calibration to crew training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black/15">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-8 border-black/15 group hover:bg-black hover:text-white transition-colors duration-300 ${
                index % 3 !== 2 ? "lg:border-r" : ""
              } ${
                index < services.length - 3 ? "lg:border-b" : ""
              } ${
                index % 2 === 0 ? "md:border-r lg:border-r" : ""
              } border-b last:border-b-0 md:border-b`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] opacity-60">
                  // {String(index + 1).padStart(3, "0")}
                </span>
                <span className="text-gold">{service.icon}</span>
              </div>
              <h3 className="text-xl font-extrabold uppercase tracking-tight mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm opacity-75 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/contact" className="btn-bracket btn-bracket-dark">
            REQUEST CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
