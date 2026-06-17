"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { FAQSectionAsAccordion } from "./accordion";
import { DefaultFAQSection } from "./default";
import { FAQSectionWithThreeColumns } from "./grid-layout";
import { HelpCenterFAQSection } from "./help-center";
import { SearchBarWithLinksFAQSection } from "./help-center-search";

export default function AllFAQSections() {
  return (
    <>
      <BlockBreadcrumb
        title="FAQ Sections"
        description="Get started with a collection of FAQ (frequently asked questions) sections to show a list of questions and answers to your website visitors and users."
      />
      <BlockSection
        title="Default FAQ section"
        description="Use this simple example of a FAQ section to show a list of questions and answers based on two columns and a question mark icon."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/faq-sections/default.tsx"
      >
        <DefaultFAQSection />
      </BlockSection>
      <BlockSection
        title="Search bar with links"
        description="Use this example to enable the possibility to search for questions and answers and also show a list of helpful links to commonly asked questions."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/faq-sections/help-center-search.tsx"
      >
        <SearchBarWithLinksFAQSection />
      </BlockSection>
      <BlockSection
        title="FAQ as accordion"
        description="This example is based on the Accordion component from Flowbite and it can be used to only expand the answer to each question based on user interaction."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/faq-sections/accordion.tsx"
      >
        <FAQSectionAsAccordion />
      </BlockSection>
      <BlockSection
        title="Example with three columns"
        description="Use this example if you want to show up to three FAQ items for every row and place them below a pricing section for increased conversion rate."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/faq-sections/grid-layout.tsx"
      >
        <FAQSectionWithThreeColumns />
      </BlockSection>
      <BlockSection
        title="Help center"
        description="This is an advanced example that you can use to allow the user to search for questions and also show a list of helpful links inside cards."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/faq-sections/help-center.tsx"
      >
        <HelpCenterFAQSection />
      </BlockSection>
    </>
  );
}
