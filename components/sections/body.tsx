import Image from "next/image";

export default function Body() {
  return (
    <section className="bg-hero-secondary py-12 h-auto font-bold space-y-12 text-white flex-col items-center justify-center">
      <div className="flex flex-col text-center items-center justify-center px-4">
        <h2 className="text-2xl md:text-3xl w-full md:w-1/3">
          Don&rsquo;t get left behind by the legacy real estate market
        </h2>
        <p className="w-full md:w-1/3 text-base opacity-40 mt-4">
          It&rsquo;s time for a change. Rising down payments, inflexible terms, and
          soaring property prices are locking all but the wealthy out from
          building wealth with real estate. Coinhouse helps anyone lay a path to
          financial freedom with fractional real estate investing.
        </p>
      </div>
      <div className="flex items-start justify-center px-4 pt-10">
        <div className="flex-col text-start w-2/4">
          <h2 className="text-2xl md:text-3xl w-full md:w-1/2">
            Start investing in Coinhouse properties
          </h2>
          <p className="w-full md:w-2/3 text-base opacity-40 mt-4">
            Buy fractional ownership in properties across Indonesia.
          </p>
        </div>
        <Image
          src="/Coinhouse2.png"
          alt="Coinhouse Secondary Image"
          width={600}
          height={600}
          className="w-1/4"
        />
      </div>
      <div className="flex justify-center items-center align-center flex-col w-full">
        <Image
          src="/LineCoinhouse.png"
          alt="Coinhouse Line"
          width={600}
          height={600}
          className="flex w-1/3"
        />
      </div>
      <div className="flex items-start justify-center w-full px-36 pt-10">
        <Image
          src="/Coinhouse3.png"
          alt="Coinhouse Secondary Image"
          width={600}
          height={600}
          className="w-1/2"
        />
        <div className="flex flex-col text-right w-1/2">
          <h2 className="text-2xl md:text-3xl w-full md:w-full">
            Automatically receive rental income
          </h2>
          <p className="w-full md:w-full text-right text-base opacity-40 pl-12 mt-4">
            You’ll get your first rent payment that same day, and daily after
            that. Your holdings will grow along with the property value, too.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center px-4 pt-10">
        <div className="flex-col text-start w-2/4 mt-12">
          <h2 className="text-2xl md:text-3xl w-full md:w-1/2">
            Build the future you deserve
          </h2>
          <p className="w-full md:w-2/3 text-base opacity-40 mt-4">
            Use your rental income to buy more and more real estate and voilà –
            you’re on the path to financial freedom.
          </p>
        </div>
        <Image
          src="/Coinhouse4.png"
          alt="Coinhouse Secondary Image"
          width={600}
          height={600}
          className="w-1/4"
        />
      </div>
    </section>
  );
}
