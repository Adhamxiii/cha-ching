"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function WalletSpendingCategories() {
  const [series] = useState([
    {
      name: "Amount",
      data: [2500, 800, 1000, 500, 3000],
    },
  ]);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Housing", "Food", "Utilities", "Entertainment", "Savings"],
    },
    yaxis: {
      title: {
        text: "Amount ($)",
      },
    },
    fill: {
      opacity: 1,
      colors: ["#8884d8"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val;
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "hsl(var(--border))",
      strokeDashArray: 3,
    },
  };

  return (
    <Card className="bg-purple-50 w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Spending by Categories</CardTitle>
        <CardDescription>Breakdown of your monthly expenses.</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px] max-md:h-auto">
        <Chart options={options} series={series} type="bar" height={300} />
      </CardContent>
    </Card>
  );
}
