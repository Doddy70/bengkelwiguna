import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { nanoid } from "nanoid";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import ShadcnKit from "@/components/icons/shadcn-kit";

const Navbar = () => {
  return (
    <Card className="container bg-transparent py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5">
      <ShadcnKit className="text-primary cursor-pointer" />

      <ul className="hidden md:flex items-center gap-10 text-card-foreground">
        {pages.map((page) => (
          <li key={page.id}>
            <Link href={page.route}>{page.title}</Link>
          </li>
        ))}
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
              {pages.map((page) => (
                <DropdownMenuItem key={page.id}>
                  <Link href={page.route}>{page.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ThemeToggle />
      </div>
    </Card>
  );
};

const pages = [
  {
    id: nanoid(),
    title: "Home",
    route: "/",
  },
  {
    id: nanoid(),
    title: "Landings",
    route: "/landing-pages",
  },
  {
    id: nanoid(),
    title: "Dashboards",
    route: "/dashboard-pages",
  },
  {
    id: nanoid(),
    title: "Components",
    route: "/components",
  },
];

export default Navbar;
