import { Shield, Zap, CheckCircle } from "lucide-react";
 import FeatureCard from "./ui/FeatureCard";
import Section from "./ui/Section";

const features = [
  {
    title: "Privacy First",
    description:
      "Independently audited no-logs policy ensures your online activities remain completely private and secure.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Blazing Speed",
    description:
      "Optimized servers and protocols deliver the fastest VPN speeds for streaming, gaming, and browsing.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Proven Reliability",
    description:
      "99.9% uptime guarantee with enterprise-grade infrastructure trusted by security professionals.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

export default function Features() {
  return (
    // <section className="py-16 bg-gray-50">
    <Section heading="Trusted by Millions Worldwide" paragraph="Your security and privacy are our top priorities">

  
      <div className=" ">
        {/* Section Header */}
         

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, index) => (
            <FeatureCard key={index} {...f} />
          ))}
        </div>
      </div>
   </Section>
  );
}
