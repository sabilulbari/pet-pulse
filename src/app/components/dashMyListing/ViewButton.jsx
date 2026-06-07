'use client'
import { Button, Modal } from "@heroui/react";
import { Users, View } from "lucide-react";
import Link from "next/link";

export function ViewButton({ _id }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex  items-center">
        <Link href={`/all-pets/${_id}`}>
          <Button variant="secondary" className={"w-30 text-yellow-500 bg-yellow-100/70 hover:bg-yellow-100"}>
            <View />
            View
          </Button>
        </Link>
      </div>
    </div>
  );
}
