"use client";

import type {NavbarProps} from "@nextui-org/react";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
  cn,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {AcmeIcon} from "./social";

const menuItems = ["Home", "Features", "Customers", "About Us"];

const CenteredNavbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({classNames: {base, wrapper, ...otherClassNames} = {}, ...props}, ref) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <Navbar
        ref={ref}
        classNames={{
          base: cn(
            "max-w-xs sm:max-w-md md:max-w-screen-sm mx-auto bg-default-foreground rounded-full px-1.5 pr-[18px] md:pr-1.5 py-[5px] top-12 shadow-[0_4px_15px_0_rgba(0,0,0,0.25)]",
            base,
          ),
          wrapper: cn("px-0", wrapper),
          ...otherClassNames,
        }}
        height="40px"
        isMenuOpen={isMenuOpen}
        position="static"
        onMenuOpenChange={setIsMenuOpen}
        {...props}
      >
        <NavbarBrand>
          <div className="rounded-full bg-background">
            <AcmeIcon className="text-default-foreground" size={34} />
          </div>
          <span className="ml-2 text-small font-medium text-background">ACME</span>
        </NavbarBrand>

        <NavbarContent className="hidden md:flex" justify="center">
          <NavbarItem isActive className="data-[active='true']:font-medium[date-active='true']">
            <Link aria-current="page" className="text-background" href="#" size="sm">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-default-500" href="#" size="sm">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-default-500" href="#" size="sm">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-default-500" href="#" size="sm">
              About Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden md:flex" justify="end">
          <NavbarItem>
            <Button
              className="bg-background font-medium text-default-foreground"
              endContent={
                <Icon className="pointer-events-none" icon="solar:alt-arrow-right-linear" />
              }
              radius="full"
            >
              Get Started
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenuToggle className="text-default-400 md:hidden" />

        <NavbarMenu
          className="bottom-0 top-[initial] max-h-fit rounded-t-2xl bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150"
          motionProps={{
            initial: {y: "100%"},
            animate: {y: 0},
            exit: {y: "100%"},
            transition: {type: "spring", bounce: 0, duration: 0.3},
          }}
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="mb-2 w-full text-default-500" href="#" size="md">
                {item}
              </Link>
              {index < menuItems.length - 1 && <Divider className="opacity-50" />}
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button fullWidth as={Link} className="border-0" href="/#" variant="faded">
              Sign In
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem className="mb-4">
            <Button fullWidth as={Link} className="bg-foreground text-background" href="/#">
              Get Started
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
  },
);

CenteredNavbar.displayName = "CenteredNavbar";

export default CenteredNavbar;
