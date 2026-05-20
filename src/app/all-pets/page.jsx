"use client"

import { Search, SlidersHorizontal, Heart, ShoppingBag, CheckCircle2, MapPin, ChevronDown, ShieldCheck, HeartHandshake, Truck, Headset } from "lucide-react";
import Image from "next/image";
import Category from "../components/allPets/Category";
import AllCard from "../components/allPets/AllCard";


const petListings = [
  {
    id: 1,
    name: "Golden Retriever",
    type: "Puppy • Male",
    price: "$1,250",
    location: "San Francisco, CA",
    badge: "Available",
    badgeColor: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400",
    verified: true,
  },
  {
    id: 2,
    name: "British Shorthair",
    type: "Kitten • Female",
    price: "$850",
    location: "Los Angeles, CA",
    badge: "New",
    badgeColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400",
    verified: false,
  },
  {
    id: 3,
    name: "Budgerigar",
    type: "Young • Male",
    price: "$120",
    location: "Austin, TX",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=400",
    verified: false,
  },
  {
    id: 4,
    name: "Holland Lop",
    type: "Young • Female",
    price: "$180",
    location: "Seattle, WA",
    badge: "Adopted",
    badgeColor: "bg-orange-400",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=400",
    verified: false,
  },
  {
    id: 5,
    name: "Pembroke Corgi",
    type: "Puppy • Male",
    price: "$1,500",
    location: "Denver, CO",
    badge: "New",
    badgeColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1612536057832-2ff7eed58194?auto=format&fit=crop&q=80&w=400",
    verified: false,
  },
  {
    id: 6,
    name: "Ragdoll",
    type: "Kitten • Female",
    price: "$1,100",
    location: "Miami, FL",
    badge: "Premium",
    badgeColor: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=400",
    verified: false,
  },
  {
    id: 7,
    name: "Cockatiel",
    type: "Young • Male",
    price: "$150",
    location: "Chicago, IL",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400",
    verified: false,
  },
  {
    id: 8,
    name: "Mini Lop",
    type: "Young • Female",
    price: "$200",
    location: "Portland, OR",
    badge: "Featured",
    badgeColor: "bg-orange-400",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80&w=400",
    verified: false,
  },
];

export default function PetMarketplace() {
 

  return (
    <div className="min-h-screen bg-[#F9F9FC] text-[#2D3142] font-sans relative overflow-hidden">
      {/* Soft Pastel Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-200/40 blur-[120px] pointer-events-none" />
      <div className="absolute top-[5%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-indigo-100/50 blur-[100px] pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 relative z-10">
        {/* 2. Hero Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1E2229] tracking-tight mb-2">Find Your Perfect Companion</h1>
          <p className="text-sm md:text-base text-gray-500 font-medium">Premium pets from trusted breeders and sellers</p>
        </div>

        {/* 3. Search Bar with Soft Glow */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative bg-white rounded-2xl shadow-[0_15px_40px_-15px_rgba(147,51,234,0.12)] p-2 flex items-center transition-all duration-300 border border-purple-100/50 hover:border-purple-200 hover:shadow-[0_15px_45px_-12px_rgba(147,51,234,0.18)]">
            <div className="pl-3 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search pets by breed, name, or keywords..."
              className="w-full pl-3 pr-4 py-2.5 text-sm text-gray-700 bg-transparent placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* 4. Category Filter Tabs & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-gray-100/80 pb-5">
          <Category  />
        </div>

        {/* 5. Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {petListings.map((pet, index) => (
            <AllCard key={index} pet={pet} />
          ))}
        </div>

        {/* 6. Bottom Trust Badges Feature Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 p-3">
            <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-gray-900 mb-0.5">Verified Sellers</h4>
              <p className="text-[10px] leading-relaxed text-gray-400 font-medium">All sellers are verified for your safety</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3">
            <div className="p-2.5 bg-rose-50 rounded-xl text-rose-500 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-gray-900 mb-0.5">Health Guarantee</h4>
              <p className="text-[10px] leading-relaxed text-gray-400 font-medium">All pets come with a health guarantee</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-500 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-gray-900 mb-0.5">Safe Delivery</h4>
              <p className="text-[10px] leading-relaxed text-gray-400 font-medium">Secure and comfortable pet delivery</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3">
            <div className="p-2.5 bg-purple-50 rounded-xl text-purple-600 shrink-0">
              <Headset className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-gray-900 mb-0.5">24/7 Support</h4>
              <p className="text-[10px] leading-relaxed text-gray-400 font-medium">Our team is here to help you anytime</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
