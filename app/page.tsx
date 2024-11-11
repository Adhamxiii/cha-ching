import dynamic from "next/dynamic";
const CashFlow = dynamic(
  () => import("@/components/core/financial-health/CashFlow")
);
const FinancialHealthRadar = dynamic(
  () => import("@/components/core/financial-health/FinancialHealthRadar")
);
const OverviewCards = dynamic(
  () => import("@/components/core/financial-health/OverviewCards")
);
const TreeMap = dynamic(
  () => import("@/components/core/financial-health/TreeMap")
);
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Financial Health</h1>
        <Button>Generate Detailed Report</Button>
      </div>
      <OverviewCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FinancialHealthRadar />
        <TreeMap />
      </div>
      <CashFlow />
    </div>
  );
}
