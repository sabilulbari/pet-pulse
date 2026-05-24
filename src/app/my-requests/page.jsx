import React from "react";
import { X, Check, XCircle, RefreshCw, Calendar, ShieldCheck, PawPrint } from "lucide-react";
import Image from "next/image";
import MyRequest from "../components/MyRequest";
import { adoptionRequestData } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const AdoptionRequestsModal = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userEmail = session?.user?.email;
  const adoptionRequests = await adoptionRequestData(userEmail);

  console.log(adoptionRequests);

  return (
    // Glassmorphism Blurred Overlay Background
    <div className="bg-linear-to-r from-[#f7937dac]/30 to-[#ffaf9db0]/30 backdrop-blur-md flex items-center justify-center p-4 font-sans ">
      {/* Main Modal Card */}
      <div className="bg-linear-to-b from-[#F6F8FC] to-[#ECF1F9] w-full shadow-2xl border border-white/60 p-8 relative flex flex-col gap-6 overflow-hidden">
        {/* Top Header Section */}
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs border border-slate-100">
              <PawPrint className="w-5 h-5 text-indigo-600 fill-indigo-100" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Adoption Requests</h2>
              <p className="text-sm text-slate-500 font-medium mt-0.5">Review and manage adoption requests from users.</p>
            </div>
          </div>
        </div>

        {/* Table Headers */}
        <div className="grid grid-cols-12 px-6 text-xs font-bold uppercase tracking-wider text-slate-400">
          <div className="col-span-3">User</div>
          <div className="col-span-3">Email</div>
          <div className="col-span-2">Pickup Date</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {/* Dynamic Data Rows */}
        <div className="flex flex-col gap-2.5">
          {adoptionRequests.map((request, index) => {
            return <MyRequest key={index} request={request} userEmail={userEmail} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdoptionRequestsModal;
