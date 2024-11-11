"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import dynamic from "next/dynamic";

const assetAllocationData = [
  { name: "Stocks", value: 55 },
  { name: "Bonds", value: 25 },
  { name: "Real Estate", value: 10 },
  { name: "Commodities", value: 5 },
  { name: "Crypto", value: 5 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#8dd1e1",
];

const AssetAllocation = () => {
  const ApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "pie" as const,
      height: 300,
    },
    labels: assetAllocationData.map((item) => item.name),
    colors: COLORS,
    tooltip: {
      y: {
        formatter: (value) => `${value}%`,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  };

  const series = assetAllocationData.map((item) => item.value);

  return (
    <Card className="bg-purple-50">
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
        <CardDescription>
          Current distribution of your investments.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px] max-md:h-auto">
        {typeof window !== "undefined" && (
          <ApexChart
            options={options}
            series={series}
            type="pie"
            height="100%"
          />
        )}
      </CardContent>
    </Card>
  );
};
export default AssetAllocation;
