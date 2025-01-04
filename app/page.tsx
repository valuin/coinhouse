import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Image
            src="/LogoCoinhouse.svg"
            alt="Coinhouse Logo"
            width={200}
            height={100}
          />
          <div className="flex items-center space-x-4">
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
            <Button variant="default">Sign Up</Button>
          </div>
        </div>
      </nav>
      <main className="h-full relative overflow-hidden flex flex-col">
        <section className="bg-violet-50 pb-8 h-3/4 flex flex-row items-center justify-between text-start relative p-6 md:p-14">
          <div className="flex flex-col">
            <h1 className="font-lato font-bold text-5xl mb-4 bg-gradient-to-r from-hero-blue to-hero-orange w-3/5 text-transparent bg-clip-text">
              Turning Properties into Opportunities
            </h1>
            <p className="mb-6 max-w-2xl w-3/5">
              Buy and sell real estate as effortlessly as trading a share of
              TSLA. Diversify across 150 properties in 40 markets starting at
              just $50 and sell with instant liquidity anytime.
            </p>
          </div>
          <Image
            src={"/LandingCoinhouse.png"}
            alt="Coinhouse Logo"
            width={500}
            height={500}
            className="relative"
          />
        </section>
        <section className="bg-hero-secondary py-12 h-full font-bold text-white flex items-center justify-center">
          <div className="flex flex-col text-center items-center justify-center">
            <h1 className="text-3xl w-1/4">
              Don't get left behind by the legacy real estate market
            </h1>
            <p className="w-1/3 text-base opacity-35 mt-4">
              It's time for a change. Rising down payments, inflexible terms, and
              soaring property prices are locking all but the wealthy out from
              building wealth with real estate. coinhouse helps anyone lay a path
              to financial freedom with fractional real estate investing.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
