"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, Heart, PawPrint, PawPrintIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: inputData.email,
      password: inputData.password,
    });
    console.log(data, error);

    if (data) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-custom-enter" : "animate-custom-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="shrink-0 pt-0.5">
                <Image width={50} height={50} className="h-10 w-10 rounded-full" src={data?.user?.image} alt="" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">{data?.user?.name}</p>
                <p className="mt-1 text-sm text-gray-500 flex gap-1 items-center">
                  You Loged in successfully <IoCheckmarkDoneCircle className="text-green-500" />
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
      router.push("/");
    } else {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FFF0E5] via-[#F4E3FF] to-[#E3F2FF] flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-orange-200">
      {/* Background Decorative Paw Prints */}
      <div className="absolute top-10 left-10 text-black/5 rotate-12 pointer-events-none hidden md:block">
        <PawPrint size={120} fill="currentColor" />
      </div>
      <div className="absolute bottom-10 right-10 text-black/5 -rotate-12 pointer-events-none hidden md:block">
        <PawPrint size={140} fill="currentColor" />
      </div>
      <div className="absolute top-1/4 right-12 text-black/5 rotate-45 pointer-events-none hidden md:block">
        <PawPrint size={80} fill="currentColor" />
      </div>

      {/* ================= LEFT CONTENT: TEXT & IMAGES ================= */}
      <div className="absolute left-[8%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-start max-w-sm z-10">
        <h1 className="text-4xl font-extrabold text-[#2F2E41] leading-tight mb-3 font-serif">
          Every pet <br /> deserves <br /> a home
        </h1>
        <Heart className="text-[#FF7A60] fill-[#FF7A60] w-6 h-6 animate-pulse ml-2" />

        {/* Left Dogs/Cats Images Stack */}
        <div className="relative mt-12 w-[320px] h-[320px]">
          <Image
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400"
            alt="Golden Retriever"
            width={240}
            height={240}
            className="rounded-full object-cover border-4 border-white shadow-xl absolute left-0 top-0 z-10"
          />
          <Image
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=200"
            alt="Cute Cat"
            width={140}
            height={140}
            className="rounded-full object-cover border-4 border-white shadow-xl absolute left-1/2 bottom-0 z-20"
          />
        </div>
      </div>

      {/* ================= MAIN FLOATING GLASS CARD ================= */}
      <div className="w-full max-w-110 bg-white/40 backdrop-blur-xl rounded-[40px] border border-white/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] p-8 md:p-10 z-20 relative mix-blend-normal">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-1.5 justify-center mb-1">
            <span className="text-[#FF7A60]">
              <PawPrint size={24} fill="currentColor" />
            </span>
            <span className="text-2xl font-black tracking-tight text-[#3A3335]">
              Pet<span className="text-[#FF7A60]"> Pulse</span>
            </span>
          </div>
          <span className="text-[10px] tracking-widest text-gray-500 uppercase font-bold">Adopt. Love. Repeat.</span>
        </div>

        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#2A2325] flex items-center justify-center gap-1.5">
            Welcome back
            <span className="text-[#FF7A60] text-xl">
              <PawPrintIcon />
            </span>
          </h2>
          <p className="text-[13px] font-medium text-gray-500 mt-1.5 max-w-[260px] mx-auto leading-relaxed">Login in to continue your journey towards a better tomorrow ♡</p>
        </div>

        {/* Interactive Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#4A4345] ml-1">Email address</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 text-gray-400 w-4 h-4" />
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full bg-white/80 border border-transparent focus:border-orange-300 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none shadow-sm transition-all duration-200"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#4A4345] ml-1">Password</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 text-gray-400 w-4 h-4" />
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="w-full bg-white/80 border border-transparent focus:border-orange-300 rounded-2xl py-3.5 pl-11 pr-11 text-sm text-gray-800 placeholder-gray-400 focus:outline-none shadow-sm transition-all duration-200"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right -mt-2">
            <Link href="/forgot-password" className="text-xs font-semibold text-[#FF7A60]/90 hover:text-[#FF7A60] underline underline-offset-2 transition-colors">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF7A60] to-[#FF6B54] hover:opacity-95 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-orange-500/15 transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99] mt-2 text-sm"
          >
            Log in
            <PawPrint size={16} fill="currentColor" className="opacity-90" />
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-7 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300/40" />
          </div>
          <span className="relative px-3 bg-transparent text-[11px] font-bold text-gray-400 uppercase tracking-wider z-10">or continue with</span>
        </div>

        {/* OAuth Buttons */}
        <button
          type="button"
          onClick={() => console.log("Google Login Clicked")}
          className="w-full bg-white hover:bg-gray-50 text-[#3A3335] font-semibold py-3.5 px-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-200 flex items-center justify-center gap-3 active:scale-[0.99] text-sm"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Signup Footer Link */}
        <div className="text-center text-xs font-semibold text-gray-400 mt-8">
          Don&apos;t have an account?{" "}
          <Link href="/signUp" className="text-[#FF7A60] font-bold hover:underline underline-offset-2 ml-0.5">
            Sign up
          </Link>
        </div>
      </div>

      {/* ================= RIGHT CONTENT: TEXT & IMAGES ================= */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-end max-w-sm z-10 text-right">
        <h2 className="text-xl font-bold text-[#4A4345] leading-relaxed font-sans mb-1">
          Thank you for <br /> choosing adoption
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-2xl rotate-45 transform text-gray-400">➔</span>
          <Heart className="text-[#FF7A60] w-5 h-5" />
        </div>

        {/* Right Dogs/Cats Images Stack */}
        <div className="relative mt-12 w-[320px] h-[320px]">
          <Image
            src="https://t3.ftcdn.net/jpg/14/10/39/78/360_F_1410397831_hydF002driTluu0Gw6yQuc6ZNbiedVAk.jpg"
            alt="Cute Dog"
            width={220}
            height={220}
            className="rounded-full object-cover border-4 border-white shadow-xl absolute right-0 top-0 z-10"
          />
          <Image
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=200"
            alt="Cat with glasses"
            width={150}
            height={150}
            className="rounded-full object-cover border-4 border-white shadow-xl absolute right-1/3 bottom-0 z-20"
          />
        </div>
      </div>
    </div>
  );
}
