"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const investmentHoldingsData = [
    { name: 'Apple Inc.', symbol: 'AAPL', sector: 'Technology', value: 150000, change: 2.5 },
    { name: 'Microsoft Corporation', symbol: 'MSFT', sector: 'Technology', value: 135000, change: -1.2 },
    { name: 'Amazon.com Inc.', symbol: 'AMZN', sector: 'Consumer Cyclical', value: 114000, change: 1.8 },
    { name: 'Tesla Inc.', symbol: 'TSLA', sector: 'Consumer Cyclical', value: 96000, change: -2.7 },
    { name: 'Alphabet Inc.', symbol: 'GOOGL', sector: 'Communication Services', value: 126000, change: 0.9 },
    { name: 'Johnson & Johnson', symbol: 'JNJ', sector: 'Healthcare', value: 108000, change: 0.5 },
    { name: 'JPMorgan Chase & Co.', symbol: 'JPM', sector: 'Financial Services', value: 117000, change: -0.8 },
    { name: 'Visa Inc.', symbol: 'V', sector: 'Financial Services', value: 99000, change: 1.2 },
]

const InvestmentHoldings = () => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>Investment Holdings</CardTitle>
                <CardDescription>Detailed view of your current investments</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {investmentHoldingsData.map((holding) => (
                        <div key={holding.symbol} className="flex justify-between items-center border-b pb-2">
                            <div>
                                <p className="font-medium">{holding.name}</p>
                                <p className="text-sm text-gray-500">{holding.symbol} - {holding.sector}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-medium">${holding.value.toFixed(2)}</p>
                                <p className={cn("text-sm flex items-center", holding.change > 0 ? "text-green-500" : "text-red-500")}>
                                    {holding.change > 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                                    {Math.abs(holding.change)}%
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default InvestmentHoldings;  