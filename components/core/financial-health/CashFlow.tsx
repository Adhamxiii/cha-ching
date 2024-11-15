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

export default function CashFlow() {
  const [series] = useState([
    {
      name: "Income",
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
    },
    {
      name: "Expenses",
      data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
    },
    {
      name: "Savings",
      data: [2400, 2210, 2290, 2000, 2181, 2500, 2100],
    },
  ]);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      height: "auto",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        show: true,
      },
    },
    yaxis: {
      title: {
        text: "Amount",
      },
      labels: {
        show: true,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cash Flow Stream</CardTitle>
        <CardDescription>
          Visualizing income, expenses, and savings over time.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px] max-md:h-auto">
        <Chart options={options} series={series} type="area" height={300} />
      </CardContent>
    </Card>
  );
}
