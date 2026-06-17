import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const WelcomeCard = ({ className }: { className?: string }) => {
  return (
    <Card
      className={cn(
        "flex flex-col lg:flex-row items-center justify-between p-6 gap-10",
        className
      )}
    >
      <div>
        <p className="text-lg font-medium mb-1">Welcome back Shaker!</p>
        <p className="text-sm text-secondary-foreground">
          Lorem ipsum dolor sit amet.
        </p>
        <Button className="px-4 mt-6">Upgrade Pro</Button>
      </div>

      <div className="lg:max-w-[328px] w-full">
        <p className="text-secondary-foreground text-center lg:text-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit integer purus,
          in vitae metus.
        </p>

        <div className="flex items-center justify-center lg:justify-end gap-2 mt-5">
          {avatars.map((avatar) => (
            <Avatar
              key={avatar.id}
              className="w-9 h-9 -mr-4 border border-border"
            >
              <AvatarImage src={avatar.image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}

          <Button
            size="icon"
            variant="secondary"
            className="rounded-full z-10 w-9 h-9 -mr-4 border border-border"
          >
            <Plus className="w-4 h-4 text-icon" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

const avatars = [
  { id: nanoid(), image: "https://github.com/shadcn.png" },
  { id: nanoid(), image: "https://github.com/shadcn.png" },
  { id: nanoid(), image: "https://github.com/shadcn.png" },
];

export default WelcomeCard;
