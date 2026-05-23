import React from "react";
import { X, Check, XCircle, RefreshCw, Calendar, ShieldCheck, PawPrint } from "lucide-react";
import Image from "next/image";

const adoptionRequests = [
  { id: 1, name: "Olivia Carter", email: "olivia.carter@gmail.com", date: "May 24, 2025", status: "Pending" },
  { id: 2, name: "Liam Anderson", email: "liam.anderson@example.com", date: "May 25, 2025", status: "Pending" },
  { id: 3, name: "Sophia Martinez", email: "sophia.martinez@outlook.com", date: "May 26, 2025", status: "Approved" },
  { id: 4, name: "Noah Thompson", email: "noah.thompson@gmail.com", date: "May 27, 2025", status: "Rejected" },
  { id: 5, name: "Ava Wilson", email: "ava.wilson@example.com", date: "May 28, 2025", status: "Pending" },
];

export default function AdoptionRequestsModal({ isOpen = true, onClose }) {
  if (!isOpen) return null;

  return (
    // Glassmorphism Blurred Overlay Background
    <div className="bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4 font-sans ">
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
          {adoptionRequests.map((request) => {
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
                    <Image
                      width={200}
                      height={200}
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${request.name}`}
                      alt={request.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-bold text-slate-800">{request.name}</span>
                </div>

                {/* Email Address */}
                <div className="col-span-3 text-sm font-medium text-slate-400 truncate pr-4">{request.email}</div>

                {/* Pickup Date */}
                <div className="col-span-2 flex items-center gap-2 text-sm font-medium text-slate-400">
                  <Calendar className="w-4 h-4 opacity-70" />
                  {request.date}
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
                  <button
                    disabled={!isPending}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150
                      ${
                        isPending
                          ? "border border-emerald-100 bg-emerald-50/40 text-emerald-600 hover:bg-emerald-50 active:scale-95"
                          : isApproved
                            ? "text-slate-300 pointer-events-none"
                            : "hidden"
                      }
                    `}
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Approve</span>
                  </button>

                  {/* Reject Action */}
                  <button
                    disabled={!isPending}
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
          })}
        </div>
      </div>
    </div>
  );
}
