"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend, ResponsiveContainer } from "recharts";

const WalletSpendingCategories = () => {
    const spendingData = [
        { category: 'Housing', amount: 2500 },
        { category: 'Food', amount: 800 },
        { category: 'Utilities', amount: 1000 },
        { category: 'Entertainment', amount: 500 },
        { category: 'Savings', amount: 3000 },
    ]

    return (
        <Card className="bg-purple-50 w-full max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle>Spending by Categories</CardTitle>
                <CardDescription>
                    Breakdown of your monthly expenses.
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={535} height={300} data={spendingData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip formatter={(value: number) => [`$${value}`, "Amount"]} labelStyle={{ color: "black" }} />
                        <Bar dataKey="amount" fill="#8884d8" />
                        <Legend />
                    </BarChart>

                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default WalletSpendingCategories;