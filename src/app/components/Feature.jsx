"use client"
import React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Syringe, Sparkles, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import { MdOutlineCalendarMonth, MdOutlinePets } from "react-icons/md";

const pets = [
  {
    name: "Buddy",
    breed: "Golden Retriever",
    age: "3 years",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500",
    desc: "Friendly, loyal, and always up for playtime!",
  },
  {
    name: "Luna",
    breed: "Tabby Cat",
    age: "8 months",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500",
    desc: "Curious, cuddly, and full of kitten energy.",
  },
  { name: "Coco", breed: "Corgi", age: "1 year", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500", desc: "Playful, smart, and loves everyone!" },
  {
    name: "Oreo",
    breed: "Netherland Dwarf",
    age: "1.5 years",
    img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b1fc?w=500",
    desc: "Sweet, gentle, and oh-so-adorable.",
  },
  { name: "Mochi", breed: "Maltese", age: "2 years", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500", desc: "Tiny, fluffy, and full of love." },
  { name: "Willow", breed: "Ragdoll", age: "4 months", img: "https://images.unsplash.com/photo-1615789573330-6d9154f85645?w=500", desc: "Gentle, curious, and love to explore." },
];

const Feature = () => {
  return (
    <section className="bg-[#FAF9F7] py-20 px-6 lg:px-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Pet</h2>
        </div>
        <button className="mt-6 md:mt-0 flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-gray-200 hover:border-rose-300 transition-all font-semibold shadow-sm">
          View all pets <ChevronRight size={18} />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets.map((pet, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="bg-white/50 backdrop-blur-lg rounded-[24px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <div className="relative h-64 w-full overflow-hidden rounded-[20px] mb-4">
              <Image src={pet.img} alt={pet.name} width={500} height={300} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-rose-500 transition-colors group">
                <Heart className="text-white group-hover:fill-white" size={20} />
              </div>
              <div className="absolute bottom-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" /> Available
              </div>
            </div>

            <div className="px-2 space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">{pet.name}</h3>
              <div className="flex gap-3 text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-md flex items-center gap-1"><MdOutlinePets /> {pet.breed}</span>
                <span className="bg-gray-100 px-3 py-1 rounded-md flex items-center gap-1"><MdOutlineCalendarMonth /> {pet.age}</span>
              </div>
              <p className="text-gray-600 pt-2">{pet.desc}</p>
            </div>
            <div className="flex items-center justify-center py-2">
              <button className="flex items-center justify-center w-[60%] cursor-pointer bg-linear-to-r from-[#f7947d] to-[#ffaf9d] text-white px-4 py-2 rounded-full font-semibold shadow-lg shadow-orange-200 hover:scale-105 transition-transform">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Feature Strip */}
      <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
        {[
          { icon: ShieldCheck, label: "Health checked", color: "text-rose-500" },
          { icon: Syringe, label: "Up-to-date on vaccines", color: "text-orange-500" },
          { icon: Sparkles, label: "Spayed & neutered", color: "text-teal-500" },
          { icon: MapPin, label: "From shelters near you", color: "text-indigo-500" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className={`p-3 bg-gray-50 rounded-full ${item.color}`}>
              <item.icon size={24} />
            </div>
            <span className="font-semibold text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
