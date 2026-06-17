import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { HTMLAttributes } from "react";
import SingleDot from "@/components/icons/single-dot";
import { Button } from "@/components/ui/button";
import { FileText, Layers, Mail } from "lucide-react";
import { nanoid } from "nanoid";

type Props = HTMLAttributes<HTMLDivElement>;

const ActivityCard = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("p-6", className)} {...props}>
      <p className="text-lg font-medium mb-5">Activity Card</p>

      <div className="flex flex-col gap-3">
        {activities.map(({ id, Icon, title, subtitle, createdAt }) => (
          <div key={id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SingleDot className="w-2 h-2 text-icon-active" />
              <div className="flex items-center gap-3">
                <Button size="icon" variant="secondary" className="w-9 h-9">
                  <Icon className="w-4 h-4" />
                </Button>
                <div>
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-xs text-secondary-foreground">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-secondary-foreground">{createdAt}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

const activities = [
  {
    id: nanoid(),
    Icon: Mail,
    title: "John Smith sent email",
    subtitle: "Got an email year sale",
    createdAt: "3 min ago",
  },
  {
    id: nanoid(),
    Icon: FileText,
    title: "Gage updated a file",
    subtitle: "Fixed some bugs and error",
    createdAt: "5 min ago",
  },
  {
    id: nanoid(),
    Icon: Layers,
    title: "Taveen shared project",
    subtitle: "A link is share attachment",
    createdAt: "10 min ago",
  },
];

export default ActivityCard;
