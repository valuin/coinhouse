import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

interface InvestmentItem {
  label: string;
  value: string;
}

const formatToIDR = (value: string): string => {
  if (value.includes("%")) return value;
  const numericValue = parseInt(value.replace(/\D/g, ""));
  return `Rp ${numericValue.toLocaleString("id-ID")}`;
};

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
