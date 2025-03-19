"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const OurStory = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold opacity-5 -skew-x-12 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-accent opacity-5 -skew-x-12 -translate-x-1/4"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-black">
            About <span className="text-gold">Briech UAS</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto">
            Africa's premier unmanned aerial systems manufacturer building
            cutting-edge drone technology for mission-critical activities.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Image with animations */}
          <motion.div
            className="lg:w-1/2 relative hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-[450px] w-full">
              {/* Pattern background instead of image */}
              <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-soft">
                <div className="glass-effect w-full h-full rounded-lg relative flex items-center justify-center">
                  {/* Background image */}

                  <img
                    src="/briech.webp"
                    alt="Smart UAV Technology"
                    className="w-full h-full object-cover"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  {/* Gold overlay patterns */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(var(--gold) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                      opacity: 0.3,
                    }}
                  ></div>

                  {/* Gold diagonal lines */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(45deg, var(--gold) 1px, transparent 1px)`,
                      backgroundSize: "30px 30px",
                      opacity: 0.2,
                    }}
                  ></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold opacity-30 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-blue-accent opacity-30 rounded-lg"></div>

              {/* Gold accent */}
              <motion.div
                className="absolute top-1/2 -right-3 h-[2px] bg-gold"
                initial={{ width: 0 }}
                whileInView={{ width: "25%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">
              Our <span className="text-gold">Story</span>
            </h2>

            <div className="w-20 h-1 bg-gold mb-8"></div>

            <motion.p
              className="text-black/80 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Briech UAS was established in 2021 with a vision to revolutionize
              aerial surveillance and unmanned systems in Africa and beyond. As
              a manufacturer of unmanned aerial vehicles for mission-critical
              activities, we are building Africa's biggest drone manufacturing
              facility in Kuje, Abuja, Nigeria.
            </motion.p>

            <motion.p
              className="text-black/80 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              The multi-million-dollar facility will cover 10 hectares of land
              and manufacture the most advanced automation technology and
              unmanned aircraft systems.
            </motion.p>

            {/* Stats in gold boxes */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect border border-gold/30 p-4 text-center rounded shadow-gold">
                <div className="text-gold text-2xl font-bold">2021</div>
                <div className="text-black/60 text-sm">Established</div>
              </div>
              <div className="glass-effect border border-gold/30 p-4 text-center rounded shadow-gold">
                <div className="text-gold text-2xl font-bold">10+</div>
                <div className="text-black/60 text-sm">Hectares</div>
              </div>
              <div className="glass-effect border border-gold/30 p-4 text-center rounded shadow-gold">
                <div className="text-gold text-2xl font-bold">UAV</div>
                <div className="text-black/60 text-sm">Technology</div>
              </div>
              <div className="glass-effect border border-gold/30 p-4 text-center rounded shadow-gold">
                <div className="text-gold text-2xl font-bold">Africa</div>
                <div className="text-black/60 text-sm">& Beyond</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
