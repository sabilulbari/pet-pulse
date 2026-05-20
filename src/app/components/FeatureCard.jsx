"use client"
import React from 'react';
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { MdOutlineCalendarMonth, MdOutlinePets } from "react-icons/md";
import Link from 'next/link';

const FeatureCard = ({pet}) => {
    return (
      <div>
        <motion.div whileHover={{ y: -10 }} className="bg-white/50 backdrop-blur-lg rounded-[24px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="relative h-64 w-full overflow-hidden rounded-[20px] mb-4">
            <Image src={pet.imageUrl} alt={pet.petName} width={500} height={300} className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-rose-500 transition-colors group">
              <Heart className="text-white group-hover:fill-white" size={20} />
            </div>
            <div className="absolute bottom-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" /> Available
            </div>
          </div>

          <div className="px-2 space-y-2">
            <h3 className="text-2xl font-bold text-gray-900">{pet.petName}</h3>
            <div className="flex gap-3 text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1 rounded-md flex items-center gap-1">
                <MdOutlinePets /> {pet.breed}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-md flex items-center gap-1">
                <MdOutlineCalendarMonth /> {pet.age}
              </span>
            </div>
            <p className="text-gray-600 pt-2">{pet.petBio}</p>
          </div>
          <div className="flex items-center justify-center py-2">
            <Link href={`/all-pets/${pet._id}`} className="flex items-center justify-center w-[60%] cursor-pointer bg-linear-to-r from-[#f7947d] to-[#ffaf9d] text-white px-4 py-2 rounded-full font-semibold shadow-lg shadow-orange-200 hover:scale-105 transition-transform">
              View Details
            </Link>
          </div>
        </motion.div>
      </div>
    );
};

export default FeatureCard;