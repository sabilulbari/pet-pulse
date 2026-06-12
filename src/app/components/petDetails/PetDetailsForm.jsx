"use client";

import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import toast from "react-hot-toast";

const PetDetailsForm = ({ userData, petName, ownerEmail, petId }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const isSameEmail = ownerEmail === data.reqUserEmail;

    const {data: tokenData} = await authClient.token()
    if (!isSameEmail) {
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
          userImage: userData.image,
          status: "Pending",
          pickupDate: data.date,
          applicationDate: new Date().toISOString().split("T")[0],
          reqUserName: data.reqUserName,
          reqUserEmail: data.reqUserEmail,
          reqHomeAddress: data.reqHomeAddress,
          reqHomeType: data.reqHomeType,
        }),
      });

      const result = await res.json();
      if (result.acknowledged) {
        toast.success("Adoption application submitted successfully!");
        e.target.reset();
      } else {
        toast.error(`Failed to submit application. Please try again.`);
      }
    } else {
      toast.error("You can not adopt your pet");
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

        {/* Home Address */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 block">Home Address</label>
          <input
            required
            type="text"
            name="reqHomeAddress"
            placeholder="Enter your address"
            className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition duration-200"
          />
        </div>

        {/* Tell us about your home */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 block">Tell us about your home</label>
          <div className="relative">
            <select
              required
              name="reqHomeType"
              className="w-full bg-gray-50/60 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white appearance-none transition duration-200 cursor-pointer"
            >
              <option value={"hh"} disabled selected>
                Select an option
              </option>
              <option value="house-yard">House with fenced yard</option>
              <option value="house-norad">House with no yard</option>
              <option value="apartment">Apartment / Condo</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Pick up date */}
        <div className="space-y-1.5">
          <DateField isRequired className="w-[256px]" name="date">
            <Label>Pck up date</Label>
            <DateField.Group>
              <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
            </DateField.Group>
          </DateField>
        </div>

        {/* CTA Submit Button with Smooth Coral Gradient */}
        <button
          type="submit"
          className="w-full py-3.5 px-4 bg-linear-to-r from-coral-500 to-rose-500 bg-[#FF6A55] text-white text-sm font-bold rounded-2xl shadow-lg shadow-rose-500/20 hover:opacity-95 hover:shadow-xl hover:shadow-rose-500/20 active:scale-[0.99] transition duration-150 flex items-center justify-center gap-2 mt-2"
        >
          🐾 Adopt
        </button>
      </form>
    </div>
  );
};

export default PetDetailsForm;
