import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";
import AcceptButton from "./petReqActionButton/AcceptButton";
import RejectButton from "./petReqActionButton/RejectButton";

const AdoptionRequest = ({ request }) => {
  const isPending = request.status === "Pending";
  const isApproved = request.status === "Approved";
  const isRejected = request.status === "Rejected";

  return (
    <div className="gap-4  items-start lg:items-center bg-white border border-slate-50 rounded-2xl p-5 lg:px-6 lg:py-4 shadow-xs transition-all duration-200 hover:border-slate-100 hover:shadow-md  space-y-4">
      {/* 1. User Info with Avatar (Col Span: 3) */}
      <div className=" flex items-center gap-3 w-full">
        <div className="w-15 h-15 md:w-12 md:h-12 rounded-full bg-slate-200 overflow-hidden border  border-slate-100 shadow-inner shrink-0">
          <Image
            width={200}
            height={200}
            src={request.userImage || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"}
            alt={request.reqUserName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col  md:block">
          <span className="text-sm font-bold text-slate-800">{request.reqUserName}</span>
        </div>
      </div>

      <div>
        {/* 2. Email Address (Col Span: 3) */}
        <div className="hidden md:block text-sm font-medium text-slate-400 truncate pr-4">Requester Email: {request.reqUserEmail || "No Email Provided"}</div>

        {/* 3. Pickup Date (Col Span: 2) */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500 md:text-slate-400">
          <h2>Pickup Date: </h2>

          <Calendar className="w-4 h-4 opacity-70 text-indigo-500 md:text-slate-400" />
          {request.pickupDate}
        </div>
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500 md:text-slate-400">
          <h2>Request Date: </h2>

          <Calendar className="w-4 h-4 opacity-70 text-indigo-500 md:text-slate-400" />
          {request.applicationDate}
        </div>
      </div>

      {/* 4. Status Badges (Col Span: 2) */}
      <div className="">
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

      {/* 5. Action Buttons (Col Span: 2) */}
      <div className="md:col-span-2 flex items-center justify-end gap-2 w-full md:w-auto mt-2 md:mt-0">
        <div className="grid grid-cols-2 gap-2 w-full md:flex md:justify-end md:gap-2">
          <AcceptButton request={request} />
          <RejectButton request={request} />
        </div>
      </div>
    </div>
  );
};

export default AdoptionRequest;
