// components/Footer.tsx
"use client";

import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-26">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-white font-bold text-lg">GotoVPN</h2>
          <p className="mt-2 text-sm">
            Securing the Internet with Next-Gen VPN Technology
          </p>
          <div className="flex space-x-4 mt-4 text-xl text-gray-300">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Apps</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><Link href="/support" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/term-of-services" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© 2025 GotoVPN, All rights reserved.</p>
        <p>
          Crafted with passion by{" "}
          <a href="#" className="text-blue-400 hover:underline">TecClub</a>
        </p>
      </div>
    </footer>
  );
}
