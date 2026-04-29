"use client";

import Link from "next/link";
import DroneSections from "./DroneSections";

const drones = [
  {
    id: 1,
    name: "Damisa",
    title: "Combat Drone",
    type: "Attack",
    description:
      "Next-generation unmanned aerial system for precision strikes and battlefield dominance",
    content:
      'The Damisa Attack Drone, named after the Hausa word for "tiger," embodies raw power, precision, and intelligence. Built for unrivaled battlefield dominance with stealth, agility, and lethal precision, it delivers swift and unstoppable performance in the harshest combat environments.',
    features: [
      "Precision Strike Capability with guided munitions",
      "High-Speed Maneuverability with aerodynamic design",
      "Electronic Warfare Resilience with adaptive frequency hopping",
      "Extended Operational Range with 16-hour endurance",
      "Smart Payload Adaptability for diverse mission profiles",
    ],
    image1: "/img/damisa1.JPG",
    image2: "/img/damisa2.JPG",
    image3: "/img/damisa3.jpg",
  },
  {
    id: 2,
    name: "Argini",
    title: "Reconnaissance Drone",
    type: "VTOL",
    description:
      "Hybrid VTOL UAV designed for long-endurance intelligence and surveillance operations",
    content:
      'Named after the Hausa word for "cheetah," the Argini is a symbol of speed, stealth, and precision. It is a high-speed, low-detectability reconnaissance platform that brings the agility and precision of its namesake into modern warfare.',
    features: [
      "Long-Endurance Intelligence Gathering for up to 16 hours",
      "Advanced Multi-Sensor Payload including EO/IR cameras and SAR",
      "Stealth & Low Detectability with low thermal signature",
      "Autonomous Navigation with intelligent route planning",
      "Secure Communication through encrypted data links",
      "Rapid Deployment with VTOL capability",
    ],
    image1: "/img/argini1.jpg",
    image2: "/img/argini2.jpg",
    image3: "/img/argini3.JPG",
  },
  {
    id: 3,
    name: "Arsenio",
    title: "Reconnaissance Drone",
    type: "VTOL",
    description:
      "Hybrid VTOL UAV for high-endurance ISR missions with 8-hour flight capability",
    content:
      "Inspired by ancient Greek mythology symbolizing strength and resilience, the Arsenio Reconnaissance Drone is built to be the ultimate aerial sentinel—swift, unrelenting, and all-seeing, ensuring forces detect threats first and strike with certainty.",
    features: [
      "High-Endurance Surveillance for 8-hour continuous flight",
      "Advanced Sensor Suite with EO/IR cameras, LIDAR, and SAR",
      "Low Detectability & Stealth Operations",
      "Rapid Deployment & Multi-Terrain Adaptability",
      "Modular Mission Customization for tactical surveillance",
    ],
    image1: "/img/arsenio1.JPG",
    image2: "/img/arsenio2.JPG",
    image3: "/img/arsenio3.JPG",
  },
  {
    id: 4,
    name: "Xander",
    title: "Reconnaissance Drone",
    type: "VTOL",
    description:
      "Extended ISR mission capability with 6-hour operational endurance",
    content:
      'Named after the Greek word for "Defender of Man," Xander embodies the essence of legendary guardians—unwavering, vigilant, and ever-watchful. The Xander ensures that no enemy moves unseen, no battlefield remains unknown, and no mission is compromised.',
    features: [
      "Extended Endurance & Efficiency with 6-hour flight time",
      "Advanced Surveillance Technology for ground mapping",
      "Stealth & Covert Operations for undetectable missions",
      "Autonomous Navigation with object recognition",
      "Secure & Resilient Communication against cyber threats",
      "Versatile Deployment Capability with VTOL functionality",
      "Modular Payload Integration for customizable sensors",
    ],
    image1: "/img/xander1.jpg",
    image2: "/img/xander2.JPG",
    image3: "/img/xander3.jpg",
  },
  {
    id: 5,
    name: "Bfly",
    title: "Reconnaissance Drone",
    type: "Compact",
    description:
      "Compact hybrid VTOL UAV for rapid ISR missions with 3-hour endurance",
    content:
      "Inspired by nature's most agile creatures, the Bfly is designed for stealth, speed, and precision intelligence gathering. Its compact size allows it to operate where larger drones cannot, delivering real-time intelligence with surgical precision.",
    features: [
      "Rapid Deployment & Mobility with lightweight design",
      "High-Resolution ISR Capabilities with EO/IR cameras",
      "Stealth & Low Detectability for undetected operations",
      "Autonomous Operations with object recognition",
      "Secure Communications with encrypted data transmission",
      "Multi-Terrain Versatility for urban and rural environments",
    ],
    image1: "/img/bfly1.jpg",
    image2: "/img/bfly2.JPG",
    image3: "/img/bfly3.JPG",
  },
];

const DroneListings = () => {
  return (
    <>
      {drones.map((drone) => (
        <DroneSections key={drone.id} drone={drone} />
      ))}

      {/* closing gold accent banner */}
      <section className="px-4 md:px-8 py-10 md:py-14 bg-white border-t border-black/10">
        <Link href="/contact" className="block group">
          <div className="bg-gold text-black px-6 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-colors hover:bg-black hover:text-gold">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                CUSTOM&nbsp;UAS&nbsp;PROFILE
              </div>
              <div className="text-[12px] uppercase tracking-[0.15em] mt-1 opacity-80">
                Mission demands beyond the standard fleet — engage Briech command
              </div>
            </div>
            <span className="btn-bracket">REQUEST BRIEFING</span>
          </div>
        </Link>
      </section>
    </>
  );
};

export default DroneListings;
