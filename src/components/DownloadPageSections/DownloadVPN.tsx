"use client";

import Image from "next/image";
import Section from "../ui/Section";
import { Check  } from "lucide-react";

export default function DownloadVPN() {
    return (
        // <section className="bg-gradient-to-r from-white to-indigo-50 py-16">
        <Section className="bg-gradient-to-r from-white to-indigo-50">


            <div className=" mx-auto  flex flex-col-reverse lg:flex-row items-center ">

                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        Download GotoVPN
                    </h1>
                    <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">
                        Secure your connection on any device with our easy-to-use apps.
                        Download Goto VPN and enjoy unrestricted, private internet access
                        anywhere.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center lg:justify-start gap-4">
                        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-700 text-white font-semibold shadow transition hover:from-violet-600 hover:via-indigo-700 hover:to-blue-900">
                            Get Started Free
                        </button>

                        <button className="px-6 py-3 rounded-full border border-indigo-600 text-indigo-600 font-semibold hover:bg-blue-600 hover:text-white transition">
                            Download Now
                        </button>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500 mt-6">
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            30-day money back guarantee
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            No logs policy
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /><span>    24/7 support</span>
                         
                        </span>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/downloadImg/laptop.png" // replace with your image path
                        alt="VPN Laptop"
                        width={500}
                        height={350}
                        className="drop-shadow-2xl rounded-xl"
                    />
                </div>
            </div>
            {/* </section>
     */}
        </Section>
    );
}
