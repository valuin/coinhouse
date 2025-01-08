import PropertyTabs from "../ui/property-tabs";
import {
  ValueTable,
  ReturnTable,
  RentTable,
  TokenTable,
  RecentOrders
} from "../sections/investment-value";

export default function PropertyDesc() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">About this property</h2>
      <PropertyTabs
        details={
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">About this property</h2>
            <p className="text-gray-600 leading-relaxed">
              Located in the heart of South Jakarta, Plaza 54 Residence offers
              modern living with exceptional amenities This Property was
              initially listed for sale on the marketplace by PT Plaza Properti
              Sejahtera.
            </p>

            <h3 className="font-semibold">
              Plaza 54 Residence with Starbucks & Indomaret in South Jakarta,
              DKI Jakarta
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Located in the strategic Kuningan area, Plaza 54 Residence is a
              mixed-use property complex consisting of apartments, office
              spaces, and retail outlets. The property hosts major tenants such
              as Starbucks, Indomaret, and Optik Melawai. All tenants have
              triple-net (NNN) leases, meaning they cover all operating expenses
              of the property, including property taxes, insurance, and
              maintenance.
            </p>

            <h3 className="font-semibold">
              Close to Major Infrastructure Projects
            </h3>

            <p className="text-gray-600 leading-relaxed">
              The property is located just 10 minutes from Bendungan Hilir MRT
              Station and has easy access to the Jabodebek LRT project. These
              developments are expected to enhance mobility and attract more
              retail tenants and residents.
            </p>

            <h3 className="font-semibold">
              Surrounded by Business Centers and Renowned Brands
            </h3>

            <p className="text-gray-600 leading-relaxed">
              This property is situated in the heart of Kuningan, one of
              Jakarta&rsquo;s prime business districts. Nearby prominent tenants
              include McDonald&rsquo;s, KFC, Bank Mandiri, and Tokopedia Tower,
              making this location highly desirable for business and retail
              activities.
            </p>

            <h3 className="font-semibold">Easy Access to Major Roads</h3>

            <p className="text-gray-600 leading-relaxed">
              The property is located on Jl. Pedurenan Masjid III, just 1 km
              from Jl. Rasuna Said and Jl. Gatot Subroto, two main roads
              connecting business hubs in South Jakarta. This location is ideal
              for commercial tenants and residents alike.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Refer to the &rsquo;Documents&rsquo; tab above to view the
              following information:
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
            <ValueTable />
            <ReturnTable />
            <RentTable />
            <TokenTable />
          </div>
        }
        documents={
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Documents</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent border-2 border-black/50 w-full h-full p-12 rounded-xl overflow-hidden">
                <div className="flex flex-col text-start bg-hero-teal rounded-lg w-full text-white p-4 justify-center items-start">
                  <h3 className="font-regular">Value</h3>
                  <span className="text-xl font-semibold">Rp808.066</span>
                  <h4>Last Traded Value</h4>
                </div>
                <div className="flex flex-col text-start bg-hero-teal rounded-lg w-full text-white p-4 justify-center items-start">
                  <h3 className="font-regular">Estimated value</h3>
                  <span className="text-xl font-semibold">Rp808.066</span>
                  <h4>House Canary</h4>
                </div>
                <div className="flex flex-col text-start bg-hero-teal rounded-lg w-full text-white p-4 justify-center items-start">
                  <h3 className="font-regular">Trade Volume</h3>
                  <span className="text-xl font-semibold">Rp179.390</span>
                  <h4>Last 4 weeks</h4>
                </div>
                <div className="flex flex-col text-start bg-hero-teal rounded-lg w-full text-white p-4 justify-center items-start">
                  <h3 className="font-regular">Market Cap</h3>
                  <span className="text-xl font-semibold">Rp39 Billion</span>
                  <h4>6,636 Tokens</h4>
                </div>
              </div>
              <div className="items-start">
                <h1 className="text-2xl font-semibold">Open Orders</h1>
                <span className="">Only showing 10 most recent orders</span>
                <RecentOrders/>
              </div>
            </div>
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
  );
}
