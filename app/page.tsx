"use client";
import Body from "@/components/sections/body";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  const properties = [
    {
      image: "/House1.png",
      houseName: "Plaza 54 Residence",
      location: "South Jakarta, DKI Jakarta",
      annualReturn: "7.04%",
    },
    {
      image: "/House2.png",
      houseName: "Greenwood Estate",
      location: "Bali, Indonesia",
      annualReturn: "6.50%",
    },
    {
      image: "/House3.png",
      houseName: "Kamang Residence",
      location: "South Jakarta, DKI Jakarta",
      annualReturn: "16.4%",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="h-full relative overflow-hidden flex flex-col">
        <section className="bg-violet-50 pb-8 h-auto md:h-3/4 flex flex-col md:flex-row items-center justify-between text-start relative p-6 md:p-14">
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="font-bold text-3xl md:text-4xl mb-4 bg-gradient-to-r from-hero-blue to-hero-orange w-full md:w-3/5 text-transparent bg-clip-text">
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
        <Body />
        <section className="bg-violet-50 py-12 h-auto font-bold space-y-12 text-black flex-col items-center justify-center">
          <div className="flex flex-col text-center items-center justify-center px-4">
            <h2 className="text-2xl font-black md:text-3xl w-full md:w-2/3">
              Invest in fractions of rental properties across Indonesia
            </h2>
            <p className="w-full font-medium md:w-2/3 text-base mt-4">
              All without leaving your living room. No experience, connections,
              or down payments required.
            </p>
          </div>
          <article className="flex flex-wrap gap-6 justify-center px-4">
            {properties.map((property, index) => (
              <Card
                key={index}
                image={property.image}
                houseName={property.houseName}
                location={property.location}
                annualReturn={property.annualReturn}
              />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
