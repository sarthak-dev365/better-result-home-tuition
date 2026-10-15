import AboutSection from "@/components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LocationSection from "@/components/home/LocationSection";      
import TutorRegistrationSection from "@/components/home/TutorRegistrationSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <LocationSection /> 
      <TutorRegistrationSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
}
