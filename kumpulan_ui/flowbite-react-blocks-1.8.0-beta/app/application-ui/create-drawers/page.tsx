"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { AdvancedCreateUserDrawer } from "./advanced-user";
import { DefaultCreateDrawer } from "./default";
import { CreateEventDrawer } from "./event";
import { CreateProductDrawer } from "./product";
import { CreateUserDrawer } from "./user";

export default function AllCreateDrawers() {
  return (
    <>
      <BlockBreadcrumb
        title="Create Drawers (CRUD)"
        description="Get started with a collection of drawer components to create new data models in your application by including form elements."
      />
      <BlockSection
        title="Default drawer"
        description="Use this free example of a drawer component to show a list of input field items to create a data entry inside your dashboard application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultCreateDrawer />
      </BlockSection>
      <BlockSection
        title="Create product drawer"
        description="This example can be used to show an advanced layout of form input elements inside a drawer component to create a product data entry inside your dashboard interface."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <CreateProductDrawer />
      </BlockSection>
      <BlockSection
        title="Create user drawer"
        description="Use this example of a drawer component to create a user account from your administrative dashboard."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <CreateUserDrawer />
      </BlockSection>
      <BlockSection
        title="Advanced create user drawer"
        description="Use this example to show multiple fields when creating a user such as a file upload for the profile picture, text inputs and checkboxes for user roles."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <AdvancedCreateUserDrawer />
      </BlockSection>
      <BlockSection
        title="Create event drawer"
        description="Use this example to create an event using a drawer component featuring input field items, user account invitations, and datepickers."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <CreateEventDrawer />
      </BlockSection>
    </>
  );
}
