"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const offices = [
  {
    id: "01",
    name: "Mota Varachha",
    address:
      "No-6, 2nd Floor, Shreenathji Bungalow, Peddar Rd, Mota Varachha, Surat, Gujarat – 394101",
    phone: "+91 8866779008",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.966456073715!2d72.8887!3d21.2327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEzJzU3LjciTiA3MsKwNTMnMTkuMyJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin",
  },
  {
    id: "02",
    name: "Baroda Prestige",
    address:
      "C1 Ganesh Colony, Baroda Prestige, Surat, Gujarat – 395006, India",
    phone: "+91 7016268071",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d72.86!3d21.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzM2LjAiTiA3MsKwNTEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="w-4 h-4 shrink-0 mt-0.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="w-4 h-4 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-3.5 h-3.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);

export default function ContactUs() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <>
      {/* ─── OFFICES SECTION ─── */}
      <section className="relative overflow-hidden" id="Contact">
        {/* Subtle grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(22,163,74,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22,163,74,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-20 md:py-24 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3"
          >
            <div className="hidden sm:block w-7 h-px bg-green-600"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.28em] uppercase text-green-600">
              Get in touch
            </span>
            <div className="hidden sm:block w-7 h-px bg-green-600"></div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight"
          >
            Visit Our{" "}
            <span className="relative inline-block text-green-600 italic">
              Offices
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-3 text-[14px] min-[400px]:text-[16px] md:text-[18px]"
          >
            Two locations in Surat, Gujarat — ready to serve you
          </motion.p>

          {/* Office Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {offices.map((office, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Top accent strip */}
                

                <div className="p-6 sm:p-8">
                  {/* Office badge + number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                      Office {office.id}
                    </span>
                    <span className="text-[42px] font-black text-gray-50 leading-none select-none group-hover:text-green-50 transition-colors">
                      {office.id}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {office.name}
                  </h3>

                  {/* Contact info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-slate-600">
                      <span className="text-green-600 mt-0.5">
                        <LocationIcon />
                      </span>
                      <p className="text-sm leading-relaxed min-h-[50px]">
                        {office.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-600">
                        <PhoneIcon />
                      </span>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-green-600 font-bold text-sm hover:underline underline-offset-2"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-gray-100 group/map">
                    <iframe
                      src={office.mapUrl}
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <button className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-700 px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 hover:bg-white hover:text-green-600 transition-colors">
                        <ArrowIcon />
                        Open in Maps
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM SECTION ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-100 opacity-30 blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-emerald-100 opacity-40 blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* ── LEFT: Info Panel ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pt-2"
            >
              {/* Heading */}
              <h2 className="mt-2 text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight">
                Send Us a{" "}
                <span className="relative inline-block text-green-600 italic">
                  Message
                </span>
              </h2>
              <p className="text-gray-500 mt-3 text-[14px] min-[400px]:text-[16px] md:text-[18px]">
                We'll get back to you within 24 hours
              </p>

              {/* Divider */}
              <div className="mt-8 h-px bg-gradient-to-r from-green-200 via-gray-200 to-transparent" />

              {/* Office contact cards */}
              <div className="mt-8 space-y-4">
                {offices.map((o) => (
                  <div key={o.id} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-100 transition-colors">
                      <PhoneIcon />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">
                        Office {o.id} — {o.name}
                      </p>
                      <a
                        href={`tel:${o.phone}`}
                        className="text-[15px] font-bold text-gray-800 hover:text-green-600 transition-colors"
                      >
                        {o.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-8 h-px bg-gradient-to-r from-green-200 via-gray-200 to-transparent" />

              {/* Trust signals */}
              <div className="mt-8 space-y-3">
                {[
                  {
                    icon: "⚡",
                    title: "Quick Response",
                    desc: "We reply within 24 business hours",
                  },
                  {
                    icon: "📍",
                    title: "Local Expertise",
                    desc: "Serving Surat & Gujarat since 8+ years",
                  },
                  {
                    icon: "🔒",
                    title: "Confidential",
                    desc: "Your information is always safe with us",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-lg leading-none mt-0.5">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Form Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Form Card */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
                <form className="space-y-5">
                  {/* Name row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      {
                        label: "First Name",
                        placeholder: "Raj",
                        type: "text",
                        id: "fname",
                      },
                      {
                        label: "Last Name",
                        placeholder: "Patel",
                        type: "text",
                        id: "lname",
                      },
                    ].map((f) => (
                      <div key={f.id} className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700">
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          onFocus={() => setFocused(f.id)}
                          onBlur={() => setFocused(null)}
                          className={`w-full placeholder:text-gray-300 p-4 bg-gray-50 border rounded-xl focus:outline-none transition-all text-sm ${
                            focused === f.id
                              ? "border-green-400 bg-white ring-4 ring-green-50"
                              : "border-gray-100 hover:border-gray-200"
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="raj@example.com"
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={`w-full placeholder:text-gray-300 p-4 bg-gray-50 border rounded-xl focus:outline-none transition-all text-sm ${
                        focused === "email"
                          ? "border-green-400 bg-white ring-4 ring-green-50"
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+91 98765 43210"
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      className={`w-full placeholder:text-gray-300 p-4 bg-gray-50 border rounded-xl focus:outline-none transition-all text-sm ${
                        focused === "phone"
                          ? "border-green-400 bg-white ring-4 ring-green-50"
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                    />
                  </div>

                  {/* Preferred Office */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                      Preferred Office
                    </label>
                    <div className="relative">
                      <select
                        onFocus={() => setFocused("office")}
                        onBlur={() => setFocused(null)}
                        className={`w-full text-gray-700 p-4 bg-gray-50 border rounded-xl focus:outline-none transition-all appearance-none text-sm ${
                          focused === "office"
                            ? "border-green-400 bg-white ring-4 ring-green-50"
                            : "border-gray-100 hover:border-gray-200"
                        }`}
                      >
                        <option value="" disabled>
                          Select an office...
                        </option>
                        <option>Mota Varachha</option>
                        <option>Baroda Prestige</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help you?"
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      className={`w-full placeholder:text-gray-300 p-4 bg-gray-50 border rounded-xl focus:outline-none transition-all text-sm ${
                        focused === "subject"
                          ? "border-green-400 bg-white ring-4 ring-green-50"
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your message here..."
                      onFocus={() => setFocused("msg")}
                      onBlur={() => setFocused(null)}
                      className={`w-full placeholder:text-gray-300 p-4 bg-gray-50 border rounded-xl focus:outline-none transition-all resize-none text-sm ${
                        focused === "msg"
                          ? "border-green-400 bg-white ring-4 ring-green-50"
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full relative overflow-hidden bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-lg shadow-green-100"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                      </svg>
                    </span>
                    {/* Shine sweep on hover */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
          {/* end grid */}
        </div>
      </section>
    </>
  );
}
