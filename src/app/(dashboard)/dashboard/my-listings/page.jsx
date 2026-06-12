import ListingCard from "@/app/components/dashMyListing/ListingCard";
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
  const myListing = await myListingData(ownerEmail, token);

 


  return (
    <>
      {myListing.length == 0 ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="flex justify-between items-start">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs border border-slate-100 shrink-0">
                  <PawPrint className="w-5 h-5 text-indigo-600 fill-indigo-100" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">No Pet Found</h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">You are not added any pet, plase add a pet</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 mt-5 p-2 sm:grid-cols-2  md:grid-cols-2 xl:grid-cols-3 gap-3">
          {myListing.map((list) => (
            <ListingCard key={list._id} list={list} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyListing;
