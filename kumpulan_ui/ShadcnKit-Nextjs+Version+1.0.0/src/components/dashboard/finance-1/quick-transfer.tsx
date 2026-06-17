import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const QuickTransfer = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("p-6", className)}>
      <p className="text-lg font-medium">Quick Transfer</p>

      <div className="flex items-center bg-card rounded-lg border border-border shadow h-10 px-4 my-3.5">
        <Input
          type="number"
          placeholder="4436 2548 2654 236"
          className="border-none bg-transparent focus:!ring-0 focus:!ring-offset-0 pl-0"
        />

        <Select>
          <SelectTrigger className="w-20 bg-transparent border-y-0 border-r-0 !border-l border-gray-200 focus:!ring-0 focus:!ring-offset-0 p-0 pl-3 h-5 rounded-none">
            <SelectValue placeholder="Card" />
          </SelectTrigger>
          <SelectContent className="min-w-20">
            <SelectGroup>
              <SelectItem className="px-6" value="visa">
                Visa
              </SelectItem>
              <SelectItem className="px-6" value="master">
                Master
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-center lg:justify-start gap-4">
        <Button>Send Money</Button>
        <Button variant="secondary" className="text-muted-foreground">
          Save Draft
        </Button>
      </div>
    </Card>
  );
};

export default QuickTransfer;
