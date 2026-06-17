"use client";

import { cn } from "@/lib/utils";
import routes from "@/lib/routes";
import SidebarItem from "./sidebar-item";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/hooks/useAppContext";
import LeftArrow from "@/components/icons/left-arrow";
import { setMobileSidenav } from "@/context/app-context";
import { ScrollArea } from "@/components/ui/scroll-area";
import ShadcnKit from "@/components/icons/shadcn-kit";

const MobileSidebar = () => {
  const url = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [state, dispatch] = useAppContext();
  const { mobileSidenav } = state;

  const handleOpen = (value: string) => {
    if (value === open) {
      setOpen(null);
    } else {
      setOpen(value);
    }
  };

  const dropDown = (name: string) => {
    if (open === name) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const path = `/${url.split("/")[1]}`;
    setOpen(path);
    dropDown(path);
  }, [url]);

  return (
    <section className="block md:hidden max-w-[0px] inset-0 z-50 h-full w-full transition-all duration-300 relative">
      <div
        className={cn(
          "bg-background overflow-x-hidden transition-all duration-300 absolute top-0 left-0 h-full border border-r border-border shadow",
          mobileSidenav ? "w-[260px]" : "w-0"
        )}
      >
        <div className="py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-4 pl-6">
            <ShadcnKit />
          </a>
          <Button
            size="icon"
            variant="outline"
            className="bg-gray-200 hover:bg-gray-200 active:bg-gray-200 w-6 h-9 text-gray-500 rounded-r-none"
            onClick={() => setMobileSidenav(dispatch, !mobileSidenav)}
          >
            <LeftArrow />
          </Button>
        </div>

        <ScrollArea style={{ height: "calc(100vh - 86px)" }}>
          <div className="m-4">
            {routes.map(({ title, pages }, key) => {
              return (
                <ul key={key} className="mb-4 flex flex-col gap-1">
                  <li className="block mx-3.5 mt-2 mb-5">
                    <small className=" font-medium">{title}</small>
                  </li>

                  {pages.map(({ Icon, name, path, childItems = [] }) => (
                    <li key={name}>
                      <SidebarItem
                        url={url}
                        path={path}
                        Icon={Icon}
                        name={name}
                        compact={false}
                        childItems={childItems}
                        compactSpace="px-6"
                        compactHide="block"
                        dropDown={dropDown}
                        handleOpen={handleOpen}
                        navItemClick={() =>
                          setMobileSidenav(dispatch, !mobileSidenav)
                        }
                      />
                    </li>
                  ))}
                </ul>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default MobileSidebar;
