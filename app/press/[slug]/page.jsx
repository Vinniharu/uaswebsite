"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// Sample press release data - in a real application, this would come from a database or API
const pressReleasesData = [
  {
    id: 1,
    date: "April 2, 2025",
    title: "Briech UAS Showcases Nigeria's First Indigenous Attack Drones and Bombs During CDS Visit",
    slug: "indigenous-attack-drones-cds-visit",
    content: `
      <p>In a landmark event on April 2, 2025, Briech UAS, a leading Nigerian unmanned aerial systems manufacturer, hosted the Chief of Defence Staff (CDS), General Christopher Musa, at its headquarters in Abuja. This visit marked the official unveiling of Nigeria's first indigenous attack drones and locally manufactured bombs, a major milestone in the nation's journey towards self-reliance in defence technology.</p>
      
      <p>General Musa commended Briech UAS for its dedication to advancing Nigeria's defence capabilities, emphasizing that the development of indigenous unmanned aerial vehicles (UAVs) is crucial in addressing the country's evolving security challenges. The newly launched UAVs boast an endurance of 14 hours and a telemetry range of 200 km, positioning Nigeria as a formidable player in drone warfare and surveillance operations.</p>
      
      <p>The event saw the presence of several distinguished guests, including representatives from the Chief of Army Staff (COAS), the Governor of Plateau State, and key officials from the Nigeria Police Force. Their attendance underscored the collective commitment to leveraging cutting-edge technology for national security and law enforcement operations.</p>
      
      <p>As part of the demonstration, Briech UAS tested two of its latest reconnaissance drones—the Argini and the Arsenio. The Arsenio drone performed an aerial reconnaissance exercise, hovering around the company's office in Kuje while providing a live video feed of the event as it unfolded. This showcased the drone's real-time surveillance capabilities, highlighting its potential application in intelligence gathering and security monitoring.</p>
      
      <p>Dr. Bright Echefu, Chairman of Briech UAS, highlighted the urgent need for advanced drone technology, citing the alarming trend of drone-assisted attacks in Nigeria. Between January and March 2025, at least 12 such attacks targeted military convoys and bases, reinforcing the importance of strengthening Nigeria's aerial defence capabilities.</p>
      
      <p>To further underscore Briech UAS's technological advancements, one of the company's explosive devices (bombs) was tested as the distinguished guests were departing. The controlled detonation demonstrated the explosive capabilities of Briech UAS's weapon systems, reinforcing the company's commitment to producing highly effective defence solutions.</p>
      
      <p>Briech UAS remains committed to innovation and strategic partnerships to enhance Nigeria's security architecture. The successful unveiling of these attack drones and bombs signals a new era in indigenous defence manufacturing, reducing dependence on foreign military hardware and bolstering the country's ability to respond to emerging threats.</p>
      
      <p>This milestone event is a testament to Nigeria's growing expertise in defense technology, and Briech UAS is proud to be at the forefront of this transformative journey. As we look ahead, we remain steadfast in our mission to provide world-class UAV solutions tailored to Nigeria's security needs.</p>
    `,
    image: "/press/indigenous-attack-drones.jpg" // This would be a real image in production
  }
];

export default function PressReleasePage() {
  const params = useParams();
  const { slug } = params;
  
  const [pressRelease, setPressRelease] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from API or database
    setTimeout(() => {
      const foundRelease = pressReleasesData.find(release => release.slug === slug);
      setPressRelease(foundRelease);
      setIsLoading(false);
    }, 300);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center py-24 pt-40">
        <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!pressRelease) {
    return (
      <div className="min-h-screen py-24 pt-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Press Release Not Found</h1>
          <p className="text-black/70 mb-8">The press release you're looking for couldn't be found.</p>
          <Link 
            href="/press" 
            className="inline-flex items-center justify-center px-6 py-3 border border-gold text-gold bg-transparent hover:bg-gold hover:text-white transition-colors duration-300 rounded-md font-medium"
          >
            Back to Press Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 pt-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/press" 
            className="inline-flex items-center text-gold hover:text-gold/80 font-medium transition-colors mb-8"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Press
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-gold font-medium">{pressRelease.date}</span>
              <span className="bg-gold text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide font-medium">Official Press Release</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-8">
              {pressRelease.title}
            </h1>

            <div className="mb-8 h-[400px]">
              <img 
                src={pressRelease.image} 
                alt={pressRelease.title}
                className="w-max rounded-lg h-full object-cover m-auto"
              />
            </div>
            
            <div 
              className="press-content text-black/80 space-y-4"
              dangerouslySetInnerHTML={{ __html: pressRelease.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-center">
                
                <div className="mt-4 sm:mt-0">
                  <Link 
                    href="/press" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-gold text-gold bg-transparent hover:bg-gold hover:text-white transition-colors duration-300 rounded-md font-medium"
                  >
                    Back to Press Page
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 