"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import CustomerServiceAccordionWithFAQ from "./accordion-faq";
import DefaultCustomerService from "./default";
import CustomerServiceWithDrawer from "./drawer";
import CustomerServicePage from "./full-page";
import CustomerServiceWithWYSIWYG from "./wysiwyg";

export default function AllCustomerService() {
  return (
    <>
      <BlockBreadcrumb
        title="Customer Service"
        description="Get started with a collection of components and pages to show questions and answers to your E-commerce customers with FAQ and community forums."
      />
      <BlockSection
        title="Default customer service"
        description="Use this component to show a list of question and a form where you can submit a question within a modal to provide support to customers."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <DefaultCustomerService />
      </BlockSection>
      <BlockSection
        title="Customer service with drawer"
        description="This example can be used to show both questions and answers and use a drawer with a form element that allows you to add a question."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <CustomerServiceWithDrawer />
      </BlockSection>
      <BlockSection
        title="Customer service accordion with FAQ"
        description="Use this example to show a list of frequently asked questions and answers inside an accordion component for your e-commerce customers."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <CustomerServiceAccordionWithFAQ />
      </BlockSection>
      <BlockSection
        title="Customer service with WYSIWYG"
        description="Use this example to show a list of questions and answers with upvotes and a wysiwyg form to submit an answer as a product customer."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <CustomerServiceWithWYSIWYG />
      </BlockSection>
      <BlockSection
        title="Customer service page"
        description="Use this example to show a full page of customer service data using FAQ sections and a modal to submit a question."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <CustomerServicePage />
      </BlockSection>
    </>
  );
}
