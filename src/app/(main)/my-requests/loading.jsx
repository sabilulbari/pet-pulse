"use client";

import React from "react";

export default function PetLoader({ text = "Fetching tail-wags..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-6 select-none">
      {/* Container with soft ambient glow */}
      <div className="relative flex items-center justify-center w-28 h-28 mb-6">
        {/* Soft Background Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-[#febe74]/20 animate-ping opacity-75 duration-1000" />

        {/* Main Rotating Gradient Border Spinner */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#febe74] border-r-[#f7947d] animate-spin duration-700" />

        {/* Center Cute Paw Print Icon with Scaling/Wobble Animation */}
        <div className="absolute bg-white shadow-md rounded-full w-20 h-20 flex items-center justify-center border border-orange-50/50  duration-1000">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-11 h-11 fill-[#f7947d] text-[#f7947d]">
            {/* Main Pad */}
            <path d="M12 14c-1.66 0-3 1.12-3 2.5s1.34 2.5 3 2.5 3-1.12 3-2.5-1.34-2.5-3-2.5z" />
            {/* Left Toe */}
            <path d="M7 11.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
            {/* Middle Left Toe */}
            <path d="M9.5 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
            {/* Middle Right Toe */}
            <path d="M14.5 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
            {/* Right Toe */}
            <path d="M17 11.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
          </svg>
        </div>
      </div>

      
    </div>
  );
}
