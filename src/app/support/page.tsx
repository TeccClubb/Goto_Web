import ContactForm from "@/components/supportPage/ContactUs";
import FeatureCard from "@/components/ui/FeatureCard";
 
import Section from "@/components/ui/Section";
 

const features = [
  {
    title: "Installation",
    description:
      " Download and setup guides for all devices   ",
    icon: "/supportimg/download.png",
  },
  {
    title: "Server Issues",
    description:
      " connection problem and server selection",
    icon: "/supportimg/serversetup.png",
  },
  {
    title: "Bills",
    description:
      "Payment, Refund and subscription policy",
    icon: "/supportimg/billing.png",
  },
  {
    title: "Privacy & security ",
    description:
      " learn about our security",
    icon: "/featuresimgs/privacy.png",
  },
 
];
 

export default function Supportpage() {

    return <div>
        <Section className="bg-gray-50" heading="Support Center" paragraph="Get the help you need,when you need it.Our support team is hear 24/7 to assist you"/>

        <Section
             heading="Why Choose Goto VPN"
             paragraph="Experience the ultimate in online freedom with our premium VPN Features designed for your security and privacy."
           >
             <div className="max-w-6xl mx-auto text-center">
               <div className="mt-12 grid grid-cols-1 gap-8 text-center lg:text-left sm:grid-cols-2 lg:grid-cols-4">
                 {features.map((feature) => (
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
        <ContactForm></ContactForm>
    </div>
}