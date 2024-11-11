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

const TreeMap = () => {
  const [series] = useState([
    {
      data: [
        { x: "Stocks", y: 10000 },
        { x: "Technology", y: 4000 },
        { x: "Healthcare", y: 3000 },
        { x: "Finance", y: 2000 },
        { x: "Consumer Goods", y: 1000 },
        { x: "Bonds", y: 6000 },
        { x: "Government", y: 3000 },
        { x: "Corporate", y: 2000 },
        { x: "Municipal", y: 1000 },
        { x: "Real Estate", y: 3500 },
        { x: "Residential", y: 2000 },
        { x: "Commercial", y: 1500 },
        { x: "Cash", y: 1500 },
        { x: "Savings", y: 1000 },
        { x: "Money Market", y: 500 },
      ],
    },
  ]);

  const options: ApexCharts.ApexOptions = {
    legend: { show: false },
    chart: {
      height: 300,
      type: "treemap",
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        colors: ["#fff"],
      },
      formatter: function (text, op) {
        return `${text}: ${op.value}`;
      },
      offsetY: -4,
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 6000,
              color: "#8884d8",
            },
          ],
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return value.toString();
        },
      },
    },
  };
  return (
    <Card className="bg-purple-50">
      <CardHeader>
        <CardTitle>Asset Allocation Treemap</CardTitle>
        <CardDescription>
          Hierarchical view of your investment portfolio.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px] max-md:h-auto">
        <Chart options={options} series={series} type="treemap" height={300} />
      </CardContent>
    </Card>
  );
};

export default TreeMap;
