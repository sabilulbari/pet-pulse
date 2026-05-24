import { AlertDialog, Button } from '@heroui/react';
import { Check } from 'lucide-react';
import React from 'react';

const AcceptButton = ({ request }) => {
  const isPending = request.status === "Pending";
  const isApproved = request.status === "Approved";
  const isRejected = request.status === "Rejected";
  return (
    <div>
      <AlertDialog>
        <button
          disabled={!isPending}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150
                      ${
                        isPending
                          ? "border border-emerald-100 bg-emerald-50/40 text-emerald-600 hover:bg-emerald-50 active:scale-95"
                          : isApproved
                            ? "text-slate-300 pointer-events-none"
                            : "hidden"
                      }
                    `}
        >
          <Check className="w-3.5 h-3.5" />
          <span>Approve</span>
        </button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog>
              <AlertDialog.CloseTrigger /> {/* Optional: Close button */}
              <AlertDialog.Header>
                <AlertDialog.Icon /> {/* Optional: Status icon */}
                <AlertDialog.Heading />
              </AlertDialog.Header>
              <AlertDialog.Body />
              <AlertDialog.Footer />
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default AcceptButton;