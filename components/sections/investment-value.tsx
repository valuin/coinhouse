import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

interface InvestmentItem {
  label: string;
  value: string;
}

interface RecentOrder {
  date: string;
  size: number;
  price: string;
  type: "Buy" | "Sell";
}

const investmentData: InvestmentItem[] = [
  { label: "Total Investment Value", value: "Rp2.488.000" },
  { label: "Underlying asset price", value: "Rp2.320.000" },
  { label: "Total Investment Value", value: "Rp52.000" },
  { label: "Upfront DAO LLC fees:", value: "Rp600" },
  { label: "Operating reserve (2%)", value: "Rp 0 / Rp46.400" },
  { label: "Coinhouse listing fee (5%)", value: "Rp116.000" },
];

const returnData: InvestmentItem[] = [
  { label: "Projected Annual Return", value: "8.6%" },
  { label: "Projected Rental Yield", value: "6%" },
  { label: "Projected Appreciation", value: "2.6%" },
  { label: "Rental Yield", value: "6%" },
];

const annualRentData: InvestmentItem[] = [
  { label: "Annual Gross Rents", value: "Rp2.488.000" },
  { label: "Property Taxes", value: "Rp2.32 Mio" },
  { label: "Homeowners Insurance", value: "Rp 0 / Rp46.400" },
  { label: "Annual DAO LLC Admin Fees", value: "Rp2.32 Mio" },
  { label: "Annual Cash Flow", value: "Rp150 Mio" },
  { label: "Monthly Cash Flow", value: "Rp12 Mio" },
  { label: "Projected Annual Cash Flow", value: "Rp150 Mio" },
];

const recentOrders: RecentOrder[] = [
  { date: "January 5", size: 1, price: "Rp800.000", type: "Buy" },
  { date: "January 5", size: 1, price: "Rp800.000", type: "Sell" },
  { date: "January 6", size: 5, price: "Rp820.000", type: "Buy" },
  { date: "January 7", size: 1, price: "Rp820.000", type: "Sell" },
  { date: "January 8", size: 1, price: "Rp820.000", type: "Buy" },
];


export function ValueTable() {
  return (
    <Table className="w-full bg-white rounded-lg">
      <TableHeader>
        <TableRow></TableRow>
      </TableHeader>
      <TableBody>
        {investmentData.map((item, index) => (
          <TableRow key={index} className="">
            <TableCell
              className={`font-medium py-3 px-4 ${
                index === 0 ? " font-semibold" : ""
              }`}
            >
              {item.label}
            </TableCell>
            <TableCell
              className={`text-right px-4 ${
                index === 0 ? "text-hero-teal font-semibold" : ""
              }`}
            >
              {item.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function ReturnTable() {
  return (
    <Table className="w-full bg-white rounded-lg">
      <TableHeader>
        <TableRow></TableRow>
      </TableHeader>
      <TableBody>
        {returnData.map((item, index) => (
          <TableRow key={index} className="">
            <TableCell
              className={`font-medium py-3 px-4 ${
                index === 0 ? " font-semibold" : ""
              }`}
            >
              {item.label}
            </TableCell>
            <TableCell
              className={`text-right px-4 ${
                index === 0 ? "text-hero-teal font-semibold" : ""
              }`}
            >
              {item.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function RentTable() {
  return (
    <Table className="w-full bg-white rounded-lg">
      <TableHeader>
        <TableRow></TableRow>
      </TableHeader>
      <TableBody>
        {annualRentData.map((item, index) => (
          <TableRow key={index} className="">
            <TableCell
              className={`font-medium py-3 px-4 ${
                index === 0 ? " font-semibold" : ""
              }`}
            >
              {item.label}
            </TableCell>
            <TableCell
              className={`text-right px-4 ${
                index === 0 ? "text-hero-teal font-semibold" : ""
              }`}
            >
              {item.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function TokenTable() {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-600">Tokens Purchased</h3>
        <Progress value={83} className="h-2 bg-gray-200" />
        <div className="flex justify-between text-sm">
          <span className="text-hero-teal font-medium">83%</span>
          <span className="text-gray-600">636 tokens left</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-600">Appreciation</h3>
        <Progress value={45} className="h-2 bg-gray-200" />
        <div className="flex justify-between text-sm">
          <span className="text-hero-teal font-medium">45%</span>
          <span className="text-gray-600">+Rp 125.000.000</span>
        </div>
      </div>
    </div>
  );
}

export function RecentOrders() {
  return (
    <div className="space-y-4 py-5 text-black">
      <Table className="w-full text-black bg-white rounded-lg p-4">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-2xl py-4 p-4 text-black">Recently Filled Orders</TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="font-semibold py-4 text-black  p-4">Date</TableHead>
            <TableHead className="font-semibold text-center py-4 text-black p-4">Size</TableHead>
            <TableHead className="font-semibold text-center py-4 text-black p-4">Price</TableHead>
            <TableHead className="font-semibold text-right py-4 text-black p-4">Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentOrders.map((order, index) => (
            <TableRow key={index} className="hover:bg-gray-50">
              <TableCell className="font-medium py-3 p-4">{order.date}</TableCell>
              <TableCell className="text-center py-3 p-4">{order.size} Tokens</TableCell>
              <TableCell className="text-center py-3 p-4">{order.price}</TableCell>
              <TableCell className={`text-right py-3 font-semibold p-4 ${order.type === "Buy" ? "text-green-500" : "text-red-500"}`}>
                {order.type}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
