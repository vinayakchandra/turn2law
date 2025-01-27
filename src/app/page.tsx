import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatT2L from "@/components/WhatT2L";
import WhyT2L from "@/components/WhyT2L";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Premium from "@/components/Premium";
import Pricing from "@/components/Pricing";
import ConsultUs from "@/components/ConsultUs";


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features callbackfn={(feature, index) => (
        <div
          key={index}
          className="flex flex-col items-start text-left p-4 py-8 border border-border border-gray-300 rounded-2xl bg-gray-100 shadow-md"
        >
          <img src={feature.img} alt={feature.text} className="mb-2"/>
          <p className="font-semibold text-gray-700">{feature.text}</p>
        </div>
      )}/>
      <WhatT2L/>
      <WhyT2L/>
      <Banner/>
      <About />
      <Premium />
      <Pricing />
      <ConsultUs />
      <Footer/>
    </>
  );
};

export default Home;
