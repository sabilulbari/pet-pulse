'use client'

const PetDetailsForm = () => {
    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition duration-200"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition duration-200"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition duration-200"
            />
          </div>

          {/* Home Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">Home Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition duration-200"
            />
          </div>

          {/* Tell us about your home */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">Tell us about your home</label>
            <div className="relative">
              <select className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white appearance-none transition duration-200 cursor-pointer">
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="house-yard">House with fenced yard</option>
                <option value="house-norad">House with no yard</option>
                <option value="apartment">Apartment / Condo</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Why adopt */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">Why do you want to adopt Milo?</label>
            <textarea
              rows="3"
              placeholder="Share a little about yourself..."
              className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition duration-200 resize-none"
            />
          </div>

          {/* CTA Submit Button with Smooth Coral Gradient */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-linear-to-r from-coral-500 to-rose-500 bg-[#FF6A55] text-white text-sm font-bold rounded-2xl shadow-lg shadow-rose-500/20 hover:opacity-95 hover:shadow-xl hover:shadow-rose-500/20 active:scale-[0.99] transition duration-150 flex items-center justify-center gap-2 mt-2"
          >
            🐾 Submit Application
          </button>
        </form>
      </div>
    );
};

export default PetDetailsForm;