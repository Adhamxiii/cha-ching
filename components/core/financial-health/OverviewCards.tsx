import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, DollarSign, Percent, RefreshCcw } from "lucide-react";

type CardData = {
    title: string;
    icon: React.ElementType;
    value: string;
    subtext: string;
};

const cardData: CardData[] = [
    {
        title: "Net Worth",
        icon: DollarSign,
        value: "$1,320,800",
        subtext: "+5.2% from last quarter",
    },
    {
        title: "Investment Returns",
        icon: Percent,
        value: "8.5%",
        subtext: "+Annual return (YTD)",
    },
    {
        title: "Debt-to-Income Ratio",
        icon: BarChart2,
        value: "0.28",
        subtext: "+Healthy range: below 0.36",
    },
    {
        title: "Financial Health Score",
        icon: RefreshCcw,
        value: "82/100",
        subtext: "+3 points from last assessment",
    },
];

const OverviewCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
    );
};

export default OverviewCards;
