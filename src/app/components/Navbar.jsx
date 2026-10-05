"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, LogOut, Search, User, ChevronDown, PawPrint } from "lucide-react";
import { RxDashboard } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { data: session } = authClient.useSession();

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const dropdownRef = useRef(null);

  const isActive = (href) => pathname === href;

  // -----------------------------------------
  // Logout
  // -----------------------------------------
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  // -----------------------------------------
  // Close profile dropdown outside click
  // -----------------------------------------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // -----------------------------------------
  // Close mobile menu on route change
  // -----------------------------------------
  useEffect(() => {
    setIsOpen(false);
    setIsProfileOpen(false);
  }, [pathname]);

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "All Pets",
      href: "/all-pets",
    },
    {
      name: "My Request",
      href: "/my-requests",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-0 z-999 w-full px-4 "
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="
            relative
            flex items-center justify-between
            px-4 sm:px-6
            py-3
            rounded-3xl
            bg-[#FFFDFC]/90
            backdrop-blur-xl
            shadow-[0_8px_30px_rgba(255,122,101,0.07)]
          "
        >
          <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#FF7A65]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-[40%] right-[-50px] w-[500px] h-[500px] bg-[#FFD2C9]/20 rounded-full blur-3xl pointer-events-none" />
          {/* =====================================================
              LOGO
          ====================================================== */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.94,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
              }}
              className="
                relative
                w-10 h-10
                rounded-2xl
                bg-[#FF7A65]
                flex items-center justify-center
                text-white
                shadow-md
                shadow-[#FF7A65]/25
              "
            >
              {/* Soft glow */}
              <span
                className="
                  absolute inset-0
                  rounded-2xl
                  bg-[#FF7A65]
                  blur-md
                  opacity-20
                  group-hover:opacity-40
                  transition-opacity
                "
              />

              <PawPrint />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1E293B] leading-none">
                Pet<span className="text-[#FF7A65]">Pals</span>
              </span>

              <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-400 mt-1">Adoptions</span>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <nav
            className="
              hidden md:flex
              items-center
              gap-1
              bg-white/70
              backdrop-blur-md
              px-2
              py-1.5
              rounded-full
              border border-orange-100/60
              shadow-sm
            "
          >
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link key={item.href} href={item.href} className="relative px-5 py-2 rounded-full">
                  {/* Animated active background */}
                  {active && (
                    <motion.div
                      layoutId="navbarActivePill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="
                        absolute inset-0
                        rounded-full
                        bg-[#FFF0EC]
                        border border-[#FF7A65]/10
                      "
                    />
                  )}

                  <motion.span
                    whileHover={{ y: -1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                    className={`
                      relative z-10
                      text-sm
                      font-semibold
                      transition-colors duration-200
                      ${active ? "text-[#FF7A65]" : "text-slate-600 hover:text-[#FF7A65]"}
                    `}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              );
            })}
          </nav>

          {/* =====================================================
              DESKTOP ACTION AREA
          ====================================================== */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search */}
            <motion.button
              whileHover={{
                scale: 1.06,
                color: "#FF7A65",
              }}
              whileTap={{
                scale: 0.94,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              aria-label="Search"
              className="
                w-10 h-10
                rounded-full
                bg-white
                border border-slate-200/80
                flex items-center justify-center
                text-slate-600
                shadow-sm
              "
            >
              <Search className="w-4 h-4" />
            </motion.button>

            {/* ============================================
                LOGGED IN USER
            ============================================= */}
            {session?.user ? (
              <div ref={dropdownRef} className="relative">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className="
                    flex items-center gap-2
                    pl-1 pr-3 py-1
                    rounded-full
                    bg-white
                    border border-slate-200/80
                    shadow-sm
                    hover:border-[#FF7A65]/30
                    transition-colors
                  "
                >
                  <Image
                    src={session?.user?.image}
                    width={100}
                    height={100}
                    alt={session?.user?.name || "User"}
                    className="
                      w-9 h-9
                      rounded-full
                      object-cover
                      border-2
                      border-white
                      shadow-sm
                    "
                  />

                  <span className="text-sm font-semibold text-slate-700 max-w-24 truncate">{session?.user?.name}</span>

                  <motion.div
                    animate={{
                      rotate: isProfileOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </motion.div>
                </motion.button>

                {/* Profile Dropdown */}
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -8,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                        scale: 0.96,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      className="
                        absolute
                        right-0
                        top-full
                        mt-3
                        w-72
                        bg-white/95
                        backdrop-blur-xl
                        rounded-3xl
                        border border-orange-100/70
                        shadow-[0_20px_50px_rgba(15,23,42,0.12)]
                        p-4
                        overflow-hidden
                      "
                    >
                      {/* User Info */}
                      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                        <Image
                          src={session?.user?.image}
                          width={100}
                          height={100}
                          alt={session?.user?.name || "User"}
                          className="
                            w-12 h-12
                            rounded-2xl
                            object-cover
                          "
                        />

                        <div className="min-w-0">
                          <p className="font-bold text-sm text-slate-800 truncate">{session?.user?.name}</p>

                          <p className="text-xs text-slate-400 truncate">{session?.user?.email}</p>
                        </div>
                      </div>

                      {/* Dashboard */}
                      <Link
                        href="/dashboard"
                        onClick={() => setIsProfileOpen(false)}
                        className="
                          mt-3
                          flex items-center gap-3
                          px-3 py-3
                          rounded-2xl
                          text-sm font-semibold
                          text-slate-600
                          hover:text-[#FF7A65]
                          hover:bg-[#FFF5F2]
                          transition-all
                        "
                      >
                        <span className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center">
                          <RxDashboard className="w-4 h-4" />
                        </span>
                        Dashboard
                      </Link>

                      {/* Logout */}
                      <button
                        onClick={handleSignOut}
                        className="
                          w-full
                          mt-1
                          flex items-center gap-3
                          px-3 py-3
                          rounded-2xl
                          text-sm font-semibold
                          text-red-500
                          hover:bg-red-50
                          transition-all
                          text-left
                        "
                      >
                        <span className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
                          <LogOut className="w-4 h-4" />
                        </span>
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                {/* Login */}
                <Link href="/login">
                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      y: -1,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      flex items-center gap-2
                      bg-[#FF7A65]
                      hover:bg-[#F06A53]
                      text-white
                      px-5 py-2.5
                      rounded-full
                      font-semibold
                      text-sm
                      shadow-md
                      shadow-[#FF7A65]/20
                      transition-colors
                    "
                  >
                    <User className="w-4 h-4" />
                    Login
                  </motion.div>
                </Link>

                {/* Sign Up */}
                <Link href="/signUp">
                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      y: -1,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      flex items-center
                      bg-white
                      text-[#FF7A65]
                      border border-[#FF7A65]/30
                      px-5 py-2.5
                      rounded-full
                      font-semibold
                      text-sm
                      hover:bg-[#FFF5F2]
                      transition-colors
                    "
                  >
                    Sign up
                  </motion.div>
                </Link>
              </>
            )}
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              md:hidden
              w-10 h-10
              rounded-full
              bg-white
              border border-slate-200
              flex items-center justify-center
              text-slate-700
              shadow-sm
            "
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* =======================================================
            MOBILE MENU
        ======================================================== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -8,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:hidden overflow-hidden"
            >
              <div
                className="
                  mt-3
                  p-4
                  rounded-3xl
                  bg-white/95
                  backdrop-blur-xl
                  border border-orange-100/70
                  shadow-[0_15px_40px_rgba(15,23,42,0.10)]
                "
              >
                {/* Mobile Links */}
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => {
                    const active = isActive(item.href);

                    return (
                      <motion.div
                        key={item.href}
                        initial={{
                          opacity: 0,
                          x: -12,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.06,
                          duration: 0.25,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`
                            relative
                            flex items-center
                            px-4 py-3
                            rounded-2xl
                            text-sm font-semibold
                            transition-all
                            ${active ? "text-[#FF7A65] bg-[#FFF5F2]" : "text-slate-600 hover:text-[#FF7A65] hover:bg-slate-50"}
                          `}
                        >
                          {active && (
                            <motion.span
                              layoutId="mobileActiveIndicator"
                              className="
                                absolute
                                left-1
                                w-1
                                h-5
                                rounded-full
                                bg-[#FF7A65]
                              "
                            />
                          )}

                          <span className="ml-1">{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 my-3" />

                {/* Mobile User */}
                {session?.user ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.18,
                    }}
                    className="
                      p-3
                      rounded-2xl
                      bg-slate-50/70
                      border border-slate-100
                    "
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={session?.user?.image}
                        width={100}
                        height={100}
                        alt={session?.user?.name || "User"}
                        className="
                          w-11 h-11
                          rounded-xl
                          object-cover
                        "
                      />

                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-800 truncate">{session?.user?.name}</p>

                        <p className="text-xs text-slate-400 truncate">{session?.user?.email}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <Link
                        href="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="
                          flex items-center justify-center
                          gap-2
                          bg-white
                          border border-slate-200
                          py-2.5
                          rounded-xl
                          text-xs font-bold
                          text-slate-600
                          hover:text-[#FF7A65]
                          hover:border-[#FF7A65]/30
                          transition-all
                        "
                      >
                        <RxDashboard className="w-4 h-4" />
                        Dashboard
                      </Link>

                      <button
                        onClick={handleSignOut}
                        className="
                          flex items-center justify-center
                          gap-2
                          bg-red-50
                          text-red-500
                          py-2.5
                          rounded-xl
                          text-xs font-bold
                          hover:bg-red-100
                          transition-all
                        "
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.18,
                    }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <Link href="/login">
                      <motion.div
                        whileTap={{ scale: 0.96 }}
                        className="
                          flex items-center
                          justify-center
                          bg-slate-100
                          text-slate-700
                          py-3
                          rounded-xl
                          text-sm font-bold
                        "
                      >
                        Login
                      </motion.div>
                    </Link>

                    <Link href="/signUp">
                      <motion.div
                        whileTap={{ scale: 0.96 }}
                        className="
                          flex items-center
                          justify-center
                          bg-[#FF7A65]
                          text-white
                          py-3
                          rounded-xl
                          text-sm font-bold
                          shadow-md
                          shadow-[#FF7A65]/20
                        "
                      >
                        Sign up
                      </motion.div>
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
