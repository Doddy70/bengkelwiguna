"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { AuthenticationPopup } from "./authentication";
import { DefaultPopup } from "./default";
import { NewsletterPopup } from "./newsletter";
import { PromotionalPopup } from "./promotional";
import { SurveyPopup } from "./survey";

export default function AllPopups() {
  return (
    <>
      <BlockBreadcrumb
        title="Popup"
        description="Get started with the popup component to overlay the main website content and showcase advertisement messages, cookie notices, and newsletter sign-ups."
      />
      <BlockSection
        title="Default popup"
        description="Use this example of a popup element to show a simple yes or no type of dialog to your website visitor based on the Modal component from Flowbite."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/popups/default.tsx"
      >
        <DefaultPopup />
      </BlockSection>
      <BlockSection
        title="Newsletter popup bottom right"
        description="One of the most popular use cases of a popup is to incentivize a website visitor to sign up for a newsletter without blocking access to the main content."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/popups/newsletter.tsx"
      >
        <NewsletterPopup />
      </BlockSection>
      <BlockSection
        title="Promotional popup"
        description="You can use this example to show a popup after the user finished an action on the page, such as reading the article, to showcase a CTA and create an account."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/popups/promotional.tsx"
      >
        <PromotionalPopup />
      </BlockSection>
      <BlockSection
        title="Survey popup"
        description="Get started with this popup example to collect information from your website visitors in the form of a survey."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/popups/survey.tsx"
      >
        <SurveyPopup />
      </BlockSection>
      <BlockSection
        title="Authentication popup"
        description="This example can be used if you want to allow your users to log in or register using a popup instead of redirecting to a new page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/popups/authentication.tsx"
      >
        <AuthenticationPopup />
      </BlockSection>
    </>
  );
}
