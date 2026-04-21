import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative px-4 sm:px-6 md:px-8 min-h-screen pt-24 sm:pt-15 pb-12 flex gap-0 lg:gap-10 flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
            backgroundSize: "400px",
          }}
        ></div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 text-center lg:text-left px-0 sm:px-4 mb-0 lg:w-1/2">
          <div className="inline-flex items-center gap-2 bg-white border border-green-100 px-4 py-1 rounded-full shadow-sm">
            <span className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center text-[10px] text-white">
              ✓
            </span>
            <span className="text-[10px] min-[326px]:text-[12px] min-[358px]:text-[14px] font-medium text-gray-700">
              Meta Official WhatsApp API Partner
            </span>
          </div>

          <h1 className="text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 my-4 leading-tight">
            WhatsApp CRM for <br className="hidden md:block" />
            <span className="text-green-600 italic">Every Business</span>
          </h1>

          <p className="text-justify text-gray-500 text-[14px] min-[400px]:text-[16px] md:text-[18px] max-w-lg mb-6 md:mb-10 mx-auto lg:mx-0">
            Automate leads, campaigns & grow with Meta Official WhatsApp API.
            Built for Indian businesses — from textile to real estate.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-0 sm:mb-8">
            <button className="max-[460px]:w-[90%] bg-green-600 text-white  px-6 py-2 sm:px-6 sm:py-2 md:px-8 md:py-4 rounded-2xl font-bold text-md transition-all shadow-lg shadow-green-200 hover:bg-green-700 active:scale-95">
              Start Free Trial →
            </button>
            <button className="max-[460px]:w-[90%] bg-white hover:bg-gray-50 text-gray-900 px-6 py-2 md:px-8 md:py-4 rounded-2xl font-bold text-md transition-all border border-gray-100 shadow-sm active:scale-95">
              Watch Demo Play
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT (DASHBOARD) */}
        <div className="relative flex justify-center w-full lg:w-auto mt-10 lg:mt-0 lg:mr-4 scale-90 md:scale-100">
          {/* Lead Captured Badge */}
          <div className="absolute -top-6 -left-2 sm:left-[10%] md:left-[15%] lg:-left-10 z-30 bg-white shadow-xl rounded-xl p-3 flex items-center gap-2 border border-green-50 animate-bounce-slow">
            <span className="bg-green-600 text-white rounded-full h-5 w-5 p-1 text-[10px] flex items-center justify-center">
              ✓
            </span>
            <span className="text-xs font-bold text-gray-700 whitespace-nowrap">
              Lead Captured
            </span>
          </div>
          {/* Dashboard Window */}
          <div className="bg-white w-full max-w-[530px] h-auto rounded-[24px] shadow-2xl border border-gray-100 overflow-hidden">
            {/* Window Header */}
            <div className="bg-[#1a1a1a] p-4 flex items-center justify-between rounded-t-[24px]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-white text-xs font-medium opacity-80">
                CRMbot Dashboard
              </div>
            </div>
            <div className="p-4 md:p-6 bg-[#f8fafc]">
              {/* Top Stats Cards */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                {[
                  {
                    label: "Active Leads",
                    val: "347",
                    color: "text-green-600",
                  },
                  {
                    label: "Messages Sent",
                    val: "2.4k",
                    color: "text-green-600",
                  },
                  { label: "Open Rate", val: "91%", color: "text-green-600" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-gray-50 text-center"
                  >
                    <div
                      className={`text-xl md:text-2xl font-bold ${stat.color}`}
                    >
                      {stat.val}
                    </div>
                    <div className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Leads Graph Section */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 mb-6">
                <div className="text-xs font-bold text-gray-700 mb-4">
                  Leads This Week
                </div>
                <div className="flex items-end justify-between h-20 gap-2">
                  {[40, 60, 45, 90, 65, 30, 80].map((h, i) => (
                    <div
                      key={i}
                      className={`w-full rounded-sm md:rounded-md transition-all duration-300 ${
                        i === 3 ? "bg-green-600 shadow-md" : "bg-green-100"
                      }`}
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Recent Leads List */}
              <div className="space-y-3 pb-4">
                {[
                  {
                    name: "Ramesh Kothari",
                    num: "+91 98765 43210",
                    tag: "New",
                    tagColor: "bg-green-100 text-green-700",
                    initial: "RK",
                    bg: "bg-green-600",
                  },
                  {
                    name: "Priya Jain",
                    num: "+91 87654 32109",
                    tag: "Hot",
                    tagColor: "bg-orange-100 text-orange-700",
                    initial: "PJ",
                    bg: "bg-orange-500",
                  },
                ].map((lead, i) => (
                  <div
                    key={i}
                    className="bg-white p-3 rounded-xl flex items-center justify-between border border-gray-50 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${lead.bg} rounded-full flex items-center justify-center text-white font-bold text-xs`}
                      >
                        {lead.initial}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-800">
                          {lead.name}
                        </div>
                        <div className="text-[11px] text-gray-400">
                          {lead.num}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-md text-[10px] font-bold ${lead.tagColor}`}
                    >
                      {lead.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Campaign Sent Badge */}
          <div className="absolute bottom-5 -right-3 sm:right-[1%] md:right-[10%] lg:-right-10 z-30 bg-white shadow-xl rounded-full px-4 py-2 flex items-center gap-2 border border-gray-50 animate-float-badge">
            <span className="text-sm">🚀</span>
            <span className="text-xs font-bold text-gray-700 whitespace-nowrap">
              Campaign Sent to 2,400
            </span>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes bounce-slow {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }

          @keyframes float-badge {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(10px);
            }
          }
          .animate-float-badge {
            animation: float-badge 3.5s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
