import { nanoid } from "nanoid";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ChartPie from "@/components/icons/chart-pie";
import ClipboardCheck from "@/components/icons/clipboard-check";
import LightningBolt from "@/components/icons/lightning-bolt";
import PencilAlt from "@/components/icons/pencil-alt";
import { SVGProps, DivProps } from "react-html-props";

const StatisticsCards = ({ className, ...props }: DivProps) => {
  return (
    <div className={cn(className, "grid grid-cols-2 gap-7")} {...props}>
      {statistics.map(({ id, title, count, Icon }) => (
        <Card key={id} className="p-6">
          <Button size="icon" variant="secondary" className="w-9 h-9">
            <Icon className="w-4 h-4 text-icon" />
          </Button>

          <h6 className="font-semibold mt-6">{count}</h6>
          <p className="text-xs text-secondary-foreground">{title}</p>
        </Card>
      ))}
    </div>
  );
};

interface statisticType {
  id: string;
  title: string;
  count: string;
  Icon: (props: SVGProps) => JSX.Element;
}

const statistics: statisticType[] = [
  { id: nanoid(), title: "Task Completed", count: "36", Icon: ChartPie },
  { id: nanoid(), title: "New Task Assigned", count: "26", Icon: PencilAlt },
  { id: nanoid(), title: "Obj. Completed", count: "12", Icon: LightningBolt },
  {
    id: nanoid(),
    title: "Project Completed",
    count: "60%",
    Icon: ClipboardCheck,
  },
];

export default StatisticsCards;
