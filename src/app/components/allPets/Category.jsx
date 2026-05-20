import React, { useState } from 'react';

const categories = [
  { id: "all", label: "All Pets", icon: "🐾" },
  { id: "dog", label: "Dog", icon: "🐶" },
  { id: "cat", label: "Cat", icon: "🐱" },
  { id: "bird", label: "Bird", icon: "🦜" },
  { id: "rabbit", label: "Rabbit", icon: "🐰" },
];

const Category = () => {
     const [activeTab, setActiveTab] = useState("all");

    return (
        <div>
            <div className="flex flex-wrap gap-2.5">
                        {categories.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 border ${
                              activeTab === tab.id
                                ? "bg-purple-50 border-purple-200 text-purple-700 shadow-sm shadow-purple-100/50"
                                : "bg-white border-gray-200/60 text-gray-600 hover:border-purple-200 hover:bg-purple-50/30"
                            }`}
                          >
                            <span>{tab.icon}</span>
                            {tab.label}
                          </button>
                        ))}
                      </div>
        </div>
    );
};

export default Category;