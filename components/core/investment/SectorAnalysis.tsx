"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const sectorAnalysisData = [
    { name: 'Technology', value: 150000 },
    { name: 'Healthcare', value: 135000 },
    { name: 'Finance', value: 115000 },
    { name: 'Consumer Goods', value: 95000 },
    { name: 'Energy', value: 125000 },
    { name: 'Utilities', value: 105000 },
    { name: 'Industrials', value: 115000 },
    { name: 'Materials', value: 95000 },
]

const SectorAnalysis = () => {
    return (
        <Card className="bg-purple-50">
            <CardHeader>
                <CardTitle>Sector Analysis</CardTitle>
                <CardDescription>
                    Investment distribution across sectors.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart className="w-full h-full" width={535} height={300} data={sectorAnalysisData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default SectorAnalysis;  