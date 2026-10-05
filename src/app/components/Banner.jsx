// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { MdOutlinePets } from "react-icons/md";

// const Banner = () => {
//   return (
//     <section className="relative w-full flex items-center overflow-hidden bg-[#FDF9F7] ">
//       {/* Background Subtle Radial Gradient */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-orange-100 via-white to-white opacity-60" />

//       <div className="container mx-auto px-12 z-10 flex  flex-col-reverse md:flex-row items-center justify-between">
//         {/* Left Content */}
//         <div className="max-w-xl space-y-8 text-center md:text-left pt-4">
//           <h1 className="text-7xl  text-[#1e293b] leading-[0.95]">
//             A Friend <br />
//             <span className="text-[#f7947d]">Is Waiting</span> <br />
//             for You
//           </h1>

//           <p className="text-lg text-gray-600 max-w-md">Thousands of adorable pets are looking for a loving home. Adopt today and find your loyal companion.</p>

//           <Link className="flex justify-center items-center" href={"/all-pets"}>
//             <button className="flex items-center gap-3 cursor-pointer bg-linear-to-r from-[#f7947d] to-[#ffaf9d] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-orange-200 hover:scale-105 transition-transform">
//               <span className="bg-white/20 p-1 rounded-full">
//                 <MdOutlinePets />
//               </span>
//               Adopt Now &gt;
//             </button>
//           </Link>

//           {/* Feature Badges */}
//           <div className="flex gap-8 pt-4 text-gray-700">
//             {["Verified Shelters", "Healthy Pets", "Lifetime Support"].map((item, i) => (
//               <div key={i} className="flex items-center gap-2 text-sm font-medium">
//                 <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">✓</div>
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Content: The Image */}
//         <div className="relative w-125 h-125">
//           <Image
//             src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl0dGxlJTIwY2F0fGVufDB8fDB8fHww"
//             width={500}
//             height={500}
//             alt="Puppy and Kitten"
//             className="w-full h-full object-cover rounded-3xl"
//           />
//         </div>
//       </div>

//       {/* Floating Info Cards */}
//     </section>
//   );
// };

// export default Banner;
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Search, 
  User, 
  Check, 
  Home, 
  Sparkles, 
  Clock, 
  Smile, 
  ShieldCheck, 
  ArrowRight,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

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
            <motion.div variants={fadeInUp} className="space-y-1 relative">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#1E293B] leading-[1.12] tracking-tight">
                A Loving Home <br />
                <span className="relative inline-block text-[#FF7A65]">
                  Is Waiting
                  {/* Floating Hand-Drawn Doodle Heart Accent */}
                  <svg
                    className="absolute -right-12 -top-2 w-10 h-10 text-[#FF7A65] animate-pulse"
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
                <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24">
                  <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7.5 5c-1.93 0-3.5 1.57-3.5 3.5 0 2.48 2.02 4.5 4.5 4.5 1.54 0 2.91-.78 3.73-1.97C14.56 23.22 15.93 24 17.47 24c2.48 0 4.5-2.02 4.5-4.5 0-1.93-1.57-3.5-3.5-3.5-.66 0-1.28.18-1.81.5-.72-.92-1.84-1.5-3.09-1.5s-2.37.58-3.09 1.5c-.53-.32-1.15-.5-1.81-.5z" />
                </svg>
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
                <img
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=900"
                  alt="Adorable Tabby Kitten"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
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
                    <img
                      src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=150"
                      alt="Milo Avatar"
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

      {/* BOTTOM STATS BANNER */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 pb-8 pt-4"
      >
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-orange-100/80 shadow-xl shadow-orange-950/[0.03]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-slate-100">
            {/* Stat Item 1 */}
            <div className="flex items-center gap-4 md:justify-center group">
              <div className="w-12 h-12 rounded-2xl bg-orange-100/60 text-[#FF7A65] flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7.5 5c-1.93 0-3.5 1.57-3.5 3.5 0 2.48 2.02 4.5 4.5 4.5 1.54 0 2.91-.78 3.73-1.97C14.56 23.22 15.93 24 17.47 24c2.48 0 4.5-2.02 4.5-4.5 0-1.93-1.57-3.5-3.5-3.5-.66 0-1.28.18-1.81.5-.72-.92-1.84-1.5-3.09-1.5s-2.37.58-3.09 1.5c-.53-.32-1.15-.5-1.81-.5z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">2,500+</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Pets Adopted</p>
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="flex items-center gap-4 md:justify-center md:pl-4 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-100/60 text-[#FF7A65] flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">1,800+</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Happy Families</p>
              </div>
            </div>

            {/* Stat Item 3 */}
            <div className="flex items-center gap-4 md:justify-center md:pl-4 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-100/60 text-[#FF7A65] flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                <Smile className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">98%</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Satisfaction Rate</p>
              </div>
            </div>

            {/* Stat Item 4 */}
            <div className="flex items-center gap-4 md:justify-center md:pl-4 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-100/60 text-[#FF7A65] flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">24/7</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}