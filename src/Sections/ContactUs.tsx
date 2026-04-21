import React from "react";

const ContactUs = () => {
  const offices = [
    {
      id: "01",
      name: "Mota Varachha",
      address:
        "No-6, 2nd Floor, Shreenathji Bungalow, Peddar Rd, Mota Varachha, Surat, Gujarat – 394101",
      phone: "+91 8866779008",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.966456073715!2d72.8887!3d21.2327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEzJzU3LjciTiA3MsKwNTMnMTkuMyJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin",
    },
    {
      id: "02",
      name: "Baroda Prestige",
      address:
        "C1 Ganesh Colony, Baroda Prestige, Surat, Gujarat – 395006, India",
      phone: "+91 7016268071",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d72.86!3d21.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzM2LjAiTiA3MsKwNTEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin",
    },
  ];
  return (
    <>
      <div
        className="max-w-6xl mx-auto py-0 sm:py-10 px-6 text-center mb-8 mt-10"
        id="Contact"
      >
        <div className="inline-flex items-center gap-3 ">
          <div className="hidden sm:block w-7 h-px bg-green-600"></div>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.28em] uppercase text-green-600">
            Get In Touch
          </span>
          <div className="hidden sm:block w-7 h-px bg-green-600"></div>
        </div>

        <h2 className="mt-2 text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight">
          Visit Our
          <span className="text-green-600 italic">Offices</span>
        </h2>
        <p className="text-gray-500 mt-2 text-[14px] min-[400px]:text-[16px] md:text-[18px]">
          Two locations in Surat, Gujarat — ready to serve you
        </p>
      </div>

      <div className="flex justify-center">
        <div className="max-w-5xl mx-5 md:mx-11 grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Office Badge */}
              <span className="inline-block bg-green-50 text-green-600 text-xs font-bold px-3  rounded-md mb-6">
                Office {office.id}
              </span>

              {/* Title */}
              <h2 className="text-2xl font-bold text-slate-900 pb-1">
                {office.name}
              </h2>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-green-600">📍</span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {office.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">📞</span>
                  <a
                    href={`tel:${office.phone}`}
                    className="text-green-600 font-bold hover:underline"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>

              {/* Map Placeholder / Embed */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-gray-100 group">
                <iframe
                  src={office.mapUrl}
                  className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>

                {/* Open in Maps Button Overlay */}
                <div className="absolute top-4 left-4">
                  <button className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold shadow-sm flex items-center gap-2 hover:bg-white transition-colors">
                    ↗ Open in Maps
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" py-16 px-6 font-sans">
        {/* 1. Heading Section */}
        <div className="text-center mb-7">
          <h2 className="mt-2 text-[25px] min-[303px]:text-[28px] min-[352px]:text-[30px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight">
            Send Us a Message
          </h2>
          <p className="text-gray-500 mt-2 text-[14px] min-[400px]:text-[16px] md:text-[18px]">
            We'll get back to you within 24 hours
          </p>
        </div>

        {/* 2. Contact Form Card */}
        <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-gray-100">
          <form className="space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Raj"
                  className="w-full  placeholder:text-gray-600 p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Patel"
                  className="w-full placeholder:text-gray-600 p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="raj@example.com"
                className="w-full placeholder:text-gray-600 p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 transition"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+91 98765 43210"
                className="w-full placeholder:text-gray-600 p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 transition"
              />
            </div>

            {/* Preferred Office Dropdown */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Preferred Office
              </label>
              <select className="w-full text-gray-700 p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 transition appearance-none">
                <option value="" disabled selected className="text-gray-400">
                  Select an office...
                </option>
                <option className="text-gray-700">Mota Varachha</option>
                <option className="text-gray-700">Baroda Prestige</option>
              </select>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full placeholder:text-gray-600 p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 transition"
              />
            </div>

            {/* Message Area */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="w-full placeholder:text-gray-600 p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600/20 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full placeholder:text-gray-600 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-2xl shadow-lg shadow-green-100 transition-all active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
