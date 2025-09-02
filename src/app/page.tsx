 
import HeroSection from "@/components/heroSection";
import Image from "next/image";
import WhyChoseVpn from "@/components/WhyChoseVpn";
import DownloadSection from "@/components/DownloadSection";
import CardSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
 import Features from "@/components/Features";
 
import FAQSection from "@/components/FAQSection";
 
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
