export const dynamic = "force-dynamic";
import Chat from "@/app/components/chat/Chat";
import { PawPrint } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-[calc(100vh-64px)] py-8 px-4 w-full">
      <div className="w-full max-w-md sm:max-w-lg mb-4">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shadow-xs border border-emerald-100 shrink-0">
            <PawPrint className="w-5 h-5 text-emerald-600 fill-emerald-100" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">Your Dashboard</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Here is your profile dashboard</p>
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
};

export default Dashboard;

