"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const portfolioPerformanceData = [
    { month: 'Jan', stocks: 40000, bonds: 20000, realestate: 25000 },
    { month: 'Feb', stocks: 30000, bonds: 15000, realestate: 22000 },
    { month: 'Mar', stocks: 50000, bonds: 38000, realestate: 23000 },
    { month: 'Apr', stocks: 48000, bonds: 38000, realestate: 20000 },
    { month: 'May', stocks: 60000, bonds: 48000, realestate: 22000 },
    { month: 'Jun', stocks: 58000, bonds: 40000, realestate: 25000 },
]

const PortfolioPerformance = () => {
    return (
        <Card className="mb-6 bg-purple-50">
            <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>
                    Track your investment over different asset classes
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart className="w-full h-full" width={1143} height={300} data={portfolioPerformanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="stocks" stroke="#0088fe" />
                        <Line type="monotone" dataKey="bonds" stroke="#00c49f" />
                        <Line type="monotone" dataKey="realestate" stroke="#ffbb28" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default PortfolioPerformance;    