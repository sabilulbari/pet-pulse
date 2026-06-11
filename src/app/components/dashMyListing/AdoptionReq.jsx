"use client";
import React, { useState, useEffect } from "react";
import { PawPrint } from "lucide-react";
import { myAdoptionReq } from "@/lib/data";
import AdoptionRequest from "@/app/components/AdoptionRequest";
import { authClient } from "@/lib/auth-client";
import LoadingReq from "../LoadingReq";

const AdoptionReq = ({ list }) => {
  const { data: session } = authClient.useSession();
  const userEmail = session?.user?.email;

  const { petName } = list;

  // 2. Data ebong loading state-er jonno state declare koro
  const [adoptionRequests, setAdoptionRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      if (!userEmail) return;

      try {
        setLoading(true);
        const { data: tokenData } = await authClient.token();
        const data = await myAdoptionReq(petName, tokenData);
        setAdoptionRequests(data || []);
      } catch (error) {
        console.error("Error fetching adoption requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [petName, userEmail]);

  return (
    <div className="bg-linear-to-r from-[#f7937dac]/30 to-[#ffaf9db0]/30 backdrop-blur-md flex p-2  xl:p-6 font-sans  min-h-screen">
      {/* Main Modal Card */}
      <div className="bg-linear-to-b container mx-auto from-[#F6F8FC] to-[#ECF1F9] border border-white/60 p-4 lg:p-6 relative flex flex-col gap-6 overflow-hidden rounded-3xl w-full max-w-6xl">
        {/* Top Header Section */}
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs border border-slate-100 shrink-0">
              <PawPrint className="w-5 h-5 text-indigo-600 fill-indigo-100" />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-slate-800 tracking-tight">Adoption Requests</h2>
              <p className="text-xs xl:text-sm text-slate-500 font-medium mt-0.5">Review and manage adoption requests from users.</p>
            </div>
          </div>
        </div>

        {/* Dynamic Data Rows / Cards */}
        <div className="flex flex-col gap-4 ">
          {/* 4. Loading state handle koro */}
          {loading ? (
            <div className="text-center py-4 text-slate-500"><LoadingReq/></div>
          ) : adoptionRequests.length === 0 ? (
            <div className="text-center py-4 text-slate-500">No requests found.</div>
          ) : (
            adoptionRequests.map((request, index) => <AdoptionRequest key={index} request={request} userEmail={userEmail} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default AdoptionReq;
