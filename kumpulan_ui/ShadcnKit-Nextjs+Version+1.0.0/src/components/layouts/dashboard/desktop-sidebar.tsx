"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import routes from "@/lib/routes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Shadcn from "@/components/icons/shadcn";
import { useAppContext } from "@/hooks/useAppContext";
import ShadcnKit from "@/components/icons/shadcn-kit";
import { ScrollArea } from "@/components/ui/scroll-area";
import SidebarItem from "./sidebar-item";

const DesktopSidebar: React.FC = () => {
  const url = usePathname();
  const [state] = useAppContext();
  const { openSidenav } = state;
  const [open, setOpen] = useState<string | null>(null);
  const [compact, setCompact] = useState<boolean>(false);

  const handleOpen = (value: string | null) => {
    if (value === open) {
      setOpen(null);
    } else {
      setOpen(value);
    }
  };

  useEffect(() => {
    if (openSidenav) {
      setCompact(false);
    } else {
      setCompact(true);
    }
  }, [openSidenav, setCompact]);

  const dropDown = (name: string) => {
    if (!openSidenav && compact) {
      return false;
    } else if (open === name) {
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

  const compactHandler = () => {
    if (!openSidenav) {
      setCompact((prev) => !prev);
    }
  };

  const compactHide = !openSidenav && compact ? "hidden" : "block";
  const compactSpace = !openSidenav && compact ? "px-6" : "px-4";

  return (
    <section
      className={cn(
        "hidden md:block inset-0 z-50 h-full w-full transition-all duration-300 relative",
        openSidenav ? "max-w-[260px]" : "max-w-[100px]"
      )}
    >
      <ScrollArea
        onMouseLeave={compactHandler}
        onMouseEnter={compactHandler}
        className={cn(
          "bg-background hover:w-[260px] overflow-x-hidden transition-all duration-300 absolute top-0 left-0 h-full border border-r border-border shadow",
          openSidenav ? "w-[260px]" : "w-[100px]"
        )}
      >
        {compact ? (
          <Link href="/" className="flex items-center gap-4 py-6 px-8">
            <Shadcn />
          </Link>
        ) : (
          <Link href="/" className="flex items-center gap-4 py-6 px-8">
            <ShadcnKit />
          </Link>
        )}

        <div className="m-4">
          {routes.map(({ title, pages }, key) => {
            return (
              <ul key={key} className="mb-4 flex flex-col gap-1">
                <li className={cn("mx-3.5 mt-2 mb-5", compactHide)}>
                  <small className=" font-medium">{title}</small>
                </li>

                {pages.map(({ Icon, name, path, childItems = [] }) => (
                  <li key={name}>
                    <SidebarItem
                      url={url}
                      path={path}
                      Icon={Icon}
                      name={name}
                      compact={compact}
                      childItems={childItems}
                      compactSpace={compactSpace}
                      compactHide={compactHide}
                      dropDown={dropDown}
                      handleOpen={handleOpen}
                    />
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </ScrollArea>
    </section>
  );
};

export default DesktopSidebar;
