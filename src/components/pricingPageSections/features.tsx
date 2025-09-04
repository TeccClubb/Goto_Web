 import { Shield, Zap, CheckCircle } from "lucide-react";
import FeatureCard from "../ui/WhyChoseVPNCards";
import Section from "../ui/Section";

const features = [
  {
    title: "AES-256 Encryption",
    description:
      "Military-grade encryption protects all your data",
    icon:  "/featuresimgs/security.png",
  },
  {
    title: "No logs Policy",
    description:
      "We never track ,collect or share your data",
        icon:  "/featuresimgs/nologPolicy.png",

  },
  {
    title: "Unlimited Bandwidth",
    description:
      "Stream, browser and download without limit",
        icon:  "/featuresimgs/bandWidth.png",

  },
  {
    title: "30 Days Guarantee",
    description:
      "Fully refund if you'ae not completely satisfied",
        icon:  "/featuresimgs/gaurentee.png",

  },  
];

export default function PricingFeatures() {
  return (
    // <section className="py-16 bg-gray-50">
    <Section heading="ALl Plans Include Premium Features" paragraph="Every subscription  comes with theses essential security features" className="bg-white">


      <div className=" ">
        {/* Section Header */}


        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-4">
          {features.map((feature, index) => (
           <FeatureCard
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                              />
          ))}
        </div>
      </div>
    </Section>
  );
}
