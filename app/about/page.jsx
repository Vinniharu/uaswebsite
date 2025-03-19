import OurStory from "../components/about/OurStory";
import OurApproach from "../components/about/OurApproach";
import OurFacility from "../components/about/OurFacility";
import OurTeam from "../components/about/OurTeam";
import OurCommitment from "../components/about/OurCommitment";

export const metadata = {
  title: "About Briech UAS - Our Story, Team & Commitments",
  description: "Learn about Briech UAS, Africa's leading drone manufacturer established in 2021, our approach, facility, team, and commitment to excellence."
};

export default function About() {
  return (
    <>
      <OurStory />
      <OurApproach />
      <OurFacility />
      <OurTeam />
      <OurCommitment />
    </>
  );
} 