import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white flex flex-row items-center shadow-lg rounded-lg mt-8 overflow-hidden p-6">
      <div className="flex flex-col justify-start items-start text-left space-y-4 w-full md:w-1/2">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="text-sm font-regular text-gray-600">{description}</p>
      </div>
      <Image
        src={image}
        alt={title}
        width={200}
        height={100}
        className="w-36 h-36 rounded-lg object-cover ml-auto mt-4 md:mt-0"
      />
    </div>
  );
};