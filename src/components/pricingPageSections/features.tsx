 import { Shield, Zap, CheckCircle } from "lucide-react";
import FeatureCard from "../ui/WhyChoseVPNCards";
import Section from "../ui/Section";

const features = [
  {
    title: "AES-256 Encryption",
    description:
      "Military-grade encryption protects all your data",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "No logs Policy",
    description:
      "We never track ,collect or share your data",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Unlimited Bandwidth",
    description:
      "Stream, browser and download without limit",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: "30 Days Guarantee",
    description:
      "Fully refund if you'ae not completely satisfied",
    icon: <CheckCircle className="w-6 h-6" />,
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
          {features.map((f, index) => (
            <FeatureCard key={index} {...f} />
          ))}
        </div>
      </div>
    </Section>
  );
}
