"use client";
import { authClient } from "@/lib/auth-client";
import { actionRequest } from "@/lib/data";
import { AlertDialog, Button } from "@heroui/react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AcceptButton = ({ request }) => {
  const router = useRouter();
  const isPending = request.status === "Pending";
  const isApproved = request.status === "Approved";

  const approveId = request._id;

  const handleApprove = async (approveId) => {
      const { data: tokenData } = await authClient.token();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoptnow/approveReq/${approveId}`, {
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
        toast.success("Approve successfully");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button
          disabled={!isPending}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150
                      ${
                        isPending
                          ? "border border-emerald-100 bg-emerald-50/40 text-emerald-600 hover:bg-emerald-50 active:scale-95"
                          : isApproved
                            ? "text-slate-300 bg-emerald-50/40 pointer-events-none"
                            : "hidden"
                      }
                    `}
        >
          <Check className="w-3.5 h-3.5" />
          <span>Approve</span>
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog>
              <AlertDialog.CloseTrigger /> {/* Optional: Close button */}
              <AlertDialog.Header>
                <AlertDialog.Icon status={"success"} /> {/* Optional: Status icon */}
                <AlertDialog.Heading />
                Do you want to accept this request?
              </AlertDialog.Header>
              <AlertDialog.Body />
              <p>
                This will successfully <strong>Adoption</strong> done and all of its data. This action cannot be undone.
              </p>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  onClick={() => handleApprove(approveId)}
                  slot="close"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 border border-emerald-100 bg-emerald-500 text-white hover:bg-emerald-300"
                >
                  Accept
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default AcceptButton;
