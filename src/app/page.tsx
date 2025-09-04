 
import HeroSection from "@/components/Landingpage/heroSection";
 
import WhyChoseVpn from "@/components/Landingpage/WhyChoseVpn";
import DownloadSection from "@/components/Landingpage/DownloadSection";
import CardSection from "@/components/Landingpage/PricingSection";
import Testimonials from "@/components/Landingpage/Testimonials";
 import Features from "@/components/Landingpage/FeatureInLandingpage";
 
import FAQSection from "@/components/Landingpage/FAQSection";
 
export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <WhyChoseVpn></WhyChoseVpn>
      <DownloadSection></DownloadSection>
      <CardSection></CardSection>
      <Features></Features>
      <Testimonials></Testimonials>
   <FAQSection></FAQSection>
      
       
    
    </div>
  );
}
