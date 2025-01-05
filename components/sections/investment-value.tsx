import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // adjust path as needed

interface InvestmentItem {
  label: string;
  value: string;
}

const investmentData: InvestmentItem[] = [
  { label: "Total Investment Value", value: "$2,488,000" },
  { label: "Underlying asset price", value: "$2,320,000" },
  { label: "Total Investment Value", value: "$5,000" },
  { label: "Upfront DAO LLC fees:", value: "$600" },
  { label: "Operating reserve (2%)", value: "$0 / $46,400" },
  { label: "Coinhouse listing fee (5%)", value: "$116,000" },
];

export default function InvestmentTable() {
  return (
    <Table className="w-full">
      <TableCaption>Total Investment Value</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[60%] font-medium">Item</TableHead>
          <TableHead className="w-[40%] text-right font-medium">
            Value
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {investmentData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.label}</TableCell>
            <TableCell className="text-right">{item.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
