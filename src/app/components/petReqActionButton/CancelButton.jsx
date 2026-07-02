"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CancelButton = ({ request }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const isPending = request.status === "Pending";
  const isRejected = request.status === "Rejected";
  const cancelId = request._id;

  // যদি স্ট্যাটাস Approved বা অন্য কিছু হয় (Pending এবং Rejected বাদে), তবে বাটনটি একেবারেই দেখাবে না
  if (!isPending && !isRejected) return null;

  const handleCancelRequest = async (id) => {
    setIsLoading(true);
    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/myrequest/cancleReq/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      });

      const data = await res.json();

      if (data.deletedCount > 0 || data.success) {
        toast.success("Request has been successfully cancelled and removed!");
        router.refresh();
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error cancelling request:", error);
      toast.error("Failed to cancel the request.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <AlertDialog>
        {/* ট্রিগার বাটন */}
        <Button
          className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 border border-rose-100 bg-rose-50/40 text-rose-500 hover:bg-rose-50 active:scale-95 cursor-pointer
          `}
        >
          <XCircle className="w-3.5 h-3.5" />
          <span>Cancel Request</span>
        </Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog>
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon />
                <AlertDialog.Heading>Cancel Adoption Request</AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                <p className="text-sm text-slate-600">
                  Are you sure you want to cancel this request? This will permanently <strong>remove</strong> your adoption request. This action cannot be undone.
                </p>
              </AlertDialog.Body>

              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary" disabled={isLoading}>
                  No, Keep It
                </Button>
                <Button
                  onClick={() => handleCancelRequest(cancelId)}
                  slot="close"
                  disabled={isLoading}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 border border-red-100 bg-red-500 text-white hover:bg-red-600"
                >
                  {isLoading ? "Cancelling..." : "Yes, Cancel & Remove"}
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default CancelButton;
