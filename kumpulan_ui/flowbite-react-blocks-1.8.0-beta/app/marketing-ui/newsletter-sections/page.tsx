"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { BannerEmailSignUpNewsletterSection } from "./banner";
import { DefaultNewsletterSection } from "./default";
import { EmailSignUpCardNewsletterSection } from "./email-signup-card";
import { ModalEmailSignUpNewsletterSection } from "./modal-signup";
import { PopupEmailSignUpNewsletterSection } from "./popup-email";

export default function AllNewsletterSections() {
  return (
    <>
      <BlockBreadcrumb
        title="Newsletter"
        description="The newsletter component is an important marketing method that you can use to convince website visitors to sign up for additional news from your organization."
      />
      <BlockSection
        title="Default newsletter"
        description="Use this example as a website section to allow website visitors to sign up for your newsletter program featuring an input field and privacy notice."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/newsletter-sections/default.tsx"
      >
        <DefaultNewsletterSection />
      </BlockSection>
      <BlockSection
        title="Email sign-up card"
        description="Use this example of an email sign-up input element inside a card component with a privacy notice to convince users to subscribe to your newsletter."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/newsletter-sections/email-signup-card.tsx"
      >
        <EmailSignUpCardNewsletterSection />
      </BlockSection>
      <BlockSection
        title="Banner with email sign-up"
        description="Show a dismissable banner component to enable a website visitor to sign up to your newsletter without affecting the main content area of the page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/newsletter-sections/email-signup-card.tsx"
      >
        <BannerEmailSignUpNewsletterSection />
      </BlockSection>
      <BlockSection
        title="Popup with email sign-up"
        description="Show this bottom-right positioned popup component to allow users to sign up to your newsletter without affecting the main content area of the page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/newsletter-sections/popup-email.tsx"
      >
        <PopupEmailSignUpNewsletterSection />
      </BlockSection>
      <BlockSection
        title="Modal with email sign-up"
        description="Use this example of a modal component with an email sign-up element inside and show it when the website visitors have read an article or scrolled to the bottom of the page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/newsletter-sections/modal-signup.tsx"
      >
        <ModalEmailSignUpNewsletterSection />
      </BlockSection>
    </>
  );
}
