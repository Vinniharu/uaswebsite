"use client";

import { motion } from "framer-motion";

const ContactInfo = () => {
  const channels = [
    {
      label: "// EMAIL",
      heading: "General Inquiries",
      value: "Info@briechuas.com",
      href: "mailto:Info@briechuas.com",
      meta: "RESPONSE_WINDOW = 24H",
    },
    {
      label: "// PHONE",
      heading: "Direct Line",
      value: "+234 803 2027 605",
      href: "tel:+2348032027605",
      meta: "OPS_HOURS = 0900–1800_WAT",
    },
    {
      label: "// LOCATION",
      heading: "Forward Operating Base",
      value: "Kuje FCT, Abuja, Nigeria",
      href: null,
      meta: "COORDS = 9.0820°N_7.2476°E",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
      <div className="px-4 md:px-8">
        <div className="mb-12">
          <div className="eyebrow text-black/60 mb-3">// COMMAND_CHANNELS</div>
          <h2 className="bracket-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            Contact Information
          </h2>
          <p className="mt-6 text-black/75 max-w-2xl leading-relaxed">
            Three direct channels into Briech command. Every inquiry is
            triaged within one operational cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-black/15">
          {channels.map((channel, i) => (
            <motion.div
              key={i}
              className={`p-8 md:p-10 hover:bg-gold/10 transition-colors duration-300 ${
                i < channels.length - 1
                  ? "border-b md:border-b-0 md:border-r"
                  : ""
              } border-black/15`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-black/55">
                  {channel.label}
                </span>
                <span className="status-dot" />
              </div>
              <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight mb-4 leading-snug">
                {channel.heading}
              </h3>
              {channel.href ? (
                <a
                  href={channel.href}
                  className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-black hover:text-gold transition-colors break-words"
                >
                  {channel.value}
                </a>
              ) : (
                <span className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-black break-words inline-block">
                  {channel.value}
                </span>
              )}
              <div className="mt-6 pt-4 border-t border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em] text-gold">
                {channel.meta}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
