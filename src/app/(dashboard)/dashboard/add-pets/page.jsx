"use client";
import React, { useState } from "react";
import { PawPrint, ShieldCheck, Calendar, ChevronDown, CheckCircle2, Image as ImageIcon, X, Lightbulb, RotateCcw, Lock } from "lucide-react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";

export default function AddPetForm() {

  const router = useRouter()

  const { data: session } = authClient.useSession();

  // Main state object containing all field values
  const [formData, setFormData] = useState({
    petName: "Milo",
    species: "Dog",
    breed: "",
    age: "",
    gender: "Female",
    spayedNeutered: "Yes",
    colorMarkings: "",
    petBio: "",
    location: "",
    adoptionFee: "",
    email: "",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600",
  });

  const maxBioLength = 200;
  const fallbackPlaceholder = "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600";

  // Universal handler to update state properties dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Specific handler to clear out image text input
  const handleClearImage = () => {
    setFormData((prev) => ({ ...prev, imageUrl: "" }));
  };

  // Form submit handler to log dataset to console
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const addPets = Object.fromEntries(fromData.entries());

    const res = await fetch("http://localhost:5000/addPet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addPets),
    });

    const data = await res.json();
    if (data.acknowledged) {
      toast.success("Pet added successfully!");
      router.refresh("/dashboard/my-listings");
      redirect("/dashboard/my-listings");
    } else {
      toast.error("Failed to add pet. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf8f6] py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center relative overflow-hidden">
      {/* Decorative Background Paw Prints */}
      <div className="absolute top-10 left-10 text-orange-200/20 transform -rotate-12 select-none pointer-events-none">
        <PawPrint size={120} />
      </div>
      <div className="absolute bottom-10 right-10 text-orange-200/20 transform rotate-45 select-none pointer-events-none">
        <PawPrint size={160} />
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl shadow-orange-900/5 p-6 md:p-10 relative z-10 border border-orange-100">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 pb-6 mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-orange-50 text-[#f2745f] rounded-xl">
              <PawPrint className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Add Pet</h1>
              <p className="text-sm text-gray-500 mt-0.5">Create a profile for your furry friend</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200/60 rounded-xl px-4 py-2 self-start sm:self-auto">
            <ShieldCheck className="w-5 h-5 text-gray-400 shrink-0" />
            <p className="text-xs text-gray-500 font-medium leading-tight">
              Your pet&apos;s information is
              <br />
              safe and secure
            </p>
          </div>
        </div>

        {/* Form Body Setup with onSubmit trigger */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Left / Middle Column (Form Inputs) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section A: Basic Information */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PawPrint className="w-4 h-4 text-[#f2745f] fill-current" />
                <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Basic Information</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Pet Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    Pet Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="petName"
                      value={formData.petName}
                      onChange={handleChange}
                      className="w-full text-sm border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f] pr-10"
                      required
                    />
                    {formData.petName && <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3.5 top-1/2 transform -translate-y-1/2" />}
                  </div>
                  <span className="text-xs text-gray-400">Enter your pet&apos;s name</span>
                </div>

                {/* Species */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    Species <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="species"
                      value={formData.species}
                      onChange={handleChange}
                      className="w-full text-sm border border-gray-200 rounded-xl pl-3.5 pr-10 py-2.5 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f]"
                    >
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                      <option value="Bird">Bird</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                  <span className="text-xs text-gray-400">Select your pet&apos;s species</span>
                </div>

                {/* Breed */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">Breed</label>
                  <div className="relative">
                    <select
                      name="breed"
                      value={formData.breed}
                      onChange={handleChange}
                      className={`w-full text-sm border border-gray-200 rounded-xl pl-3.5 pr-10 py-2.5 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f] ${!formData.breed ? "text-gray-400" : "text-gray-800"}`}
                    >
                      <option value="" disabled>
                        e.g. Golden Retriever
                      </option>
                      <option value="Golden Retriever">Golden Retriever</option>
                      <option value="German Shepherd">German Shepherd</option>
                      <option value="Poodle">Poodle</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                  <span className="text-xs text-gray-400">Select or search breed</span>
                </div>

                {/* age */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">Age</label>
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 100"
                    className="w-full text-sm border border-gray-200 rounded-xl pl-3.5 pr-12 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f]"
                  />
                  <span className="text-xs text-gray-400">Enter the age of your pet</span>
                </div>
              </div>
            </div>

            {/* Section B: Details */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PawPrint className="w-4 h-4 text-[#f2745f] fill-current" />
                <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Details</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Gender */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full text-sm border border-gray-200 rounded-xl pl-3.5 pr-10 py-2.5 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f]"
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Health Status */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">Health Status</label>
                  <div className="relative">
                    <select
                      name="healthStatus"
                      value={formData.healthStatus}
                      onChange={handleChange}
                      className="w-full text-sm border border-gray-200 rounded-xl pl-3.5 pr-10 py-2.5 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f]"
                    >
                      <option value="Good">Good</option>
                      <option value="Needs Attention">Needs Attention</option>
                      <option value="Weak">Weak</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Vaccination Status */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">Vaccination Status</label>
                  <div className="relative">
                    <select
                      name="vaccineStatus"
                      value={formData.vaccineStatus}
                      onChange={handleChange}
                      className="w-full text-sm border border-gray-200 rounded-xl pl-3.5 pr-10 py-2.5 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f]"
                    >
                      <option value="Yes">Given</option>
                      <option value="No">Not Given</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Location */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">Location</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Downtown Park"
                      className="w-full text-sm border border-gray-200 rounded-xl pl-3.5 pr-12 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f]"
                    />
                  </div>
                  <span className="text-xs text-gray-400">Enter weight in kilograms</span>
                </div>

                {/* Adoption Fee */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">Adoption Fee</label>
                  <input
                    type="number"
                    name="adoptionFee"
                    value={formData.adoptionFee}
                    onChange={handleChange}
                    placeholder="e.g. 100"
                    required
                    className="w-full text-sm border border-gray-200 rounded-xl pl-3.5 pr-12 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f]"
                  />
                  <span className="text-xs text-gray-400">Enter the adoption fee in USD</span>
                </div>

                {/* Color / Markings */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">Color / Markings</label>
                  <input
                    type="text"
                    name="colorMarkings"
                    value={formData.colorMarkings}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Golden, White patches"
                    className="w-full text-sm border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f]"
                  />
                  <span className="text-xs text-gray-400">Describe your pet&apos;s color or markings</span>
                </div>

                {/* Owner Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">Owner Email</label>
                  <input
                    type="email"
                    name="ownerEmail"
                    value={session?.user.email}
                    onChange={handleChange}
                    readOnly
                    placeholder="e.g. john.doe@example.com"
                    className="w-full text-sm border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f]"
                  />
                </div>

                {/* Pet Bio */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">Pet Bio or Description</label>
                  <textarea
                    maxLength={maxBioLength}
                    name="petBio"
                    value={formData.petBio}
                    onChange={handleChange}
                    placeholder="Tell us about your pet's personality, habits, and likes..."
                    className="w-full text-sm border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f] h-19.5 resize-none"
                  />
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>Max 200 characters</span>
                    <span>
                      {formData.petBio.length}/{maxBioLength}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Dynamic Pet Image Layout) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#f2745f]" />
              <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Pet Image</h2>
            </div>

            {/* Image Preview Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 w-full max-w-85 mx-auto border border-orange-100 bg-orange-50/30 group shadow-inner">
              <Image
                src={formData.imageUrl.trim() !== "" ? formData.imageUrl : fallbackPlaceholder}
                width={300}
                height={225}
                alt="Pet Preview"
                className="w-full h-full object-cover transition-all duration-300"
                onError={(e) => {
                  e.target.src = fallbackPlaceholder;
                }}
              />
              {formData.imageUrl && (
                <button
                  type="button"
                  onClick={handleClearImage}
                  className="absolute top-3 right-3 bg-white/95 text-gray-700 hover:text-black p-1.5 rounded-full shadow-sm hover:scale-105 transition z-20"
                  title="Clear Image"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Validation success tracker */}
            <div
              className={`flex items-center gap-1.5 text-emerald-600 text-xs font-medium justify-center lg:justify-start transition-opacity duration-200 ${formData.imageUrl ? "opacity-100" : "opacity-0"}`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 fill-current text-white bg-emerald-600 rounded-full" />
              <span>Great choice! Your pet looks adorable.</span>
            </div>

            {/* Image URL Input Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700">
                Image URL <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="Paste direct link (e.g. https://...)"
                  className="w-full text-xs text-gray-500 border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#f2745f] pr-10 font-mono"
                  required
                />
                {formData.imageUrl && <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3.5 top-1/2 transform -translate-y-1/2" />}
              </div>
              <span className="text-xs text-gray-400">Enter a direct image URL (JPG, PNG, WebP)</span>
            </div>

            {/* Tips Card */}
            <div className="bg-orange-50/60 border border-orange-100 rounded-xl p-4 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-100" />
                <span>Tips for best results</span>
              </div>
              <ul className="text-xs text-amber-800/80 list-disc list-inside space-y-1 pl-0.5 leading-relaxed">
                <li>Use a clear, front-facing photo</li>
                <li>Good lighting works best</li>
                <li>JPG, PNG or WebP under 5MB</li>
              </ul>
            </div>
          </div>

          {/* Form Actions Footer Row */}
          <div className="col-span-1 lg:col-span-3 border-t border-gray-100 pt-6 mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2 order-2 sm:order-1 transition"
            >
              <RotateCcw className="w-4 h-4" />
              Cancel
            </button>

            <div className="flex items-center gap-1.5 text-gray-400 text-xs order-3 sm:order-2">
              <Lock className="w-3.5 h-3.5" />
              <span>You can edit your pet&apos;s information anytime</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 text-sm font-bold rounded-xl text-white bg-[#f2745f] hover:bg-[#df634f] shadow-md shadow-orange-700/10 flex items-center justify-center gap-2 order-1 sm:order-3 transition"
            >
              <PawPrint className="w-4 h-4 fill-current" />
              Add Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
