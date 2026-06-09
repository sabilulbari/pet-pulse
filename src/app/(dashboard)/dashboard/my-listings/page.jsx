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

  console.log(myListing);

  return (
    <>
      <div className="grid grid-cols-1 mt-5 p-2 sm:grid-cols-2  md:grid-cols-2 xl:grid-cols-3 gap-3">
        {myListing.map((list) => (
          <ListingCard key={list._id} list={list} />
        ))}
      </div>
    </>
  );
};

export default MyListing;
