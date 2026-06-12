"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { Check, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const RejectButton = ({ request }) => {

    const router = useRouter();
  const isPending = request.status === "Pending";
  const isRejected = request.status === "Rejected";

  const rejectId = request._id;

  const handleApprove = async (rejectId) => {
          const { data: tokenData } = await authClient.token();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoptnow/rejectReq/${rejectId}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      });

      const data = await res.json();
      console.log(data);

      if (data.modifiedCount > 0) {
        router.refresh("/dashboard/my-listings");
        toast.success("Request has been rejected");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button
          className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer
                              ${
                                isPending
                                  ? "border border-rose-100 bg-rose-50/40 text-rose-500 hover:bg-rose-50 active:scale-95"
                                  : isRejected
                                    ? "text-slate-300 bg-red-50/40 pointer-events-none"
                                    : "hidden"
                              }
                            `}
        >
          <XCircle className="w-3.5 h-3.5" />
          <span>Reject</span>
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog>
              <AlertDialog.CloseTrigger /> {/* Optional: Close button */}
              <AlertDialog.Header>
                <AlertDialog.Icon /> {/* Optional: Status icon */}
                <AlertDialog.Heading />
                Do you want to reject this request?
              </AlertDialog.Header>
              <AlertDialog.Body />
              <p>
                This will successfully <strong>Adoption</strong> request rejected. This action cannot be undone.
              </p>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  onClick={() => handleApprove(rejectId)}
                  slot="close"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 border border-red-100 bg-red-500 text-red hover:bg-red-300"
                >
                  Reject
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default RejectButton;
