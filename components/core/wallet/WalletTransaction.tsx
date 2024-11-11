"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Car,
  CreditCard,
  DollarSign,
  Heart,
  Home,
  Plane,
  ShoppingBag,
} from "lucide-react";

const recentTransactions = [
  {
    id: 1,
    description: "Grocery Store",
    amount: -250.5,
    date: "2023-06-15",
    category: "Food",
  },
  {
    id: 2,
    description: "Electric Bill",
    amount: -120.0,
    date: "2023-06-14",
    category: "Utilities",
  },
  {
    id: 3,
    description: "Paycheck Deposit",
    amount: 3000.0,
    date: "2023-06-13",
    category: "Income",
  },
  {
    id: 4,
    description: "Restaurant",
    amount: -75.2,
    date: "2023-06-12",
    category: "Food",
  },
  {
    id: 5,
    description: "Gas Station",
    amount: -45.0,
    date: "2023-06-11",
    category: "Transportation",
  },
];

const categoryIcons = {
  Groceries: ShoppingBag,
  Rent: Home,
  Utilities: Home,
  Transportation: Car,
  Entertainment: Plane,
  Healthcare: Heart,
  Clothing: ShoppingBag,
  Savings: DollarSign,
  Income: DollarSign,
};

const WalletTransaction = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>
          Your financial activities for the last past week.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((transaction) => {
                const Icon =
                  categoryIcons[
                    transaction.category as keyof typeof categoryIcons
                  ] || CreditCard;
                return (
                  <TableRow key={transaction.id}>
                    <TableCell className="flex items-center space-x-4">
                      <div className="rounded-full bg-purple-100 p-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p>{transaction.description}</p>
                        <p className="text-sm text-gray-500">
                          {transaction.date}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell
                      className={`text-right font-medium ${
                        transaction.amount < 0
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {transaction.amount < 0 ? "-" : ""}$
                      {Math.abs(transaction.amount).toFixed(2)}
                      <p className="text-xs text-gray-500">
                        {transaction.category}
                      </p>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default WalletTransaction;
