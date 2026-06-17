"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { DefaultCRUDLayout } from "./default";
import { CRUDLayoutWithExpandableRows } from "./expandable-rows";
import { CRUDLayoutWithHorizontalCards } from "./horizontal-cards";
import { CRUDLayoutForProductManagement } from "./product-management";
import { CRUDLayoutForUserManagement } from "./user-management";
export default function AllCRUDLayouts() {
  return (
    <>
      <BlockBreadcrumb
        title="CRUD Layouts"
        description="Use the CRUD layout components to create, read, update, and delete data from your application based on a table layout with modals and drawers coded with Tailwind CSS."
      />
      <BlockSection
        title="Default CRUD layout"
        description="Use this free component to show data from your application inside a table with create, read, update, and delete modals."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultCRUDLayout />
      </BlockSection>
      <BlockSection
        title="CRUD layout for product management"
        description="Use this component to show a list of products inside a table featuring bulk actions, images, tags, reviews, and CRUD actions using drawers."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <CRUDLayoutForProductManagement />
      </BlockSection>
      <BlockSection
        title="CRUD layout with expandable rows"
        description="This table layout can be used to show expandable rows to show more information about a data entry including the CRUD actions and modals."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <CRUDLayoutWithExpandableRows />
      </BlockSection>
      <BlockSection
        title="CRUD layout for user management"
        description="This example can be used to manage users inside an application system using CRUD action modals and featuring table filtering options."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <CRUDLayoutForUserManagement />
      </BlockSection>
      <BlockSection
        title="CRUD layout with horizontal cards"
        description="Use this example to show a list of items from your database inside a list of cards with CRUD actions including creating, reading, updating, and deleting data."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <CRUDLayoutWithHorizontalCards />
      </BlockSection>
    </>
  );
}
