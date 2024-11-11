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

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function FinancialHealthRadar() {
  const [series] = useState([
    {
      name: "You",
      data: [120, 98, 86, 99, 85, 65],
    },
    {
      name: "Benchmark",
      data: [110, 130, 130, 100, 90, 85],
    },
  ]);

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 300,
      type: "radar",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {},
      },
    },

    markers: {
      size: 4,
      colors: ["rgba(136, 132, 216, 0.6)", "rgba(130, 202, 157, 0.6)"],
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toString();
        },
      },
    },
    xaxis: {
      categories: [
        "Savings",
        "Investments",
        "Debt",
        "Income",
        "Expenses",
        "Credit Score",
      ],
    },
    yaxis: {
      tickAmount: 5,
      max: 150,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val.toString();
          } else {
            return "";
          }
        },
      },
    },
  };

  return (
    <Card className="bg-purple-50">
      <CardHeader>
        <CardTitle>Financial Health Radar</CardTitle>
        <CardDescription>
          Comparison of your financial metrics against benchmark.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-auto">
        <Chart options={options} series={series} type="radar" height={300} />
      </CardContent>
    </Card>
  );
}
