import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MobileSection from "@/components/MobileSection";
import CustomerAppSection from "@/components/CustomerAppSection";
import BenefitsSection from "@/components/BenefitsSection";
import CustomerPainSection from "@/components/CustomerPainSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4">
      <Navbar />
      <main>
        <HeroSection />
        <MobileSection />
        <CustomerAppSection />
        <BenefitsSection />
        <CustomerPainSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
