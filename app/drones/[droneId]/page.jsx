import { notFound } from 'next/navigation';
import { getDroneById } from '@/app/data/drones';
// import DroneModel from '@/app/components/DroneModel';
import DroneWrapper from '@/app/components/3d/DroneWrapper';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const drone = getDroneById(params.droneId);
  
  if (!drone) {
    return {
      title: 'Drone Not Found',
      description: 'The requested drone specifications could not be found.'
    };
  }
  
  return {
    title: `${drone.name} Specifications | Briech UAS`,
    description: `Technical specifications and capabilities of the ${drone.name}. ${drone.tagline}.`
  };
}

export default function DroneSpecifications({ params }) {
  const drone = getDroneById(params.droneId);
  
  if (!drone) {
    notFound();
  }
  
  const { 
    name, 
    tagline, 
    description, 
    features, 
    specifications, 
    modelPath, 
    colorAccent 
  } = drone;

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      {/* Header with cyberpunk/sci-fi gradient */}
      <div 
        className="relative h-[40vh] md:h-[30vh] flex items-end" 
        style={{ 
          background: `linear-gradient(to bottom right, #000000, ${colorAccent}40, #000000)` 
        }}
      >
        {/* Grid overlay for sci-fi effect */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20"></div>
        
        {/* Glowing accent line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1" 
          style={{ backgroundColor: colorAccent, boxShadow: `0 0 15px ${colorAccent}` }}
        ></div>
        
        <div className="container mx-auto px-4 py-12 z-10">
          <Link 
            href="/products" 
            className="inline-flex items-center text-white/70 hover:text-white mb-4 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </Link>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            {name}
          </h1>
          
          <div 
            className="mt-2 text-xl"
            style={{ color: colorAccent }}
          >
            {tagline}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 3D Model Section */}
          <div className="lg:col-span-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-2xl font-bold">Interactive Model</h2>
            </div>
            <div className="p-4">
              {/* <DroneModel modelPath={modelPath} /> */}
              <DroneWrapper path={modelPath} />
            </div>
          </div>
          
          {/* Description */}
          <div className="bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-2xl font-bold">Overview</h2>
            </div>
            <div className="p-4">
              <p className="text-white/80 leading-relaxed mb-6">{description}</p>
              
              <h3 className="text-lg font-bold mb-3" style={{ color: colorAccent }}>Key Features</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5">
                      <svg 
                        width="10" 
                        height="10" 
                        viewBox="0 0 10 10" 
                        style={{ fill: colorAccent }}
                      >
                        <polygon points="0,0 10,5 0,10" />
                      </svg>
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Technical specifications */}
        {/* <div className="mt-8 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <h2 className="text-2xl font-bold">Technical Specifications</h2>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(specifications).map(([key, value], index) => (
                <div 
                  key={key}
                  className="p-4 bg-white/5 rounded-md border border-white/10 backdrop-blur-sm"
                >
                  <h3 className="text-sm uppercase tracking-wider mb-1 text-white/50">
                    {key.replace(/([A-Z])/g, ' $1').trim().charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').trim().slice(1)}
                  </h3>
                  <p className="font-mono text-lg" style={{ color: colorAccent }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        
        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div 
            className="inline-block px-8 py-6 rounded-lg backdrop-blur-md"
            style={{ 
              background: `linear-gradient(135deg, ${colorAccent}25, rgba(0,0,0,0.7))`,
              border: `1px solid ${colorAccent}40`,
              boxShadow: `0 0 20px ${colorAccent}20`
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Interested in the {name}?
            </h3>
            <p className="text-white/70 mb-5 max-w-xl mx-auto">
              Contact our team to discuss how this drone can be deployed to address your specific operational requirements.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-black font-medium transition-all"
              style={{ 
                backgroundColor: colorAccent,
                boxShadow: `0 0 15px ${colorAccent}50`
              }}
            >
              <span>Request Detailed Information</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 