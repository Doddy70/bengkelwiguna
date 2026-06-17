"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { FacetedSearchDrawerWithAccordion } from "./accordion";
import { AdvancedFacetedSearchDrawerWithDatepicker } from "./advanced-datepicker";
import { DefaultFacetedSearchDrawer } from "./default";
import { LargeFacetedSearchDrawerWithMultipleOptions } from "./large-multiple-options";

export default function AllFacetedSearchDrawers() {
  return (
    <>
      <BlockBreadcrumb
        title="Faceted Search Drawers"
        description="Get started with a collection of drawer components using a faceted search interface to use multiple filters options to search for results in your application."
      />
      <BlockSection
        title="Default faceted search drawer"
        description="Use this free example of a drawer component to show a list of checkbox, radio and input field elements to filter search results."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultFacetedSearchDrawer />
      </BlockSection>
      <BlockSection
        title="Faceted search with accordion"
        description="Use this advanced example to show multiple filter options separated in a logical way inside an accordion component from Flowbite."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <FacetedSearchDrawerWithAccordion />
      </BlockSection>
      <BlockSection
        title="Advanced faceted search with datepicker"
        description="This example can be used to filter search results inside a drawer component using datepickers, range sliders, checkbox, and radio groups."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <AdvancedFacetedSearchDrawerWithDatepicker />
      </BlockSection>
      <BlockSection
        title="Large faceted search with multiple options"
        description="Use this example to show a large drawer component with multiple filter options such as checkbox, radio, and toggle groups."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <LargeFacetedSearchDrawerWithMultipleOptions />
      </BlockSection>
    </>
  );
}
