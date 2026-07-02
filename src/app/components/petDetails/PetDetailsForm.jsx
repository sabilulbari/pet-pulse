"use client";

import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import { PawPrint } from "lucide-react";
import toast from "react-hot-toast";

const PetDetailsForm = ({ userData, petName, ownerEmail, petId }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data.reqUserEmail, ownerEmail, "User same email");

    const isSameEmail = ownerEmail === data.reqUserEmail;

    if (isSameEmail) {
      return toast.error("You cannot adopt your own pet!");
    }

    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoptnow`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify({
          petName,
          ownerEmail,
          petId,
          userImage: userData?.image, // safe navigation যোগ করা হয়েছে
          status: "Pending",
          pickupDate: data.date,
          applicationDate: new Date().toISOString().split("T")[0],
          reqUserName: data.reqUserName,
          reqUserEmail: data.reqUserEmail,
          reqMassage: data.reqMassage,
        }),
      });

      const result = await res.json();
      if (result.acknowledged) {
        toast.success("Adoption application submitted successfully!");
        e.target.reset();
      } else {
        toast.error(`Failed to submit application. Please try again.`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pet name */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 block">Pet Name</label>
          <input
            type="text"
            value={petName}
            name="petName"
            placeholder="Enter pet's name"
            readOnly
            className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition duration-200"
          />
        </div>
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 block">Your Name</label>
          <input
            type="text"
            value={userData?.name}
            name="reqUserName"
            placeholder="Enter your full name"
            readOnly
            className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition duration-200"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 block">Email Address</label>
          <input
            type="email"
            value={userData?.email}
            name="reqUserEmail"
            placeholder="Enter your email"
            readOnly
            className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition duration-200"
          />
        </div>

        {/* Pick up date */}
        <div className="space-y-1.5">
          <DateField isRequired className="w-full" name="date">
            <Label>Pick up date</Label>
            <DateField.Group>
              <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
            </DateField.Group>
          </DateField>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 block">Message</label>
          <input
            required
            type="text"
            name="reqMassage"
            placeholder="Enter your message"
            className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition duration-200"
          />
        </div>

        {/* CTA Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-4 bg-[#FF6A55] text-white text-sm font-bold rounded-2xl shadow-lg shadow-rose-500/20 hover:opacity-95 hover:shadow-xl hover:shadow-rose-500/20 active:scale-[0.99] transition duration-150 flex items-center justify-center gap-2 mt-2 cursor-pointer"
        >
          <PawPrint /> Adopt
        </button>
      </form>
    </div>
  );
};

export default PetDetailsForm;
