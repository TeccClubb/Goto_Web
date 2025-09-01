// components/Hero.tsx
"use client";

import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Secure Your Internet with <br />
          <span className="">
            Unlimited Freedom
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-gray-600 text-lg">
          Protect your privacy, bypass restrictions, and browse anonymously <br />
          with military-grade encryption and lightning-fast servers in 94+ <br />
          countries.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 transition shadow-md">
            Get Started Free
          </button>
          <button className="px-6 py-3 rounded-full border-2 font-semibold border-violet-400 text-violet-600 hover:bg-blue-600 hover:text-white transition">
            Download Now
          </button>
        </div>

        {/* Features */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            30-day money back guarantee
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            No logs policy
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            24/7 support
          </div>
        </div>
      </div>
    </section>
  );
}
