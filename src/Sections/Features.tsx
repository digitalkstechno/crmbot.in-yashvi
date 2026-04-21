import { useState } from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Live Dashboard",
    desc: "Real-time view of leads, campaigns, conversion rates & team performance in one place.",
    icon: "📊",
    stat: "Live Updates",
  },
  {
    title: "Campaign Management",
    desc: "Send bulk WhatsApp messages with rich media, schedule campaigns & track delivery.",
    icon: "📣",
    stat: "Bulk Sending",
  },
  {
    title: "Lead Management",
    desc: "Capture, assign, track & follow up on leads from multiple channels automatically.",
    icon: "🎯",
    stat: "Auto Assign",
  },
  {
    title: "WhatsApp Automation",
    desc: "Auto-reply, drip sequences, chatbot flows & instant lead response powered by Meta API.",
    icon: "🤖",
    stat: "Meta API",
  },
  {
    title: "Templates",
    desc: "Pre-approved WhatsApp message templates for every stage of the customer journey.",
    icon: "📄",
    stat: "Pre-approved",
  },
  {
    title: "Reports & Analytics",
    desc: "Detailed reports on open rates, response time, revenue & team-level insights.",
    icon: "📈",
    stat: "Deep Insights",
  },
];

const Features = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="Features" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* ── Header ── */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3"
            >
              <div className="hidden sm:block w-7 h-px bg-green-600" />

              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.28em] uppercase text-green-600">
                Platform Features
              </span>
              <div className="hidden sm:block w-7 h-px bg-green-600" />
            </motion.div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight"
          >
            Everything You Need to <br />
            <span className="text-green-600 italic">Convert & Retain</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-2 text-[14px] min-[400px]:text-[16px] md:text-[18px]"
          >
            Everything you need to turn conversations into long-term customers.
          </motion.p>
        </div>

        {/* Main Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mx-5 md:mx-11 items-start"
        >
          {/* LEFT — Feature List */}
          <div className="flex flex-col gap-3 order-2 lg:order-1">
            {data.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group w-full text-left px-4 md:px-5 py-4 rounded-2xl transition-all duration-300 flex items-center gap-4 border
                  ${
                    active === i
                      ? "bg-white border-green-200 shadow-xl shadow-green-100/50 scale-[1.02]"
                      : "bg-gray-50/50 border-transparent hover:bg-white hover:border-green-100"
                  }`}
              >
                {/* Number */}
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all
                  ${
                    active === i
                      ? "bg-green-600 text-white"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span
                    className={`font-semibold text-sm md:text-base truncate transition-colors
                    ${active === i ? "text-gray-900" : "text-gray-500 group-hover:text-gray-800"}`}
                  >
                    {item.title}
                  </span>
                </div>

                {/* Active indicator */}
                <div
                  className={`w-1.5 h-8 rounded-full flex-shrink-0 transition-all
                  ${active === i ? "bg-green-500" : "bg-transparent"}`}
                />
              </button>
            ))}
          </div>

          {/* RIGHT — Detail Card */}
          <div className="lg:sticky lg:top-28 order-1 lg:order-2">
            <div className="relative bg-white rounded-[2rem] p-6 md:p-10 border border-green-100 shadow-2xl shadow-green-100/40 overflow-hidden">
              {/* Decoration Circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-50 rounded-full opacity-50 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-50 rounded-full opacity-50 pointer-events-none" />

              {/* Stat badge */}
              <div className="relative inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest">
                  {data[active].stat}
                </span>
              </div>

              {/* Icon */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center text-4xl mb-6 border border-green-100 shadow-inner">
                {data[active].icon}
              </div>

              {/* Title */}
              <h3 className="relative text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {data[active].title}
              </h3>

              {/* Desc */}
              <p className="relative text-gray-500 text-base md:text-lg leading-relaxed mb-8">
                {data[active].desc}
              </p>

              {/* Step counter for mobile/tablet */}
              <div className="relative mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Feature {active + 1} / {data.length}
                </span>
                <div className="flex gap-2">
                  {data.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        active === i
                          ? "w-8 bg-green-500"
                          : "w-2 bg-gray-200 hover:bg-green-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
