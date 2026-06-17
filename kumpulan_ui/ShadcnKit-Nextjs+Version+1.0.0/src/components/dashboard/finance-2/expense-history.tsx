import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { nanoid } from "nanoid";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, MoreVertical } from "lucide-react";

const ExpenseHistory = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <div className="p-6 pb-0 flex items-start justify-between">
        <div>
          <p className="text-lg font-medium mb-1">Expense History</p>
          <p className="text-sm font-medium text-secondary-foreground">
            Last 7 days report
          </p>
        </div>

        <Button variant="secondary" size="icon" className="w-8 h-8">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <Table className="mt-3">
        <TableHeader>
          <TableRow className="text-sm font-medium text-secondary-foreground">
            <TableHead className="py-5 px-6">TRANSACTION</TableHead>
            <TableHead className="py-5 px-6">CREATED DATE</TableHead>
            <TableHead className="py-5 px-6">AMOUNT</TableHead>
            <TableHead className="py-5 px-6 text-right">ACTION</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {transactions.map((item) => (
            <TableRow
              key={item.id}
              className="text-sm font-medium border-border text-secondary-foreground"
            >
              <TableCell className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={item.user.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.user.name}</p>
                    <p className="text-xs">{item.user.id.substring(0, 10)}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-4">
                {format(new Date(item.createdAt), "dd MMM, yyyy")}
              </TableCell>

              <TableCell className="px-6 py-4">${item.total}</TableCell>

              <TableCell className="px-6 py-4 text-right">
                <Button variant="secondary" size="icon" className="w-8 h-8">
                  <MoreVertical className="w-4 h-4 text-icon" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

// CUSTOM DUMMY DATA SET
const transactions = [
  {
    id: nanoid(),
    total: 356.25,
    createdAt: new Date("August 31, 2022 10:30:00"),
    user: {
      id: nanoid(),
      name: "Arikunn",
      image: "https://github.com/shadcn.png",
    },
  },
  {
    id: nanoid(),
    total: 165.58,
    createdAt: new Date("August 30, 2022 13:30:00"),
    user: {
      id: nanoid(),
      name: "Ikauwis",
      image: "https://github.com/shadcn.png",
    },
  },
  {
    id: nanoid(),
    total: 463.25,
    createdAt: new Date("August 29, 2022 19:30:00"),
    user: {
      id: nanoid(),
      name: "Dayet",
      image: "https://github.com/shadcn.png",
    },
  },
];

export default ExpenseHistory;
