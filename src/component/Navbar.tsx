"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Industries", href: "#Industries" },
    { name: "Features", href: "#Features" },
    { name: "Portfolio", href: "#Portfolio" },
    { name: "Testimonials", href: "#Testimonials" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <div className="sticky top-5 z-50 px-4 md:px-10">
      <nav className="bg-white shadow-md border border-gray-100 rounded-full py-1 px-3 sm:px-6 sm:py-3 flex items-center justify-between relative">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="crmbot.png" alt="CRMbot.in" className="h-10 sm:h-12 w-auto" />
        </div>

        {/* Desktop Menu (1024px થી ઉપર) */}
        <div className="hidden lg:flex items-center gap-8 text-gray-500 font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-green-600 transition">
              {link.name}
            </a>
          ))}
          <button className="bg-green-600 text-white px-7 py-2.5 rounded-full hover:bg-green-700 transition shadow-md shadow-green-100">
            Book Now
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(true)} className="text-gray-600 p-2">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* --- SIDE DRAWER MENU --- */}
      
      {/* Background Overlay  */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-[2px] z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Menu Content */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="self-end p-2 text-gray-500 mb-8">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-green-600 font-semibold text-[16px] sm:text-xl transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="mt-auto pb-6">
            <button className="w-full mt-10 bg-green-600 text-white py-2 rounded-2xl font-bold text-[16px] sm:text-lg hover:bg-green-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;