import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useSWR from "swr";
//file import
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { TableDemo } from "@/components/dashboard/transactions/table";
import { fetcher } from "@/util/fetcher";

const Transactions = () => {
  const { data: transactions, error: transactionsError } = useSWR(
    "my/transactions",
    fetcher
  );
  return (
    <DashboardLayout>
      <section className="py-24">
        <section className="px-4 lg:px-36 flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/3">
            <div className="flex flex-col items-center justify-center gap-y-6 bg-white rounded-md py-12 ">
              <h3 className="font-bold text-xl">Total Points</h3>
              <div className="w-20 h-20 rounded-full text-center py-4 bg-[#dcd9fa]">
                <p className="text-[#7269d2]">1000</p>
              </div>
              <Button variant="secondary" className="bg-[#7269d2] text-white">
                send points to wallet
              </Button>
            </div>
          </div>
          <section className=" lg:w-4/6">
            <section className=" w-full">
              <div className="px-8 py-3 bg-gonje rounded-md">
                <div className="flex justify-between text-lg font-medium items-center">
                  <div className="space-y-2">
                    <p className="font-bold">$1500</p>
                    <p>Current Wallet Balance</p>
                  </div>
                  {DialogDemo()}
                </div>
              </div>
              <section className="bg-white shadow rounded-md">
                <div className="py-4 text-center">
                  <h2 className="text-lg font-semibold">
                    All transaction details
                  </h2>
                </div>
                <TableDemo
                  transactions={transactions}
                  transactionsError={transactionsError}
                />
              </section>
            </section>
          </section>
        </section>
      </section>
    </DashboardLayout>
  );
};

export default Transactions;

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="secondary"
          className="bg-gonje-green text-white"
        >
          <AiOutlinePlus className="mr-2 h-4 w-4 text-black" />
          Add Money
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cardNumber" className="text-right">
              Card Number
            </Label>
            <Input id="number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cvv" className="text-right">
              CVV
            </Label>
            <Input id="cvv" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Expiry Date
            </Label>
            <Input id="date" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
