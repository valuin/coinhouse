"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

const chartData = [
    { time: 1, yourInvestment: 5 * 15000, cumAppreciation: 2 * 15000, cumNetCashFlow: 3 * 15000 },
    { time: 2, yourInvestment: 7 * 15000, cumAppreciation: 3 * 15000, cumNetCashFlow: 4 * 15000 },
    { time: 3, yourInvestment: 9 * 15000, cumAppreciation: 4 * 15000, cumNetCashFlow: 5 * 15000 },
    { time: 4, yourInvestment: 11 * 15000, cumAppreciation: 5 * 15000, cumNetCashFlow: 6 * 15000 },
    { time: 5, yourInvestment: 13 * 15000, cumAppreciation: 6 * 15000, cumNetCashFlow: 7 * 15000 },
    { time: 6, yourInvestment: 15 * 15000, cumAppreciation: 7 * 15000, cumNetCashFlow: 8 * 15000 },
    { time: 7, yourInvestment: 17 * 15000, cumAppreciation: 8 * 15000, cumNetCashFlow: 9 * 15000 },
    { time: 8, yourInvestment: 19 * 15000, cumAppreciation: 9 * 15000, cumNetCashFlow: 10 * 15000 },
    { time: 9, yourInvestment: 21 * 15000, cumAppreciation: 10 * 15000, cumNetCashFlow: 11 * 15000 },
    { time: 10, yourInvestment: 23 * 15000, cumAppreciation: 11 * 15000, cumNetCashFlow: 12 * 15000 },
    { time: 11, yourInvestment: 25 * 15000, cumAppreciation: 12 * 15000, cumNetCashFlow: 13 * 15000 },
    { time: 12, yourInvestment: 27 * 15000, cumAppreciation: 13 * 15000, cumNetCashFlow: 14 * 15000 },
    { time: 13, yourInvestment: 29 * 15000, cumAppreciation: 14 * 15000, cumNetCashFlow: 15 * 15000 },
    { time: 14, yourInvestment: 31 * 15000, cumAppreciation: 15 * 15000, cumNetCashFlow: 16 * 15000 },
    { time: 15, yourInvestment: 33 * 15000, cumAppreciation: 16 * 15000, cumNetCashFlow: 17 * 15000 },
    { time: 16, yourInvestment: 35 * 15000, cumAppreciation: 17 * 15000, cumNetCashFlow: 18 * 15000 },
    { time: 17, yourInvestment: 40 * 15000, cumAppreciation: 19 * 15000, cumNetCashFlow: 20 * 15000 },
    { time: 18, yourInvestment: 45 * 15000, cumAppreciation: 21 * 15000, cumNetCashFlow: 22 * 15000 },
    { time: 19, yourInvestment: 50 * 15000, cumAppreciation: 23 * 15000, cumNetCashFlow: 24 * 15000 },
    { time: 20, yourInvestment: 55 * 15000, cumAppreciation: 25 * 15000, cumNetCashFlow: 26 * 15000 },
    { time: 21, yourInvestment: 60 * 15000, cumAppreciation: 27 * 15000, cumNetCashFlow: 28 * 15000 },
    { time: 22, yourInvestment: 65 * 15000, cumAppreciation: 29 * 15000, cumNetCashFlow: 30 * 15000 },
    { time: 23, yourInvestment: 70 * 15000, cumAppreciation: 31 * 15000, cumNetCashFlow: 32 * 15000 },
    { time: 24, yourInvestment: 75 * 15000, cumAppreciation: 33 * 15000, cumNetCashFlow: 34 * 15000 },
    { time: 25, yourInvestment: 80 * 15000, cumAppreciation: 35 * 15000, cumNetCashFlow: 36 * 15000 },
    { time: 26, yourInvestment: 85 * 15000, cumAppreciation: 37 * 15000, cumNetCashFlow: 38 * 15000 },
    { time: 27, yourInvestment: 90 * 15000, cumAppreciation: 39 * 15000, cumNetCashFlow: 40 * 15000 },
    { time: 28, yourInvestment: 95 * 15000, cumAppreciation: 41 * 15000, cumNetCashFlow: 42 * 15000 },
    { time: 29, yourInvestment: 100 * 15000, cumAppreciation: 43 * 15000, cumNetCashFlow: 44 * 15000 },
    { time: 30, yourInvestment: 105 * 15000, cumAppreciation: 45 * 15000, cumNetCashFlow: 46 * 15000 },
  ];

interface ChartConfig {
  width?: number;
  height?: number;
  responsive?: boolean;
}


const chartConfig = {
  yourInvestment: {
    label: "Your Investment",
    color: "#374151", // Dark Blue
  },
  cumAppreciation: {
    label: "Cum. Appreciation",
    color: "#3B82F6", // Blue
  },
  cumNetCashFlow: {
    label: "Cum. Net Cash Flow",
    color: "#67E8F9", // Light Blue
  },
};

const colors = {
  "Your Investment": "#374151",
  "Cum. Appreciation": "#3B82F6",
  "Cum. Net Cash Flow": "#67E8F9",
};

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Est. Investment Value over time based on above assumptions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              label={{ value: "", position: "insideBottom", offset: -5 }}
            />
            <YAxis />
            <Tooltip
              contentStyle={{
                background: "#fff",
                padding: "10px",
                border: "1px solid #ccc",
              }}
              itemStyle={{ color: "#000" }}
              formatter={(value, name) => [`Rp${value}`, name]}
            />
            <Legend
              payload={Object.entries(chartConfig).map(([key, value]) => ({
                value: value.label,
                type: "square",
                color: value.color,
              }))}
            />
            <Bar
              dataKey="yourInvestment"
              stackId="a"
              fill={colors["Your Investment"]}
            />
            <Bar
              dataKey="cumAppreciation"
              stackId="a"
              fill={colors["Cum. Appreciation"]}
            />
            <Bar
              dataKey="cumNetCashFlow"
              stackId="a"
              fill={colors["Cum. Net Cash Flow"]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
