import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl border shadow-gray-400 shadow-lg border-gray-200 bg-white hover:shadow-xl transition">
      <div className="flex justify-center lg:justify-start">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
    </div>
  );
}
