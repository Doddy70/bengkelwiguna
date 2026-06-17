"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { ContactSectionWithAddressLocation } from "./address-location";
import { ContactSectionWithBackgroundImage } from "./background-image";
import { ContactFormWithCompanyInformation } from "./company-information";
import { DefaultContactForm } from "./default";
import { ContactFormWithHelpCenter } from "./help-center";
import { ContactFormWithLinks } from "./links";

export default function AllRegisterForms() {
  return (
    <>
      <BlockBreadcrumb
        title="Contact Form"
        description="The contact section is an important part of your website where the user can reach out to your team by interacting with the form elements and submitting the data."
      />
      <BlockSection
        title="Default contact form"
        description="Use this example of a contact form coded with Tailwind CSS including the email, subject, and message that can be delivered by clicking on the form submission button."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/contact-forms/default.tsx"
      >
        <DefaultContactForm />
      </BlockSection>
      <BlockSection
        title="Contact form with help center"
        description="Use this advanced example of a contact form where you can also set a help center, address location information and a CTA button."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/contact-forms/help-center.tsx"
      >
        <ContactFormWithHelpCenter />
      </BlockSection>
      <BlockSection
        title="Contact section with address location"
        description="Use this example of a contact form where you can also provide information about your company's headquarters and phone number."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/contact-forms/address-location.tsx"
      >
        <ContactSectionWithAddressLocation />
      </BlockSection>
      <BlockSection
        title="Contact section with background image"
        description="Use this example to show a visually stunning background image complementary to the contact form and address location."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/contact-forms/background-image.tsx"
      >
        <ContactSectionWithBackgroundImage />
      </BlockSection>
      <BlockSection
        title="Contact form with links"
        description="This contact form can be used to also show complementary links and select options based on which you can also change the content of the contact form."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/contact-forms/links.tsx"
      >
        <ContactFormWithLinks />
      </BlockSection>
      <BlockSection
        title="Contact form with company information"
        description="Use this contact form to show information about your company such as the legal name, tax id, phone number, and also a form where your clients can get in contact."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/contact-forms/company-information.tsx"
      >
        <ContactFormWithCompanyInformation />
      </BlockSection>
    </>
  );
}
