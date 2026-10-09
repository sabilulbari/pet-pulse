import ListingCard from "@/app/components/dashMyListing/ListingCard";
import NoPetFoundPage from "@/app/components/NoPetFoundPage";
import { auth } from "@/lib/auth";
import { myListingData } from "@/lib/data";
import { PawPrint } from "lucide-react";
import { headers } from "next/headers";

const MyListing = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const ownerEmail = session?.user?.email;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const myListing = (await myListingData(ownerEmail, token)) || [];

  // Stats calculation
  const totalListings = myListing.length;

  console.log(myListing, "From listing");


  console.log(myListing, "From listing");

  // নিখুঁত কাউন্টিংয়ের জন্য সরাসরি নির্দিষ্ট স্ট্যাটাস চেক করা ভালো
  const availableCount = myListing.filter((list) => list.status !== "Approved").length;

  // শুধুমাত্র "Approved" স্ট্যাটাস থাকলে তা Adopted হিসেবে কাউন্ট হবে
  const adoptedCount = myListing.filter((list) => list.status === "Approved").length;

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* "stats.PNG" অনুকরণে তৈরি কার্ড সেকশন */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Total Listings Card */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl py-8 flex flex-col items-center justify-center shadow-lg transition-all">
          <span className="text-3xl font-extrabold text-rose-500 tracking-tight">{totalListings}</span>
          <span className="text-xs sm:text-sm font-medium text-slate-400 mt-2">Total Listings</span>
        </div>

        {/* Available Card */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl py-8 flex flex-col items-center justify-center shadow-lg transition-all">
          <span className="text-3xl font-extrabold text-emerald-500 tracking-tight">{availableCount}</span>
          <span className="text-xs sm:text-sm font-medium text-slate-400 mt-2">Available</span>
        </div>

        {/* Adopted Card */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl py-8 flex flex-col items-center justify-center shadow-lg transition-all">
          <span className="text-3xl font-extrabold text-rose-500 tracking-tight">{adoptedCount}</span>
          <span className="text-xs sm:text-sm font-medium text-slate-400 mt-2">Adopted</span>
        </div>
      </div>

      {/* Listing Content (No Pet / Grid List) */}
      {totalListings === 0 ? (
        <NoPetFoundPage>
          
        </NoPetFoundPage>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          {myListing.map((list) => (
            <ListingCard key={list._id} list={list} />
          ))}
        </div>
      )}
    </div>
  );
};;

export default MyListing;
