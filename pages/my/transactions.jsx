import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";

const Transactions = () => {
    
  return (
    <DashboardLayout>
      <section className="py-24">
        <section className="px-24 flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/3">
            <div className="flex flex-col items-center justify-center gap-y-6 bg-white rounded-md py-12 ">
              <h3 className="font-bold text-xl">Total Points</h3>
              <div className="w-20 h-20 rounded-full text-center py-4 bg-[#dcd9fa]">
                <p className="text-[#7269d2]">1000</p>
              </div>
              <Button variant="secondary" className="bg-[#7269d2] text-white">send points to wallet</Button>
            </div>
          </div>
          <section className=" lg:w-4/6">
            <section className=" w-full">
              <div className="px-8 py-3 bg-gonje">
                <div className="flex justify-between text-lg font-medium items-center">
                  <div className="space-y-2">
                    <p className="font-bold">$1500</p>
                    <p>Current Wallet Balance</p>
                  </div>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-gonje-green text-white"
                  >
                    <AiOutlinePlus className="mr-2 h-4 w-4 text-black" />
                    Add Money
                  </Button>
                </div>
              </div>
              <section className="bg-white">
                <div className="py-4 text-center">
                  <h2 className="text-lg font-semibold">
                    All transaction details
                  </h2>
                </div>
                <TableDemo/>
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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const TableDemo= ()=> {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>
              <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center">
                <p className="text-white font-bold">Circle</p>
              </div>
            </TableCell>
            <TableCell>
                <div className="space-y-2">
                    <p className="font-semibold text-lg">Grocery Shop</p>
                    <p>Transaction Id</p>
                    <p className="font-semibold">Oct 22, 2023</p>
                </div>
            </TableCell>
            <TableCell className="font-semibold">{invoice.paymentMethod}</TableCell>
            <TableCell className="font-semibold">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
