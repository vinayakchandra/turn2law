// LawyerDirectory.tsx
"use client";
import { useState } from "react";
import { Filter, X } from "lucide-react";
import ProfileCard from "../../components/ProfileCard"; // Import ProfileCard component

export default function LawyerDirectory() {
  const [location, setLocation] = useState("Chennai");
  const [court, setCourt] = useState("Chennai High Court");
  const [showFilters, setShowFilters] = useState(false);

  const profiles = [
    {
      name: "Rajendra",
      practiceArea: "Property and Estate",
      court: "Chennai City Civil Court",
      imageUrl: "/Rajendra.png"
    },
    // Add more profiles here
    {
      name: "John Doe",
      practiceArea: "Tax & Corporate",
      court: "Mumbai High Court",
      imageUrl:
        "https://via.placeholder.com/150"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">N</h1>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-600">
            Consult
          </a>
          <a href="#" className="hover:text-gray-600">
            Resources
          </a>
          <a href="#" className="hover:text-gray-600">
            Pricing
          </a>
        </nav>
        <div className="flex items-center space-x-2 border p-2 rounded-lg">
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 15l5 5m-5-5a7 7 0 1114 0 7 7 0 01-14 0z"
              />
            </svg>
          </button>
        </div>
        <button
          className="md:hidden p-2 border rounded-lg"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-5 w-5"/>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-1">
        {/* Filters */}
        <aside
          className={`absolute md:static bg-white w-64 border-r p-6 transform md:translate-x-0 transition-transform ${
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
              className="w-full p-3 border border-gray-300 rounded-lg"
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
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border cursor-pointer"
                >
                  {area}
                </span>
              ))}
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border cursor-pointer">
                +32...
              </span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Court</label>
            <select
              value={court}
              onChange={(e) => setCourt(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option>Chennai High Court</option>
              <option>Mumbai High Court</option>
              <option>Bangalore High Court</option>
            </select>
          </div>
        </aside>

        {/* Profiles */}
        <section className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              practiceArea={profile.practiceArea}
              court={profile.court}
              imageUrl={profile.imageUrl}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
