"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import PropertyTabs from "@/components/ui/property-tabs";
import { MapPin, Home, TrendingUp, Coins } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface PropertyData {
  id: number;
  image: string;
  houseName: string;
  location: string;
  rentalYield: string;
  annualReturn: string;
  tokensAvailable: string;
  propertyType?: string;
}

const getPropertyById = (id: string): PropertyData | undefined => {
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
      image: "/House2.png",
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

  return dummyData.find((property) => property.id === parseInt(id));
};

interface PropertyImages {
  id: number;
  url: string;
}

export default function PropertyDetails({
  params,
}: {
  params: { id: string };
}) {
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
    <div className="w-full bg-violet-50 mx-auto px-32 py-8">
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
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">About this property</h2>
            <PropertyTabs
              details={
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    About this property
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Located in the heart of South Jakarta, Plaza 54 Residence
                    offers modern living with exceptional amenities This
                    Property was initially listed for sale on the marketplace by
                    PT Plaza Properti Sejahtera.
                  </p>

                  <h3 className="font-semibold">
                    Plaza 54 Residence with Starbucks & Indomaret in South
                    Jakarta, DKI Jakarta
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Located in the strategic Kuningan area, Plaza 54 Residence
                    is a mixed-use property complex consisting of apartments,
                    office spaces, and retail outlets. The property hosts major
                    tenants such as Starbucks, Indomaret, and Optik Melawai. All
                    tenants have triple-net (NNN) leases, meaning they cover all
                    operating expenses of the property, including property
                    taxes, insurance, and maintenance.
                  </p>

                  <h3 className="font-semibold">
                    Close to Major Infrastructure Projects
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    The property is located just 10 minutes from Bendungan Hilir
                    MRT Station and has easy access to the Jabodebek LRT
                    project. These developments are expected to enhance mobility
                    and attract more retail tenants and residents.
                  </p>

                  <h3 className="font-semibold">
                    Surrounded by Business Centers and Renowned Brands
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    This property is situated in the heart of Kuningan, one of
                    Jakarta’s prime business districts. Nearby prominent tenants
                    include McDonald's, KFC, Bank Mandiri, and Tokopedia Tower,
                    making this location highly desirable for business and
                    retail activities.
                  </p>

                  <h3 className="font-semibold">Easy Access to Major Roads</h3>

                  <p className="text-gray-600 leading-relaxed">
                    The property is located on Jl. Pedurenan Masjid III, just 1
                    km from Jl. Rasuna Said and Jl. Gatot Subroto, two main
                    roads connecting business hubs in South Jakarta. This
                    location is ideal for commercial tenants and residents
                    alike.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Refer to the 'Documents' tab above to view the following
                    information:
                  </p>
                  <ul className="list-disc text-gray-600 leading-relaxed pl-6">
                    <li>Rent Roll & Lease Terms</li>
                    <li>Inspection Report</li>
                    <li>Purchase Contract</li>
                    <li>Operating Expenses</li>
                    <li>Comparable Properties</li>
                    <li>Building Improvements</li>
                    <li>Pest Report</li>
                    <li>Rent Payment Schedule</li>
                  </ul>
                </div>
              }
              financials={
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Financial Details</h2>
                  {/* Add financial content */}
                </div>
              }
              documents={
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Documents</h2>
                  {/* Add documents content */}
                </div>
              }
              market={
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Market Analysis</h2>
                  {/* Add market analysis content */}
                </div>
              }
            />
          </div>
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
              <span className="text-gray-600">{propertyData.tokensAvailable} tokens left</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Projected Annual Return</span>
              <span className="font-semibold text-hero-teal">{propertyData.annualReturn}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Projected Rental Yield</span>
              <span className="font-semibold text-hero-teal">{propertyData.rentalYield}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Rental Yield</span>
              <span className="font-semibold text-hero-teal">{propertyData.rentalYield}</span>
            </div>
            <button className="w-full bg-hero-teal text-white py-3 rounded-lg hover:bg-hero-teal/80 transition-colors">
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
