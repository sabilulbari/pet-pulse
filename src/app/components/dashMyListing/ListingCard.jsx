import { Button } from "@heroui/react";
import { Plus, SquarePen, Users, View } from "lucide-react";
import Image from "next/image";
import React from "react";
import { IoTrashBin } from "react-icons/io5";
import { RequestButton } from "./RequestButton";
import { EditButton } from "./EditButton";
import { ViewButton } from "./ViewButton";
import { DeleteButton } from "./DeleteButton";

const ListingCard = ({list}) => {
    const { petName, adoptionFee, imageUrl, _id } = list;
  return (
    <div>
      <div>
        <div className="relative aspect-4/3 w-full bg-gray-100 overflow-hidden mb-4">
          <Image className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={imageUrl} width={300} height={200} alt={petName} />
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl">{petName}</h2>
          <p>Price: ${adoptionFee}</p>

          <div className="flex justify-center items-center">
            <div className="flex justify-between gap-10">
              <div className="flex-col space-y-4">
                <RequestButton />
                <EditButton list={list} />
              </div>
              <div className="flex-col space-y-4">
                <ViewButton _id={_id} />
                <DeleteButton list={list} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
