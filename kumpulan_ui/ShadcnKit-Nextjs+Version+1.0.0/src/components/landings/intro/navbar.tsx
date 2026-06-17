"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import ShadcnKit from "@/components/icons/shadcn-kit";
import { scrollToSection } from "@/lib/scrollToSection";

const Navbar = () => {
  return (
    <Card className="container bg-transparent py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5">
      <ShadcnKit className="text-white cursor-pointer" />

      <ul className="hidden md:flex text-white items-center gap-10 text-card-foreground [&>li]:cursor-pointer">
        <li onClick={() => scrollToSection("header")}>Home</li>
        <li onClick={() => scrollToSection("landing-pages")}>Landings</li>
        <li onClick={() => scrollToSection("dashboard-pages")}>Dashboards</li>
        <li>
          <Link href="/components">Components</Link>
        </li>
        <li onClick={() => scrollToSection("pricing")}>Pricing</li>
      </ul>

      <div className="flex items-center">
        <div className="block md:hidden mr-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 rotate-0 scale-100" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => scrollToSection("header")}>
                Home
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => scrollToSection("landing-pages")}
              >
                Landings
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => scrollToSection("dashboard-pages")}
              >
                Dashboards
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/components">Components</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection("pricing")}>
                Pricing
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ThemeToggle />
      </div>
    </Card>
  );
};

export default Navbar;
