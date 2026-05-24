import { Calendar, Check, XCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import AcceptButton from "./petReqActionButton/AcceptButton";

const MyRequest = ({ request, userEmail }) => {
  const isPending = request.status === "Pending";
  const isApproved = request.status === "Approved";
  const isRejected = request.status === "Rejected";
  return (
    <div
      key={request.id}
      className="grid grid-cols-12 items-center bg-white border border-slate-50 rounded-2xl px-6 py-4 shadow-xs transition-all duration-200 hover:border-slate-100 hover:shadow-md"
    >
      {/* User Info with Avatar */}
      <div className="col-span-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border border-slate-100 shadow-inner">
          <Image width={200} height={200} src={request.userImage} alt={request.reqUserName} className="w-full h-full object-cover" />
        </div>
        <span className="text-sm font-bold text-slate-800">{request.reqUserName}</span>
      </div>

      {/* Email Address */}
      <div className="col-span-3 text-sm font-medium text-slate-400 truncate pr-4">{request.reqUserEmail}</div>

      {/* Pickup Date */}
      <div className="col-span-2 flex items-center gap-2 text-sm font-medium text-slate-400">
        <Calendar className="w-4 h-4 opacity-70" />
        {request.pickupDate}
      </div>

      {/* Status Badges */}
      <div className="col-span-2">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide
                    ${isPending ? "bg-amber-50 text-amber-500" : ""}
                    ${isApproved ? "bg-emerald-50 text-emerald-500" : ""}
                    ${isRejected ? "bg-rose-50 text-rose-500" : ""}
                  `}
        >
          {request.status}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="col-span-2 flex justify-end gap-2">
        {/* Approve Action */}
        <AcceptButton request={request} />

        {/* Reject Action */}
        <button
          // disabled={!isPending}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150
                      ${
                        isPending
                          ? "border border-rose-100 bg-rose-50/40 text-rose-500 hover:bg-rose-50 active:scale-95"
                          : isRejected
                            ? "text-slate-300 pointer-events-none"
                            : "hidden"
                      }
                    `}
        >
          <XCircle className="w-3.5 h-3.5" />
          <span>Reject</span>
        </button>
      </div>
    </div>
  );
};

export default MyRequest;
