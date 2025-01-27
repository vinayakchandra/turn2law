"use client";
import React from "react";

const Hero = () => {
  return (
      <section className="relative h-200 flex items-center justify-center bg-cover bg-center"
               style={{ backgroundImage: "url('/Law.svg')" }}
      >
        <div className="text-center px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
            We Simplify Legal <br/> Access for
            <span className="text-primary text-yellow-500"> Everyone.</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-lg mx-auto">
            Find high-quality lawyers that suit you, with the help of AI tools that deliver justice on time.
          </p>
          <button
            className="bg-primary bg-yellow-600 font-semibold px-6 py-3 rounded hover:bg-yellow-700 transition cursor-pointer"
            onClick={() => {
              console.log("Consult a lawyer clicked!");
            }}
          >
            Consult a Lawyer
          </button>

        </div>
      </section>
  );
}

export default Hero;
