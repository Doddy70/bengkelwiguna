import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type Props = HTMLAttributes<HTMLDivElement>;

const VisitsByCountry = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("", className)} {...props}>
      <div className="p-6 pb-5 flex justify-between">
        <div>
          <p className="text-lg font-medium mb-1">Visits by country</p>
          <p className="text-xs text-secondary-foreground">
            Total 200 countries visits
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
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs font-normal mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-3.5 text-end">
                <div>
                  <p className="font-semibold">{item.total}</p>
                  <p
                    className={cn(
                      "text-xs font-normal mt-1",
                      item.percentage < 0 ? "text-red-500" : "text-emerald-500"
                    )}
                  >
                    {item.percentage}
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
    name: "USA",
    total: 68258,
    percentage: 4.67,
    subtitle: "30% visits",
    image: "/assets/images/flags/usa-round.png",
  },
  {
    id: nanoid(),
    name: "UK",
    total: 50683,
    percentage: 2.59,
    subtitle: "20% visits",
    image: "/assets/images/flags/uk-round.png",
  },
  {
    id: nanoid(),
    name: "Germany",
    total: 62053,
    percentage: -1.18,
    subtitle: "28% visits",
    image: "/assets/images/flags/germany-round.png",
  },
  {
    id: nanoid(),
    name: "Spain",
    total: 40369,
    percentage: -2.98,
    subtitle: "18% visits",
    image: "/assets/images/flags/spain-round.png",
  },
  {
    id: nanoid(),
    total: 3258,
    name: "China",
    percentage: 1.22,
    subtitle: "4% visits",
    image: "/assets/images/flags/china-round.png",
  },
];
export default VisitsByCountry;
