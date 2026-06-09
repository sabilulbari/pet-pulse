"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { Menu, X, LogOut, User, Settings } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { RxDashboard } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Profile dropdown state
  const dropdownRef = useRef(null);

  const isActive = (href) => pathname === href;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // Logout hoye gele login page-e niye jabe
        },
      },
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#febe74]/10 border-b border-white/20 px-6 md:px-5 py-4 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="bg-[#5af5a0/40] p-2 rounded-full flex items-center justify-center">
            <Image src="/assets/pet.webp" width={24} height={24} alt="Paw Icon" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-800 leading-none tracking-tight">
              Pet <span className="text-[#febe74]">Pulse</span>
            </span>
            <span className="text-xs font-semibold text-[#279608] mt-0.5">Adoptions</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-600 font-semibold text-sm">
          <Link
            href="/"
            className={`${isActive("/") ? "text-[#279608] border-b-2 border-[#279608]" : "text-gray-600 border-b-2 border-transparent hover:text-[#febe74] hover:border-[#febe74]"} duration-200 pb-1`}
          >
            Home
          </Link>
          <Link
            href="/all-pets"
            className={`${isActive("/all-pets") ? "text-[#279608] border-b-2 border-[#279608]" : "text-gray-600 border-b-2 border-transparent hover:text-[#febe74] hover:border-[#febe74]"} duration-200 pb-1`}
          >
            All Pets
          </Link>
          <Link
            href="/my-requests"
            className={`${isActive("/my-requests") ? "text-[#279608] border-b-2 border-[#279608]" : "text-gray-600 border-b-2 border-transparent hover:text-[#febe74] hover:border-[#febe74]"} duration-200 pb-1`}
          >
            My Request
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 relative">
          {/* Profile Clickable Area */}

          {session?.user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex gap-2 items-center text-gray-600 hover:text-[#febe74] group transition-colors focus:outline-none"
              >
                <Image
                  src={session?.user.image}
                  width={100}
                  height={100}
                  alt={session?.user.name}
                  className="w-12 h-12 text-xs border-2 border-transparent group-hover:border-[#febe74] transition-all cursor-pointer rounded-full"
                />
                <span>{session?.user.name}</span>
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 px-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* User Info Header */}
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <Image src={session?.user.image} width={100} height={100} alt={session?.user.name} className="w-12 h-12 text-xs" />
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-bold text-sm text-gray-800 truncate">{session?.user.name}</span>
                      <span className="text-xs text-gray-400 truncate">{session?.user.email}</span>
                    </div>
                  </div>

                  {/* Dropdown Links */}
                  <div className="flex flex-col text-sm font-medium text-gray-600">
                    <Link href="/dashboard" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-2 px-2 py-2 hover:bg-gray-50 rounded-xl transition">
                      <RxDashboard className="w-4 h-4 text-gray-400" />
                      <span>Dashboard</span>
                    </Link>
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-2 px-2 py-2 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition text-left mt-1"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login">
                <button className="flex items-center bg-linear-to-r from-[#f7947d] to-[#ffaf9d] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md shadow-orange-200/50 hover:scale-105 active:scale-[0.98] transition">
                  Login
                </button>
              </Link>
              <Link href="/signUp">
                <button className="flex items-center bg-linear-to-r from-[#f7947d] to-[#ffaf9d] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md shadow-orange-200/50 hover:scale-105 active:scale-[0.98] transition">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#febe74] p-1 transition-colors cursor-pointer" aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-130 opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-gray-100 shadow-xl flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`${isActive("/") ? "text-[#279608] font-bold border-b-2 border-[#279608]" : "text-gray-600 hover:text-[#febe74] font-semibold border-b border-gray-50"} text-sm py-1`}
          >
            Home
          </Link>
          <Link
            href="/all-pets"
            onClick={() => setIsOpen(false)}
            className={`${isActive("/all-pets") ? "text-[#279608] font-bold border-b-2 border-[#279608]" : "text-gray-600 hover:text-[#febe74] font-semibold border-b border-gray-50"} text-sm py-1`}
          >
            All Pets
          </Link>
          <Link
            href="/my-requests"
            onClick={() => setIsOpen(false)}
            className={`${isActive("/my-requests") ? "text-[#279608] font-bold border-b-2 border-[#279608]" : "text-gray-600 hover:text-[#febe74] font-semibold border-b border-gray-50"} text-sm py-1`}
          >
            My Request
          </Link>

          <div className="h-px bg-gray-100 my-1" />

          {/* Mobile Profile Card */}
          {session?.user ? (
            <>
              <div className="flex flex-col bg-gray-50/50 rounded-2xl p-3 border border-gray-100/50 gap-3">
                <div className="flex gap-3 items-center">
                  <Image width={100} height={100} alt={session?.user?.name} src={session?.user.image} className="w-12 h-12 text-xs" />
                  <div className="flex flex-col overflow-hidden">
                    <p className="text-sm font-bold text-gray-800 truncate">{session?.user.name}</p>
                    <p className="text-xs text-gray-400 truncate">{session?.user.email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold mt-1">
                  <Link href="/dashboard" onClick={() => setIsOpen(false)} className="bg-white border border-gray-100 py-2 rounded-xl text-gray-600 hover:bg-gray-50">
                    Dashboard
                  </Link>
                  <button onClick={handleSignOut} className="bg-red-50 w-full text-red-500 py-2 rounded-xl hover:bg-red-100/70 transition">
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <Link href="/login">
                  <button className="w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-xl text-xs font-bold transition">Login</button>
                </Link>
                <Link href="/signUp">
                  <button className="w-full text-center bg-linear-to-r from-[#f7947d] to-[#ffaf9d] text-white py-2.5 rounded-xl text-xs font-bold transition shadow-sm">
                    Sign up
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
