import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { nanoid } from "nanoid";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const TaskDistribution = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("", className)} {...props}>
      <div className="p-6 pb-1 flex items-center justify-between">
        <p className="text-lg font-medium">Task Distribution</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="text-sm font-medium text-secondary-foreground">
            <TableHead className="py-6 px-6">Name</TableHead>
            <TableHead className="py-6 px-6">Progress</TableHead>
            <TableHead className="py-6 px-6">Value</TableHead>
            <TableHead className="py-6 px-6 text-end">Status</TableHead>
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

              <TableCell className="px-6 py-4">{item.progress}</TableCell>

              <TableCell className="px-6 py-4">${item.dealValue}</TableCell>

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
    dealValue: 203500,
    status: "Deal won",
    status_type: "success",
    progress: "70%",
    user: {
      name: "Astole Banne",
      designation: "Sales Manager",
      image: "/assets/avatars/Ellipse-1.png",
    },
  },
  {
    id: nanoid(),
    dealValue: 283500,
    status: "Stuck",
    status_type: "error",
    progress: "70%",
    user: {
      name: "Lisa Bee",
      designation: "Sales Manager",
      image: "/assets/avatars/Ellipse-2.png",
    },
  },
  {
    id: nanoid(),
    dealValue: 243500,
    status: "Pending",
    status_type: "warning",
    progress: "70%",
    user: {
      name: "Stuward Canne",
      designation: "Sales Manager",
      image: "/assets/avatars/Ellipse-3.png",
    },
  },
];

export default TaskDistribution;
