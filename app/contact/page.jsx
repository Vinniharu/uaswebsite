import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ServiceAreas from "../components/contact/ServiceAreas";

export const metadata = {
  title: "Contact Briech UAS - Get in Touch With Our Team",
  description: "Contact Briech UAS for inquiries about our drone solutions, services, and consultancy. Reach out to our team for customized UAV solutions."
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ServiceAreas />
    </>
  );
} 