"use client";
import React, { useState } from "react";
import { Filter, X } from "lucide-react";
import Link from "next/link";
import LawyerCard from "@/components/LawyerCard";
import { FaSearch } from "react-icons/fa";

export default function LawyerDirectory() {
  const [location, setLocation] = useState("Chennai");
  const [court, setCourt] = useState("Chennai High Court");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-300 p-4 flex justify-between items-center">
        <Link href="/">
          <img src="/Logo.svg"
               alt="logo"
               className="h-7 hover:cursor-pointer"
          />
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#consult" className="hover:text-gray-600">
            Consult
          </a>
          <a href="#resources" className="hover:text-gray-600">
            Resources
          </a>
          <a href="#pricing" className="hover:text-gray-600">
            Pricing
          </a>
        </nav>
        <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-xl">
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm"
          />
          <FaSearch />
        </div>
        <button
          className="md:hidden p-2 border border-gray-300 rounded-xl"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-5 w-5"/>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-1">
        {/* Filters */}
        <aside
          className={`absolute md:static bg-white w-64 border-r border-gray-300 p-6 transform md:translate-x-0 transition-transform ${
            showFilters ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="md:hidden absolute top-4 right-4"
            onClick={() => setShowFilters(false)}
          >
            <X className="h-5 w-5"/>
          </button>
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <div className="mb-6">
            <label className="block font-medium mb-2">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl"
            >
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Area of Practice</label>
            <div className="flex flex-wrap gap-2">
              {[
                "Property and Estate",
                "Divorce",
                "Tax & Corporate",
                "Criminal",
              ].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-300 cursor-pointer"
                >
                  {area}
                </span>
              ))}
              <span
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-300cursor-pointer">
                +32...
              </span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Court</label>
            <select
              value={court}
              onChange={(e) => setCourt(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl"
            >
              <option>Chennai High Court</option>
              <option>Mumbai High Court</option>
              <option>Bangalore High Court</option>
            </select>
          </div>
        </aside>

        {/* Profiles */}
        <section className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => LawyerCard(index))}
        </section>
      </main>
    </div>
  );
}

