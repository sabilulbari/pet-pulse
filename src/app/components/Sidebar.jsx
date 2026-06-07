"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PawPrint, Home, PlusCircle, FileText, User, Settings, Bell, HelpCircle, Headphones, LogOut, ChevronRight, Crown } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const menuGroups = [
    {
      title: "MAIN",
      items: [
        { label: "My Listings", icon: Bell, href: "/dashboard/my-listings" },
        { label: "Add Pets", icon: PlusCircle, href: "/dashboard/add-pets" },
        { label: "My Requests", icon: FileText, href: "/dashboard/my-requests" },
      ],
    },
  ];

  return (
    <aside className="w-[30%] hidden md:flex  fixed h-screen  left-0 bg-[#F6F8FC] border-r border-slate-100 p-6 flex-col justify-between font-sans shrink-0">
      {/* ১. টপ হেডার / লোগো সেকশন */}
      <div className="container">
        <div>
          <div className="flex items-center gap-3 mb-8 bg-white p-3 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(147,130,250,0.08)]">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-[#7B61FF] to-[#9382FA] flex items-center justify-center text-white shadow-md">
              <PawPrint className="w-5 h-5 fill-white/20" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-[#1E293B] tracking-tight leading-none">Pet Pulse</h1>
              <p className="text-[11px] font-semibold text-[#94A3B8] mt-1">Dashboard</p>
            </div>
          </div>

          {/* ২. ডাইনামিক মেনু গ্রুপ */}
          <div className="space-y-6">
            {menuGroups.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-1.5">
                <nav className="space-y-0.5">
                  {group.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    // আপনি আপনার সঠিক রাউট দিয়ে এটি ম্যাচ করতে পারেন
                    const isActive = pathname === item.href || (group.title === "MAIN" && itemIdx === 0 && pathname === "/");

                    return (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group ${
                          isActive
                            ? "bg-linear-to-r from-[#8B73FF] to-[#A08CFF] text-white shadow-[0_8px_20px_-6px_rgba(139,115,255,0.4)]"
                            : "text-[#64748B] hover:bg-slate-100 hover:text-[#1E293B]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4.5 h-4.5 transition-colors ${isActive ? "text-white" : "text-[#94A3B8] group-hover:text-[#475569]"}`} />
                          <span>{item.label}</span>
                        </div>

                        {/* নোটিফিকেশন ব্যাজ (যদি থাকে) */}
                        {item.badge && (
                          <span
                            className={`text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ${
                              isActive ? "bg-white text-[#8B73FF]" : "bg-[#C4B5FD]/30 text-[#7C3AED]"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* ৩. বটম সেকশন (Logout*/}
        <div className="space-y-4 pt-4">
          {/* লগআউট বাটন */}
          <button className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#EF4444] bg-[#FEE2E2]/40 hover:bg-[#FEE2E2]/80 transition-colors duration-200">
            <LogOut className="w-4.5 h-4.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
