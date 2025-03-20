export const drones = [
  {
    id: 'damisa',
    name: 'Damisa Combat Drone',
    tagline: 'Next-generation Combat UAV',
    description: 'The Damisa Attack Drone, named after the Hausa word for "tiger", embodies the raw power, precision, and intelligence of this legendary predator. Like its namesake, it stalks with patience, strikes with explosive force, and dominates with unmatched strategy. Built for precision strikes, high-speed engagement, and superior operational dominance.',
    features: [
      'Precision Strike Capability: Equipped with guided munitions for pinpoint accuracy in high-risk operations',
      'High-Speed Maneuverability: Aerodynamic design enables swift evasive actions and agile combat performance',
      'Electronic Warfare Resilience: Adaptive frequency hopping for secure communication',
      'Extended Operational Range: 16-hour endurance flight capability for deep penetration missions',
      'Smart Payload Adaptability: Modular weapon integration for diverse mission profiles'
    ],
    specifications: {
      dimensions: '4.2m × 3.8m × 1.2m',
      weight: '520kg (fully loaded)',
      maxSpeed: '380 km/h',
      cruiseSpeed: '280 km/h',
      range: '1,200 km',
      ceiling: '6,500m',
      endurance: '16 hours',  // Updated based on PDF
      powerplant: 'Advanced Turbofan Engine',
      payload: 'Up to 180kg (weaponry and sensors)',
      communications: 'Encrypted satellite and point-to-point',
      navigation: 'GPS/INS with terrain following capability',
      launchMethod: 'Runway or catapult',
      recoveryMethod: 'Runway or arrested landing',
    },
    modelPath: '/drone3d.obj',
    imageUrl: '/damisa.webp',
    colorAccent: '#db3a34' // Red-ish
  },
  {
    id: 'argini',
    name: 'Argini Reconnaissance Drone',
    tagline: 'Hybrid VTOL ISR Platform',
    description: 'Named after the Hausa word for "cheetah" or "big cat," the Argini is a legendary symbol of speed, stealth, and precision. A hybrid VTOL UAV designed for long-endurance intelligence, surveillance, and reconnaissance (ISR) missions. It is a high-speed, low-detectability reconnaissance platform that brings the agility, stealth, and precision of the Argini into modern warfare.',
    features: [
      'Long-Endurance Intelligence Gathering: Extended flight duration of up to 16 hours',
      'Advanced Multi-Sensor Payload: High-resolution EO/IR cameras and Synthetic Aperture Radar (SAR) for ground mapping and target detection',
      'Stealth & Low Detectability: Low thermal signature for covert operations',
      'Autonomous Navigation: Intelligent route planning and automated target tracking',
      'Secure Communication: Encrypted data links to prevent interception',
      'Rapid Deployment: VTOL capability for launch and recovery'
    ],
    specifications: {
      dimensions: '3.7m × 2.9m × 0.9m',
      weight: '320kg (fully loaded)',
      maxSpeed: '260 km/h',
      cruiseSpeed: '180 km/h',
      range: '2,000 km',
      ceiling: '7,000m',
      endurance: '16 hours', // Confirmed from PDF
      powerplant: 'Hybrid Electric-Fuel Cell System',
      payload: 'Up to 120kg (sensor suite)',
      communications: 'Encrypted multi-band with mesh capability',
      navigation: 'Multi-constellation GNSS with anti-jamming',
      launchMethod: 'Vertical take-off',
      recoveryMethod: 'Vertical landing',
    },
    modelPath: '/drone3d.obj',
    imageUrl: '/argini.webp',
    colorAccent: '#3d5a80' // Blue-ish
  },
  {
    id: 'arsenio',
    name: 'Arsenio Reconnaissance Drone',
    tagline: 'High-Endurance ISR Drone',
    description: 'In ancient Greek mythology, Arsenio—derived from the Greek word for "virile" or "masculine"—symbolizes strength, resilience, and dominance. A hybrid VTOL UAV designed for high-endurance ISR missions with an 8-hour flight time. Like these legendary watchers, the Arsenio Reconnaissance Drone is built to be the ultimate aerial sentinel—swift, unrelenting, and all-seeing.',
    features: [
      'High-Endurance Surveillance: 8-hour continuous flight for extended reconnaissance missions',
      'Advanced Sensor Suite: High-resolution EO/IR cameras, LIDAR, and SAR for target detection',
      'Low Detectability & Stealth Operations: Minimal thermal footprint',
      'Rapid Deployment & Multi-Terrain Adaptability: VTOL capability for land reconnaissance',
      'Modular Mission Customization: Flexible payload integration for tactical surveillance and border security'
    ],
    specifications: {
      dimensions: '3.4m × 2.7m × 0.8m',
      weight: '290kg (fully loaded)',
      maxSpeed: '240 km/h',
      cruiseSpeed: '160 km/h',
      range: '1,800 km',
      ceiling: '6,200m',
      endurance: '8 hours', // Updated based on PDF
      powerplant: 'Advanced Electric Propulsion',
      payload: 'Up to 100kg (sensor package)',
      communications: 'Advanced encryption with multi-node relay',
      navigation: 'AI-enhanced terrain recognition and navigation',
      launchMethod: 'Vertical or short runway',
      recoveryMethod: 'Vertical or short runway landing',
    },
    modelPath: '/drone3d.obj',
    imageUrl: '/arsenio.webp',
    colorAccent: '#415a77' // Darker blue
  },
  {
    id: 'xander',
    name: 'Xander Reconnaissance Drone',
    tagline: 'Extended ISR Platform',
    description: 'Named after the Greek word for "Defender of Man," Xander embodies the essence of legendary guardians—unwavering, vigilant, and ever-watchful. A hybrid VTOL UAV designed for extended ISR missions with a 6-hour endurance. Like the eternal sentinels of legend, Xander does not rest, does not falter—when it watches, the battlefield is already won.',
    features: [
      'Extended Endurance & Efficiency: 6-hour flight time for prolonged surveillance',
      'Advanced Surveillance Technology: High-resolution EO/IR cameras and SAR for ground mapping',
      'Stealth & Covert Operations: Low thermal signature for undetectable missions',
      'Autonomous Navigation: Object recognition and tracking',
      'Secure & Resilient Communication: Encrypted communication to prevent cyber threats',
      'Versatile Deployment Capability: VTOL functionality for land-based and ISR missions',
      'Modular Payload Integration: Customizable sensor and communication payloads'
    ],
    specifications: {
      dimensions: '4.0m × 3.1m × 1.0m',
      weight: '350kg (fully loaded)',
      maxSpeed: '250 km/h',
      cruiseSpeed: '170 km/h',
      range: '2,400 km',
      ceiling: '7,500m',
      endurance: '6 hours', // Updated based on PDF
      powerplant: 'Hybrid Electric System',
      payload: 'Up to 110kg (reconfigurable sensor suite)',
      communications: 'Military-grade encryption with anti-jamming',
      navigation: 'Multi-sensor fusion with backup systems',
      launchMethod: 'Vertical take-off',
      recoveryMethod: 'Vertical landing with emergency parachute',
    },
    modelPath: '/drone3d.obj',
    imageUrl: '/xander.webp',
    colorAccent: '#38b000' // Green
  },
  {
    id: 'bfly',
    name: 'Bfly Reconnaissance Drone',
    tagline: 'Compact Tactical ISR',
    description: 'The Bfly Reconnaissance Drone is a compact hybrid VTOL UAV designed for rapid ISR missions with a 3-hour flight endurance. Inspired by nature\'s most agile creatures, the Bfly moves unseen, weaving through complex environments with unmatched agility. Its compact size allows it to operate where larger drones cannot, slipping past defenses, navigating tight spaces, and delivering real-time intelligence with surgical precision.',
    features: [
      'Rapid Deployment & Mobility: Lightweight and portable for quick launch',
      'High-Resolution ISR Capabilities: Equipped with EO/IR cameras for real-time intelligence',
      'Stealth & Low Detectability: Low thermal signature for undetected operations',
      'Autonomous Operations: Object recognition and tracking for enhanced situational awareness',
      'Secure Communications: Encrypted data transmission to prevent signal interception',
      'Multi-Terrain Versatility: Operates effectively in urban and rural environments'
    ],
    specifications: {
      dimensions: '1.8m × 1.5m × 0.5m',
      weight: '120kg (fully loaded)',
      maxSpeed: '220 km/h',
      cruiseSpeed: '150 km/h',
      range: '950 km',
      ceiling: '5,000m',
      endurance: '3 hours', // Updated based on PDF
      powerplant: 'Advanced Electric Motor',
      payload: 'Up to 40kg (compact sensor array)',
      communications: 'Encrypted short/medium range',
      navigation: 'Compact GPS/INS with urban navigation capability',
      launchMethod: 'Hand launch or catapult',
      recoveryMethod: 'Skid landing or catch net',
    },
    modelPath: '/drone3d.obj',
    imageUrl: '/bfly.webp',
    colorAccent: '#ffb703' // Gold/yellow
  }
];

export const getDroneById = (id) => {
  return drones.find(drone => drone.id === id) || null;
};