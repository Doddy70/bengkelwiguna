"use client";

import { DarkThemeToggle } from "flowbite-react";
import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";

export default function AllSideNavigation() {
  return (
    <>
      <BlockBreadcrumb
        title="Sidenav"
        description="Get started with the side nav component to show a list of menu items, dropdowns, actions, and user profile actions for your application and dashboard."
      />
      <DarkThemeToggle />
      <BlockSection
        title="Default side navigation"
        description="Use the default sidebar navigation to show a list of menu items with dropdown items and a list of options links at the bottom of the component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/default"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Sidenav with alert info"
        description="This example can be used to show side navigation with menu items and a dismissable informational alert."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/alert-info"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Sidenav with user profile"
        description="Use this example to show details about the currently logged-in user and menu items for website navigation."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/user-profile"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Sidenav with user switch"
        description="This example can be used to switch between multiple authenticated users and also allow adding new navigation menu items using the CTA button."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/user-switch"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Sidenav with notifications"
        description="This example can be used to show dismissable notifications at the bottom of the sidebar alongside the default navigation menu items."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/notifications"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Sidenav with projects and team switch"
        description="Use this example of a sidenav to choose between multiple teams, a default navigation menu, and the ability to add and choose between projects."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/projects-team-switch"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Sidenav with search"
        description="Use this example to show a search bar and a CTA button inside the side navigation alongside the default menu items."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/search"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Sidenav with user contacts"
        description="This example can be used to show a list of user contacts for messaging alongside the navigation menu items in the sidebar."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/user-contacts"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Double sidenav"
        description="This example can be used to show a double-side nav with a collapsable sidebar with menu items and dropdowns."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/double"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Secondary sidenav with user contacts"
        description="This example can be used as a secondary sidenav on the right side of the page by showing a list of active and inactive user contacts and group messaging."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/secondary-user-contacts"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Crypto sidenav"
        description="Use this example to show a list of cryptocurrencies in a list in the sidenav showing the coin logo, name, ticker, price, and market movement."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/crypto"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Double sidenav with tasks"
        description="This example can be used to show two sidenavs with menu items and a list of tasks with dropdown menus, CTAs, and a dismissable alert."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/side-navigation/double-tasks"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
    </>
  );
}
