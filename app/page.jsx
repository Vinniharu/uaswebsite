import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ProductsSection from "./components/home/ProductsSection";
import ServicesSection from "./components/home/ServicesSection";
import WhyChooseUsSection from "./components/home/WhyChooseUsSection";
import NewsletterSection from "./components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <NewsletterSection />
    </>
  );
}
