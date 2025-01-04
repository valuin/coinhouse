import Image from "next/image";

interface CardProps {
  image: string;
  houseName: string;
  location: string;
  annualReturn: string;
}

export const Card: React.FC<CardProps> = ({ image, houseName, location, annualReturn }) => {
  return (
    <div className="bg-violet-100 shadow-md rounded-lg overflow-hidden p-6">
      <Image src={image} alt={houseName} width={400} height={300} className="w-full h-48 rounded-lg object-cover" />
      <div className="flex py-4 space-x-10">
        <div className="flex flex-col">
            <h3 className="text-base font-semibold">{houseName}</h3>
            <p className="text-xs text-gray-600">{location}</p>
        </div>
        <div className="flex flex-col justify-end items-end">
            <p className="text-green-500 font-bold">{annualReturn}</p>
            <p className="text-right text-xs text-green-500">Est. Annual Return</p>
        </div>
      </div>
    </div>
  );
};