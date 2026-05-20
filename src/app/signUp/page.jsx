"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, CheckCircle2, Lock, Mail, User, Image as ImageIcon, ShieldCheck, Heart, Cloud, ArrowRight, PawPrint } from "lucide-react";
import Image from "next/image";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#E6E2FA] via-[#FCECEF] to-[#FDF1E6] flex flex-col items-center justify-between p-4 md:p-8 font-sans select-none">
      {/* Top Spacer to balance the layout */}
      <div className="w-full max-w-6xl hidden md:block" />

      {/* Main Unified Registration Card */}
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-md rounded-[32px] shadow-[0_24px_60px_-15px_rgba(147,51,234,0.08)] border border-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 my-auto">
        {/* ================= LEFT COLUMN: CUTE BANNER HERO ================= */}
        <div className="lg:col-span-5 bg-[#F6F3FF]/60 p-8 md:p-10 flex flex-col justify-between items-start relative overflow-hidden border-r border-gray-100/50">
          {/* Brand Logo Header */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md shadow-purple-200">
              <PawPrint />
            </div>
            <span className="text-lg font-medium tracking-tight text-black">
              Pet <span className="text-[#FEBE74]">Pulse</span>{" "}
            </span>
          </div>

          {/* Core Content */}
          <div className="space-y-4 z-10 max-w-sm">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#2B1B54] leading-[1.15]">
              A better life <br />
              for your pets, <br />
              <span className="text-purple-600">together.</span>
            </h1>
            <p className="text-xs font-semibold text-gray-400/90 leading-relaxed">Pet Pulse helps you track, care & celebrate every moment with your furry friends.</p>
          </div>

          {/* 3D Render Illustration Placement */}
          <div className="w-full relative flex justify-center py-6">
            {/* Soft decorative background circles */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 h-12 bg-purple-200/40 rounded-full blur-xl -z-10" />
            <Image
              width={600}
              height={400}
              alt={'cute'}
              src="https://i.ibb.co.com/My0rN88q/Remove-background-project-May-20-2026-at-22-18-17.png"
              className="w-104 h-64 object-contain filter drop-shadow-[0_12px_20px_rgba(147,51,234,0.1)]"
            />
          </div>

          {/* Social Proof Pill (Join 10,000+) */}
          <div className="bg-white/95 border border-purple-100/40 rounded-2xl p-3 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] flex items-center gap-3 w-full max-w-xs mx-auto lg:mx-0 z-10">
            <div className="flex -space-x-2">
              <Image
                width={200}
                height={200}
                className="w-7 h-7 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                alt="User"
              />
              <Image
                width={200}
                height={200}
                className="w-7 h-7 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                alt="User"
              />
              <Image
                width={200}
                height={200}
                className="w-7 h-7 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                alt="User"
              />
            </div>
            <div className="text-[11px] leading-tight font-medium text-gray-500">
              Join <span className="font-extrabold text-gray-900">10,000+ pet parents</span> who trust Pet Pulse
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
        <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
          {/* Form Content Wrapper */}
          <div className="max-w-xl w-full mx-auto space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-[#1F1640] flex items-center gap-1.5">
                Create your account{" "}
                <span className="text-sm">
                  <PawPrint />
                </span>
              </h2>
              <p className="text-xs font-medium text-gray-400 mt-0.5">Let&apos;s get started with a few details.</p>
            </div>

            {/* Input Groups */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Name Input */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 block">Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-4 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    defaultValue="Enter your full name"
                    className="w-full bg-gray-50/60 border border-gray-100/80 rounded-xl pl-11 pr-10 py-3 text-xs font-medium text-gray-800 focus:outline-none focus:border-purple-400 focus:bg-white transition"
                  />
                  <CheckCircle2 className="absolute right-4 w-4 h-4 text-emerald-500 fill-emerald-50" />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 block">Email</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    defaultValue="Enter your email address"
                    className="w-full bg-gray-50/60 border border-gray-100/80 rounded-xl pl-11 pr-10 py-3 text-xs font-medium text-gray-800 focus:outline-none focus:border-purple-400 focus:bg-white transition"
                  />
                  <CheckCircle2 className="absolute right-4 w-4 h-4 text-emerald-500 fill-emerald-50" />
                </div>
              </div>

              {/* Photo URL Input */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-gray-700">Photo URL</label>
                  <span className="text-[10px] text-gray-400 font-semibold bg-gray-100 px-1.5 py-0.5 rounded">Optional</span>
                </div>
                <div className="relative flex items-center">
                  <ImageIcon className="absolute left-4 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="https://example.com/your-photo.jpg"
                    className="w-full bg-gray-50/60 border border-gray-100/80 rounded-xl pl-11 pr-4 py-3 text-xs font-medium text-gray-800 focus:outline-none focus:border-purple-400 focus:bg-white transition"
                  />
                </div>
                <p className="text-[10px] text-gray-400 font-medium pl-1">Add a profile photo URL to personalize your account.</p>
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 block">Password</label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    defaultValue="mypassword123"
                    className="w-full bg-gray-50/60 border border-gray-100/80 rounded-xl pl-11 pr-10 py-3 text-xs font-medium text-gray-800 tracking-wider focus:outline-none focus:border-purple-400 focus:bg-white transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-gray-400 hover:text-purple-600 transition focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {/* Strength Meter Label and Bar Indicator */}
                <div className="flex items-center justify-between pt-1 px-0.5">
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 stroke-[2.5]" /> Great! Your password looks strong.
                  </span>
                  {/* Strength Bar indicators */}
                  <div className="flex gap-1">
                    <span className="w-4 h-1 rounded-full bg-emerald-500" />
                    <span className="w-4 h-1 rounded-full bg-emerald-500" />
                    <span className="w-4 h-1 rounded-full bg-emerald-500" />
                    <span className="w-4 h-1 rounded-full bg-emerald-500" />
                  </div>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 block">Confirm Password</label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 w-4 h-4 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    defaultValue="mypassword123"
                    className="w-full bg-gray-50/60 border border-gray-100/80 rounded-xl pl-11 pr-10 py-3 text-xs font-medium text-gray-800 tracking-wider focus:outline-none focus:border-purple-400 focus:bg-white transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 text-gray-400 hover:text-purple-600 transition focus:outline-none"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[10px] text-emerald-600 font-bold px-0.5 pt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 stroke-[2.5]" /> Passwords match.
                </p>
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-purple-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-purple-600/10 hover:bg-purple-700 active:scale-[0.99] transition duration-150 flex items-center justify-center gap-1.5 mt-2"
              >
                <span>Create account</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </form>

            {/* Form Footer Link */}
            <div className="text-center text-xs font-semibold text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-600 font-bold hover:underline underline-offset-2">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
