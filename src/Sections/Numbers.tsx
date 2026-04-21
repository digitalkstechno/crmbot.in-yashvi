"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "200+",
    label: "Happy Clients",
    description: "Businesses trust us to deliver results",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    number: "8+",
    label: "Years Experience",
    description: "Deep domain expertise across sectors",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    number: "5+",
    label: "Industries Served",
    description: "Versatile solutions for every domain",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5"
        />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Numbers() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-[5%] w-72 h-72 rounded-full bg-green-50 blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-emerald-50 blur-3xl opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="hidden sm:block w-7 h-px bg-green-600" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-green-600">
            Trusted Across India
          </span>
          <span className="hidden sm:block w-7 h-px bg-green-600" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-14"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 mx-4 mb-5 leading-tight"
          >
            Numbers That Speak for <br />
            <span className="text-green-600 italic">Themselves</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6"
        >
          {stats.map((item, i) => (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-400 to-emerald-600 rounded-l-2xl" />

              {/* Inner content */}
              <div className="pl-7 pr-6 py-8">
                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-green-50 text-green-600 group-hover:bg-green-100 transition-colors duration-200">
                  {item.icon}
                </div>

                {/* Number */}
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-3xl md:text-4xl font-black text-gray-900 leading-none tracking-tight group-hover:text-green-600 transition-colors duration-300">
                    {item.number}
                  </span>
                </div>

                {/* Label */}
                <p className="text-[15px] md:text-[16px] font-semibold text-gray-800 mt-2">
                  {item.label}
                </p>

                {/* Description */}
                <p className="text-[13px] text-gray-400 mt-1 leading-snug">
                  {item.description}
                </p>
              </div>

              {/* Bottom bar on hover */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
