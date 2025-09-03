 
 import Section from "../ui/Section";
import TestimonialCard from "../ui/TestimonialCard";

const testimonials = [
  {
    text: "SecureVPN has been a game-changer for my online privacy. Fast, reliable, and incredibly easy to use. Highly recommended!",
    name: "Sarah Johnson",
    role: "Digital Marketer",
    image: "/testimonial/first.png",
  },
  {
    text: "Amazing speeds and excellent customer support. I can stream 4K content without any buffering issues. Worth every penny!",
    name: "Mike Chen",
    role: "Software Engineer",
    image: "/testimonial/second.png",
  },
  {
    text: "The best VPN I’ve used. Great for accessing content while traveling and the security features give me peace of mind.",
    name: "Emma Davis",
    role: "Travel Blogger",
    image: "/testimonial/third.png",
  },
];

export default function Testimonials() {
  return (
    <Section heading="What Our Users Say" paragraph="Join millions of satisfied customers worldwide">

 
    {/* <section className="py-16 bg-gray-50 "> */}
      {/* <div className="container mx-auto px-6 text-center"> */}
        {/* Section Header */}
        {/* <h2 className="text-3xl font-bold text-gray-900 mb-2">
          What Our <span className="text-blue-600">Users Say</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Join millions of satisfied customers worldwide
        </p> */}

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3 place-items-center">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>
      {/* </div> */}
     </Section>
  );
}

