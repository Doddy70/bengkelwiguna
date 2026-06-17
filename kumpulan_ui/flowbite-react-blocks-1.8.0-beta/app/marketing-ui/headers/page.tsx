"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { HeaderWithCenteredLogo } from "./centered";
import { DefaultHeaderNavigation } from "./default";
import { HeaderWithDropdownMenu } from "./dropdown";
import { MegaDropdownHeader } from "./mega-dropdown";
import { MegaMenuHeader } from "./mega-menu";
import { HeaderWithSearchBar } from "./search";
import { HeaderWithSubNavbar } from "./sub-navbar";
import { HeaderWithUserDropdown } from "./user-dropdown";

export default function AllHeaders() {
  return (
    <>
      <BlockBreadcrumb
        title="Header"
        description="Get started with the header component for the navigation of a website featuring multi-level dropdowns, mega-menus, search bars, language selectors, and more."
      />
      <BlockSection
        title="Default header navigation"
        description="Use this example of a responsive navigation bar for your website by showing multiple menu items, a few CTA buttons, and a hamburger icon to toggle the mobile view."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/default.tsx"
      >
        <DefaultHeaderNavigation />
      </BlockSection>
      <BlockSection
        title="Header with mega-dropdown"
        description="You may want to use a more complex dropdown component for a menu item to showcase multiple categories and actions instead of a list of sub-menu items."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/default.tsx"
      >
        <MegaDropdownHeader />
      </BlockSection>
      <BlockSection
        title="Header with centered logo"
        description="This example can be often used if you want to highlight the branding of your company by placing the logo in the center of the navbar and the menu on the left side."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/centered.tsx"
      >
        <HeaderWithCenteredLogo />
      </BlockSection>
      <BlockSection
        title="Header with dropdown menu"
        description="Use this example if you want to create a multi-level dropdown element inside the header component based on the collapse feature from the core library."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/dropdown.tsx"
      >
        <HeaderWithDropdownMenu />
      </BlockSection>
      <BlockSection
        title="Header with sub navbar"
        description="Get started with this example of a double navbar where the sub-navbar can be used for the menu items and the right side of the component can highlight the CTA's of your website."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/sub-navbar.tsx"
      >
        <HeaderWithSubNavbar />
      </BlockSection>
      <BlockSection
        title="Header with search bar"
        description="Use this example if you want to enable a responsive search bar feature for your website visitors to submit a query search and return a list of page results."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/search.tsx"
      >
        <HeaderWithSearchBar />
      </BlockSection>
      <BlockSection
        title="Header with mega menu"
        description="This advanced example of a mega-menu navbar can be used to showcase multiple layers of menu items and website page categories."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/search.tsx"
      >
        <MegaMenuHeader />
      </BlockSection>
      <BlockSection
        title="Header with user dropdown"
        description="This is a great example if you want to show the avatar of a logged-in website visitor and a choice of pages relevant to the administration of their account."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/user-dropdown.tsx"
      >
        <HeaderWithUserDropdown />
      </BlockSection>
    </>
  );
}
