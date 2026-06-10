import { Button } from "@heroui/react";
import { Plus, SquarePen, Users, View } from "lucide-react";
import Image from "next/image";
import React from "react";
import { RequestButton } from "./RequestButton";
import { EditButton } from "./EditButton";
import { ViewButton } from "./ViewButton";
import { DeleteButton } from "./DeleteButton";

const ListingCard = ({list}) => {
    const { petName, adoptionFee, imageUrl, _id } = list;
  return (
    <div className="mb-4 border shadow-lg">
      <div className="relative w-full h-52  overflow-hidden ">
        <Image className=" object-cover group-hover:scale-105 transition-transform duration-500" src={imageUrl} fill alt={petName} />
      </div>
      <div className="space-y-2 p-2 ">
        <h2 className="font-semibold text-2xl">{petName}</h2>
        <p>Price: ${adoptionFee}</p>

        <div className=" flex gap-4  items-center justify-center">
          <div className="flex-col space-y-4">
            <RequestButton list={list} />
            <EditButton list={list} />
          </div>
          <div className="flex-col space-y-4">
            <ViewButton _id={_id} />
            <DeleteButton list={list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
