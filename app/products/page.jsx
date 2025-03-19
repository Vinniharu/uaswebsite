import DamisaSection from "../components/products/DamisaSection";
import ArginiSection from "../components/products/ArginiSection";
import ArsenioSection from "../components/products/ArsenioSection";
import XanderSection from "../components/products/XanderSection";
import BflySection from "../components/products/BflySection";
import ServicesSection from "../components/products/ServicesSection";

export const metadata = {
  title: "Products & Services - Briech UAS",
  description: "Explore Briech UAS's cutting-edge drone products and comprehensive services for defense, security, and commercial applications."
};

export default function Products() {
  return (
    <>
      <DamisaSection />
      <ArginiSection />
      <ArsenioSection />
      <XanderSection />
      <BflySection />
      <ServicesSection />
    </>
  );
} 