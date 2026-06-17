import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Send } from "lucide-react";
import { nanoid } from "nanoid";
import { Input } from "@/components/ui/input";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Chat = ({ className, ...props }: Props) => {
  return (
    <Card
      className={cn("p-6 flex flex-col justify-between", className)}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-[52px] h-[52px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">Aston Agar</p>
            <p className="text-sm text-secondary-foreground">
              www.astonagar.com
            </p>
          </div>
        </div>

        <Button size="icon" variant="secondary" className="w-8 h-8">
          <Plus className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-5 py-4">
          {chats.map(({ id, type, message }) => (
            <div
              key={id}
              className={cn(
                "w-full flex",
                type === "Receive" ? "justify-start" : "justify-end"
              )}
            >
              <p
                className={cn(
                  "max-w-[80%] px-4 py-2 rounded-md",
                  type === "Receive"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card-hover"
                )}
              >
                {message}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Input placeholder="Type your message" className="bg-card px-3" />

          <div>
            <Button size="icon" variant="outline" className="bg-card">
              <Send className="w-4 h-4 text-icon" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const chats = [
  {
    id: nanoid(),
    type: "Receive",
    message: "Hi, how can I help you today?",
  },
  {
    id: nanoid(),
    type: "Sent",
    message: "Hey, I'm having trouble with my account.",
  },
  {
    id: nanoid(),
    type: "Receive",
    message: "What seems to be the problem?",
  },
  {
    id: nanoid(),
    type: "Sent",
    message: "I can't log in.",
  },
  {
    id: nanoid(),
    type: "Receive",
    message: "Hi, how can I help you today?",
  },
  {
    id: nanoid(),
    type: "Sent",
    message: "Hey, I'm having trouble with my account.",
  },
  {
    id: nanoid(),
    type: "Receive",
    message: "What seems to be the problem?",
  },
];

export default Chat;
