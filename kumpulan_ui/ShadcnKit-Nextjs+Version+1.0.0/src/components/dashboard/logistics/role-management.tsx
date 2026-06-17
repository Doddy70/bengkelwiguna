import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import UserCog from "@/components/icons/user-cog";

type Props = HTMLAttributes<HTMLDivElement>;

const RoleManagement = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("", className)} {...props}>
      <div className="p-6 pb-5 flex justify-between">
        <div>
          <p className="text-lg font-medium mb-1">Role Management</p>
          <p className="text-xs text-secondary-foreground">
            The important 5 logistics role
          </p>
        </div>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <Table>
        <TableBody>
          {deals.map((item) => (
            <TableRow key={item.id} className="text-sm font-medium border-none">
              <TableCell className="px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={item.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-3.5 text-end">
                <Button
                  size="icon"
                  variant="secondary"
                  className="w-8 h-8 rounded-md"
                >
                  <UserCog className="w-4 h-4 text-icon" />
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
const deals = [
  {
    id: nanoid(),
    title: "Material sourcing",
    image: "/assets/avatars/Ellipse-1.png",
    subtitle: "Material sourcing involves",
  },
  {
    id: nanoid(),
    title: "Transportation",
    image: "/assets/avatars/Ellipse-2.png",
    subtitle: "The best carrier based cost",
  },
  {
    id: nanoid(),
    title: "Order fulfillment",
    image: "/assets/avatars/Ellipse-3.png",
    subtitle: "The process comprise order",
  },
  {
    id: nanoid(),
    title: "Warehousing",
    image: "/assets/avatars/Ellipse-4.png",
    subtitle: "Planners consider warehouse",
  },
  {
    id: nanoid(),
    title: "Supply management",
    image: "/assets/avatars/Ellipse-5.png",
    subtitle: "Logistics is an important link",
  },
];

export default RoleManagement;
