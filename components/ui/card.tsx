import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

interface CardProps {
  image: string;
  houseName: string;
  location: string;
  annualReturn: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  houseName,
  location,
  annualReturn,
}) => {
  return (
    <div className="bg-violet-100 shadow-md rounded-lg overflow-hidden p-6">
      <Image
        src={image}
        alt={houseName}
        width={400}
        height={300}
        className="w-full h-48 rounded-lg object-cover"
      />
      <div className="flex py-4 space-x-10">
        <div className="flex flex-col">
          <h3 className="text-base font-semibold">{houseName}</h3>
          <p className="text-xs text-gray-600">{location}</p>
        </div>
        <div className="flex flex-col justify-end items-end">
          <p className="text-green-500 font-bold">{annualReturn}</p>
          <p className="text-right text-xs text-green-500">
            Est. Annual Return
          </p>
        </div>
      </div>
    </div>
  );
};

interface MarketCardProps {
  id: number; // Add id to props
  image: string;
  houseName: string;
  location: string;
  rentalYield: string;
  annualReturn: string;
  tokensAvailable: string;
  featured?: boolean;
}

export const MarketCard: React.FC<MarketCardProps> = ({
  id,
  image,
  houseName,
  location,
  rentalYield,
  annualReturn,
  tokensAvailable,
  featured,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative w-[325px] h-[400px] flex flex-col">
      <div className="absolute top-4 left-4 z-10 bg-hero-teal text-white text-xs px-2 py-1 rounded-md">
        FEATURED
      </div>
      <div className="absolute top-4 right-4 z-10 cursor-pointer">
        <Heart className="w-6 h-6 text-white hover:text-hero-teal transition-colors" />
      </div>
      <div className="relative h-48 z-0">
        <Image
          src={image}
          alt={houseName}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg text-left font-semibold text-gray-800">
          {houseName}
        </h3>
        <p className="text-sm text-left text-gray-600 mb-2">{location}</p>
        <div className="flex flex-col items-baseline justify-between mt-2">
          <div className="flex flex-row items-center gap-2">
            <p className="text-hero-teal text-left font-bold">{rentalYield}</p>
            <p className="text-gray-500 text-xs">Rental Yield</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-hero-teal font-bold">{annualReturn}</p>
            <p className="text-gray-500 text-xs">Projected Annual Return</p>
          </div>
        </div>
        <div className="mt-auto">
          <Link href={`/marketplace/${id}`}>
            <button className="w-full bg-hero-teal hover:bg-hero-teal/80 text-white py-2 rounded-md text-sm">
              Available: {tokensAvailable}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
