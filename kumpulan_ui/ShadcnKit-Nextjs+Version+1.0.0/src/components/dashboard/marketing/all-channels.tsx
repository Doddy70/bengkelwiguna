import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import UserCog from "@/components/icons/user-cog";
import Twitter from "@/components/icons/twitter";
import Linkedin from "@/components/icons/linkedin";
import Dribble from "@/components/icons/dribble";
import Facebook from "@/components/icons/facebook";
import Github from "@/components/icons/github";

type Props = HTMLAttributes<HTMLDivElement>;

const AllChannels = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("", className)} {...props}>
      <div className="p-6 pb-5 flex justify-between">
        <div>
          <p className="text-lg font-medium mb-1">All Channels</p>
          <p className="text-xs text-secondary-foreground">
            Users from all channels
          </p>
        </div>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <Table>
        <TableBody>
          {DATA.map(({ id, title, subtitle, Icon, value }) => (
            <TableRow key={id} className="text-sm font-medium border-none">
              <TableCell className="px-6 py-3.5">
                <div className="flex items-center gap-2">
                  <Icon className="w-11 h-11 text-icon-active" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-xs mt-1">{subtitle}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-3.5 text-end">
                <span
                  className={cn(
                    "text-xs font-medium px-1 py-0.5 rounded-sm bg-card",
                    value < 0 ? "text-red-500" : "text-emerald-500"
                  )}
                >
                  +2.19%
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

// CUSTOM DUMMY DATA SET
const DATA = [
  {
    value: 4.67,
    id: nanoid(),
    title: "Twitter",
    subtitle: "Social Media",
    Icon: Twitter,
  },
  {
    value: 3.37,
    error: true,
    id: nanoid(),
    title: "Linked In",
    subtitle: "Social Media",
    Icon: Linkedin,
  },
  {
    value: 2.19,
    id: nanoid(),
    title: "Dribble",
    subtitle: "Community",
    Icon: Dribble,
  },
  {
    value: 2.68,
    error: true,
    id: nanoid(),
    title: "Facebook",
    subtitle: "Social Media",
    Icon: Facebook,
  },
  {
    value: 3.33,
    id: nanoid(),
    title: "Instagram",
    subtitle: "Community",
    Icon: Github,
  },
];

export default AllChannels;
