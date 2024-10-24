"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const assetAllocationData = [
    { name: 'Stocks', value: 55 },
    { name: 'Bonds', value: 25 },
    { name: 'Real Estate', value: 10 },
    { name: 'Commodities', value: 5 },
    { name: 'Crypto', value: 5 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1']

const AssetAllocation = () => {
    return (
        <Card className="bg-purple-50">
            <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>
                    Current distribution of your investments.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart width={535} height={300}>
                        <Pie
                            data={assetAllocationData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            // label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {assetAllocationData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default AssetAllocation; 