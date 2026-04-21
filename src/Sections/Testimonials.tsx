import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      name: "Manish Kothari",
      role: "Owner – Kothari Textiles, Surat",
      initials: "MK",
      color: "bg-green-600",
      text: "CRMbot transformed how we manage fabric buyers. WhatsApp campaigns have a 90%+ open rate — no other tool comes close.",
    },
    {
      name: "Rakesh Shah",
      role: "Director – Shreeji Developers",
      initials: "RS",
      color: "bg-green-600",
      text: "As a builder, tracking site visits and sending automated flat updates on WhatsApp has increased our bookings by 40%.",
    },
    {
      name: "Payal Desai",
      role: "CA – Desai & Associates",
      initials: "PD",
      color: "bg-green-600",
      text: "Our CA firm uses CRMbot to send tax reminders and collect documents. Client satisfaction has improved significantly.",
    },
  ];
  return (
    <>
      <div className="sm:py-10 md:py-15" id="Testimonials">
        <div className="max-w-6xl mx-auto px-6 text-center mb-14 mt-10">
          <div className="inline-flex items-center gap-2 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3"
            >
              <div className="hidden sm:block w-7 h-px bg-green-600"></div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.28em] uppercase text-green-600">
                What Clients Say
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
            200+ Businesses Trust <br />
            <span className="text-green-600 italic">CRMbot.in</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-2 text-[14px] min-[400px]:text-[16px] md:text-[18px]"
          >
            Built to simplify workflows and boost growth for modern businesses.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl px-5 sm:px-10 pt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative bg-white p-4 sm:p-8 rounded-[32px] border border-transparent shadow-sm transition-all duration-300 hover:border-[#25D366] hover:shadow-[0_20px_40px_rgba(37,211,102,0.15)] hover:-translate-y-2 cursor-pointer flex flex-col gap-5 min-h-fit"
            >
              {/* 1. Stars */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#25D366]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* 2. Testimonial*/}
              <p className="text-[#475569] text-md leading-relaxed italic">
                "{review.text}"
              </p>

              {/* 3. User Profile */}
              <div className="flex items-center gap-4 mt-auto border-t border-gray-50">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${review.color} flex-shrink-0 flex items-center justify-center text-white font-bold text-md shadow-sm`}
                >
                  {review.initials}
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-[#1e293b] text-sm sm:text-md leading-none mb-1">
                    {review.name}
                  </h4>
                  <p className="text-gray-400 text-[12px] sm:text-xs leading-none">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Testimonials;
