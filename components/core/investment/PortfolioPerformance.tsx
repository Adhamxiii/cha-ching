"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import dynamic from "next/dynamic";

const portfolioPerformanceData = [
  { month: "Jan", stocks: 40000, bonds: 20000, realestate: 25000 },
  { month: "Feb", stocks: 30000, bonds: 15000, realestate: 22000 },
  { month: "Mar", stocks: 50000, bonds: 38000, realestate: 23000 },
  { month: "Apr", stocks: 48000, bonds: 38000, realestate: 20000 },
  { month: "May", stocks: 60000, bonds: 48000, realestate: 22000 },
  { month: "Jun", stocks: 58000, bonds: 40000, realestate: 25000 },
];

const PortfolioPerformance = () => {
  const ApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "line" as const,
      height: 300,
      toolbar: {
        show: false,
      },
    },
    colors: ["#0088fe", "#00c49f", "#ffbb28"],
    xaxis: {
      categories: portfolioPerformanceData.map((item) => item.month),
    },
    yaxis: {
      title: {
        text: "Value",
      },
    },
    tooltip: {
      x: {
        formatter: (value) => value.toString(),
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
    },
  };

  const series = [
    {
      name: "Stocks",
      data: portfolioPerformanceData.map((item) => item.stocks),
    },
    {
      name: "Bonds",
      data: portfolioPerformanceData.map((item) => item.bonds),
    },
    {
      name: "Real Estate",
      data: portfolioPerformanceData.map((item) => item.realestate),
    },
  ];

  return (
    <Card className="mb-6 bg-purple-50">
      <CardHeader>
        <CardTitle>Portfolio Performance</CardTitle>
        <CardDescription>
          Track your investment over different asset classes
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px] max-md:h-auto">
        {typeof window !== "undefined" && (
          <ApexChart
            options={options}
            series={series}
            type="line"
            height="100%"
          />
        )}
      </CardContent>
    </Card>
  );
};
export default PortfolioPerformance;
