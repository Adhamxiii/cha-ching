"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import dynamic from "next/dynamic";

const monthlyTrendData = [
  { month: "Jan", amount: 6800 },
  { month: "Feb", amount: 7200 },
  { month: "Mar", amount: 7000 },
  { month: "Apr", amount: 7300 },
  { month: "May", amount: 7100 },
  { month: "Jun", amount: 7000 },
];

const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const WalletSpendingTrends = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "line" as const,
      height: 300,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: monthlyTrendData.map((item) => item.month),
    },
    yaxis: {
      title: {
        text: "Amount",
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
      name: "Amount",
      data: monthlyTrendData.map((item) => item.amount),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Spending Trend</CardTitle>
        <CardDescription>
          Your spending trend over the last 6 months.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
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
export default WalletSpendingTrends;
