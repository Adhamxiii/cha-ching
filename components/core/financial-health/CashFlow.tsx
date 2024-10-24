"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CashFlow = () => {
    const cashFlowData = [
        { name: 'Jan', Income: 4000, Expenses: 2400, Savings: 2400 },
        { name: 'Feb', Income: 3000, Expenses: 1398, Savings: 2210 },
        { name: 'Mar', Income: 2000, Expenses: 9800, Savings: 2290 },
        { name: 'Apr', Income: 2780, Expenses: 3908, Savings: 2000 },
        { name: 'May', Income: 1890, Expenses: 4800, Savings: 2181 },
        { name: 'Jun', Income: 2390, Expenses: 3800, Savings: 2500 },
        { name: 'Jul', Income: 3490, Expenses: 4300, Savings: 2100 },
    ]
    return (
        <Card>
            <CardHeader>
                <CardTitle>Cash Flow Stream</CardTitle>
                <CardDescription>
                    Visualizing income, expenses, and savings over time.
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={1170} height={300} data={cashFlowData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Income" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="Expenses" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="Savings" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default CashFlow;    