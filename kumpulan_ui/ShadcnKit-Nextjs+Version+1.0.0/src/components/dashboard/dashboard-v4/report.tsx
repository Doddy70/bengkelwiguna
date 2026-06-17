"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Report = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("p-6", className)} {...props}>
      <div>
        <h6 className="text-sm font-semibold">Report an issue</h6>
        <p className="text-sm text-secondary-foreground">
          What area are you having problem with?
        </p>
      </div>

      <div className="flex flex-col gap-4 pt-4 pb-3">
        <div className="flex items-center gap-16">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="area">Area</Label>
            <Input
              id="area"
              type="number"
              placeholder="2000"
              className="px-3 border-none bg-card"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="security">Security Level</Label>
            <Input
              id="security"
              type="number"
              placeholder="2000"
              className="px-3 border-none bg-card"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            type="text"
            placeholder="I need help with...."
            className="px-3 border-none bg-card"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="description">Your message</Label>
          <Textarea
            id="description"
            name="description"
            className="px-3 border-none bg-card"
            placeholder="Please include all informationrelevant to your issue."
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="secondary">Cancel</Button>
        <Button>Submit</Button>
      </div>
    </Card>
  );
};

export default Report;
