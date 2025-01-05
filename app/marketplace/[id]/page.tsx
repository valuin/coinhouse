"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import PropertyDesc from "@/components/sections/property-desc";
import { MapPin, Home, TrendingUp, Coins } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { dummyData, PropertyData } from "@/lib/data";

interface PropertyDetailsProps {
  params: { id: string };
}

const getPropertyById = (id: string): PropertyData | undefined => {
  return dummyData.find((property) => property.id === parseInt(id));
};
interface PropertyImages {
  id: number;
  url: string;
}
export default function PropertyDetails({ params }: PropertyDetailsProps) {
  const propertyData = getPropertyById(params.id);

  if (!propertyData) {
    return <div>Property not found</div>;
  }

  const propertyImages: PropertyImages[] = [
    { id: 1, url: "/House1.png" },
    { id: 2, url: "/House2.png" },
    { id: 3, url: "/House3.png" },
  ];

  return (
    <div className="w-full bg-violet-50 mx-auto px-10 md:px-20 lg:px-32 py-8">
      {/* Image Carousel */}
      <div className="h-[60vh] mb-8">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {propertyImages.map((image, index) => (
              <CarouselItem key={index} className="h-[60vh]">
                <div className="relative w-full h-full">
                  <Image
                    src={propertyImages[index].url}
                    alt={propertyData.houseName}
                    width={1920}
                    height={1080}
                    priority={index === 0}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-20" />
          <CarouselNext className="z-20" />
        </Carousel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{propertyData.houseName}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{propertyData.location}</span>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-violet-50 rounded-lg mb-8">
            <div className="flex flex-col items-center">
              <Home className="w-6 h-6 text-hero-teal mb-2" />
              <span className="text-sm text-gray-600">Property Type</span>
              <span className="font-semibold">Commercial</span>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-6 h-6 text-hero-teal mb-2" />
              <span className="text-sm text-gray-600">Rental Yield</span>
              <span className="font-semibold">{propertyData.rentalYield}</span>
            </div>
            <div className="flex flex-col items-center">
              <Coins className="w-6 h-6 text-hero-teal mb-2" />
              <span className="text-sm text-gray-600">Available Tokens</span>
              <span className="font-semibold">
                {propertyData.tokensAvailable}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-6 h-6 text-hero-teal mb-2" />
              <span className="text-sm text-gray-600">Annual Return</span>
              <span className="font-semibold">{propertyData.annualReturn}</span>
            </div>
          </div>

          {/* Description */}
          <PropertyDesc />
        </div>
        {/* Investment Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg h-fit sticky top-4">
          <h3 className="text-xl font-semibold mb-4">Investment Details</h3>

          <div className="mb-2">
            <p className="text-gray-600 text-sm">Starting at</p>
            <p className="text-2xl text-hero-teal font-bold">Rp 809.750</p>
          </div>

          <div className="space-y-2 mb-6">
            <Progress value={83} className="h-2 bg-gray-200" />
            <div className="flex justify-between text-sm">
              <span className="text-hero-teal font-medium">83% funded</span>
              <span className="text-gray-600">
                {propertyData.tokensAvailable} tokens left
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Projected Annual Return</span>
              <span className="font-semibold text-hero-teal">
                {propertyData.annualReturn}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Projected Rental Yield</span>
              <span className="font-semibold text-hero-teal">
                {propertyData.rentalYield}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Rental Yield</span>
              <span className="font-semibold text-hero-teal">
                {propertyData.rentalYield}
              </span>
            </div>
            <div className="flex flex-row gap-4 font-semibold">
              <button className="w-full bg-hero-teal text-white py-3 rounded-lg hover:bg-hero-teal/80 transition-colors">
                Buy
              </button>
              <button className="w-full bg-hero-teal text-white py-3 rounded-lg hover:bg-hero-teal/80 transition-colors">
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
