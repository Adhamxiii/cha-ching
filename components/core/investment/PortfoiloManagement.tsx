"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PortfolioManagement = () => {
    const [riskTolerance, setRiskTolerance] = useState(63);

    return (
        <Card className="mb-6 bg-purple-50">
            <CardHeader>
                <CardTitle>Portfolio Management</CardTitle>
                <CardDescription>Adjust your investment strategy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="risk-tolerance">Risk Tolerance</Label>
                    <Slider
                        id="risk-tolerance"
                        defaultValue={[riskTolerance]}
                        max={100}
                        step={1}
                        onValueChange={(value) => setRiskTolerance(value[0])}
                    />
                    <p className="text-sm text-muted-foreground">Current risk tolerance: {riskTolerance}%</p>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="rebalance-frequency">Rebalance Frequency</Label>
                    <Select>
                        <SelectTrigger id="rebalance-frequency">
                            <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="annually">Annually</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center space-x-2">
                    <Switch id="auto-invest" />
                    <Label htmlFor="auto-invest">Enable Auto-Invest</Label>
                </div>
                <Button className="w-full">Update Strategy</Button>
            </CardContent>
        </Card>
    );
};

export default PortfolioManagement;