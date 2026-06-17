"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { TableFooterWithButton } from "./button";
import { DefaultTableFooterWithPagination } from "./default";
import { TableFooterWithDropdownAndLink } from "./dropdown-link";
import { TableFooterWithProgressBar } from "./progress-bar";
import { TableFooterWithSelectInputPagination } from "./select-input-pagination";
import { TableFooterWithStatistics } from "./statistics";

export default function AllTableFooters() {
  return (
    <>
      <BlockBreadcrumb
        title="Table Footers"
        description="Get started with a collection of footer components that you can append to the end of a table element to indicate pagination, table actions, information and more."
      />
      <BlockSection
        title="Default table footer with pagination"
        description="Use this free example to add a footer section to a table component to show a pagination component and indicate the number of data items being showed on one page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultTableFooterWithPagination />
      </BlockSection>
      <BlockSection
        title="Table footer with button"
        description="This free example can be used as a footer for the table component to show a button and the total amount of data items shown inside the table."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <TableFooterWithButton />
      </BlockSection>
      <BlockSection
        title="Table footer with dropdown and link"
        description="This example can be used to show a dropdown menu with a button and a CTA link inside the footer of a table component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <TableFooterWithDropdownAndLink />
      </BlockSection>
      <BlockSection
        title="Table footer with select input pagination"
        description="Use this example to select the amount of rows you want to show inside a table and a simple pagination system with a next and previous button."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <TableFooterWithSelectInputPagination />
      </BlockSection>
      <BlockSection
        title="Table footer with progress bar"
        description="This example can be used to show a progress bar in the footer section of a table component to indicate usage and statistics."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <TableFooterWithProgressBar />
      </BlockSection>
      <BlockSection
        title="Table footer with statistics"
        description="This example can be used to show statistics about the table component and allow users to export the data via CSV from inside the table using a button."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <TableFooterWithStatistics />
      </BlockSection>
    </>
  );
}
