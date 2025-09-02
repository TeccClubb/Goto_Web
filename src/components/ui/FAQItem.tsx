"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl  bg-white border-gray-300  shadow-sm">
      <button
        className="w-full flex justify-between items-center p-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-gray-900">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 text-gray-600 text-sm">{faq.answer}</div>
      )}
    </div>
  );
}
