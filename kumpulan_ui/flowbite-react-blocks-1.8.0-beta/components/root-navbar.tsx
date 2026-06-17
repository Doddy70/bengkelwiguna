import {
  Button,
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export function RootNavbar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <img
          alt="Flowbite React Logo"
          src="https://flowbite.com/docs/images/logo.svg"
          width={36}
          height={36}
          className="mr-3 h-6 sm:h-9"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex gap-2 md:order-2">
        <Button
          href="https://www.flowbite-react.com/docs/getting-started/introduction"
          target="__blank"
        >
          Getting started
        </Button>
        <DarkThemeToggle />
        <NavbarToggle theme={{ icon: "h-5 w-5 shrink-0" }} />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          <p>Home</p>
        </NavbarLink>
        <NavbarLink
          href="https://www.flowbite-react.com/docs/getting-started/quickstart"
          target="__blank"
        >
          Quickstart
        </NavbarLink>
        <NavbarLink
          href="https://www.flowbite-react.com/docs/customize/theme"
          target="__blank"
        >
          Customize
        </NavbarLink>
        <NavbarLink
          href="https://flowbite.com/dashboard/downloads/"
          target="__blank"
        >
          Pro resources
        </NavbarLink>
        <NavbarLink
          href="https://github.com/themesberg/flowbite-react"
          target="__blank"
        >
          Github repo
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
