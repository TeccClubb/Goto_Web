import Section from "./ui/Section";
import PricingCard from "./ui/PricingCard";

const plans = [
  {
    title: "Monthly",
    price: "$12.99",
    period: "/month",
    features: [
      "All premium features",
      "10 simultaneous connections",
      "24/7 support",
    ],
    button: "Get Monthly Plan",
    highlight: false,
  },
  {
    title: "6 Months",
    price: "$9.99",
    period: "/month",
    subtext: "Save 23%",
    features: [
      "All premium features",
      "10 simultaneous connections",
      "Priority support",
    ],
    button: "Get 6-Month Plan",
    highlight: true,
  },
  {
    title: "1 Year",
    price: "$6.99",
    period: "/month",
    subtext: "Save 46%",
    features: [
      "All premium features",
      "10 simultaneous connections",
      "Premium support",
    ],
    button: "Get Yearly Plan",
    highlight: false,
  },
];

export default function PricingPlans() {
  return (
    <Section heading="Choose Your Plan" paragraph="Start with our 30-day money-back guarantee">
     

      {/* Pricing Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </div>
    </Section>
  );
}
