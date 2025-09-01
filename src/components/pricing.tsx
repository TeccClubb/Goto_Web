// components/PricingPlans.tsx
import { Check } from "lucide-react";
import Section from "./ui/Section";

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
    highlight: true, // highlight this one
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
    <Section>

 
    {/* <section className="w-full max-w-6xl mx-auto py-16 px-6"> */}
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Choose Your Plan</h2>
        <p className="text-gray-600">
          Start with our 30-day money-back guarantee
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border p-8 flex flex-col shadow-sm transition hover:shadow-lg ${
              plan.highlight
                ? "border-[#9333ea]   "
                : "border-gray-200"
            }`}
          >
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">{plan.title}</h3>

            {/* Price */}
            <div className="mt-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-500">{plan.period}</span>
            </div>

            {/* Subtext (savings) */}
            {plan.subtext && (
              <p className="text-sm text-green-600 font-medium mt-1">
                {plan.subtext}
              </p>
            )}

            {/* Features */}
            <ul className="mt-6 space-y-3 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-6 w-full py-3 rounded-xl text-sm font-medium transition ${
                plan.highlight
                  ? "bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-600 rounded-full border-gray-200 text-white hover:from-violet-600 hover:via-indigo-700 hover:to-blue-800"
                  : "border border-gray-300 text-gray-700 hover:bg-[#9333ea] hover:text-white"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}
