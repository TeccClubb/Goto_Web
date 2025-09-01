import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl mb-4">
        {icon}
      </div>
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {/* Description */}
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
}
