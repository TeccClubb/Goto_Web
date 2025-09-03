"use client";

import { Info } from "lucide-react";
import Section from "../ui/Section";

export default function InstallSteps() {
  return (
      <Section>
         <div className="flex justify-center ">


      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* Left Gradient Box */}
        <div className="bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-600 border-gray-200 text-white p-8 flex flex-col items-center justify-center w-1/3">
          <div className="bg-white/20 p-4 rounded-full mb-4">
            <Info className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-semibold">Easy Setup</h2>
          <p className="text-sm opacity-90 text-center mt-2">
            Just download, install and connect.
          </p>
        </div>

        {/* Right Steps */}
        <div className="flex-1 p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            How to Install SafePro VPN
          </h3>

          <ol className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-semibold">
                1
              </span>
              <p>Download the app for your platform</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-semibold">
                2
              </span>
              <p>Install and launch SafePro VPN</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-semibold">
                3
              </span>
              <p>Log in with your account credentials</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-semibold">
                4
              </span>
              <p>Connect to a server and enjoy secure browsing!</p>
            </li>
          </ol>
        </div>
      </div>
      </div>
     </Section>
  );
}
