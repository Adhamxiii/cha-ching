import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign, Minus, Plus } from "lucide-react";

type CardData = {
    title: string;
    icon: React.ElementType;
    value: string;
    subtext: string;
};

const cardData: CardData[] = [
    {
        title: "Total Balance",
        icon: DollarSign,
        value: "$35,750.20",
        subtext: "+2.5% from last month",
    },
    {
        title: "Monthly Income",
        icon: Plus,
        value: "$10,000.00",
        subtext: "Salary",
    },
    {
        title: "Monthly Expenses",
        icon: Minus,
        value: "$7,000.00",
        subtext: "70% of income",
    },
    {
        title: "Savings",
        icon: CreditCard,
        value: "30%",
        subtext: "$3,000 saved this month",
    }
]
const WalletOverCards = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
            <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                    <card.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{card.value}</div>
                    <p className="text-xs text-muted-foreground">{card.subtext}</p>
                </CardContent>
            </Card>
        ))}
    </div>;
};

export default WalletOverCards; 