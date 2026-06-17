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
import { MoreHorizontal, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const CustomerTransactions = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <div className="p-6 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-8 lg:gap-0">
        <p className="text-lg font-medium">Top Products</p>

        <div className="w-full lg:w-auto flex items-center justify-between gap-2">
          <div className="max-w-[216px] w-full relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-icon" />
            <Input
              type="text"
              placeholder="Search Question"
              className="py-1.5 pr-3 pl-9 h-9 rounded-md placeholder:text-muted-foreground border-none bg-card"
            />
          </div>
          <Button
            size="icon"
            variant="secondary"
            className="w-9 h-9 rounded-md"
          >
            <MoreHorizontal className="w-4 h-4 text-icon" />
          </Button>
        </div>
      </div>

      <Table className="mt-3">
        <TableHeader>
          <TableRow className="text-sm font-medium text-secondary-foreground">
            <TableHead className="py-3 px-6">TRANSACTION</TableHead>
            <TableHead className="py-3 px-6">PRICE</TableHead>
            <TableHead className="py-3 px-6">SOLD</TableHead>
            <TableHead className="py-3 px-6 text-end">SALES</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((item) => (
            <TableRow
              key={item.id}
              className="text-sm font-medium border-border text-secondary-foreground"
            >
              <TableCell className="px-6 py-5 ">
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={item.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs">{item.id.substring(0, 10)}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-5">{item.price}</TableCell>
              <TableCell className="px-6 py-5">${item.totalSold}</TableCell>
              <TableCell className="px-6 py-5 text-end">{item.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

// CUSTOM DUMMY DATA SET
const products = [
  {
    id: nanoid(),
    price: 1799,
    sales: 17689,
    totalSold: 2389,
    title: "Apple Watch",
    image: "/assets/images/products/apple-watch.png",
  },
  {
    id: nanoid(),
    price: 739,
    sales: 62397,
    totalSold: 6698,
    title: "Nike Shoes",
    image: "/assets/images/products/shoe-1.png",
  },
  {
    id: nanoid(),
    price: 245,
    sales: 7658,
    totalSold: 300,
    title: "Ribbon Glass",
    image: "/assets/images/products/sunglass.png",
  },
  {
    id: nanoid(),
    price: 139,
    sales: 6658,
    totalSold: 2389,
    title: "Apple Watch",
    image: "/assets/images/products/headset.png",
  },
];

export default CustomerTransactions;
