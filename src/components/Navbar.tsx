"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link className="text-text font-bold text-xl" href="/">
            <img src="/Logo.svg" alt="Logo" className="w-8 h-8" />
          </Link>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <a
              className="text-text hover:bg-border px-3 py-2 rounded-md text-sm font-medium"
              href="/consult"
            >
              Consult
            </a>
            <a
              className="text-text hover:bg-border px-3 py-2 rounded-md text-sm font-medium"
              href="/resources"
            >
              Resources
            </a>
            <a
              className="text-text hover:bg-border px-3 py-2 rounded-md text-sm font-medium"
              href="/pricing"
            >
              Pricing
            </a>
          </div>
        </div>

        {/* Login/Signup buttons (always visible) */}
        <div className="flex items-center space-x-4">
          <a
            className="text-text hover:bg-border px-3 py-2 rounded-md text-sm font-medium"
            href="/auth/signin"
          >
            Login
          </a>
          <a
            className="bg-teal-500 hover:bg-border text-white px-3 py-2 rounded-md text-sm font-medium"
            href="/auth/signup"
          >
            Signup
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text hover:bg-border p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4">
          <a
            className="block text-text hover:bg-border px-3 py-2 rounded-md text-sm font-medium"
            href="/consult"
          >
            Consult
          </a>
          <a
            className="block text-text hover:bg-border px-3 py-2 rounded-md text-sm font-medium"
            href="/resources"
          >
            Resources
          </a>
          <a
            className="block text-text hover:bg-border px-3 py-2 rounded-md text-sm font-medium"
            href="/pricing"
          >
            Pricing
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
