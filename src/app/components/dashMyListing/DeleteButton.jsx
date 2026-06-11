"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IoTrashBin } from "react-icons/io5";

export function DeleteButton({ list }) {
  const router = useRouter();
  const { _id, petName } = list;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(`http://localhost:5000/addPet/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });

    const data = await res.json();
    console.log(data);
    if (data.deletedCount > 0) {
      toast.success(`${petName} is deleted successfully`);
      router.refresh("/dashboard/my-listings");
    } else {
      toast.error(`Something wrong ${data}`);
    }
  };
  return (
    <AlertDialog>
      <Button variant="danger" className={"w-30"}>
        <IoTrashBin />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete pet permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{petName}</strong> and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
