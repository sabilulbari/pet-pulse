"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Home from "./page";

export default function PetLoadingScreen() {
  // SVG Paw Icon definition for cleaner reuse
  const PawIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <path d="M12 14c-1.66 0-3 1.12-3 2.5s1.34 2.5 3 2.5 3-1.12 3-2.5-1.34-2.5-3-2.5z" />
      <path d="M7 11.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
      <path d="M9.5 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
      <path d="M14.5 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
      <path d="M17 11.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
    </svg>
  );

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#DCD4FA] via-[#FADCE5] to-[#FCE6CE] px-6 select-none">
      {/* 1. Ambient Backdrop Decor (Sparkles, Clouds) */}
      <div className="absolute top-[22%] left-[18%] text-white/50 text-xl animate-pulse">✦</div>
      <div className="absolute top-[40%] right-[14%] text-white/60 text-2xl animate-pulse [animation-delay:0.3s]">✦</div>
      <div className="absolute bottom-[30%] left-[22%] text-white/40 text-lg animate-pulse [animation-delay:0.6s]">✦</div>

      <div className="absolute top-[32%] left-[-4%] w-36 h-16 bg-white/20 rounded-full blur-md opacity-60 pointer-events-none hidden md:block" />
      <div className="absolute bottom-[22%] right-[-3%] w-44 h-20 bg-white/20 rounded-full blur-lg opacity-50 pointer-events-none" />

      {/* Main Core Layout Wrapper */}
      <div className="flex flex-col items-center max-w-md w-full text-center z-10">
        {/* 2. Cinematic Cute Pet & Heart Section */}
        <div className="relative mb-6">
          {/* Floating Love Bubble */}
          <div className="absolute top-2 -right-1 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-[0_8px_20px_rgba(110,80,180,0.06)] border border-pink-100/50 flex items-center justify-center animate-bounce duration-1000">
            <span className="text-xl leading-none">❤️</span>
            {/* Bubble Tail Accent */}
            <div className="absolute -bottom-1 left-3 w-2 h-2 bg-white border-r border-b border-pink-100/50 rotate-45" />
          </div>

          {/* Premium 3D Character Rendering */}
          <div className="w-56 h-56 md:w-60 md:h-60 mx-auto transform hover:scale-[1.03] transition-transform duration-500">
            <Image
              width={240}
              height={240}
              src="https://cdn.pixabay.com/photo/2025/09/02/11/33/black-cat-9811393_1280.png"
              alt="Cute Companion Loader"
              className="w-full h-full object-contain filter drop-shadow-[0_12px_20px_rgba(110,80,180,0.12)]"
            />
          </div>
        </div>

        {/* 3. Text Loader Heading */}
        <h2 className="text-2xl md:text-[26px] font-black text-[#4A3B75] tracking-tight mb-8">This page not found...</h2>

        {/* 4. Pixel-Perfect Glowing Staggered Paw Trail */}
        <div className="flex items-center gap-3.5 justify-center mb-12">
          {/* Paw 1 */}
          <div className="animate-pulse animation-duration-[1.4s]">
            <PawIcon className="w-35 h-35 fill-white drop-shadow-[0_0_12px_rgba(255,255,255,0.95)]" />
          </div>
          {/* Paw 2 */}
          <div className="animate-pulse animation-duration-[1.4s] [animation-delay:0.2s]">
            <PawIcon className="w-30 h-30 fill-white/80 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
          </div>
          {/* Paw 3 */}
          <div className="animate-pulse animation-duration-[1.4s] [animation-delay:0.4s]">
            <PawIcon className="w-25 h-25 fill-white/60" />
          </div>
          {/* Paw 4 */}
          <div className="animate-pulse animation-duration-[1.4s] [animation-delay:0.6s]">
            <PawIcon className="w-20 h-20 fill-[#7C6CA6]/30" />
          </div>
          {/* Paw 5 */}
          <div className="animate-pulse animation-duration-[1.4s] [animation-delay:0.8s]">
            <PawIcon className="w-15 h-15 fill-[#7C6CA6]/25" />
          </div>
          {/* Paw 6 */}
          <div className="animate-pulse animation-duration-[1.4s] [animation-delay:1.0s]">
            <PawIcon className="w-10 h-10 fill-[#7C6CA6]/25" />
          </div>
          {/* Paw 7 */}
          <div className="animate-pulse animation-duration-[1.4s] [animation-delay:1.2s]">
            <PawIcon className="w-5 h-5 fill-[#7C6CA6]/25" />
          </div>
        </div>

        {/* 5. Trust and Safety Bottom Pill */}
        <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/40 shadow-sm shadow-purple-900/[0.02]">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#523A96] font-bold px-8 py-3.5 rounded-full border-2 border-[#9F8BE3] shadow-[0_0_25px_rgba(159,139,227,0.4)] hover:shadow-[0_0_35px_rgba(159,139,227,0.7)] hover:bg-[#523A96] hover:text-white hover:border-transparent transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <span>Back to Home</span>
          </Link>
          <ShieldCheck className="w-4 h-4 text-[#523A96] stroke-[2.5]" />
          <span className="text-xs font-bold text-[#523A96] tracking-wide">We take trust and safety seriously.</span>
        </div>
      </div>
    </div>
  );
}
