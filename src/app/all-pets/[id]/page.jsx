import PetDetailsCard from "@/app/components/petDetails/PetDetailsCard";
import PetDetailsForm from "@/app/components/petDetails/PetDetailsForm";
import { petDataById } from "@/app/lib/data";
import { Share2, Heart, Shield, ArrowLeft, ArrowRight, Sparkles, ShieldCheck, FileText, Calendar, Weight, Users, Check, Lock, Palette } from "lucide-react";

export default async function PetDetails({params}) {
    const {id} =  await params;
  const petData = await petDataById(id);
const { adoptionFee, age, breed, colorMarkings, gender, healthStatus, location, petBio, petName, species, _id, vaccineStatus } = petData;
  return (
    <div className="min-h-screen bg-[#F5F6F8] px-4 py-8 md:p-8 flex justify-center items-center font-sans selection:bg-rose-100 selection:text-rose-700">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ================= LEFT SIDE: PET PROFILE ================= */}
        <div className="lg:col-span-7 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-5 md:p-6 space-y-6">
          {/* Main Hero Image Section */}
          <PetDetailsCard petData={petData} />

          {/* Heading Title */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h1 className="text-3xl font-extrabold text-[#11142D] tracking-tight">Meet {petName}</h1>
            </div>

            {/* Quick Meta Grid */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-bold text-gray-400">
              <span className="flex items-center gap-1.5">🐶 {species}</span>
              <span className="text-gray-200">•</span>
              <span className="flex items-center gap-1.5">🌟 {breed}</span>
              <span className="text-gray-200">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {age} Months
              </span>
              <span className="flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" /> {colorMarkings}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> {gender}
              </span>
            </div>
          </div>

          {/* Medical Summary Grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Health Status */}
            <div className="bg-[#F8F9FB] border border-gray-100 p-4 rounded-2xl space-y-3">
              <h4 className="text-xs font-extrabold text-[#11142D] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> Health Status
              </h4>

              <div className="bg-emerald-500/10 text-emerald-700 text-[11px] font-extrabold px-2.5 py-1.5 rounded-lg inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5 stroke-3" />
                {healthStatus}
              </div>
            </div>

            {/* Vaccinations */}
            <div className="bg-[#F8F9FB] border border-gray-100 p-4 rounded-2xl space-y-3">
              <h4 className="text-xs font-extrabold text-[#11142D] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Vaccinations
              </h4>
              <div className="bg-emerald-500/10 text-emerald-700 text-[11px] font-extrabold px-2.5 py-1.5 rounded-lg inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5 stroke-3" /> {vaccineStatus}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-[#F8F9FB] border border-gray-100 p-4 rounded-2xl space-y-2 relative">
            <h3 className="text-xs font-extrabold text-[#11142D] flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-gray-400" /> About {petName}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed font-medium pr-8">{petBio}</p>
            <Heart className="w-4 h-4 text-gray-300 absolute bottom-4 right-4" />
          </div>
        </div>

        {/* ================= RIGHT SIDE: ADOPTION FORM ================= */}
        <div className="lg:col-span-5 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-5 md:p-6 space-y-6">
          {/* Form Header Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 border border-rose-100 shadow-sm shadow-rose-100/50">
              <Shield className="w-5 h-5 fill-rose-500/10" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-[#11142D]">Ready to Adopt?</h2>
              <p className="text-xs text-gray-400 font-medium">Give {petName} the loving home he deserves.</p>
            </div>
          </div>

          {/* Beautiful Glassmorphism Adoption Fee Box */}
          <div className="relative overflow-hidden bg-linear-to-br from-amber-500/4 to-rose-500/4 rounded-2xl border border-amber-500/10 p-4 flex items-start gap-4">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-amber-100 text-rose-500 self-center">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-0.5">Adoption Fee</span>
              <span className="text-2xl font-black text-[#11142D]">${adoptionFee}</span>
              <p className="text-[11px] text-gray-400 font-medium leading-normal mt-1">The adoption fee helps cover medical care, vaccinations, and shelter support.</p>
            </div>
          </div>

          {/* Divider with Subtitle */}
          <div className="pt-2">
            <h3 className="text-sm font-extrabold text-[#11142D]">Adoption Application</h3>
            <p className="text-[11px] text-gray-400 font-medium">Please fill out the form below to start the adoption process.</p>
          </div>

          {/* Interactive Form Controls */}
          <PetDetailsForm />

          {/* Privacy Note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-gray-400/80">
            <Lock className="w-3.5 h-3.5" />
            <span>Your information is secure and private.</span>
          </div>

          {/* Footer Sweet Note */}
          <div className="border-t border-gray-50 pt-4 text-center space-y-0.5">
            <p className="text-[11px] font-bold text-rose-500/90 flex items-center justify-center gap-1">
              <Heart className="w-3 h-3 fill-current" /> Adopting saves lives.
            </p>
            <p className="text-[10px] font-semibold text-gray-400">Thank you for choosing adoption.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
