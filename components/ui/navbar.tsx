"use client";

import { useState } from "react";
import { Button } from "./button";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-violet-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Image
          src="/LogoCoinhouse.svg"
          alt="Coinhouse Logo"
          width={150}
          height={50}
          className="md:hidden"
        />
        <Image
          src="/LogoCoinhouse.svg"
          alt="Coinhouse Logo"
          width={200}
          height={100}
          className="hidden md:block"
        />
        <button
          className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className="hidden md:flex md:items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-primary">
            Market Place
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Learn
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            List Property
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Store
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Log In
          </a>
          <Button variant="primary" className="mt-2 md:mt-0">
            Sign Up
          </Button>
        </div>
      </div>
      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        {/* Drawer */}
        <div className="absolute top-0 right-0 w-64 bg-white shadow-lg h-full p-4">
          <button
            className="mb-4 text-gray-700 hover:text-primary focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            Close
          </button>
          <nav className="flex flex-col space-y-2">
            <a
              href="#"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Market Place
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              List Property
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Store
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </a>
            <Button
              variant="primary"
              className="mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Button>
          </nav>
        </div>
      </div>
    </nav>
  );
}
