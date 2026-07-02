import { Calendar, View } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import CancelButton from "./petReqActionButton/CancelButton";

const MyRequest = ({ request }) => {
  console.log(request, "all request data");
  const isPending = request.status === "Pending";
  const isApproved = request.status === "Approved";
  const isRejected = request.status === "Rejected";

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white border border-slate-50 rounded-2xl p-5 lg:px-6 lg:py-4 shadow-xs transition-all duration-200 hover:border-slate-100 hover:shadow-md gap-4">
      {/* Left / Main Content Content Wrapper */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 lg:gap-8 flex-1">
        {/* 1. User Info with Avatar */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800">{request.petName}</span>
          </div>
        </div>

        {/* 2. Dates */}
        <div className="space-y-1">
          {/* Pickup Date */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500 md:text-slate-400">
            <span className="font-semibold">Pickup Date:</span>
            <Calendar className="w-4 h-4 opacity-70 text-indigo-500 md:text-slate-400" />
            <span>{request.pickupDate}</span>
          </div>
          {/* Request Date */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500 md:text-slate-400">
            <span className="font-semibold">Request Date:</span>
            <Calendar className="w-4 h-4 opacity-70 text-indigo-500 md:text-slate-400" />
            <span>{request.applicationDate}</span>
          </div>
        </div>

        {/* 3. Status Badges */}
        <div>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide
              ${isPending ? "bg-amber-50 text-amber-600" : ""}
              ${isApproved ? "bg-emerald-50 text-emerald-600" : ""}
              ${isRejected ? "bg-rose-50 text-rose-600" : ""}
            `}
          >
            {request.status}
          </span>
        </div>
      </div>

      {/* Right Side Action Buttons */}
      <div className="flex items-center gap-2 pt-2 md:pt-0 border-t border-slate-100 md:border-0 justify-end">
        <Link href={`/all-pets/${request.petId}`}>
          <Button
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-[12px] font-bold transition-all duration-150 border border-green-100 bg-green-50/40 text-green-500 hover:bg-green-50 active:scale-95 cursor-pointer
          `}
          >
            <View />
            Vew Pet
          </Button>
        </Link>
        <CancelButton request={request} />
      </div>
    </div>
  );
};

export default MyRequest;
