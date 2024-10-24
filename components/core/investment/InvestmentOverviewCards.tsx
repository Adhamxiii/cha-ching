"use client";

import { AlertTriangle, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CardData = {
    title: string;
    icon: React.ElementType;
    value: string;
    subtext: string;
};

const cardData: CardData[] = [
    {
        title: "Portfolio Value",
        icon: DollarSign,
        value: "$945,000.00",
        subtext: "Updated real-time",
    },
    {
        title: "ROI",
        icon: TrendingUp,
        value: "12.7%",
        subtext: "Return on Investment",
    },
    {
        title: "Risk Level",
        icon: AlertTriangle,
        value: "63%",
        subtext: "Moderate risk",
    },
    {
        title: "Diversification Score",
        icon: DollarSign,
        value: "82%",
        subtext: "Well diversified portfolio",
    }
]

const InvestmentOverviewCards = () => {
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

export default InvestmentOverviewCards;
