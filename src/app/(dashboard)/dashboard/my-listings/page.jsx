import ListingCard from "@/app/components/dashMyListing/ListingCard";
import { auth } from "@/lib/auth";
import { myListingData } from "@/lib/data";
import { Button } from "@heroui/react";
import { PawPrint } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";

const MyListing = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const ownerEmail = session?.user?.email;

  const myListing = await myListingData(ownerEmail);



  return (
    <>
      <div className=" gap-3 p-4">
        {myListing.length > 0 ? (
          myListing.map((list) => <ListingCard key={list._id} list={list} />)
        ) : (
          <div className="flex justify-center items-center h-screen">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-4 items-center">
                
                <div className="text-center">
                  <h2 className="text-xl sm:text-4xl font-bold text-slate-800 tracking-tight">No pet you added</h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Please add your pet for adopt</p>
                </div>
                <Link href={"/dashboard/add-pets"}>
                  <button  className="flex items-center gap-3 cursor-pointer bg-linear-to-r from-[#f7947d] to-[#ffaf9d] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-orange-200 hover:scale-105 transition-transform">
                                <span className="bg-white/20 p-1 rounded-full">
                                  <MdOutlinePets />
                              </span>
                              Add pet
                            </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyListing;
