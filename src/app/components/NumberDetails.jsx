import React from "react";

const statsData = [
  { value: "2,500+", label: "Pets Adopted", icon: "🐾" },
  { value: "1,800+", label: "Happy Families", icon: "🏠" },
  { value: "98%", label: "Satisfaction Rate", icon: "☆" },
  { value: "24/7", label: "Support Available", icon: "🕒" },
];

const NumberDetails = () => {
  return (
    <section className="py-16 px-10 container mx-auto">
      {/* Background container with subtle gradient */}
      <div className=" inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-orange-100 via-white to-white opacity-60 flex justify-between items-center w-full">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center space-y-2">
            {/* Icon area */}
            <div className="text-rose-400 text-2xl mb-1">{stat.icon}</div>

            {/* Value */}
            <h3 className="text-3xl font-bold text-[#1F2937]">{stat.value}</h3>

            {/* Label */}
            <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumberDetails;
