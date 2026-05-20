"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, CheckCircle2, Lock, Mail, User, Image as ImageIcon, ShieldCheck, Heart, Cloud, ArrowRight, PawPrint, Check } from "lucide-react";
import Image from "next/image";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { BsEyeSlash } from "react-icons/bs";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit=(e)=>{

  }

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
              alt={"cute"}
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
        <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center items-center ">
          {/* Form Content Wrapper */}
          <div className="max-w-xl w-full mx-auto space-y-6 ">
            <div>
              <h2 className="text-xl  font-extrabold text-[#1F1640] flex items-center gap-1.5">
                Create your account
                <span className="text-sm">
                  <PawPrint />
                </span>
              </h2>
              <p className="text-xs font-medium text-gray-400 mt-0.5">Let&apos;s get started with a few details.</p>
            </div>

            {/* Input Groups */}
            <Form className="flex w-full flex-col gap-4" render={(props) => <form {...props} data-custom="foo" onSubmit={handleSubmit} />}>
              {/* Name */}
              <TextField isRequired name="name" type="text" validate={(value) => (value.trim() === "" ? "Name is required" : null)}>
                <Label>Name</Label>
                <Input className={"p-3.5"} placeholder="John Doe" />
                <FieldError />
              </TextField>
              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>Email</Label>
                <Input className={"p-3.5"} placeholder="john@example.com" />
                <FieldError />
              </TextField>
              {/* ImageUrl */}
              <TextField name="imageUrl" type="text" placeholder="https://example.com/image.jpg">
                <Label>Profile Image</Label>
                <Input className={"p-3.5"} />
                <FieldError />
              </TextField>
              {/* Password */}
              <TextField
                className={"relative"}
                isRequired
                minLength={8}
                name="password"
                type={`${showPassword ? "password" : "text"}`}
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input className={"p-3.5"} placeholder="Enter your password" />
                <Button
                  className={"absolute right-2 top-6 "}
                  isIconOnly
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye className="size-4" /> : <BsEyeSlash className="size-4" />}
                </Button>

                <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                <FieldError />
              </TextField>
              {/* Confirm Password */}
              <TextField
                className={"relative"}
                isRequired
                minLength={8}
                type={`${showPassword ? "password" : "text"}`}
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>Confirm Password</Label>
                <Input className={"p-3.5"} placeholder="Confirm your password" />
                <Button
                  className={"absolute right-2 top-6 "}
                  isIconOnly
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye className="size-4" /> : <BsEyeSlash className="size-4" />}
                </Button>
                <Description>Must match the password entered above</Description>
                <FieldError />
              </TextField>
              <div className="flex w-full gap-2">
                <Button type="submit" className={"w-full"}>
                  Create Account
                </Button>
              </div>
            </Form>

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
