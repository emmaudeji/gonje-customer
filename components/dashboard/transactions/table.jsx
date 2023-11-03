import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import { currencyFormatter } from "@/util/currencyFormatter";

export const TableDemo = ({ transactions }) => {
  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableBody>
        {transactions?.data?.transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            {/* <TableCell>
                <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center">
                  <p className="text-white font-bold">Circle</p>
                </div>
              </TableCell> */}
            <TableCell>
              <div className="space-y-2">
                <p className="font-semibold text-lg">Grocery Shop</p>
                <p>Transaction Id {transaction.trx_reference}</p>
                <p className="font-semibold">
                  {moment(
                    transaction?.transaction_date,
                    "YYYY-MM-DD HH:mm:ss"
                  )?.format("DD MMM,YYYY. h:mma") ?? "Invalid date"}
                </p>
              </div>
            </TableCell>
            <TableCell className="font-semibold">
              {transaction.payment_method}
            </TableCell>
            <TableCell className="font-semibold">
              {currencyFormatter(transaction.currency, transaction.amount)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
