import React from "react";

const Hero = () => {
  return (
    <>
      <style jsx>{`
        /* ── Page Load Entrance ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.65); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes barGrow {
          from { height: 0% !important; opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── Continuous ── */
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes floatDown {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }
        @keyframes pulseRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.45); }
          60%       { box-shadow: 0 0 0 8px rgba(22,163,74,0); }
        }
        @keyframes glowGreen {
          0%, 100% { box-shadow: 0 20px 60px rgba(22,163,74,0.08); }
          50%       { box-shadow: 0 20px 60px rgba(22,163,74,0.25); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(260%)  skewX(-12deg); }
        }

        /* ── Entrance classes (staggered delays) ── */
        .a-badge     { animation: fadeUp    0.55s 0.05s ease both; }
        .a-h1        { animation: fadeUp    0.55s 0.18s ease both; }
        .a-desc      { animation: fadeUp    0.55s 0.30s ease both; }
        .a-btns      { animation: fadeUp    0.55s 0.42s ease both; }
        .a-dashboard { animation: fadeRight 0.65s 0.25s ease both; }

        .a-stat1 { animation: popIn 0.4s 0.60s ease both; }
        .a-stat2 { animation: popIn 0.4s 0.72s ease both; }
        .a-stat3 { animation: popIn 0.4s 0.84s ease both; }

        .a-bar1 { animation: barGrow 0.5s 0.70s ease both; }
        .a-bar2 { animation: barGrow 0.5s 0.80s ease both; }
        .a-bar3 { animation: barGrow 0.5s 0.90s ease both; }
        .a-bar4 { animation: barGrow 0.5s 1.00s ease both; }
        .a-bar5 { animation: barGrow 0.5s 1.10s ease both; }
        .a-bar6 { animation: barGrow 0.5s 1.20s ease both; }
        .a-bar7 { animation: barGrow 0.5s 1.30s ease both; }

        .a-lead1 { animation: slideLeft 0.45s 1.15s ease both; opacity: 0; animation-fill-mode: forwards; }
        .a-lead2 { animation: slideLeft 0.45s 1.35s ease both; opacity: 0; animation-fill-mode: forwards; }

        .a-top-badge { animation: popIn 0.45s 0.85s ease both; }
        .a-bot-badge { animation: popIn 0.45s 1.05s ease both; }

        /* ── Continuous classes ── */
        .c-bounce  { animation: bounceSlow 3s   ease-in-out infinite; }
        .c-float   { animation: floatDown  3.5s ease-in-out infinite; }
        .c-pulse   { animation: pulseRing  2s   infinite; }
        .c-glow    { animation: glowGreen  4s   ease-in-out infinite; }

        /* Shimmer on primary button */
        .btn-shimmer { position: relative; overflow: hidden; }
        .btn-shimmer::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.28) 50%,
            transparent 100%
          );
          transform: translateX(-100%) skewX(-12deg);
          animation: shimmer 3s 1.5s ease-in-out infinite;
        }
      `}</style>

      <section className="relative px-4 sm:px-6 md:px-8 min-h-screen pt-24 sm:pt-15 pb-12 flex gap-0 lg:gap-10 flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
            backgroundSize: "400px",
          }}
        />

        {/* ── LEFT ── */}
        <div className="relative z-10 text-center lg:text-left px-0 sm:px-4 mb-0 lg:w-1/2">

          {/* Badge */}
          <div className="a-badge inline-flex items-center gap-2 bg-white border border-green-100 px-4 py-1 rounded-full shadow-sm">
            <span className="c-pulse w-4 h-4 bg-green-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
              ✓
            </span>
            <span className="text-[10px] min-[326px]:text-[12px] min-[358px]:text-[14px] font-medium text-gray-700">
              Meta Official WhatsApp API Partner
            </span>
          </div>

          {/* H1 */}
          <h1 className="a-h1 text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 my-4 leading-tight">
            WhatsApp CRM for <br className="hidden md:block" />
            <span className="text-green-600 italic">Every Business</span>
          </h1>

          {/* Description */}
          <p className="a-desc text-justify text-gray-500 text-[14px] min-[400px]:text-[16px] md:text-[18px] max-w-lg mb-6 md:mb-10 mx-auto lg:mx-0">
            Automate leads, campaigns & grow with Meta Official WhatsApp API.
            Built for Indian businesses — from textile to real estate.
          </p>

          {/* Buttons */}
          <div className="a-btns flex flex-wrap justify-center lg:justify-start gap-4 mb-0 sm:mb-8">
            <button className="btn-shimmer max-[460px]:w-[90%] bg-green-600 text-white px-6 py-2 sm:px-6 sm:py-2 md:px-8 md:py-4 rounded-2xl font-bold text-md transition-all duration-200 shadow-lg shadow-green-200 hover:bg-green-700 hover:-translate-y-1 active:scale-95">
              Start Free Trial →
            </button>
            <button className="max-[460px]:w-[90%] bg-white hover:bg-gray-50 text-gray-900 px-6 py-2 md:px-8 md:py-4 rounded-2xl font-bold text-md transition-all duration-200 border border-gray-100 shadow-sm hover:-translate-y-1 active:scale-95">
              Watch Demo Play
            </button>
          </div>
        </div>

        {/* ── RIGHT (DASHBOARD) ── */}
        <div className="a-dashboard relative flex justify-center w-full lg:w-auto mt-10 lg:mt-0 lg:mr-4 scale-90 md:scale-100">

          {/* Lead Captured Badge */}
          <div className="a-top-badge c-bounce absolute -top-6 -left-2 sm:left-[10%] md:left-[15%] lg:-left-10 z-30 bg-white shadow-xl rounded-xl p-3 flex items-center gap-2 border border-green-50">
            <span className="bg-green-600 text-white rounded-full h-5 w-5 p-1 text-[10px] flex items-center justify-center">
              ✓
            </span>
            <span className="text-xs font-bold text-gray-700 whitespace-nowrap">
              Lead Captured
            </span>
          </div>

          {/* Dashboard Window */}
          <div className="c-glow bg-white w-full max-w-[530px] h-auto rounded-[24px] shadow-2xl border border-gray-100 overflow-hidden">

            {/* Window Header */}
            <div className="bg-[#1a1a1a] p-4 flex items-center justify-between rounded-t-[24px]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-white text-xs font-medium opacity-80">
                CRMbot Dashboard
              </div>
            </div>

            <div className="p-4 md:p-6 bg-[#f8fafc]">

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                {[
                  { label: "Active Leads",  val: "347",  cls: "a-stat1" },
                  { label: "Messages Sent", val: "2.4k", cls: "a-stat2" },
                  { label: "Open Rate",     val: "91%",  cls: "a-stat3" },
                ].map((stat, i) => (
                  <div key={i} className={`${stat.cls} bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-gray-50 text-center`}>
                    <div className="text-xl md:text-2xl font-bold text-green-600">{stat.val}</div>
                    <div className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Bar Chart */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 mb-6">
                <div className="text-xs font-bold text-gray-700 mb-4">Leads This Week</div>
                <div className="flex items-end justify-between h-20 gap-2">
                  {[
                    { h: 40, cls: "a-bar1", active: false },
                    { h: 60, cls: "a-bar2", active: false },
                    { h: 45, cls: "a-bar3", active: false },
                    { h: 90, cls: "a-bar4", active: true  },
                    { h: 65, cls: "a-bar5", active: false },
                    { h: 30, cls: "a-bar6", active: false },
                    { h: 80, cls: "a-bar7", active: false },
                  ].map((bar, i) => (
                    <div
                      key={i}
                      className={`${bar.cls} w-full rounded-sm md:rounded-md transition-all duration-300 ${
                        bar.active ? "bg-green-600 shadow-md shadow-green-200" : "bg-green-100"
                      }`}
                      style={{ height: `${bar.h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Recent Leads */}
              <div className="space-y-3 pb-4">
                {[
                  { name: "Ramesh Kothari", num: "+91 98765 43210", tag: "New", tagColor: "bg-green-100 text-green-700",   initial: "RK", bg: "bg-green-600",  cls: "a-lead1" },
                  { name: "Priya Jain",     num: "+91 87654 32109", tag: "Hot", tagColor: "bg-orange-100 text-orange-700", initial: "PJ", bg: "bg-orange-500", cls: "a-lead2" },
                ].map((lead, i) => (
                  <div
                    key={i}
                    className={`${lead.cls} bg-white p-3 rounded-xl flex items-center justify-between border border-gray-50 shadow-sm hover:shadow-md hover:translate-x-1 transition-all duration-200`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${lead.bg} rounded-full flex items-center justify-center text-white font-bold text-xs`}>
                        {lead.initial}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-800">{lead.name}</div>
                        <div className="text-[11px] text-gray-400">{lead.num}</div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${lead.tagColor}`}>
                      {lead.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Campaign Sent Badge */}
          <div className="a-bot-badge c-float absolute bottom-5 -right-3 sm:right-[1%] md:right-[10%] lg:-right-10 z-30 bg-white shadow-xl rounded-full px-4 py-2 flex items-center gap-2 border border-gray-50">
            <span className="text-sm">🚀</span>
            <span className="text-xs font-bold text-gray-700 whitespace-nowrap">
              Campaign Sent to 2,400
            </span>
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;
