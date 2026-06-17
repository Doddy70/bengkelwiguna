"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { useState, HTMLAttributes } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

type Props = HTMLAttributes<HTMLDivElement>;

const PickDate = ({ className, ...props }: Props) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card
      className={cn("p-3 flex flex-col items-center", className)}
      {...props}
    >
      <p className="text-sm font-semibold pt-2 pb-3">Pick a date</p>
      <div className="max-w-[276px] w-full px-4 py-2 rounded-md bg-card text-center">
        {date ? format(date, "dd, MMMM yyyy") : ""}
      </div>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="[&>div]:flex justify-center"
      />
    </Card>
  );
};

export default PickDate;
