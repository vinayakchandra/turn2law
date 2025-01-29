import React from "react";

const ImgCard = () => {
  return <div
    className="text-white flex flex-col justify-center items-center  rounded-2xl md:rounded-l-2xl overflow-hidden">
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <img
        src="/Law.svg"
        alt="Legal Scales"
        className=" w-full h-full object-cover rounded-3xl"
      />

      {/* Main Heading Positioned on the Left */}
      <div className="absolute inset-0 flex flex-col items-start px-6 text-left top-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          We Simplify Legal <br/>
          Access for <span className="text-yellow-600">Everyone.</span>
        </h1>
      </div>

      {/* Terms & Conditions Positioned at the Bottom Left */}
      <div className="absolute bottom-4 left-6 text-gray-300 text-sm pr-20">
        By Signing in, You accept our
        <a href="#" className="underline mx-1">Terms & Conditions</a>
        and
        <a href="#" className="underline mx-1">Privacy Policy</a>.
      </div>
    </div>
  </div>;
}
export default ImgCard;
