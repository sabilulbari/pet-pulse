export const dynamic = "force-dynamic";
import { PawPrint } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-between items-start">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs border border-slate-100 shrink-0">
            <PawPrint className="w-5 h-5 text-indigo-600 fill-indigo-100" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">Your Dashboard</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Here is your profile dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
