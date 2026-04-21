import React from "react";
import { motion } from "framer-motion";

const Industries = () => {
  return (
    <>
      <div className="pb-10" id="Industries">
        <div className="max-w-6xl mx-auto px-6 text-center mb-5 sm:mb-10 mt-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3"
            >
              <div className="hidden sm:block w-7 h-px bg-green-600"></div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.28em] uppercase text-green-600">
                Industries We Serve
              </span>
              <div className="hidden sm:block w-7 h-px bg-green-600"></div>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight"
          >
            CRM Built for
            <span className="text-green-600 italic">Your Business</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-3 text-[14px] min-[400px]:text-[16px] md:text-[18px]"
          >
            Specialized CRM solutions tailored for each sector
          </motion.p>
        </div>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }} 
         className="max-w-7xl mx-5 md:mx-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
          {[
            {
              title: "Textile CRM",
              icon: "🧵",
              desc: "Manage fabric orders, buyer follow-ups & seasonal campaigns with ease.",
            },
            {
              title: "Builder CRM",
              icon: "🏗️",
              desc: "Track site visits, booking pipelines & send automated updates to homebuyers.",
            },
            {
              title: "CA CRM",
              icon: "⚖️",
              desc: "Automate client reminders, document collection & tax deadline alerts.",
            },
            {
              title: "Manufacturer CRM",
              icon: "🏭",
              desc: "Streamline B2B leads, dealer networks & bulk order communication.",
            },
            {
              title: "Seller CRM",
              icon: "🛒",
              desc: "Boost sales with WhatsApp catalogs, order tracking & abandoned cart recovery.",
            },
            {
              title: "Custom CRM",
              icon: "🤝",
              desc: "Not listed? We build fully custom CRM solutions for your unique workflow.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-3 bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden h-[260px]"
            >
              {/* Icon Wrapper */}
              <div className="w-15 h-15 mt-5 flex items-center justify-center rounded-2xl bg-[#f0fdf4] text-3xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              {/* Content */}
              <div className="z-10">
                <h3 className="text-xl font-bold text-[#1e293b] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Hover Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-green-600 group-hover:h-10 flex items-center justify-center transition-all duration-300 ease-in-out">
                <span className="text-white font-bold opacity-0 group-hover:opacity-100 flex items-center gap-2">
                  Explore <span className="text-xl">→</span>
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Industries;
