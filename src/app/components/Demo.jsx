<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
  Name Input
  <div className="space-y-1">
    <label className="text-xs font-bold text-gray-700 block">Name</label>
    <div className="relative flex items-center">
      <User className="absolute left-4 w-4 h-4 text-gray-400" />
      <input
        type="text"
        defaultValue="Enter your full name"
        className="w-full bg-gray-50/60 border border-gray-100/80 rounded-xl pl-11 pr-10 py-3 text-xs font-medium text-gray-800 focus:outline-none focus:border-purple-400 focus:bg-white transition"
      />
      <CheckCircle2 className="absolute right-4 w-4 h-4 text-emerald-500 fill-emerald-50" />
    </div>
  </div>
  {/* Email Input */}
  <div className="space-y-1">
    <label className="text-xs font-bold text-gray-700 block">Email</label>
    <div className="relative flex items-center">
      <Mail className="absolute left-4 w-4 h-4 text-gray-400" />
      <input
        type="email"
        defaultValue="Enter your email address"
        className="w-full bg-gray-50/60 border border-gray-100/80 rounded-xl pl-11 pr-10 py-3 text-xs font-medium text-gray-800 focus:outline-none focus:border-purple-400 focus:bg-white transition"
      />
      <CheckCircle2 className="absolute right-4 w-4 h-4 text-emerald-500 fill-emerald-50" />
    </div>
  </div>
  {/* Photo URL Input */}
  <div className="space-y-1">
    <div className="flex justify-between items-center">
      <label className="text-xs font-bold text-gray-700">Photo URL</label>
      <span className="text-[10px] text-gray-400 font-semibold bg-gray-100 px-1.5 py-0.5 rounded">Optional</span>
    </div>
    <div className="relative flex items-center">
      <ImageIcon className="absolute left-4 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="https://example.com/your-photo.jpg"
        className="w-full bg-gray-50/60 border border-gray-100/80 rounded-xl pl-11 pr-4 py-3 text-xs font-medium text-gray-800 focus:outline-none focus:border-purple-400 focus:bg-white transition"
      />
    </div>
    <p className="text-[10px] text-gray-400 font-medium pl-1">Add a profile photo URL to personalize your account.</p>
  </div>
  {/* Password Input */}
  <div className="space-y-1">
    <label className="text-xs font-bold text-gray-700 block">Password</label>
    <div className="relative flex items-center">
      <Lock className="absolute left-4 w-4 h-4 text-gray-400" />
      <input
        type={showPassword ? "text" : "password"}
        defaultValue="mypassword123"
        className="w-full bg-gray-50/60 border border-gray-100/80 rounded-xl pl-11 pr-10 py-3 text-xs font-medium text-gray-800 tracking-wider focus:outline-none focus:border-purple-400 focus:bg-white transition"
      />
      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-gray-400 hover:text-purple-600 transition focus:outline-none">
        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
    {/* Strength Meter Label and Bar Indicator */}
    <div className="flex items-center justify-between pt-1 px-0.5">
      <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
        <CheckCircle2 className="w-3 h-3 stroke-[2.5]" /> Great! Your password looks strong.
      </span>
      {/* Strength Bar indicators */}
      <div className="flex gap-1">
        <span className="w-4 h-1 rounded-full bg-emerald-500" />
        <span className="w-4 h-1 rounded-full bg-emerald-500" />
        <span className="w-4 h-1 rounded-full bg-emerald-500" />
        <span className="w-4 h-1 rounded-full bg-emerald-500" />
      </div>
    </div>
  </div>
  {/* Confirm Password Input */}
  <div className="space-y-1">
    <label className="text-xs font-bold text-gray-700 block">Confirm Password</label>
    <div className="relative flex items-center">
      <Lock className="absolute left-4 w-4 h-4 text-gray-400" />
      <input
        type={showConfirmPassword ? "text" : "password"}
        defaultValue="mypassword123"
        className="w-full bg-gray-50/60 border border-gray-100/80 rounded-xl pl-11 pr-10 py-3 text-xs font-medium text-gray-800 tracking-wider focus:outline-none focus:border-purple-400 focus:bg-white transition"
      />
      <button
        type="button"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        className="absolute right-4 text-gray-400 hover:text-purple-600 transition focus:outline-none"
      >
        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
    <p className="text-[10px] text-emerald-600 font-bold px-0.5 pt-1 flex items-center gap-1">
      <CheckCircle2 className="w-3 h-3 stroke-[2.5]" /> Passwords match.
    </p>
  </div>
  {/* Submit Action Button */}
  <button
    type="submit"
    className="w-full py-3 px-4 bg-purple-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-purple-600/10 hover:bg-purple-700 active:scale-[0.99] transition duration-150 flex items-center justify-center gap-1.5 mt-2"
  >
    <span>Create account</span>
    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
  </button>
</form>;
