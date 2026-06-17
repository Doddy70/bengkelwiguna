"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { AdvancedReadEventDrawer } from "./advanced-event";
import { AdvancedReadUserDrawer } from "./advanced-user";
import { DefaultReadDrawer } from "./default";
import { ReadEventDrawer } from "./event";
import { ReadProductDrawerWithImages } from "./product-with-images";
import { ReadUserDrawer } from "./user";

export default function AllReadDrawers() {
  return (
    <>
      <BlockBreadcrumb
        title="Read Drawers (CRUD)"
        description="Use this collection of drawer components coded with Tailwind CSS to show details about an existing data entry from your database inside your web application."
      />
      <BlockSection
        title="Default drawer"
        description="Use this free drawer component to show details of a basic data entry from your database and show CRUD action buttons for editing and deleting."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultReadDrawer />
      </BlockSection>
      <BlockSection
        title="Read product drawer with images"
        description="Use this example to show a list of details about a product from the database including images, prices, text information, and even colors."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <ReadProductDrawerWithImages />
      </BlockSection>
      <BlockSection
        title="Read user drawer"
        description="This example can be used to show data about a user from the database inside a drawer component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <ReadUserDrawer />
      </BlockSection>
      <BlockSection
        title="Advanced read user drawer"
        description="This drawer component can be used to show advanced details about a user including the profile avatar, social media accounts, skills, biography, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <AdvancedReadUserDrawer />
      </BlockSection>
      <BlockSection
        title="Read event drawer"
        description="Use this example to show data about an event from the database inside a drawer component coded with Tailwind CSS."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <ReadEventDrawer />
      </BlockSection>
      <BlockSection
        title="Advanced read event drawer"
        description="Use this example to show advanced details about an existing event data entry from your database inside a drawer component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <AdvancedReadEventDrawer />
      </BlockSection>
    </>
  );
}
