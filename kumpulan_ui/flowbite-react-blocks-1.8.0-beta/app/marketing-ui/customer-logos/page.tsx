"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { ClientsLogoGrid4Columns } from "./4-columns";
import { CardsWithCTACustomerLogos } from "./cards-with-cta";
import { CardsWithDescriptionCustomerLogos } from "./cards-with-description";
import { DefaultCustomerLogos } from "./default";
import { HeadingGridLayoutCustomerLogos } from "./heading-grid-layout";

export default function AllCustomerLogos() {
  return (
    <>
      <BlockBreadcrumb
        title="Customer Logos"
        description="This website section can be used as a social proof incentive to convince your potential clients by showcasing popular companies that you've collaborated with."
      />
      <BlockSection
        title="Default customer logos"
        description="Use this example to show a list of logos of the companies that have used your product or worked with to provide strong social proof to your website visitors."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/customer-logos/default.tsx"
      >
        <DefaultCustomerLogos />
      </BlockSection>
      <BlockSection
        title="Customer logo cards with description"
        description="Use this example to show a short description and CTA link after the logo of each company."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/customer-logos/cards-with-description.tsx"
      >
        <CardsWithDescriptionCustomerLogos />
      </BlockSection>
      <BlockSection
        title="Heading with grid layout logos"
        description="This example can be used to also show a heading text next to a list of customer logos based on a responsive grid layout."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/customer-logos/heading-grid-layout.tsx"
      >
        <HeadingGridLayoutCustomerLogos />
      </BlockSection>
      <BlockSection
        title="Customer logo cards and CTAs"
        description="Get started with this example to also show two CTA elements next to a list of customer logos inside cards with up to four items on a row."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/customer-logos/cards-with-cta.tsx"
      >
        <CardsWithCTACustomerLogos />
      </BlockSection>
      <BlockSection
        title="Clients logo grid with 4 columns"
        description="Use this example to show a list of clients in a grid layout with four columns featuring a logo, description, and link to the website of the customer."
        githubLink=""
      >
        <ClientsLogoGrid4Columns />
      </BlockSection>
    </>
  );
}
