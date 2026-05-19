import React from "react";
import { Mail, MapPin, Phone, Clock, Instagram, Disc, Play } from "lucide-react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative bg-[#FAF6F3] pt-20 pb-10 overflow-hidden">
      {/* Decorative Background Elements */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-center lg:text-left">
          {/* Left: Get in Touch */}
          <div className="space-y-6">
            <h3 className=" text-2xl text-[#febe74] flex items-center justify-center lg:justify-start gap-2">Get in Touch</h3>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "(555) 123-4567" },
                { icon: Mail, text: "hello@pawsandlove.com" },
                { icon: MapPin, text: "123 Pet Lane, Happy Tails City" },
                { icon: Clock, text: "Mon - Fri: 9am - 6pm" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start gap-3 text-gray-600">
                  <div className="bg-white p-2 rounded-full shadow-sm text-orange-400">
                    <item.icon size={16} />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Branding */}
          <div className="flex flex-col items-center order-first lg:order-0">
            <div className="w-32 h-32 bg-orange-100 rounded-full mb-4 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
              <Image
                width={200}
                height={200}
                src="https://img.magnific.com/free-vector/cute-cat-playing-with-dog-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-8574.jpg"
                alt="Mascot"
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 ">Paws & Love</h1>
            <p className="text-xs tracking-widest uppercase text-orange-400 mt-1 font-semibold">Pet Care, Made With Love</p>
          </div>

          {/* Right: Stay Connected */}
          <div className="space-y-6 flex flex-col items-center lg:items-end">
            <h3 className=" text-2xl text-gray-800 flex items-center gap-2">
              Stay Connected <span className="text-orange-300">♥</span>
            </h3>
            <p className="text-sm text-gray-600 max-w-50">Follow us for pet tips, adorable moments, and updates!</p>
            <div className="flex gap-3">
              {[BsInstagram, FaFacebook, Disc, Play].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-orange-200 transition-all hover:-translate-y-1 text-gray-700"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200/50 flex flex-col items-center gap-4">
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            {["Home", "About Us", "Services", "Blog", "FAQ", "Contact"].map((link) => (
              <a key={link} href="#" className="hover:text-orange-500 transition">
                {link}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400">© 2024 Paws & Love. All rights reserved. 🐾</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
