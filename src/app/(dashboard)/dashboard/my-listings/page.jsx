import ListingCard from "@/app/components/dashMyListing/ListingCard";
import { auth } from "@/lib/auth";
import { myListingData } from "@/lib/data";
import { headers } from "next/headers";

const MyListing = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const ownerEmail = session?.user?.email;

  const myListing = await myListingData(ownerEmail);



  return (
    <>
      <div className="grid grid-cols-3 gap-3 p-4">
        {myListing.map((list) => (
          <ListingCard key={list._id} list={list} />
        ))}
      </div>
    </>
  );
};

export default MyListing;
