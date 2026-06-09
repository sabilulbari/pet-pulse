import React from "react";
import { Heart, ShieldCheck, Syringe, Sparkles, MapPin, ChevronRight } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { allpetData } from "../../lib/data";
import Link from "next/link";

const Feature = async () => {
  const petData = await allpetData();

  return (
    <section className="bg-[#FAF9F7] py-20 px-6 lg:px-20">
      {/* Header */}
      <div className="flex justify-between mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 ">Featured Pet</h2>
        </div>
        <Link href={"/all-pets"}>
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-gray-200 hover:border-rose-300 transition-all font-semibold shadow-sm cursor-pointer">
            View all pets <ChevronRight size={18} />
          </button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {petData.slice(0, 6).map((pet, index) => (
          <FeatureCard key={index} pet={pet} />
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
