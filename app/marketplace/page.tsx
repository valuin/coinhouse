import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { MarketCard } from "@/components/ui/card";

export default function Marketplace() {
  const dummyData = [
    {
      id: 1,
      image: "/House1.png",
      houseName: "Plaza 54 Residence",
      location: "Jln. Pedurenan Mesjid 3 No. 54",
      rentalYield: "6.0%",
      annualReturn: "6.0%",
      tokensAvailable: "636 tokens",
    },
    {
      id: 2,
      image: "/House2.png",
      houseName: "Green Valley Apartments",
      location: "123 Main Street, Cityville",
      rentalYield: "5.5%",
      annualReturn: "5.8%",
      tokensAvailable: "4500 tokens",
    },
    {
      id: 3,
      image: "/House3.png",
      houseName: "Sunset Residences",
      location: "456 Ocean Drive, Coast City",
      rentalYield: "7.0%",
      annualReturn: "7.2%",
      tokensAvailable: "8000 tokens",
    },
    {
      id: 4,
      image: "/House2.png",
      houseName: "Urban Lofts",
      location: "789 Downtown Ave, Metro Town",
      rentalYield: "6.3%",
      annualReturn: "6.5%",
      tokensAvailable: "5200 tokens",
    },
    {
      id: 5,
      image: "/House1.png",
      houseName: "Plaza 54 Residence",
      location: "Jln. Pedurenan Mesjid 3 No. 54",
      rentalYield: "6.0%",
      annualReturn: "6.0%",
      tokensAvailable: "6636 tokens",
    },
    {
      id: 6,
      image: "/House2.png", // Replace with actual image path
      houseName: "Green Valley Apartments",
      location: "123 Main Street, Cityville",
      rentalYield: "5.5%",
      annualReturn: "5.8%",
      tokensAvailable: "4500 tokens",
    },
    {
      id: 7,
      image: "/House3.png",
      houseName: "Sunset Residences",
      location: "456 Ocean Drive, Coast City",
      rentalYield: "7.0%",
      annualReturn: "7.2%",
      tokensAvailable: "8000 tokens",
    },
    {
      id: 8,
      image: "/House2.png",
      houseName: "Urban Lofts",
      location: "789 Downtown Ave, Metro Town",
      rentalYield: "6.3%",
      annualReturn: "6.5%",
      tokensAvailable: "5200 tokens",
    },
  ];

  return (
    <div>
      <section className="bg-violet-50 pb-8 h-auto font-bold space-y-12 text-black flex-col items-center justify-center">
        <div className="grid pt-12 px-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyData.map((card) => (
            <MarketCard
              key={card.id}
              image={card.image}
              houseName={card.houseName}
              location={card.location}
              rentalYield={card.rentalYield}
              annualReturn={card.annualReturn}
              tokensAvailable={card.tokensAvailable}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
