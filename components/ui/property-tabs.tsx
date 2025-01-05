import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, DollarSign, Files, TrendingUp } from "lucide-react";

interface PropertyTabsProps {
  details: React.ReactNode;
  financials: React.ReactNode;
  documents: React.ReactNode;
  market: React.ReactNode;
}

export default function PropertyTabs({ details, financials, documents, market }: PropertyTabsProps) {
  return (
    <Tabs defaultValue="details" className="w-full">
      <ScrollArea>
        <TabsList className="mb-3 h-auto gap-2 rounded-none border-b border-border bg-transparent px-0 py-1 text-foreground">
          <TabsTrigger
            value="details"
            className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5    hover:text-hero-teal data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-hero-teal data-[state=active]:hover:text-hero-teal"
          >
            <FileText className="-ms-0.5 me-1.5 opacity-60" size={16} />
            Details
          </TabsTrigger>
          <TabsTrigger
            value="financials"
            className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5  hover:text-hero-teal  data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-hero-teal data-[state=active]:hover:text-hero-teal"
          >
            <DollarSign className="-ms-0.5 me-1.5 opacity-60" size={16} />
            Financials
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:text-hero-teal  data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-hero-teal data-[state=active]:hover:text-hero-teal"
          >
            <Files className="-ms-0.5 me-1.5 opacity-60" size={16} />
            Documents
          </TabsTrigger>
          <TabsTrigger
            value="market"
            className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:text-hero-teal  data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-hero-teal data-[state=active]:hover:text-hero-teal"
          >
            <TrendingUp className="-ms-0.5 me-1.5 opacity-60" size={16} />
            Market
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="details" className="mt-4">
        {details}
      </TabsContent>
      <TabsContent value="financials" className="mt-4">
        {financials}
      </TabsContent>
      <TabsContent value="documents" className="mt-4">
        {documents}
      </TabsContent>
      <TabsContent value="market" className="mt-4">
        {market}
      </TabsContent>
    </Tabs>
  );
}