"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ProfileSettings from "@/components/core/setting/ProfileSettings";
import BillingSettings from "@/components/core/setting/BillingSettings";

const SettingsPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Settings</h1>
                <Button>Save Changes</Button>
            </div>


            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                    <ProfileSettings />
                </TabsContent>
                <TabsContent value="billing">
                    <BillingSettings />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default SettingsPage;