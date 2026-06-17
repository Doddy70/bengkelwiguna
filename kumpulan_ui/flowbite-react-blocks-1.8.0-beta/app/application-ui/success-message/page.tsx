"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { DefaultSuccessMessage } from "./default";
import { SuccessMessageWithDescription } from "./description";
import { SuccessMessageWithItemDetails } from "./item-details";
import { SuccessMessageWithList } from "./list";
import { SuccessMessageWithRepository } from "./repository";

export default function AllSuccessMessage() {
  return (
    <>
      <BlockBreadcrumb
        title="Success Message (CRUD)"
        description="Use a collection of success message components based on Tailwind CSS to share feedback with your users based on their actions inside your application."
      />
      <BlockSection
        title="Default success message"
        description="Use this free example of a success message component inside a modal to share feedback with your user when an action has been completed."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultSuccessMessage />
      </BlockSection>
      <BlockSection
        title="Success message with list"
        description="Use this example to show a list of items that have been modified or deleted when showing the success message inside a modal component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <SuccessMessageWithList />
      </BlockSection>
      <BlockSection
        title="Success message with item details"
        description="Use this example of a success message component to show the details of an item that has been removed or modified including an image."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <SuccessMessageWithItemDetails />
      </BlockSection>
      <BlockSection
        title="Success message with description"
        description="Use this example to show a short description of the previous action result when showing a success message modal component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <SuccessMessageWithDescription />
      </BlockSection>
      <BlockSection
        title="Success message with repository"
        description="This example can be used to show the repository or project that has been removed or modified inside your success message modal component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <SuccessMessageWithRepository />
      </BlockSection>
    </>
  );
}
