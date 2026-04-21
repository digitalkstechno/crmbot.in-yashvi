import React from "react";

const Numbers = () => {
  return (
    <>
      <div className="sm:20 md:pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="hidden sm:block w-7 h-px bg-green-600"></div>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.28em] uppercase text-green-600">
            Trusted Across India
          </span>
          <div className="hidden sm:block w-7 h-px bg-green-600"></div>
        </div>

        {/* Heading */}
        <h2 className="text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 mx-4 mb-10 leading-tight">
          Numbers That Speak for <br />
          <span className="text-green-600 italic">Themselves</span>
        </h2>

        {/* Cards */}
        <div className="sm:w-[100%] md:w-full flex justify-center">
          <div className="max-w-7xl mx-5 px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { number: "200+", label: "Happy Clients" },
              { number: "8+", label: "Years Experience" },
              { number: "5+", label: "Industries Served" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 sm:p-4.5 min-[772px]:p-10  lg:p-10 rounded-3xl bg-white/70 backdrop-blur-lg border border-gray-100 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className="absolute  inset-0 rounded-3xl bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-10 transition"></div>

                {/* Number */}
                <h3 className="text-5xl font-bold text-green-600 group-hover:scale-110 transition">
                  {item.number}
                </h3>

                {/* Label */}
                <p className="mt-4 text-gray-600 min-[817px]:text-[16px] lg:text-[18px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Numbers;
