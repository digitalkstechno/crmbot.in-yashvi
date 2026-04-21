import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-10 mx-7 sm:mx-12 pb-8 border-t border-gray-100">
      <div className="max-w-7xl px-0">
        <div className="pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-x-[48px] gap-y-8  md:gap-10 lg:gap-4">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <div className="bg-white p-2 rounded-xl inline-block shadow-sm border border-gray-50">
               <img 
                src="/crmbot_footer.png" 
                alt="CRMbot.in" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed w-full sm:max-w-xs">
              WhatsApp CRM powered by Meta Official API. Trusted by 200+ businesses across textile, real estate, manufacturing & more in India.
            </p>
          </div>

          {/* 2. Product Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-green-600 cursor-pointer transition">Dashboard</li>
              <li className="hover:text-green-600 cursor-pointer transition">Campaigns</li>
              <li className="hover:text-green-600 cursor-pointer transition">Lead Management</li>
              <li className="hover:text-green-600 cursor-pointer transition">Automation</li>
              <li className="hover:text-green-600 cursor-pointer transition">Reports</li>
            </ul>
          </div>

          {/* 3. Industries Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Industries</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-green-600 cursor-pointer transition"><a href="#Industries">Textile CRM</a></li>
              <li className="hover:text-green-600 cursor-pointer transition"><a href="#Industries">Builder CRM</a></li>
              <li className="hover:text-green-600 cursor-pointer transition"><a href="#Industries">CA CRM</a></li>
              <li className="hover:text-green-600 cursor-pointer transition"><a href="#Industries">Manufacturer CRM</a></li>
              <li className="hover:text-green-600 cursor-pointer transition"><a href="#Industries">Seller CRM</a></li>
            </ul>
          </div>

          {/* 4. Company Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-green-600 cursor-pointer transition"><a href="#Portfolio">Portfolio</a></li>
              <li className="hover:text-green-600 cursor-pointer transition"><a href="#Testimonials">Testimonials</a></li>
              <li className="hover:text-green-600 cursor-pointer transition"><a href="#Contact">Contact</a></li>
              <li className="hover:text-green-600 cursor-pointer transition">Book Demo</li>
              <li className="hover:text-green-600 cursor-pointer transition font-bold">Call Us</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © 2024 <span className="text-green-600 font-medium">CRMbot.in</span>. All rights reserved. Made with in Surat.
          </p>
          <p className="text-gray-400 text-xs font-medium">
            Meta Official WhatsApp Business API Partner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;