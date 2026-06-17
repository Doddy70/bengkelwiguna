import { nanoid } from "nanoid";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Paperclip, PhoneCall, Plus, Send, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Chat = ({ className, ...props }: Props) => {
  return (
    <Card
      className={cn("p-6 flex flex-col justify-between", className)}
      {...props}
    >
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Team Chat</p>

        <div className="flex gap-1">
          <Button size="icon" variant="ghost" className="w-8 h-8">
            <PhoneCall className="w-4 h-4 text-icon" />
          </Button>
          <Button size="icon" variant="ghost" className="w-8 h-8">
            <Video className="w-4 h-4 text-icon" />
          </Button>
        </div>
      </div>

      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-5 py-4">
          {chats.map(({ id, type, image, name, message }) => (
            <div
              key={id}
              className={cn(
                "w-full flex",
                type === "Receive" ? "justify-start" : "justify-end"
              )}
            >
              {type === "Receive" ? (
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="max-w-[100%] p-2.5 rounded-xl rounded-bl-none bg-card-hover text-xs">
                      {message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">{name}</p>
                  </div>
                </div>
              ) : (
                <div className=" text-end">
                  <p className="max-w-[100%] p-2.5 rounded-xl rounded-br-none bg-card-hover text-xs">
                    {message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">{name}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div>
            <Button
              size="icon"
              variant="outline"
              className="bg-card border-none"
            >
              <Paperclip className="w-4 h-4 text-icon" />
            </Button>
          </div>

          <div className="relative w-full">
            <Input
              placeholder="Type your message"
              className="bg-card px-3 border-none"
            />

            <Button
              size="icon"
              variant="outline"
              className="bg-card border-none absolute top-0 right-0"
            >
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
    name: "Eden Ovelki",
    image: "/assets/avatars/Ellipse-1.png",
    message:
      "Hey There! Need a food app design with full ui/ux and development.",
  },
  {
    id: nanoid(),
    type: "Sent",
    name: "You",
    image: "/assets/avatars/Ellipse-2.png",
    message: "Sure! Ready to help.",
  },
  {
    id: nanoid(),
    type: "Receive",
    name: "Eden Ovelki",
    image: "/assets/avatars/Ellipse-1.png",
    message:
      "Hey There! I was very busy, that’s why I didn’t any help for you.",
  },
  {
    id: nanoid(),
    type: "Sent",
    name: "You",
    image: "/assets/avatars/Ellipse-2.png",
    message: "It’s okay! Eden.",
  },
  {
    id: nanoid(),
    type: "Receive",
    name: "Eden Ovelki",
    image: "/assets/avatars/Ellipse-1.png",
    message: "Thank You!",
  },
];

export default Chat;
