"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { AdvancedUpdateUserDrawer } from "./advanced-user-file-upload";
import { DefaultUpdateDrawer } from "./default";
import { UpdateEventDrawer } from "./event";
import { UpdateProductDrawer } from "./product";
import { UpdateUserDrawer } from "./user";

export default function AllUpdateDrawers() {
  return (
    <>
      <BlockBreadcrumb
        title="Update Drawers (CRUD)"
        description="Get started with a collection of drawer components that you can use to update existing data sets from your database inside your dashboard."
      />
      <BlockSection
        title="Default drawer"
        description="Use this free and responsive example of a drawer component to update an existing data set featuring text input fields, select boxes, and textareas."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultUpdateDrawer />
      </BlockSection>
      <BlockSection
        title="Update product drawer"
        description="Use this update CRUD drawer to show multiple form elements based on a two column layout and edit existing data entries from the dashboard."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <UpdateProductDrawer />
      </BlockSection>
      <BlockSection
        title="Update user drawer"
        description="Use this drawer component to update current existing users by showing a list of text and password input fields."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <UpdateUserDrawer />
      </BlockSection>
      <BlockSection
        title="Advanced update user drawer with file upload"
        description="Use this drawer component to show form elements including file inputs, text field inputs and checkboxes when updating a user from the database."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <AdvancedUpdateUserDrawer />
      </BlockSection>
      <BlockSection
        title="Update event drawer"
        description="This example can be used to show form elements inside a drawer component to update an existing event data set including datepickers, textareas, and color tags."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <UpdateEventDrawer />
      </BlockSection>
    </>
  );
}
