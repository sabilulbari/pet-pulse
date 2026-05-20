import { Heart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AllCard = ({ pet }) => {
    return (
      <div>
        <div
          key={pet.id}
          className="group bg-white rounded-2xl overflow-hidden border border-gray-100/80 transition-all duration-300 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.05)] hover:-translate-y-1"
        >
          {/* Card Image Area */}
          <div className="relative aspect-4/3 w-full bg-gray-100 overflow-hidden">
            <Image
              width={200}
              height={150}
              src={pet.image}
              alt={pet.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Custom Status Ribbon Badge */}
            {/* <span className={`absolute top-3 left-3 text-[10px] font-extrabold text-white px-2.5 py-1 rounded-md shadow-sm ${pet.badgeColor}`}>{pet.badge}</span> */}
            {/* Favorite Heart Button */}
            <button className="absolute top-3 right-3 p-2 bg-black/15 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all duration-200">
              <Heart className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>

          {/* Card Info Details */}
          <div className="p-4">
            <div className="flex items-center gap-1 mb-0.5">
              <h3 className="font-extrabold text-sm text-gray-900 group-hover:text-purple-600 transition-colors">{pet.name}</h3>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-medium text-gray-400 mb-2">
              <span>{pet.type}</span>
            </div>

            <div className="text-sm font-extrabold text-indigo-600 mb-2.5">{pet.price}</div>

            <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-gray-400 border-t border-gray-50 pt-2.5">
              <button className="flex items-center justify-center w-[60%] cursor-pointer bg-linear-to-r from-[#7d95f7] to-[#9dd8ff] text-white px-4 py-2 rounded-full font-semibold shadow-lg shadow-blue-200 hover:scale-105 transition-transform">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllCard;