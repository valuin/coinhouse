"use client"
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
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