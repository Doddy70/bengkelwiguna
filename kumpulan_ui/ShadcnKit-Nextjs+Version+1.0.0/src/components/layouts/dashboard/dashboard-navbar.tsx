"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/hooks/useAppContext";
import { setOpenSidenav, setMobileSidenav } from "@/context/app-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu, Moon, Search, Sun } from "lucide-react";

type Props = HTMLAttributes<HTMLDivElement>;

const DashboardNavbar = ({ className, ...props }: Props) => {
  const { setTheme } = useTheme();
  const [state, dispatch] = useAppContext();
  const { openSidenav, mobileSidenav } = state;

  return (
    <div className={cn("", className)} {...props}>
      <div className="py-4 px-7 flex justify-between gap-6 shadow border border-border rounded-lg">
        <div className="capitalize">
          <Button
            size="icon"
            variant="outline"
            className="w-8 h-8 hidden md:flex items-center justify-center"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Menu className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="w-8 h-8 flex md:hidden items-center justify-center"
            onClick={() => setMobileSidenav(dispatch, !mobileSidenav)}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="w-8 h-8">
            <Search className="w-4 h-4" />
          </Button>

          <Button variant="outline" size="icon" className="w-8 h-8">
            <Bell className="w-4 h-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="w-8 h-8">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-8 h-8 cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
