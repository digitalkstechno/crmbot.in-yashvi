import React from "react";
import { motion } from "framer-motion";

const Action = () => {
  return (
    <div className="py-10 sm:py-10 md:py-15 flex justify-center items-center">
      <div className="w-full flex justify-center">
        {/* Main Box */}
        <div className="max-w-7xl mx-5 md:mx-11 w-full bg-green-100 px-4 py-8 sm:px-8 sm:py-10 text-center rounded-[40px] shadow-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 my-4 leading-tight"
          >
            Experience CRMbot in Action
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-2 text-[14px] min-[400px]:text-[16px] md:text-[18px] pb-4"
          >
            Discover how our smart CRM helps you capture leads, automate
            conversations, and close more deals effortlessly.
          </motion.p>

          <button className="bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full font-bold text-sm sm:text-md shadow-lg hover:scale-105 transition flex items-center gap-2 mx-auto">
            Book Free Demo →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Action;
