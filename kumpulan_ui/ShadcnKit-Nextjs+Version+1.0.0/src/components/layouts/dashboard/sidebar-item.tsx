import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SingleDot from "@/components/icons/single-dot";
import { SVGProps } from "react-html-props";

interface SidebarItemProps {
  url: string;
  path: string;
  name: string;
  compact: boolean;
  Icon: (props: SVGProps) => JSX.Element;
  childItems: { path: string; name: string }[];
  compactSpace: string;
  compactHide: string;
  dropDown: (name: string) => boolean;
  handleOpen: (value: string) => void;
  navItemClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const {
    url,
    path,
    Icon,
    name,
    compact,
    childItems,
    compactSpace,
    compactHide,
    dropDown,
    handleOpen,
    navItemClick,
  } = props;

  const itemButton = cn(
    "w-full flex items-center justify-start rounded-full hover:bg-card-hover text-primary h-11 p-3 text-sm capitalize font-medium",
    path === url ? "bg-card" : "bg-background",
    compact ? "w-auto" : "w-full",
    compactSpace
  );

  return (
    <>
      {childItems.length > 0 ? (
        <div>
          <Button
            className={cn(
              itemButton,
              "justify-between",
              dropDown(path) && "bg-card"
            )}
            onClick={() => handleOpen(path)}
          >
            <div className="flex items-center">
              <Icon className="w-4 h-4 text-inherit" />
              <span className={cn("ml-4 whitespace-nowrap", compactHide)}>
                {name}
              </span>
            </div>

            {!compact && (
              <ChevronUp
                className={cn(
                  "w-3 h-3 transition-all duration-300",
                  dropDown(path) ? "rotate-180" : "rotate-0"
                )}
              />
            )}
          </Button>

          <div
            style={{
              height: dropDown(path)
                ? `${44 * childItems.length + 8}px`
                : "0px",
            }}
            className="transition-all duration-300 border-gray-300 overflow-hidden"
          >
            <div className="flex flex-col gap-1 py-1">
              {childItems.map((child, ind) => (
                <Link href={path + child.path} key={ind}>
                  <Button
                    onClick={() => (navItemClick ? navItemClick() : null)}
                    className={cn(
                      itemButton,
                      "pl-[22px]",
                      path + child.path === url ? "bg-card" : "bg-background"
                    )}
                  >
                    <SingleDot />
                    <span className={cn("ml-5 whitespace-nowrap", compactHide)}>
                      {child.name}
                    </span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Link href={path}>
          <Button
            className={itemButton}
            onClick={() => (navItemClick ? navItemClick() : null)}
          >
            <Icon className="w-4 h-4 text-inherit" />
            <span className={cn("ml-4 whitespace-nowrap", compactHide)}>
              {name}
            </span>
          </Button>
        </Link>
      )}
    </>
  );
};

export default SidebarItem;
