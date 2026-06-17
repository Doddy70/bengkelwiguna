"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { CenteredDoubleDashboardNavbarWithCTAButtonsAndSearchInput } from "./centered-cta-search";
import { TripleDashboardNavbarWithCTAButtonAndSearchInput } from "./cta-search";
import { DefaultDashboardNavbar } from "./default";
import { DoubleDashboardNavbarWithProjectDropdown } from "./project-dropdown";
import { TripleDashbardNavbarWithProjectSwitchAndSubnav } from "./project-switch-subnav";
import { DoubleDashboardNavbarWithSearchInput } from "./search-input";

export default function AllDashboardNavbars() {
  return (
    <>
      <BlockBreadcrumb
        title="Dashboard Navbars"
        description="Get started with a premium collection of responsive navigation bars built for application and dashboard user interfaces built with Tailwind CSS."
      />
      <BlockSection
        title="Default navbar"
        description="Use this navigation bar inside a dashboard interface to show a side nav toggle, logo, search bar, button CTA, notifications, app center, and user avatar dropdown."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultDashboardNavbar />
      </BlockSection>
      <BlockSection
        title="Double navbar with project dropdown"
        description="Use this example to show a responsive double navbar with a project switch dropdown, user dropdown, notifications, and app center."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <DoubleDashboardNavbarWithProjectDropdown />
      </BlockSection>
      <BlockSection
        title="Double navigation bar with search input"
        description="This example can be used to show a navigation bar with the logo, menu items, notifications, app center, project switch, user dropdown, and an advanced search input in the sub nav."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <DoubleDashboardNavbarWithSearchInput />
      </BlockSection>
      <BlockSection
        title="Triple navbar with project switch and subnav"
        description="This advanced navbar can be used to show three levels of layers featuring menu items, project switcher dropdowns, CTA buttons, notifications, an app center, and a user dropdown."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <TripleDashbardNavbarWithProjectSwitchAndSubnav />
      </BlockSection>
      <BlockSection
        title="Triple navigation bar with CTA button and search input"
        description="Use this example to show three responsive layers of navigation bars featuring a user switch dropdown, primary and secondary menu items, search input, and CTA buttons."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <TripleDashboardNavbarWithCTAButtonAndSearchInput />
      </BlockSection>
      <BlockSection
        title="Centered double navbar with CTA buttons and search input"
        description="This example can be used in two lists of menu items of which one is centered alongside a CTA button, search input, notification dropdown, app center, and user dropdown."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <CenteredDoubleDashboardNavbarWithCTAButtonsAndSearchInput />
      </BlockSection>
    </>
  );
}
