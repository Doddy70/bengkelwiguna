"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { ComparisonPricingTable } from "./comparison-table";
import { DefaultPricingTable } from "./default";
import { FeatureListPricingCard } from "./feature-list";
import { HighlightedPlanPricingTable } from "./highlighted-plan";
import { HorizontalPricingTable } from "./horizontal";
import { ToggleSwitchPricingTable } from "./pricing-toggle";
import { TabsSelectorPricingCards } from "./tabs-selector";

export default function AllPricingTables() {
  return (
    <>
      <BlockBreadcrumb
        title="Pricing Table"
        description="Get started with a collection of responsive pricing sections to show the pricing plan to your potential customers based on multiple sizes, styles, and layouts."
      />
      <BlockSection
        title="Default pricing cards"
        description="Use this example of three pricing cards showcasing the pricing plan title, description, feature list, and CTA button."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/pricing-tables/default.tsx"
      >
        <DefaultPricingTable />
      </BlockSection>
      <BlockSection
        title="Tabs selector pricing cards"
        description="Use this advanced example to show the pricing plan based on which tab is being activated by the website visitor based on the Tabs component from the Flowbite library."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/pricing-tables/default.tsx"
      >
        <TabsSelectorPricingCards />
      </BlockSection>
      <BlockSection
        title="Horizontal pricing card"
        description="Get started with this horizontally aligned pricing card with a large list of feature items and a CTA button on the right side."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/pricing-tables/horizontal.tsx"
      >
        <HorizontalPricingTable />
      </BlockSection>
      <BlockSection
        title="Feature list description with pricing card"
        description="Use this example to show a more detailed description of features next to the pricing card from the right side."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/pricing-tables/feature-list.tsx"
      >
        <FeatureListPricingCard />
      </BlockSection>
      <BlockSection
        title="Comparison table"
        description="Use this example of pricing cards to also show a comparison table when clicking on the toggle link."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/pricing-tables/comparison-table.tsx"
      >
        <ComparisonPricingTable />
      </BlockSection>
      <BlockSection
        title="Highlighted pricing plan"
        description="Use this example to highlight the most popular or feature pricing plan and increase the conversion rate for your potential customers."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/pricing-tables/highlighted-plan.tsx"
      >
        <HighlightedPlanPricingTable />
      </BlockSection>
      <BlockSection
        title="Pricing plan with toggle switch"
        description="Use this example to switch the pricing plan based on a monthly or yearly plan based on the toggle switch component from the Flowbite library."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/pricing-tables/pricing-toggle.tsx"
      >
        <ToggleSwitchPricingTable />
      </BlockSection>
    </>
  );
}
