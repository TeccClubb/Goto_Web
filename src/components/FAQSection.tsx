"use client";

 import FAQItem from "./ui/FAQItem";
import Section from "./ui/Section";

const faqs = [
  {
    question: "What is a VPN and who is it for?",
    answer:
      "A VPN (Virtual Private Network) encrypts your internet connection, hides your IP address, and protects your online privacy. It’s used by anyone who wants to browse securely, stay anonymous, access blocked websites, or use public Wi-Fi safely.",
  },
  {
    question: "Do you keep logs of user activity?",
    answer:
      "No. SecureVPN follows a strict no-logs policy. We do not track, monitor, or store your browsing history, online activities, or personal data.",
  },
  {
    question: "How many devices can I connect simultaneously?",
    answer:
      "With one SecureVPN subscription, you can connect up to 5 devices at the same time — including phones, laptops, tablets, and desktops.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes. SecureVPN comes with a 30-day money-back guarantee. If you’re not satisfied, you can request a full refund within 30 days of your purchase.",
  },
  {
    question: "Can I use SecureVPN for streaming?",
    answer:
      "Absolutely. SecureVPN allows you to stream your favorite shows, movies, and sports from platforms like Netflix, Hulu, and BBC iPlayer without geo-restrictions.",
  },
];

export default function FAQSection() {
  return (
    <Section heading="Frequently Asked Questions" paragraph="everything you need to know about SecureVPN" className="bg-gray-50">

 
    
       

      <div className="mt-8 space-y-4 bg-white max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </div>
 
       </Section>
  );
}
