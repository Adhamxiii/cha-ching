import { WalletFinancialGoals } from "@/components/core/wallet/WalletFinancialGoals";
import WalletOverCards from "@/components/core/wallet/WalletOverCards";
import WalletSpendingCategories from "@/components/core/wallet/WalletSpendingCategories";
import WalletSpendingTrends from "@/components/core/wallet/WalletSpendingTrends";
import WalletTransaction from "@/components/core/wallet/WalletTransaction";
import { Button } from "@/components/ui/button";

const WalletPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">My Wallet</h1>
                <Button>Export Financial Report</Button>
            </div>
            <WalletOverCards />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WalletSpendingCategories />
                <WalletSpendingTrends />
            </div>
            <WalletTransaction />
            <WalletFinancialGoals />
        </div>
    );
};

export default WalletPage;