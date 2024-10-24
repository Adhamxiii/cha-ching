"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts";

const monthlyTrendData = [
    { month: 'Jan', amount: 6800 },
    { month: 'Feb', amount: 7200 },
    { month: 'Mar', amount: 7000 },
    { month: 'Apr', amount: 7300 },
    { month: 'May', amount: 7100 },
    { month: 'Jun', amount: 7000 },
]

const WalletSpendingTrends = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Monthly Spending Trend</CardTitle>
                <CardDescription>
                    Your spending trend over the last 6 months.
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={535} height={300} data={monthlyTrendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default WalletSpendingTrends;    