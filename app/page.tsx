"use client";
import Body from "@/components/sections/body";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/prop-card";
import { FeatureCard } from "@/components/ui/features";
import Link from "next/link";

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

  const features = [
    {
      image: "/Feature1.png",
      title: "Skip the down payment",
      description: "Acquire fractional ownership of rental properties.",
    },
    {
      image: "/Feature2.png",
      title: "Earn rent today, appreciation tomorrow",
      description:
        "Get rent payouts and collect property appreciation when you cash out.",
    },
    {
      image: "/Feature3.png",
      title: "Own multiple properties without the landlord headaches",
      description:
        "Diversify your portfolio without multiplying your workload. Vote on key property decisions, and professional property managers handle the rest.",
    },
    {
      image: "/Feature4.png",
      title: "Keep full control of your investments",
      description:
        "Forget expensive brokers and lock-in periods. Easily reinvest your rental income for the long term, or list your holdings for sale whenever you like.",
    },
  ];
  return (
    <>
      <main className="h-full relative overflow-hidden flex flex-col">
        <section className="bg-violet-50 pb-8 h-auto md:h-3/4 flex flex-col md:flex-row items-center justify-between text-start relative p-6 md:p-14">
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="font-bold text-3xl md:text-4xl mb-4 bg-gradient-to-r from-hero-blue to-hero-orange w-full md:w-3/5 text-transparent bg-clip-text">
              Turning Properties into Opportunities
            </h1>
            <p className="mb-6 max-w-full md:max-w-2xl w-full md:w-3/5">
              Buy and sell real estate as effortlessly as trading a share of
              BBCA. Diversify across 150 properties in 40 markets starting at
              just Rp100.000 and sell with instant liquidity anytime.
            </p>
            <Link href={"/marketplace"}>
              <Button variant="primary" className="w-full md:w-1/5">
                View Properties
              </Button>
            </Link>
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
          <article className="flex flex-col gap-6 items-center justify-center px-4">
            <div className="flex flex-wrap gap-6">
              {properties.map((property, index) => (
                <Card
                  key={index}
                  image={property.image}
                  houseName={property.houseName}
                  location={property.location}
                  annualReturn={property.annualReturn}
                />
              ))}
            </div>
            <Button variant={"primary"} className="">
              View Properties
            </Button>

            <div className="flex flex-col space-y-4 items-center mt-20 justify-center">
              <h1 className="text-4xl">
                You don’t have to be a pro to invest like one
              </h1>
              <h3 className="text-base font-medium">
                Get instant access to great property deals, in-depth analysis,
                and a community of wealth builders from around the world.
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    image={feature.image}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
