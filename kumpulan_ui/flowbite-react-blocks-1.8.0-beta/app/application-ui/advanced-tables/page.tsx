"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { AdvancedComparisonTable } from "./comparison";
import { DefaultAdvancedTable } from "./default";
import { AdvancedTableWithExpandableRows } from "./expandable-rows";
import { AdvancedTableWithProducts } from "./products";
import { AdvancedProjectManagementTableForUserTasks } from "./project-management";
import { AdvancedTableWithSortableRows } from "./sortable-rows";
import { AdvancedUserManagementTable } from "./user-management";

export default function AllAdvancedTables() {
  return (
    <>
      <BlockBreadcrumb
        title="Advanced Tables"
        description="Get started with a collection of advanced table components based on multiple layouts and styles to show a complex set of data using rows and columns built with Tailwind CSS."
      />
      <BlockSection
        title="Default table"
        description="Use this free example of a table component with a search bar, filter dropdown, and a dataset of rows and columns to show complex data in your application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultAdvancedTable />
      </BlockSection>
      <BlockSection
        title="Table with products"
        description="This responsive table component can be used to show a list of products with images, categories, sales generated, and ratings in your e-commerce platform."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <AdvancedTableWithProducts />
      </BlockSection>
      <BlockSection
        title="Table with expandable rows"
        description="Use this example to expand a table row when clicking on it and show more details about a given data entry such as images, descriptions, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <AdvancedTableWithExpandableRows />
      </BlockSection>
      <BlockSection
        title="Project management table (user tasks)"
        description="Use this example to show a list of tasks (to-do items) with checkboxes, filter elements and user avatars inside a responsive table component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <AdvancedProjectManagementTableForUserTasks />
      </BlockSection>
      <BlockSection
        title="User management table (CRUD)"
        description="Use this example to show all the users from an application inside a row where you can show the avatar, role, status, social profiles, and CRUD actions."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <AdvancedUserManagementTable />
      </BlockSection>
      <BlockSection
        title="Comparison table"
        description="This example can be used to compare multiple data sets such as products inside a table showing the differences in specifications based on rows and columns."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <AdvancedComparisonTable />
      </BlockSection>
      <BlockSection
        title="Table with sortable rows"
        description="Use this example of a responsive table to show sortable rows and a lift of products with details such as category, price, sales, and status."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <AdvancedTableWithSortableRows />
      </BlockSection>
    </>
  );
}
