import { Search} from "lucide-react";
import Category from "../components/allPets/Category";
import AllCard from "../components/allPets/AllCard";
import BadgeSection from "../components/allPets/BadgeSection";
import { allpetData } from "../lib/data";



const PetMarketplace = async () => {
 
const allPets =await allpetData() 

console.log(allPets);

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
          <Category />
        </div>

        {/* 5. Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allPets.map((pet, index) => (
            <AllCard key={index} pet={pet} />
          ))}
        </div>

        {/* 6. Bottom Trust Badges Feature Section */}
        <BadgeSection />
      </main>
    </div>
  );
}

export default PetMarketplace;
