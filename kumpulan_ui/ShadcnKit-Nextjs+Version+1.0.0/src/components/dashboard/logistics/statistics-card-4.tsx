import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const StatisticsCard4 = ({ className, ...props }: Props) => {
  return (
    <Card
      className={cn(
        "p-6 h-[204px] flex flex-col justify-between bg-primary-foreground",
        className
      )}
      {...props}
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h6 className="text-2xl font-semibold">$50K</h6>
          <span className="text-xs font-medium text-red-500 px-1 py-0.5 rounded-sm bg-card">
            -1.9%
          </span>
        </div>

        <p className="text-sm text-secondary-foreground">New Customer</p>
      </div>

      <div>
        <p className="text-xs font-medium text-secondary-foreground">
          Top Customers
        </p>

        <div className="flex items-center flex-wrap gap-2 mt-2">
          {avatars.map((avatar) => (
            <Avatar
              key={avatar.id}
              className="w-9 h-9 -mr-5 border border-border"
            >
              <AvatarImage src={avatar.image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </Card>
  );
};

const avatars = [
  { id: nanoid(), image: "https://github.com/shadcn.png" },
  { id: nanoid(), image: "https://github.com/shadcn.png" },
  { id: nanoid(), image: "https://github.com/shadcn.png" },
  { id: nanoid(), image: "https://github.com/shadcn.png" },
  { id: nanoid(), image: "https://github.com/shadcn.png" },
];

export default StatisticsCard4;
