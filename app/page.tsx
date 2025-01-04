"use client"
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
        {isMenuOpen && (
          <div className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black opacity-50"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className="absolute top-0 right-0 w-64 bg-white shadow-lg h-full p-4 transform transition-transform duration-300">
              <button
                className="mb-4 text-gray-700 hover:text-primary focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Close
              </button>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Market Place
                </a>
                <a href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </a>
                <a href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Learn
                </a>
                <a href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </a>
                <a href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  List Property
                </a>
                <a href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Store
                </a>
                <a href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </a>
                <Button variant="primary" className="mt-2" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Button>
              </nav>
            </div>
          </div>
        )}
      </nav>
      <main className="h-full relative overflow-hidden flex flex-col">
        <section className="bg-violet-50 pb-8 h-auto md:h-3/4 flex flex-col md:flex-row items-center justify-between text-start relative p-6 md:p-14">
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="font-lato font-bold text-3xl md:text-5xl mb-4 bg-gradient-to-r from-hero-blue to-hero-orange w-full md:w-3/5 text-transparent bg-clip-text">
              Turning Properties into Opportunities
            </h1>
            <p className="mb-6 max-w-full md:max-w-2xl w-full md:w-3/5">
              Buy and sell real estate as effortlessly as trading a share of
              TSLA. Diversify across 150 properties in 40 markets starting at
              just $50 and sell with instant liquidity anytime.
            </p>
            <Button variant="primary" className="w-full md:w-1/5">
              View Properties
            </Button>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <Image
              src="/LandingCoinhouse.png"
              alt="Coinhouse Logo"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </section>
        <section className="bg-hero-secondary py-12 h-auto font-bold text-white flex items-center justify-center">
          <div className="flex flex-col text-center items-center justify-center px-4">
            <h1 className="text-2xl md:text-3xl w-full md:w-1/2">
              Don't get left behind by the legacy real estate market
            </h1>
            <p className="w-full md:w-1/3 text-base opacity-90 mt-4">
              It's time for a change. Rising down payments, inflexible terms, and
              soaring property prices are locking all but the wealthy out from
              building wealth with real estate. Coinhouse helps anyone lay a path
              to financial freedom with fractional real estate investing.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}