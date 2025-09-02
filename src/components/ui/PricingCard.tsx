import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  subtext?: string;
  features: string[];
  button: string;
  highlight?: boolean;
}

export default function PricingCard({
  title,
  price,
  period,
  subtext,
  features,
  button,
  highlight = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl border p-8 flex flex-col shadow-sm transition hover:shadow-lg ${
        highlight ? "border-[#9333ea]" : "border-gray-200"
      }`}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      {/* Price */}
      <div className="mt-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-500">{period}</span>
      </div>

      {/* Subtext (savings) */}
      {subtext && (
        <p className="text-sm text-green-600 font-medium mt-1">{subtext}</p>
      )}

      {/* Features */}
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-600">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`mt-6 w-full py-3 rounded-xl text-sm font-medium transition ${
          highlight
            ? "bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-600 rounded-full border-gray-200 text-white hover:from-violet-600 hover:via-indigo-700 hover:to-blue-800"
            : "border border-gray-300 text-gray-700 hover:bg-[#9333ea] hover:text-white"
        }`}
      >
        {button}
      </button>
    </div>
  );
}
