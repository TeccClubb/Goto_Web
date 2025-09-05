import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6  rounded-2xl  hover:shadow-md transition">
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full   text-white text-2xl mb-4">
         <Image 
         src={icon}
         width={60}
         height={60}
         alt="privacy"
         >

         </Image>
      </div>
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {/* Description */}
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
}
