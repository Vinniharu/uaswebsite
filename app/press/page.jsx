import PressHero from "../components/press/PressHero";
import PressReleases from "../components/press/PressReleases";
import MediaCoverage from "../components/press/MediaCoverage";

export const metadata = {
  title: "Press | Briech UAS - Africa's Premier Drone Manufacturer",
  description:
    "Press releases, media coverage, and press contact information for Briech UAS, Africa's leading unmanned aerial systems manufacturer.",
};

export default function Press() {
  return (
    <>
      <PressHero />
      <PressReleases />
      <MediaCoverage />
    </>
  );
}
