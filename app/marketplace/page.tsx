import { MarketCard } from "@/components/ui/prop-card";
import { dummyData, PropertyData } from "@/lib/data";

export default function Marketplace() {
  return (
    <div>
      <section className="bg-violet-50 pb-8 h-auto font-bold space-y-12 text-black flex-col items-center justify-center">
        <div className="grid pt-12 px-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-14 xl:gap-6">
          {dummyData.map((card: PropertyData) => (
            <MarketCard
              key={card.id}
              id={card.id}
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
