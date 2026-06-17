import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type Props = HTMLAttributes<HTMLDivElement>;

const OurTransportations = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("", className)} {...props}>
      <div className="p-6 pb-5 flex justify-between">
        <div>
          <p className="text-lg font-medium mb-1">Our Transportations</p>
          <p className="text-xs text-secondary-foreground">
            Total 5,200 vehicles
          </p>
        </div>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <Table>
        <TableBody>
          {DATA.map((item) => (
            <TableRow key={item.id} className="text-sm font-medium border-none">
              <TableCell className="px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={item.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs font-normal mt-1">{item.total}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-3.5 text-end">
                <div>
                  <p className="font-semibold">{item.weight}</p>
                  <p className="text-xs font-normal mt-1 text-muted-foreground">
                    Tons
                  </p>
                </div>
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
    title: "Ships",
    weight: 50368258,
    total: "500 ships",
    image: "/assets/images/transportation/1.png",
  },
  {
    id: nanoid(),
    title: "Planes",
    weight: 2336569,
    total: "25 planes",
    image: "/assets/images/transportation/2.png",
  },
  {
    id: nanoid(),
    title: "Trucks",
    weight: 36566547,
    total: "2500 Trucks",
    image: "/assets/images/transportation/3.png",
  },
  {
    id: nanoid(),
    title: "Trains",
    weight: 10236482,
    total: "1000 trains",
    image: "/assets/images/transportation/4.png",
  },
];

export default OurTransportations;
