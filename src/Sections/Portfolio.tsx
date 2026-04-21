import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const cases = [
    {
      title: "Shreeji Developers CRM",
      desc: "Lead pipeline + site visit automation for 3 projects",
      tags: ["Builder CRM", "WhatsApp"],
      icon: "🏗️",
      bgColor: "bg-[#e2f9eb]",
    },
    {
      title: "Kothari Fabrics CRM",
      desc: "Seasonal campaigns to 10,000+ buyer contacts",
      tags: ["Textile CRM", "Campaigns"],
      icon: "🧵",
      bgColor: "bg-[#ffecd2]",
    },
    {
      title: "Mehta & Co. CA CRM",
      desc: "Document collection + deadline reminders automated",
      tags: ["CA CRM", "Automation"],
      icon: "⚖️",
      bgColor: "bg-[#e0e7ff]",
    },
    {
      title: "Patel Industries CRM",
      desc: "Dealer network management & B2B communication",
      tags: ["Manufacturer CRM"],
      icon: "🏭",
      bgColor: "bg-[#fce7f3]",
    },
    {
      title: "ShopEasy WhatsApp Store",
      desc: "WhatsApp catalog + order tracking for online seller",
      tags: ["Seller CRM", "Catalog"],
      icon: "🛒",
      bgColor: "bg-[#dcfce7]",
    },
    {
      title: "Agarwal Group Multi-CRM",
      desc: "Unified CRM across 4 verticals with custom reporting",
      tags: ["Custom CRM", "Reports"],
      icon: "📊",
      bgColor: "bg-[#f3e5f5]",
      isDark: true,
    },
  ];
  return (
    <>
      <div className="sm:py-10 md:py-15" id="Portfolio">
        <div className="max-w-6xl mx-auto px-6 text-center mb-14 mt-10">
          <div className="inline-flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3"
            >
              <div className="hidden sm:block w-7 h-px bg-green-600"></div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.28em] uppercase text-green-600">
                Our work
              </span>
              <div className="hidden sm:block w-7 h-px bg-green-600"></div>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight"
          >
            Real Projects.
            <span className="text-green-600 italic">Real Results.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-2 text-[14px] min-[400px]:text-[16px] md:text-[18px]"
          >
            Built for impact. Proven by results.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-5 md:px-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cases.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Top Colored Visual Area */}
              <div
                className={`${item.bgColor} h-46 flex items-center justify-center relative overflow-hidden`}
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </span>

                {/* Overlay on Hover  */}
                <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold flex items-center gap-2">
                    View Case Study <span className="text-xl">→</span>
                  </span>
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="px-8 py-5">
                {/* Tags */}
                <div className="flex gap-2 mb-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#25D366] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
