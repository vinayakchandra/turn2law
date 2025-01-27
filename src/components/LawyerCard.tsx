import React from "react";

const LawyerCard = (index: number) => {
  return (
    <div
      key={index}
      className="border border-gray-300 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition"
    >
      <img
        src="/Rajendra.png"
        alt="Profile"
        className="w-full rounded-xl mb-3 sm:mb-4 border"
      />
      <h3 className="text-sm sm:text-lg font-semibold">Rajendra</h3>
      <p className="text-gray-500 text-xs sm:text-sm">Property and Estate</p>
      <span className="block mt-2 text-xs text-gray-400">
       Chennai City Civil Court
      </span>
      <button
        className="mt-3 sm:mt-4 w-full bg-teal-500 text-white p-2 sm:p-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-teal-600 hover:cursor-pointer">
        <span className="text-xs sm:text-sm ">Message</span>
      </button>
    </div>
  );
}

export default LawyerCard;
