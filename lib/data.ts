export interface PropertyData {
  id: number;
  image: string;
  houseName: string;
  location: string;
  rentalYield: string;
  annualReturn: string;
  tokensAvailable: string;
  propertyType?: string;
}

export const dummyData: PropertyData[] = [
  {
    id: 1,
    image: "/House1.png",
    houseName: "Plaza 54 Residence",
    location: "Jln. Pedurenan Mesjid 3 No. 54",
    rentalYield: "6.0%",
    annualReturn: "6.0%",
    tokensAvailable: "636 tokens",
    propertyType: "Commercial",
  },
  {
    id: 2,
    image: "/House2.png",
    houseName: "Green Valley Apartments",
    location: "123 Main Street, Cityville",
    rentalYield: "5.5%",
    annualReturn: "5.8%",
    tokensAvailable: "4500 tokens",
    propertyType: "Residential",
  },
  {
    id: 3,
    image: "/House3.png",
    houseName: "Sunset Residences",
    location: "456 Ocean Drive, Coast City",
    rentalYield: "7.0%",
    annualReturn: "7.2%",
    tokensAvailable: "8000 tokens",
    propertyType: "Residential",
  },
  {
    id: 4,
    image: "/House2.png",
    houseName: "Urban Lofts",
    location: "789 Downtown Ave, Metro Town",
    rentalYield: "6.3%",
    annualReturn: "6.5%",
    tokensAvailable: "5200 tokens",
    propertyType: "Commercial",
  },
  {
    id: 5,
    image: "/House1.png",
    houseName: "Plaza 54 Residence",
    location: "Jln. Pedurenan Mesjid 3 No. 54",
    rentalYield: "6.0%",
    annualReturn: "6.0%",
    tokensAvailable: "6636 tokens",
    propertyType: "Commercial",
  },
  {
    id: 6,
    image: "/House2.png",
    houseName: "Green Valley Apartments",
    location: "123 Main Street, Cityville",
    rentalYield: "5.5%",
    annualReturn: "5.8%",
    tokensAvailable: "4500 tokens",
    propertyType: "Residential",
  },
  {
    id: 7,
    image: "/House3.png",
    houseName: "Sunset Residences",
    location: "456 Ocean Drive, Coast City",
    rentalYield: "7.0%",
    annualReturn: "7.2%",
    tokensAvailable: "8000 tokens",
    propertyType: "Residential",
  },
  {
    id: 8,
    image: "/House2.png",
    houseName: "Urban Lofts",
    location: "789 Downtown Ave, Metro Town",
    rentalYield: "6.3%",
    annualReturn: "6.5%",
    tokensAvailable: "5200 tokens",
    propertyType: "Commercial",
  },
];