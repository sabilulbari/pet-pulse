import Image from "next/image";
import { Avatar } from "@heroui/react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex sticky top-0 z-999 backdrop-blur-lg bg-[#febe74]/20  border-b border-white/20 items-center justify-between px-10 py-6 ">
      {/* Logo Area */}
      <Link href="/" className="flex items-center gap-2 ">
        <div className="bg-[#5af5a069] p-2 rounded-full">
          {/* Simple Paw Icon Placeholder */}
          <span className="text-white text-xl">
            <Image src="/assets/pet.webp" width={24} height={24} alt="Paw Icon" />
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl text-gray-800 leading-none">
            Pet <span className="text-[#febe74]">Pulse</span>
          </span>
          <span className="text-sm text-[#279608]">Adoptions</span>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex  items-center gap-8 text-gray-600 font-medium">
        <Link href="/" className="text-green-500 hover:text-[#febe74] border-b-2 border-white hover:border-[#febe74] duration-300 pb-1">
          Home
        </Link>
        <Link href="/all-pets" className="border-b-2 text-green-500 border-white hover:border-[#febe74] hover:text-[#febe74] duration-300 transition">
          All Pets
        </Link>
        <Link href="/my-requests" className="text-green-500 border-b-2 border-white hover:border-[#febe74] hover:text-[#febe74] duration-300 transition">
          My Request
        </Link>
        <Link href="/add-pets" className="text-green-500 border-b-2 border-white hover:border-[#febe74] hover:text-[#febe74] duration-300 transition">
          Add Pet
        </Link>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        <button className="flex gap-2 items-center text-gray-600 hover:text-[#febe74]">
          <Avatar className="border-2 border-white hover:border-[#febe74] duration-300 rounded-full p-1">
            <Avatar.Image className="rounded-full " alt="John Doe" width={40} height={40} src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar>
          <p className="text-green-500 hover:text-[#febe74]  border-b-2 border-white hover:border-[#febe74]">Profile</p>
        </button>

        <button className="flex items-center bg-linear-to-r from-[#f7947d] to-[#ffaf9d] text-white px-4 py-2 rounded-full font-semibold shadow-lg shadow-orange-200 hover:scale-105 transition-transform">
          Login
        </button>
        <button className="flex items-center bg-linear-to-r from-[#f7947d] to-[#ffaf9d] text-white px-4 py-2 rounded-full font-semibold shadow-lg shadow-orange-200 hover:scale-105 transition-transform">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
