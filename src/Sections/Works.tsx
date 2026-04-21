import React from "react";

const Works = () => {
  return (
    <>
      <div className="pb-15">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10 sm:mb-14 mt-10">
          <div className="inline-flex items-center gap-2 ">
            <div className="hidden sm:block w-7 h-px bg-green-600"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.28em] uppercase text-green-600">
              Easy Workflow
            </span>
            <div className="hidden sm:block w-7 h-px bg-green-600"></div>
          </div>

          <h2 className="mt-2 text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight">
            How CRMbot
            <span className="text-green-600 italic"> Works</span>
          </h2>
          <p className="text-gray-500 mt-2 text-[14px] min-[400px]:text-[16px] md:text-[18px]">
            From lead capture to conversion in simple steps
          </p>
        </div>

        <div className="text-center">
          {/* Timeline */}
          <div className="max-w-5xl mx-auto px-6 relative">
            {/* Steps */}
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
              {[
                {
                  title: "Capture Leads",
                  desc: "Collect leads from WhatsApp, website & ads.",
                  icon: "📥",
                },
                {
                  title: "Organize Data",
                  desc: "Automatically store and manage all leads in one place.",
                  icon: "📂",
                },
                {
                  title: "Automate Chat",
                  desc: "Send replies, reminders & follow-ups automatically.",
                  icon: "🤖",
                },
                {
                  title: "Convert Sales",
                  desc: "Manage pipeline and close deals faster.",
                  icon: "📊",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f0fdf4] border-2 border-green-600 text-2xl z-10 group-hover:bg-green-600 group-hover:text-white transition">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 max-w-xs">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
