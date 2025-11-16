"use client";
import { useState } from "react";
import { FiPhoneCall, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="min-h-screen py-20 px-6 text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-600">
            Let's Talk With Us
          </h1>
          <p className="text-gray-600">
            Have a project in mind or just want to say hello?  
            We're always open to discussing new ideas, creative concepts, or opportunities.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-5 mt-8">
            <div className="flex items-center gap-4">
              <FiPhoneCall className="text-2xl" />
              <div>
                <p className="font-semibold text-lg">Phone</p>
                <p className="text-gray-600">+880 1700 000000</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiMail className="text-2xl" />
              <div>
                <p className="font-semibold text-lg">Email</p>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiMapPin className="text-2xl" />
              <div>
                <p className="font-semibold text-lg">Address</p>
                <p className="text-gray-600">Banani, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-6">
            <FiFacebook className="text-2xl cursor-pointer hover:text-gray-200 transition" />
            <FiInstagram className="text-2xl cursor-pointer hover:text-gray-200 transition" />
            <FiLinkedin className="text-2xl cursor-pointer hover:text-gray-200 transition" />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="backdrop-blur-xl bg-black/10 p-8 rounded-2xl shadow-xl border border-black/20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-black/40 py-3 outline-none focus:border-black"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-black/70 text-sm pointer-events-none transition-all
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-black 
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-black">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-black/40 py-3 outline-none focus:border-black"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-black/70 text-sm pointer-events-none transition-all
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-black 
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-black">
                Your Email
              </label>
            </div>

            <div className="relative mt-4">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-transparent border-b border-black/40 py-3 outline-none focus:border-black resize-none"
              ></textarea>
              <label className="absolute left-0 top-2 text-black/70 text-sm pointer-events-none transition-all">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#167389] text-white font-semibold rounded-xl hover:bg-gray-100 transition hover:text-[#167389]"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
