"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { AdvancedFacetedSearchModal } from "./advanced";
import { FacetedSearchModalWithDatepicker } from "./datepicker";
import { DefaultFacetedSearchModal } from "./default";
import { FacetedSearchModalWithTabs } from "./tabs";
import { FacetedSearchModalWithToggleFilters } from "./toggle-filters";

export default function AllFacetedSearchModals() {
  return (
    <>
      <BlockBreadcrumb
        title="Faceted Search Modals"
        description="Use the faceted search component to allow users to narrow down search results by applying multiple filters using checkboxes, radios, and range sliders inside of a modal."
      />
      <BlockSection
        title="Default faceted search modal"
        description="Use this free example to show a list of checkbox components inside a modal to filter results by categories inside your application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultFacetedSearchModal />
      </BlockSection>
      <BlockSection
        title="Faceted search with toggle filters"
        description="Use this free example of a modal where you can use a combination of toggle buttons and select inputs to filter search results."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <FacetedSearchModalWithToggleFilters />
      </BlockSection>
      <BlockSection
        title="Faceted search with tabs"
        description="Use this example to break up the filtering options into multiple categories by using the tabs components from Flowbite."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <FacetedSearchModalWithTabs />
      </BlockSection>
      <BlockSection
        title="Advanced faceted search"
        description="Use this example to show multiple input fields, checkboxes, range sliders, and select inputs to apply filter elements inside a modal."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <AdvancedFacetedSearchModal />
      </BlockSection>
      <BlockSection
        title="Faceted search with datepicker"
        description="This example can be used to filter based on a date range using the Flowbite datepicker together with checkbox and toggle input elements."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <FacetedSearchModalWithDatepicker />
      </BlockSection>
    </>
  );
}
