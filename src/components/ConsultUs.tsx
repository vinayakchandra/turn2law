import React from "react";

export default function ConsultUsForm() {
  return (
    <div className="mt-10 flex flex-col md:flex-row items-center justify-center bg-teal-700">
      {/* Left Section */}
      <div className="h-90  flex-1 flex items-center justify-center bg-gray-300 w-full md:w-1/2 p-8">
        <h1 className="text-black text-6xl font-bold text-center">ART WORK</h1>
      </div>

      {/* Right Section */}
      <div className="flex-1 w-full md:w-1/2 p-8">
        <h2 className="text-white text-2xl mb-6 text-center md:text-left">Provide your details</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-md bg-[#D9D9D999]  focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="+91"
              className="w-1/4 p-3 rounded-md bg-[#D9D9D999]  focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="text"
              placeholder=""
              className="w-3/4 p-3 rounded-md bg-[#D9D9D999] text-black  focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-[#D9D9D999] text-black  focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            placeholder="Describe"
            className="w-full p-3 rounded-md bg-[#D9D9D999] text-black  focus:outline-none focus:ring-2 focus:ring-teal-400 h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-[#D9D9D999] text-black font-bold hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
