import PressHero from "../components/press/PressHero";
import PressReleases from "../components/press/PressReleases";
import MediaCoverage from "../components/press/MediaCoverage";

export const metadata = {
  title: "Press | Briech UAS - Africa's Premier Drone Manufacturer",
  description: "Press releases, media coverage, and press contact information for Briech UAS, Africa's leading unmanned aerial systems manufacturer."
};

export default function Press() {
  return (
    <>
      <PressHero />
      
      {/* Section for Official Press Releases */}
      <div className="relative">
        <PressReleases />
        
        {/* Visual separator */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">BRIECH UAS IN THE MEDIA</span>
          </div>
        </div>
        
        {/* Section for Featured Press */}
        <MediaCoverage />
      </div>
    </>
  );
} 