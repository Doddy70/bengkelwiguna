import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { HTMLAttributes } from "react";
import { Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = HTMLAttributes<HTMLDivElement>;

const PaymentMethod = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("p-6", className)} {...props}>
      <div className="">
        <h6 className="text-lg font-semibold">Payment Method</h6>
        <p className="text-sm text-secondary-foreground">
          Change your account payment method.
        </p>
      </div>

      <div className="flex items-center justify-between gap-6 py-10">
        {["Card", "Paypal", "Wise"].map((item) => (
          <div
            key={item}
            className="p-4 w-full rounded border border-border flex flex-col items-center hover:shadow-md hover:cursor-pointer"
          >
            <Activity className="w-6 h-6 text-icon" />
            <p className="text-sm text-secondary-foreground">{item}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 mb-10">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            className="px-3 border-none bg-card"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            type="text"
            placeholder="example@gmail.com"
            className="px-3 border-none bg-card"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="card_number">Card number</Label>
          <Input
            id="card_number"
            type="text"
            placeholder="012 *********"
            className="px-3 border-none bg-card"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="expires">Expires</Label>
          <Input
            id="expires"
            type="month"
            placeholder="January"
            className="px-3 border-none bg-card"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="year">Year</Label>
          <Input
            id="year"
            type="number"
            placeholder="2000"
            className="px-3 border-none bg-card"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="cvc">CVC</Label>
          <Input
            id="cvc"
            type="number"
            placeholder="CVC"
            className="px-3 border-none bg-card"
          />
        </div>
      </div>

      <Button className="w-full">Continue</Button>
    </Card>
  );
};

// CUSTOM DUMMY DATA SET
const DATA = [
  {
    id: nanoid(),
    name: "Gage Paquette",
    role: "Member",
    status: "Online",
    image: "/assets/avatars/Ellipse-1.png",
  },
  {
    id: nanoid(),
    name: "Lara Harvey",
    role: "Director",
    status: "Away",
    image: "/assets/avatars/Ellipse-2.png",
  },
  {
    id: nanoid(),
    name: "Evan Scott",
    role: "Manager",
    status: "Offline",
    image: "/assets/avatars/Ellipse-3.png",
  },
  {
    id: nanoid(),
    name: "Benja Johnston",
    role: "Member",
    status: "Online",
    image: "/assets/avatars/Ellipse-4.png",
  },
  {
    id: nanoid(),
    name: "Aston Agar",
    role: "Owner",
    status: "Away",
    image: "/assets/avatars/Ellipse-4.png",
  },
];

export default PaymentMethod;
