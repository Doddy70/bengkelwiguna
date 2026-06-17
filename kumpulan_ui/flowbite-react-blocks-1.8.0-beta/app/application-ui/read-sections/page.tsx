"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { AdvancedReadEventSection } from "./advanced-event";
import { AdvancedReadUserSection } from "./advanced-user";
import { DefaultReadSection } from "./default";
import { ReadEventSection } from "./event";
import { ReadProductSectionWithCarousel } from "./product-carousel";
import { ReadUserSection } from "./user";

export default function AllReadSections() {
  return (
    <>
      <BlockBreadcrumb
        title="Read Sections (CRUD)"
        description="Get started with a collection of responsive website sections to show details about data entries from your database based on the CRUD layouts."
      />
      <BlockSection
        title="Default read section"
        description={`Use this free example of a "read" CRUD layout section to show details of an existing data entry from your database.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultReadSection />
      </BlockSection>
      <BlockSection
        title="Read product section with carousel"
        description="Use this page section to show details of a product from your database including images inside a carousel slider, description, color tabs, categories, and other information."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <ReadProductSectionWithCarousel />
      </BlockSection>
      <BlockSection
        title="Read user section"
        description="Use this CRUD layout section to show details about an existing user from the database including their name, biography, location, and other CRUD action buttons for editing and deletion."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <ReadUserSection />
      </BlockSection>
      <BlockSection
        title="Advanced read user section"
        description="This example can be used to show detailed information about an existing user from the database based on a CRUD layout website section."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <AdvancedReadUserSection />
      </BlockSection>
      <BlockSection
        title="Read event section"
        description="Use this example to show basic information about an event data entry from the database."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <ReadEventSection />
      </BlockSection>
      <BlockSection
        title="Advanced read event section"
        description="Use this website section to show more advanced details about an event from your database, such as invited guests, details, location, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <AdvancedReadEventSection />
      </BlockSection>
    </>
  );
}
