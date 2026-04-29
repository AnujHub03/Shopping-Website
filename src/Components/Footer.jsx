import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-3xl font-black uppercase tracking-tighter italic">
              Modern <span className="text-primary">Style</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0">
              Redefining your everyday wardrobe with premium quality and sustainable choices since 2024.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {/* Social Icons */}
              {['fb', 'ig', 'tw', 'yt'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <span className="uppercase text-[10px] font-bold">{social}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="footer-title opacity-100 font-black uppercase italic text-primary mb-6">Shopping</h3>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li className="hover:text-primary transition-colors cursor-pointer">Clothing Store</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Trending Shoes</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Accessories</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Sale & Offers</li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="text-center md:text-left">
            <h3 className="footer-title opacity-100 font-black uppercase italic text-primary mb-6">Support</h3>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li className="hover:text-primary transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Payment Methods</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Delivary Tracking</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Return & Exchange</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="footer-title opacity-100 font-black uppercase italic text-primary mb-6">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Be the first to know about new arrivals and exclusive sales!
            </p>
            <div className="join w-full max-w-[280px] md:max-w-full">
              <input 
                className="input input-bordered join-item w-full bg-base-100 focus:outline-none border-base-300" 
                placeholder="email@example.com"
              /> 
              <button className="btn btn-primary join-item px-6 uppercase font-bold">Join</button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300 bg-base-300/30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            © 2026 ANUJ HOODA. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Mock Payment Badges */}
            <div className="px-2 py-1 bg-white rounded border border-gray-200 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="visa" />
            </div>
            <div className="px-2 py-1 bg-white rounded border border-gray-200 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-3" alt="mastercard" />
            </div>
            <div className="px-2 py-1 bg-white rounded border border-gray-200 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <span className="text-[10px] font-black text-blue-800">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;