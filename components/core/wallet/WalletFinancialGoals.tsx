"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const financialGoals = [
    { name: 'Emergency Fund', progress: 70, color: 'bg-blue-600' },
    { name: 'Vacation Savings', progress: 45, color: 'bg-green-600' },
    { name: 'New Car', progress: 20, color: 'bg-orange-600' },
]

function ProgressBar({ progress, color }: { progress: number; color: string }) {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className={`${color} h-2.5 rounded-full`} style={{ width: `${progress}%` }}></div>
        </div>
    )
}

export const WalletFinancialGoals = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Financial Goals</CardTitle>
                <CardDescription>
                    Track your progress towards saving targets.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {financialGoals.map((goal) => (
                        <div key={goal.name} className="flex items-center">
                            <div className="w-32 text-sm font-medium">{goal.name}</div>
                            <div className="flex-grow mx-4">
                                <ProgressBar progress={goal.progress} color={goal.color} />
                            </div>
                            <div className="w-12 text-sm font-medium text-right">{goal.progress}%</div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}