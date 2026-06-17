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
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const RecentOrders = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <div className="p-6 flex items-center justify-between">
        <p className="text-lg font-medium">Recent Orders</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <Table className="mt-3">
        <TableHeader>
          <TableRow className="text-sm font-medium text-secondary-foreground">
            <TableHead className="py-3 px-6">METHOD</TableHead>
            <TableHead className="py-3 px-6">CREATED</TableHead>
            <TableHead className="py-3 px-6">TOTAL</TableHead>
            <TableHead className="py-3 px-6 text-end">STATUS</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((item) => (
            <TableRow
              key={item.id}
              className="text-sm font-medium border-border text-secondary-foreground"
            >
              <TableCell className="px-6 py-5 ">
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={item.payment.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.id.substring(0, 10)}</p>
                    <p className="text-xs">Paid by {item.payment.type}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-5">
                {format(new Date(item.createdAt), "dd MMM, yyyy")}
              </TableCell>

              <TableCell className="px-6 py-5">${item.total}</TableCell>

              <TableCell className="px-6 py-5 text-end">
                <span
                  className={cn(
                    "px-1 py-0.5 rounded-sm bg-card text-xs text-icon-active",
                    item.status === "Confirmed"
                      ? "text-emerald-500"
                      : item.status === "Rejected" && "text-red-500"
                  )}
                >
                  {item.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

// CUSTOM DUMMY DATA SET
const orders = [
  {
    id: nanoid(),
    total: 678.5,
    status: "Pending",
    status_type: "warning",
    createdAt: Date.now() - 7 * 60 * 1000,
    payment: { type: "PayPal", image: "/assets/svg/paypal.svg" },
  },
  {
    id: nanoid(),
    total: 165.58,
    status: "Shipped",
    status_type: "success",
    createdAt: Date.now() - 8 * 60 * 1000,
    payment: { type: "Card", image: "/assets/svg/mastercard.svg" },
  },
  {
    id: nanoid(),
    total: 463.25,
    status: "Confirmed",
    status_type: "primary",
    createdAt: Date.now() - 9 * 60 * 1000,
    payment: { type: "Skrill", image: "/assets/svg/skrill.svg" },
  },
  {
    id: nanoid(),
    total: 363.25,
    status: "Rejected",
    status_type: "error",
    createdAt: Date.now() - 10 * 60 * 1000,
    payment: { type: "Visa Card", image: "/assets/svg/visa.svg" },
  },
];

export default RecentOrders;
