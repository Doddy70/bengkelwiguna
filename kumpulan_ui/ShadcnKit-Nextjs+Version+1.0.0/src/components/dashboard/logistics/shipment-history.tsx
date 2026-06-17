import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { nanoid } from "nanoid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const ShipmentHistory = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("", className)} {...props}>
      <div className="p-6 pb-3 flex items-center justify-between">
        <div>
          <p className="text-lg font-medium">Shipment History</p>
          <p className="text-sm text-secondary-foreground mt-2">
            50+ Active Shipments
          </p>
        </div>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="text-sm font-medium text-secondary-foreground">
            <TableHead className="py-5 px-6">NAME & ID</TableHead>
            <TableHead className="py-5 px-6">CLIENTS NAME</TableHead>
            <TableHead className="py-5 px-6">ADDRESS</TableHead>
            <TableHead className="py-5 px-6 text-end">STATUS</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {DATA.map((item) => (
            <TableRow
              key={item.id}
              className="text-sm font-medium border-border"
            >
              <TableCell className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={item.user.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.user.name}</p>
                    <p className="text-xs mt-1">{item.user.designation}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-4">{item.user.name}</TableCell>

              <TableCell className="px-6 py-4">{item.address}</TableCell>

              <TableCell className="px-6 py-4 text-end">
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
const DATA = [
  {
    id: nanoid(),
    status: "Delivered",
    status_type: "success",
    title: "Apple Watch",
    address: "Rome, Italy.",
    image: "/assets/images/products/apple-watch.png",
    user: {
      name: "Astole Banne",
      balance: 560,
      designation: "Sales Manager",
      image: "/assets/avatars/Ellipse-1.png",
    },
  },
  {
    id: nanoid(),
    status: "Shipping",
    status_type: "primary",
    title: "Nike Shoes",
    address: "Bangkok, Singapore",
    image: "/assets/images/products/shoe-1.png",
    user: {
      name: "Talon Abela",
      balance: 250.5,
      designation: "Sales Manager",
      image: "/assets/avatars/Ellipse-2.png",
    },
  },
  {
    id: nanoid(),
    status: "Delayed",
    status_type: "error",
    title: "Ribbon Glass",
    address: "Paris, France",
    image: "/assets/images/products/sunglass.png",
    user: {
      name: "Tofan Andy",
      balance: 150.25,
      designation: "Sales Manager",
      image: "/assets/avatars/Ellipse-3.png",
    },
  },
  {
    id: nanoid(),
    status: "Delivered",
    status_type: "success",
    title: "Apple Watch",
    address: "New York, USA",
    image: "/assets/images/products/headset.png",
    user: {
      name: "Jhon Ables",
      balance: 799.25,
      designation: "Sales Manager",
      image: "/assets/avatars/Ellipse-4.png",
    },
  },
];

export default ShipmentHistory;
