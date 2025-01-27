"use client";
import React from 'react';

const OnboardingForm = () => {
  return (
    <div className="m-6 md:m-10 mb-6">
        <img src="/Logo.svg"
             alt="logo"
             className="h-10"
             onError={(e) => {
               console.error("Error loading image:", e);
             }}
        />
      <div
        className="grid grid-cols-1 divide-x-1 divide-gray-300 md:grid-cols-2 min-h-screen rounded-2xl overflow-hidden gap-4 md:gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center p-8 rounded-bl-2xl md:rounded-l-2xl overflow-hidden">
          <div className="text-left">
            <h1 className="text-4xl font-bold">
              Let&#39;s get to know <br/>
              about you
            </h1>
            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
              />
              <input
                type="text"
                placeholder="+91"
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
              />
              <input
                type="text"
                placeholder="Aadhar"
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="PAN No."
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="bg-white flex flex-col justify-center items-center p-8 rounded-tr-2xl md:rounded-r-2xl overflow-hidden ">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Service type</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center hover:shadow-md cursor-pointer">
                <h3 className="text-lg font-medium">User</h3>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center hover:shadow-md cursor-pointer">
                <h3 className="text-lg font-medium">Lawyer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
