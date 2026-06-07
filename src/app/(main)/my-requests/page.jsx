import React from "react";
import { PawPrint } from "lucide-react";
import MyRequest from "../../components/MyRequest";
import { adoptionRequestData } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AdoptionRequestsModal = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userEmail = session?.user?.email;
  const adoptionRequests = await adoptionRequestData(userEmail);

  return (
    // Glassmorphism Blurred Overlay Background
    <div className="bg-linear-to-r from-[#f7937dac]/30 to-[#ffaf9db0]/30 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 font-sans min-h-screen">
      {/* Main Modal Card */}
      <div className="bg-linear-to-b container mx-auto from-[#F6F8FC] to-[#ECF1F9] border border-white/60 p-4 sm:p-6 md:p-8 relative flex flex-col gap-6 overflow-hidden rounded-3xl w-full max-w-6xl">
        {/* Top Header Section */}
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs border border-slate-100 shrink-0">
              <PawPrint className="w-5 h-5 text-indigo-600 fill-indigo-100" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">Adoption Requests</h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Review and manage adoption requests from users.</p>
            </div>
          </div>
        </div>

        {/* Table Headers - Hidden on Mobile/Tablet, visible on Desktop */}
        <div className="hidden md:grid grid-cols-12 px-6 text-xs font-bold uppercase tracking-wider text-slate-400">
          <div className="col-span-3">User</div>
          <div className="col-span-3">Email</div>
          <div className="col-span-2">Pickup Date</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {/* Dynamic Data Rows / Cards */}
        <div className="flex flex-col gap-4 md:gap-2.5">
          {adoptionRequests.map((request, index) => {
            return <MyRequest key={index} request={request} userEmail={userEmail} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdoptionRequestsModal;
