import Image from "next/image";
import React from "react";
import { MdOutlinePets } from "react-icons/md";

const Banner = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center overflow-hidden bg-[#FDF9F7]">
      {/* Background Subtle Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-orange-100 via-white to-white opacity-60" />

      <div className="container mx-auto px-12 z-10 flex items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl space-y-8">
          <h1 className="text-7xl  text-[#1e293b] leading-[0.95]">
            A Friend <br />
            <span className="text-[#f7947d]">Is Waiting</span> <br />
            for You
          </h1>

          <p className="text-lg text-gray-600 max-w-md">Thousands of adorable pets are looking for a loving home. Adopt today and find your loyal companion.</p>

          <button className="flex items-center gap-3 bg-linear-to-r from-[#f7947d] to-[#ffaf9d] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-orange-200 hover:scale-105 transition-transform">
            <span className="bg-white/20 p-1 rounded-full">
              <MdOutlinePets />
            </span>
            Adopt Now &gt;
          </button>

          {/* Feature Badges */}
          <div className="flex gap-8 pt-4 text-gray-700">
            {["Verified Shelters", "Healthy Pets", "Lifetime Support"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium">
                <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">✓</div>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content: The Image */}
        <div className="relative w-125 h-125">
          <Image
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=800"
            width={500}
            height={500}
            alt="Puppy and Kitten"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* Floating Info Cards */}
    </section>
  );
};

export default Banner;
