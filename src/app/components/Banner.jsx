
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart,  
  Sparkles, 
  ArrowRight,
  PawPrint
} from 'lucide-react';
import Image from 'next/image';

export default function App() {
  const [isAdopted, setIsAdopted] = useState(false);
  const [likesCount, setLikesCount] = useState(142);
  const [hasLiked, setHasLiked] = useState(false);

  // Page load sequence animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const floatCardAnimation = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const toggleLike = () => {
    if (hasLiked) {
      setLikesCount(prev => prev - 1);
      setHasLiked(false);
    } else {
      setLikesCount(prev => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#1E293B] font-sans antialiased selection:bg-[#FF7A65]/20 selection:text-[#F06A53] relative overflow-hidden flex flex-col justify-between">
      {/* HERO MAIN BODY */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-6 md:py-12 flex-1 flex items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 z-10">
            {/* Top Badge */}
            <motion.div variants={fadeInUp} className="inline-flex">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/70 border border-orange-200/60 text-[#D9533D] font-semibold text-xs tracking-wide">
                <Heart className="w-3.5 h-3.5 fill-[#FF7A65] text-[#FF7A65]" />
                <span>Real Pets</span>
                <span className="text-orange-300">•</span>
                <span>Real Stories</span>
                <span className="text-orange-300">•</span>
                <span>Forever Homes</span>
              </span>
            </motion.div>

            {/* Main Headline with Highlight & SVG Doodle */}
            <motion.div variants={fadeInUp} className="space-y-1 relative ">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#1E293B] leading-[1.12] tracking-tight">
                A Loving Home <br />
                <span className="inline-block text-[#FF7A65]">
                  Is Waiting
                  {/* Floating Hand-Drawn Doodle Heart Accent */}
                  <svg
                    className="absolute right-5  top-6 w-10 h-10 text-[#FF7A65] animate-pulse"
                    viewBox="0 0 50 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="M25 38C25 38 10 28 10 18C10 12 14 8 20 8C23.5 8 25 10 25 10C25 10 26.5 8 30 8C36 8 40 12 40 18C40 28 25 38 25 38Z" />
                    <path d="M42 10L46 6" strokeWidth="2.5" />
                    <path d="M44 16L49 15" strokeWidth="2.5" />
                  </svg>
                </span>{" "}
                for You
              </h1>
            </motion.div>

            {/* Subtitle Description */}
            <motion.p variants={fadeInUp} className="text-slate-600 text-base sm:text-lg max-w-lg leading-relaxed font-normal">
              Thousands of adorable pets are looking for a loving home. Adopt today and give them a second chance at a happy life.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <button className="group relative inline-flex items-center gap-3 bg-[#FF7A65] hover:bg-[#F06A53] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl shadow-[#FF7A65]/30 hover:shadow-2xl hover:shadow-[#FF7A65]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                {/* Paw SVG inside button */}
                <PawPrint />
                <span>Find a Friend</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-slate-700 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-orange-100/80 shadow-2xl shadow-orange-900/5">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</span>
                <span>Verified Shelters</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-orange-100/80 shadow-2xl shadow-orange-900/5">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</span>
                <span>Healthy Pets</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-orange-100/80 shadow-2xl shadow-orange-900/5">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</span>
                <span>Lifetime Support</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL HERO COLUMN */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-4">
            {/* Background Blob Outer Aura with Continuous Morphing SVG */}
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              {/* Continuous Looping Animated Morphing Blob Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-[#FFD8CF] to-[#FFEBE4] opacity-80"
                animate={{
                  borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
                  scale: [1, 1.03, 1],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Decorative Cute Sparkle and Paw Doodles Around Frame */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-2 text-[#FF7A65] opacity-80 pointer-events-none"
              >
                <Sparkles className="w-10 h-10" />
              </motion.div>

              {/* Main Organic Shaped Image Mask */}
              <motion.div
                variants={scaleIn}
                className="relative z-10 w-[88%] h-[88%] overflow-hidden shadow-2xl shadow-orange-950/10 border-4 border-white"
                style={{
                  borderRadius: "52% 48% 63% 37% / 43% 54% 46% 57%",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=900"
                  alt="Adorable Tabby Kitten"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  height={300}
                  width={300}
                />
              </motion.div>

              {/* FLOATING INTERACTIVE PET CARD */}
              <motion.div
                variants={fadeInUp}
                animate={floatCardAnimation.animate}
                className="absolute -bottom-2 right-0 sm:right-4 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-xl border border-orange-100/60 w-[240px] sm:w-[260px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=150"
                      alt="Milo Avatar"
                      height={300}
                      width={300}
                      className="w-12 h-12 rounded-2xl object-cover ring-2 ring-[#FF7A65]/30"
                    />
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-base leading-tight">Milo</h3>
                    <p className="text-xs text-slate-500 font-medium">2 Months • Male</p>
                  </div>

                  {/* Interactive Heart Button */}
                  <button onClick={toggleLike} className="ml-auto p-1.5 rounded-full hover:bg-orange-50 transition-colors">
                    <Heart className={`w-4 h-4 transition-colors ${hasLiked ? "fill-[#FF7A65] text-[#FF7A65]" : "text-slate-400"}`} />
                  </button>
                </div>

                {/* Pet Attributes Pills */}
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  <span className="text-[11px] font-medium bg-orange-50 text-[#D9533D] px-2.5 py-0.5 rounded-full border border-orange-100">🐾 Playful</span>
                  <span className="text-[11px] font-medium bg-rose-50 text-rose-600 px-2.5 py-0.5 rounded-full border border-rose-100">♡ Healthy</span>
                  <span className="text-[11px] font-medium bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full border border-amber-100">🏠 Vaccinated</span>
                </div>

                {/* Adopt Action CTA inside Floating Card */}
                <button
                  onClick={() => setIsAdopted(() => setIsAdopted(true))}
                  className={`w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-300 ${
                    isAdopted ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20" : "bg-[#FF7A65] hover:bg-[#F06A53] text-white shadow-md shadow-[#FF7A65]/25"
                  }`}
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>{isAdopted ? "Application Sent!" : "Adopt Me"}</span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}