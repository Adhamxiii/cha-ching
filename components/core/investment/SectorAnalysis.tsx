"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dynamic from "next/dynamic";

const sectorAnalysisData = [
  { name: "Technology", value: 150000 },
  { name: "Healthcare", value: 135000 },
  { name: "Finance", value: 115000 },
  { name: "Consumer Goods", value: 95000 },
  { name: "Energy", value: 125000 },
  { name: "Utilities", value: 105000 },
  { name: "Industrials", value: 115000 },
  { name: "Materials", value: 95000 },
];

const SectorAnalysis = () => {
  const ApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar" as const,
      height: 300,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#8884d8"],
        inverseColors: true,
        opacityFrom: 0.8,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: sectorAnalysisData.map((item) => item.name),
      labels: {
        style: {
          colors: "#333",
          fontSize: "12px",
        },
      },
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
  };

  const series = [
    {
      name: "Value",
      data: sectorAnalysisData.map((item) => item.value),
    },
  ];

  return (
    <Card className="bg-purple-50">
      <CardHeader>
        <CardTitle>Sector Analysis</CardTitle>
        <CardDescription>
          Investment distribution across sectors.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px] max-md:h-auto">
        {typeof window !== "undefined" && (
          <ApexChart options={options} series={series} type="bar" />
        )}
      </CardContent>
    </Card>
  );
};
export default SectorAnalysis;
