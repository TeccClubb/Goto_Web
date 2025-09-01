import Image from "next/image";

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  image: string;
}

export default function TestimonialCard({
  text,
  name,
  role,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm">
      {/* Stars */}
      <div className="flex mb-4 text-yellow-400">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i}>★</span>
          ))}
      </div>

      {/* Review text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6">“{text}”</p>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
