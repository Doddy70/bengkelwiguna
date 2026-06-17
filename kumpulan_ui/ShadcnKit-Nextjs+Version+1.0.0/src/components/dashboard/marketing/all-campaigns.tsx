import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { nanoid } from "nanoid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const AllCampaigns = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("", className)} {...props}>
      <div className="p-6 pb-5 flex items-center justify-between">
        <div>
          <p className="text-lg font-medium">All Campaigns</p>
          <p className="text-sm text-secondary-foreground mt-2">
            20+ Active Campaign
          </p>
        </div>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="text-sm font-medium text-secondary-foreground">
            <TableHead className="py-5 px-6">NAME</TableHead>
            <TableHead className="py-5 px-6">TEAM MEMBER</TableHead>
            <TableHead className="py-5 px-6">STATUS</TableHead>
            <TableHead className="py-5 px-6">DURATION</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {DATA.map((item) => (
            <TableRow
              key={item.id}
              className="text-sm font-medium border-border"
            >
              <TableCell className="px-6 py-[22px]">
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={item.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs mt-1">{item.createdAt}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-[22px]">
                <div className="flex items-center flex-wrap gap-2 mt-2">
                  {item.avatars.map((avatar) => (
                    <Avatar
                      key={avatar.id}
                      className="w-6 h-6 -mr-4 border border-border"
                    >
                      <AvatarImage src={avatar.image} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </TableCell>

              <TableCell className="px-6 py-[22px]">
                <span
                  className={cn(
                    "px-1 py-0.5 rounded-sm bg-card text-xs text-icon-active",
                    item.status === "Confirmed"
                      ? "text-emerald-500"
                      : item.status === "Rejected" && "text-red-500"
                  )}
                >
                  {item.status}
                </span>
              </TableCell>

              <TableCell className="px-6 py-[22px]">{item.createdAt}</TableCell>
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
    id: nanoid(),
    status: "Live Now",
    status_type: "success",
    title: "Valentine Day",
    createdAt: "14th February, 2022",
    duration: "14 Feb - 21 Feb, 2022",
    image: "/assets/images/thumbnail/6.png",
    avatars: [
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
    ],
  },
  {
    id: nanoid(),
    status: "Reviewing",
    status_type: "primary",
    title: "Mother’s Day",
    createdAt: "2nd April, 2022",
    duration: "2 Apr - 5 Apr, 2022",
    image: "/assets/images/thumbnail/5.png",
    avatars: [
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
    ],
  },
  {
    id: nanoid(),
    status: "Paused",
    status_type: "warning",
    title: "Cyber Monday",
    createdAt: "17th January, 2022",
    duration: "17 Jan - 21 Jan, 2022",
    image: "/assets/images/thumbnail/4.png",
    avatars: [
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
      { id: nanoid(), image: "https://github.com/shadcn.png" },
    ],
  },
];

export default AllCampaigns;
