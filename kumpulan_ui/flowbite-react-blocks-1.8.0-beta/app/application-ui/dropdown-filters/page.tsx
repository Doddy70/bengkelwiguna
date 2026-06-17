"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { AdvancedDropdownFilterKeywords } from "./advanced-keywords";
import { AdvancedDropdownFilterOptions } from "./advanced-options";
import { DropdownFilterCategory } from "./category";
import { DefaultDropdownFilter } from "./default";
import { DropdownFilterProperties } from "./properties";
import { DropdownFilterRange } from "./range";
import { DropdownFilterStatus } from "./status";
import { DropdownFilterTabsOptions } from "./tabs-options";

export default function AllDropdownFilters() {
  return (
    <>
      <BlockBreadcrumb
        title="Dropdown Filters"
        description="Get started with a collection of dropdown filter components to allow users to query through search results by filtering categories, date ranges, keywords, and more."
      />
      <BlockSection
        title="Default dropdown filter"
        description="Use this free example of a filter component to allow your users to select which categories to filter in the search results using checkbox components."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <div className="flex justify-center">
          <DefaultDropdownFilter />
        </div>
      </BlockSection>
      <BlockSection
        title="Advanced filter by keywords"
        description="Use this advanced example to allow users to filter search results via keywords, categories, price, shipping method, and rating inside a dropdown component with an accordion."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <div className="flex justify-center">
          <AdvancedDropdownFilterKeywords />
        </div>
      </BlockSection>
      <BlockSection
        title="Filter by category"
        description="Use this example to show multiple options to filter using checkbox and radio elements split up by category labels."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <div className="flex justify-center">
          <DropdownFilterCategory />
        </div>
      </BlockSection>
      <BlockSection
        title="Dropdown filter with tabs options"
        description="Use this example to break up your filter options into multiple tabs such as price, shipping method, and categories."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <div className="flex justify-center">
          <DropdownFilterTabsOptions />
        </div>
      </BlockSection>
      <BlockSection
        title="Filter by properties"
        description="This advanced example can be used to add multiple properties and options to the current filtering feature inside a dropdown component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <div className="flex justify-center">
          <DropdownFilterProperties />
        </div>
      </BlockSection>
      <BlockSection
        title="Filter by status"
        description="This example can be used to filter search results by status using checkbox elements and indicators inside the dropdown component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <div className="flex justify-center">
          <DropdownFilterStatus />
        </div>
      </BlockSection>
      <BlockSection
        title="Advanced filter options"
        description="Use this example to show multiple filter option filters inside a dropdown include price range sliders, text input fields, checkboxes and radio input elements."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <div className="flex justify-center">
          <AdvancedDropdownFilterOptions />
        </div>
      </BlockSection>
      <BlockSection
        title="Filter by range"
        description="Use this example to filter search results based on a price range using buttons and input field elements inside a dropdown."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <div className="flex justify-center">
          <DropdownFilterRange />
        </div>
      </BlockSection>
    </>
  );
}
