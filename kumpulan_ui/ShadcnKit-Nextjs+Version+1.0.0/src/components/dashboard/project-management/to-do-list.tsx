import { nanoid } from "nanoid";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Circle, MoreVertical } from "lucide-react";

type Props = HTMLAttributes<HTMLDivElement>;

const ToDoList = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("p-6", className)} {...props}>
      <p className="text-lg font-medium mb-3.5">To-do List</p>

      <div className="flex flex-col gap-3.5">
        {activities.map(({ id, title }) => (
          <div key={id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Circle className="w-2 h-2 text-icon-active" />
              <p className="text-sm font-medium text-secondary-foreground">
                {title}
              </p>
            </div>

            <Button size="icon" variant="secondary" className="w-6 h-6">
              <MoreVertical className="w-4 h-4 text-icon" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

const activities = [
  {
    id: nanoid(),
    title: "Design a Delivery App",
  },
  {
    id: nanoid(),
    title: "Frontend Development",
  },
  {
    id: nanoid(),
    title: "Backend Development",
  },
  {
    id: nanoid(),
    title: "Responsive UI Design",
  },
];

export default ToDoList;
