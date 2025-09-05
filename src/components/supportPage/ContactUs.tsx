// app/contact/page.tsx (Next.js 13+ App Router)
"use client";
import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "Technical Support",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
        alert("Message sent!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className=" p-8 rounded-2xl  w-full max-w-xl"
            >
                <h2 className="text-2xl font-semibold text-center mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-center mb-6">
                    Fill out the form below and we’ll get back to you as soon as possible
                </p>

                {/* First + Last Name */}
                <div className="flex  gap-4 mb-4">
                    <div>
                        <label className="text-gray-900 text-base font-medium"> First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={form.firstName}
                            onChange={handleChange}
                            className=" rounded-lg p-3 w-full focus:outline-none bg-white focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="text-gray-900 text-base font-medium"> Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={form.lastName}
                            onChange={handleChange}
                            className="bg-white rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>


                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="text-gray-900 text-base font-medium">Email Address</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        className="bg-white rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Subject */}
                <div className="mb-4">
                    <label className="text-gray-900 text-base font-medium"> Subject</label>

                    <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="bg-white rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option>Technical Support</option>
                        <option>Sales Inquiry</option>
                        <option>General Question</option>
                    </select>
                </div>

                {/* Message */}
                <label className="text-gray-900 text-base font-medium"> Message</label>

                <div className="mb-6">
                    <textarea
                        name="message"
                        placeholder="Describe your issue or question in detail..."
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-white rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:opacity-90 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
