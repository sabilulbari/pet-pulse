import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable:"--font-nunito",
  subsets: ["latin"]
})

export const metadata = {
  title: "Pet Pulse | Home",
  description: "Adopt a pet",
};

export default function MainLayout({ children }) {
  return (
      <div className="min-h-full flex flex-col">
        <main>{children}</main>
        <Footer />
      </div>
  );
}
