
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Classes from "@/components/home/Classes";
import Subjects from "@/components/home/Subjects";
import HowItWorks from "@/components/home/HowItWorks";
import TrustUs from "@/components/home/TrustUs";
import FAQ from "@/components/home/FAQ";
import ContactSection from "@/components/home/ContactSection";
import FreeDemo from "@/components/home/FreeDemo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Classes />
      <Subjects />
      <HowItWorks />
      <TrustUs />
      <FAQ />
      <ContactSection />
      <FreeDemo />
    </>
  );
}
