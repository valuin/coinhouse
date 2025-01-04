import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-lato font-bold">Coinhouse</div>
          <div className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-primary">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary">Features</a>
            <a href="#" className="text-gray-700 hover:text-primary">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-primary">Contact</a>
          </div>
        </div>
      </nav>
      <main className="h-screen relative overflow-hidden flex flex-col">
        <section className="bg-violet-50 pb-8 h-3/4 flex flex-row items-center justify-between text-start relative p-6 md:p-14">
          <div className="flex flex-col">
          <h1 className="font-lato font-bold text-4xl mb-4 bg-gradient-to-r from-hero-blue to-hero-orange w-3/5 text-transparent bg-clip-text">Turning Properties into Opportunities</h1>
            <p className="mb-6 max-w-2xl w-3/5">
              Buy and sell real estate as effortlessly as trading a share of TSLA.
              Diversify across 150 properties in 40 markets starting at just $50
              and sell with instant liquidity anytime.
            </p>
          </div>
          <Image
            src={"/LandingCoinhouse.png"}
            alt="Coinhouse Logo"
            width={450}
            height={450}
            className="relative"
          />
        </section>
        <section className="bg-white pb-8 h-1/4 flex items-center justify-center">
          <p className="text-gray-600">© 2024 Coinhouse. All rights reserved.</p>
        </section>
      </main>
    </>
  );
}
