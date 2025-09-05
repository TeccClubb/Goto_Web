import { Check } from "lucide-react";

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`rounded-2xl border p-8 flex flex-col shadow-sm transition hover:shadow-lg ${
        plan.is_best_deal ? "border-[#9333ea]" : "border-gray-200"
      }`}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{plan.name}</h3>

      {/* Price */}
      <div className="mt-4">
        <span className="text-3xl font-bold">{plan.price}</span>
        <span className="text-gray-500">{plan.duration > 1? `${plan.duration} ${plan.duration_unit}`: plan.duration_unit}</span>
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-3 flex-1">
        {plan.description.split(",").map((feature, i) => (
          <li key={i} className="flex items-center text-gray-600">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            {feature.trim()}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`mt-6 w-full py-3 rounded-xl text-sm font-medium transition ${
          plan.is_best_deal
            ? "bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-600 rounded-full border-gray-200 text-white hover:from-violet-600 hover:via-indigo-700 hover:to-blue-800"
            : "border border-gray-300 text-gray-700 hover:bg-[#9333ea] hover:text-white"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}
