import AssetAllocation from "@/components/core/investment/AssetAllcoation";
import InvestmentHoldings from "@/components/core/investment/InvestmentHoldings";
import InvestmentOverviewCards from "@/components/core/investment/InvestmentOverviewCards";
import PortfolioManagement from "@/components/core/investment/PortfoiloManagement";
import PortfolioPerformance from "@/components/core/investment/PortfolioPerformance";
import SectorAnalysis from "@/components/core/investment/SectorAnalysis";
import { Button } from "@/components/ui/button";

const InvestmentsPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Investment Portfolio</h1>
                <Button>Generate Report</Button>
            </div>
            <InvestmentOverviewCards />
            <PortfolioPerformance />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AssetAllocation />
                <SectorAnalysis />
            </div>
            <InvestmentHoldings />
            <PortfolioManagement />
        </div>
    );
};

export default InvestmentsPage;