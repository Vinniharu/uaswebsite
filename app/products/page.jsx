import ProductHero from "../components/products/ProductHero";
import DroneListings from "../components/products/DroneListings";

export const metadata = {
  title: "Products & Services - Briech UAS",
  description: "Explore Briech UAS's cutting-edge drone products and comprehensive services for defense, security, and commercial applications."
};

export default function Products() {
  return (
    <>
    <ProductHero />
    <DroneListings/>
    </>
  );
} 