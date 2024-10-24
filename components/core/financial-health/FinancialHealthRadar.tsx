"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";


const FinancialHealthRadar = () => {
    const radarData = [
        { subject: 'Savings', A: 120, B: 110, fullMark: 150 },
        { subject: 'Investments', A: 98, B: 130, fullMark: 150 },
        { subject: 'Debt', A: 86, B: 130, fullMark: 150 },
        { subject: 'Income', A: 99, B: 100, fullMark: 150 },
        { subject: 'Expenses', A: 85, B: 90, fullMark: 150 },
        { subject: 'Credit Score', A: 65, B: 85, fullMark: 150 },
    ]

    return (
        <Card className="bg-purple-50">
            <CardHeader>
                <CardTitle>Financial Health Radar</CardTitle>
                <CardDescription>
                    Comparison of your financial metrics against benchmark.
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
                <ResponsiveContainer width="100%" height='100%'>
                    <RadarChart width={535} height={300} cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name="You" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="Benchmark" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>


    );
};

export default FinancialHealthRadar;
