"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const PetDetailsCard = ({ petData }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { adoptionFee, age, breed, colorMarkings, gender, healthStatus, imageUrl, location, petBio, petName, species, _id, status } = petData;

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden aspect-4/3 w-full bg-gray-100 shadow-inner group">
        <Image width={600} height={400} src={imageUrl} alt={petName} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />

        {/* Top Badge & Action Buttons */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <span className="bg-black/30 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
            <span className={`w-1.5 h-1.5 ${status == "Approved" ? "bg-amber-500" : "bg-green-400"}   rounded-full animate-pulse`} />
            {status == "Approved" ? "Adopted" : "Available"}
          </span>
          <div className="flex gap-2">
            <button onClick={() => setIsFavorite(!isFavorite)} className="p-2.5 bg-white rounded-full shadow-md hover:scale-105 active:scale-95 transition backdrop-blur-md">
              <Heart className={`w-4 h-4 transition-colors cursor-pointer ${isFavorite ? "fill-rose-500 text-rose-500" : "text-gray-600"}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsCard;
