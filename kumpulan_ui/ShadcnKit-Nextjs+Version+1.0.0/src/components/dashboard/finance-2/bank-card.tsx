import { nanoid } from "nanoid";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeBasedImage from "@/components/theme-based-image";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const BankCard = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("p-6", className)} {...props}>
      <div className="flex items-start justify-between mb-3">
        <p className="text-lg font-medium">Your Card</p>

        <Button variant="secondary" size="icon" className="w-8 h-8">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <div className="flex justify-center">
        <ThemeBasedImage
          width={280}
          height={196}
          lightSrc="/assets/images/debit-card-light.png"
          darkSrc="/assets/images/debit-card-dark.png"
          alt="shadcnkit"
        />
      </div>

      <div className="flex items-center flex-wrap gap-5 mt-3">
        <p className="text-xs">Receivers:</p>

        <div className="flex items-center flex-wrap gap-2">
          {avatars.map((avatar) => (
            <Avatar key={avatar.id} className="w-8 h-8">
              <AvatarImage src={avatar.image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}

          <Button
            variant="secondary"
            size="icon"
            className="rounded-full w-8 h-8"
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
  { id: nanoid(), image: "https://github.com/shadcn.png" },
  { id: nanoid(), image: "https://github.com/shadcn.png" },
];

export default BankCard;
