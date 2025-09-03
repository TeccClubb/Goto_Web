"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons
import Link from "next/link";
// import { poppins } from "@/app/layout";
// import { poppins } from "@/lib/fonts/fonts"; // ✅ only poppins here

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className={`  font-sans px-6 md:px-12 lg:px-20    bg-white border-gray-200`}
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center ">
                    <img src="/gotologoi.png" alt="Logo" className="h-17 w-33" />
                    {/* <span className="text-lg font-bold text-blue-600">Goto</span> */}
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="features" className="hover:text-blue-600">
                        Features
                    </Link>
                    <Link href="/pricing" className="hover:text-blue-600">
                        Pricing
                    </Link>
                    <Link href="/faq" className="hover:text-blue-600">
                        Faq
                    </Link>
                </nav>

                {/* Download Button */}
                <button className="px-5 py-2  bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-600 rounded-full border-gray-200 text-white hover:from-violet-600 hover:via-indigo-700 hover:to-blue-800 text-sm md:inline-block hidden transition">
                    Download
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-3">
                    <Link href="#" className="block text-gray-700 hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="#" className="block text-gray-700 hover:text-blue-600">
                        Features
                    </Link>
                    <Link href="#" className="block text-gray-700 hover:text-blue-600">
                        Pricing
                    </Link>
                    <Link href="#" className="block text-gray-700 hover:text-blue-600">
                        Faq
                    </Link>
                    <button className="w-full px-5 py-2 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition">
                        Download
                    </button>
                </div>
            )}
        </header>
    );
}
