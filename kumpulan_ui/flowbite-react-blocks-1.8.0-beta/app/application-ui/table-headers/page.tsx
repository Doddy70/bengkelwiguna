"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { TableHeaderWithBreadcrumb } from "./breadcrumb";
import { TableHeaderWithButtonGroupFiltersAndExport } from "./button-group-filters";
import { TableHeaderWithComparison } from "./comparison";
import { TableHeaderWithCTAAndButtonGroup } from "./cta-button-group";
import { TableHeaderWithDateRangePickerFilter } from "./date-range-picker";
import { DefaultTableHeader } from "./default";
import { MultiLevelTableHeadersWithFilters } from "./multi-level-filters";
import { TableHeaderWithSearchInput } from "./search-input";
import { TableHeaderWithSettings } from "./settings";
import { TableHeaderWithStatistics } from "./statistics";
import { TableHeaderWithTabs } from "./tabs";
import { TableHeaderWithTextAndButton } from "./text-button";
import { TableHeaderWithTooltipAndSelectFilters } from "./tooltip-select-filters";

export default function AllTableHeaders() {
  return (
    <>
      <BlockBreadcrumb
        title="Table Headers"
        description="Use the table header component to append options and controls on top of a table component to indicate titles, filters, sorting elements, and other settings."
      />
      <BlockSection
        title="Default table header"
        description="Use this free example of a header component that you can position on top of a header to add a search functionality, a CRUD button, table options and filtering results."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultTableHeader />
      </BlockSection>
      <BlockSection
        title="Table header with text and button"
        description="This free example can be used to show a title, description, and CTA button for creating a new item inside the table data."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <TableHeaderWithTextAndButton />
      </BlockSection>
      <BlockSection
        title="Table header with CTA and button group"
        description="Use this example to show a CTA button and a list of buttons grouped on the right side of the table header to toggle options."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <TableHeaderWithCTAAndButtonGroup />
      </BlockSection>
      <BlockSection
        title="Multi-level table header with filters"
        description="Use this example to show a multiple rows of data and actions on top of a table including dropdown filters, inline filters, CTA buttons, search inputs, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <MultiLevelTableHeadersWithFilters />
      </BlockSection>
      <BlockSection
        title="Table header with date range picker filter"
        description="Use this example to filter table results using a date range picker to pick a start and end time and a button to apply the options."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <TableHeaderWithDateRangePickerFilter />
      </BlockSection>
      <BlockSection
        title="Table header with tooltip and select filters"
        description="Use this example to show a title with an informative tooltip and a row of select input filter elements."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <TableHeaderWithTooltipAndSelectFilters />
      </BlockSection>
      <BlockSection
        title="Table header with statistics"
        description="This example can be used on top of a table component to show statistics and a couple of CTA and option buttons."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <TableHeaderWithStatistics />
      </BlockSection>
      <BlockSection
        title="Table header for comparison"
        description="Use this example as a header for a table component to show a list of comparison fields, CTA and options buttons, and a title with an informational tooltip."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <TableHeaderWithComparison />
      </BlockSection>
      <BlockSection
        title="Table header with button group filters and export"
        description="Get started with this example to show a list of buttons grouped together that you can use to filter results together with export functions, dropdown buttons, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <TableHeaderWithButtonGroupFiltersAndExport />
      </BlockSection>
      <BlockSection
        title="Table header with tabs"
        description="Use this example to show navigational tabs for the table component and change the content inside when clicking on one or the other."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <TableHeaderWithTabs />
      </BlockSection>
      <BlockSection
        title="Table header with search input"
        description="This example can be used to show a search input field inside the table header to filter results by a query string."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <TableHeaderWithSearchInput />
      </BlockSection>
      <BlockSection
        title="Table header with settings"
        description="Use this example to show a table settings button with a title, an informative tooltip, and a list of buttons to use for additional settings."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <TableHeaderWithSettings />
      </BlockSection>
      <BlockSection
        title="Table header with breadcrumb"
        description="This example can be used to show navigation breadcrumbs, a list of select input filter elements, radio input elements, and dropdown buttons."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <TableHeaderWithBreadcrumb />
      </BlockSection>
    </>
  );
}
