// components/Features.tsx
// import { LightningBoltIcon } from "@heroicons/react/outline";
// import { DeviceMobileIcon } from "@heroicons/react/outline";
// import { SparklesIcon } from "@heroicons/react/outline";
// import { AdjustmentsIcon } from "@heroicons/react/outline";

import Image from "next/image";
import Section from "./ui/Section";

const features = [
 {
    name: " Military-Grade Encryption",
    description:
      " AES-256 encryption protects your data from hackers, government surveillance, and cyber threats.",
    icon: "/whyChoseVpn/encryption.png", // path to your SVG or image in public folder
  },
  {
    name: "Lighting Fast Servers",
    description:
      " 10Gpbs servers in 94+ countries ensure blazing-fast speeds for streaming, gaming, and browsing.",
     icon: "/whyChoseVpn/lightFast.png",
  },
  {
    name: "Global Coverage",
    description:
      " Access content from anywhere  with 5000+ servers strategically located worldwide.",
     icon: "/whyChoseVpn/globalCoverage.png",
  },
  {
    name: "Zero-Logs Policy",
    description:
      "we don't track ,collect, or share your personal data. Your privacy is guaranteed.",
    icon: "/whyChoseVpn/zeroLogs.png",
  },
    {
    name: "24/7 Export Support",
    description:
      "Get instant help from  our security experts vive chat or email or phone support.",
    icon: "/whyChoseVpn/expert.png",
  },
    {
    name: "Multi-device Protection",
    description:
      "Product up to 10 devices simultaneously with one account across all platforms.",
    icon: "/whyChoseVpn/multiDevice.png",
  },
];

export default function WhyChoseVpn() {
  return (
    <Section heading="Why Choose Goto VPN" paragraph="Experience the ultimate in online freedom with our premium VPN Features design for your  security and privacy.">

    
    {/* // <section className="py-16 bg-white "> */}
      <div className="max-w-6xl mx-auto    text-center">
       

        <div className="mt-12 grid grid-cols-1 gap-8 text-center lg:text-left sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 rounded-xl border  shadow-gray-400 shadow-lg border-gray-200 bg-white shadow-4xl hover: transition"
            >
                 <div className="flex justify-center lg:justify-start">

              <Image src={feature.icon} alt={feature.name} width={50} height={50} />
                  </div>
                {/* <img src={feature.icon} alt={feature.name} className="h-6 w-6" /> */}
              {/* </div> */}
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
