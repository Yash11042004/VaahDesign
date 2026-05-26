import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div>
      <LoadingScreen />
      <Navbar />
      <HeroSlider />
      {/* <AboutSection /> */}
      <ServicesSection />
      {/* <ProcessSection /> */}
      {/* <StatsSection /> */}
      <TestimonialsSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
